from flask import Flask, render_template, flash, redirect, url_for, session, logging, request
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt
from functools import wraps


app=Flask(__name__)


# config MYSQL
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='mysql_root'
app.config['MYSQL_DB']='flaskapp'
app.config['MYSQL_CURSORCLASS']='DictCursor'

# initialize MYSQL
mysql=MySQL(app)


# check if user is logged in
# use before function where authenticaion is required
def is_logged_in(f):
	@wraps(f)
	def wrap(*args, **kwargs):
		if 'logged_in' in session:
			return f(*args, **kwargs)
		else:
			flash('Unauthorized Access, Log in first', 'danger')
			return redirect(url_for('login'))
	return wrap


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/about')
@is_logged_in
def about():
	return render_template('about.html')


@app.route('/blogs')
def get_blogs():
	# create cursor
	cur=mysql.connection.cursor()

	# get user by username
	result=cur.execute("SELECT * FROM blogs_table ORDER BY id DESC;")

	blogs_retrieved=cur.fetchall()

	if result>0:
		return render_template('blogs.html', blogs_list=blogs_retrieved)
	else:
		msg="No Blogs found"
		return render_template('blogs.html', msg_received=msg)

	# close connection
	cur.close()


@app.route('/blog/<string:id>/')
def get_individual_blog(id):
	# create cursor
	cur=mysql.connection.cursor()

	# get user by username
	result=cur.execute("SELECT * FROM blogs_table WHERE id=%s", [id])

	blog_retrieved=cur.fetchone()

	return render_template('blog.html', blog=blog_retrieved)


# register form class
class RegisterForm(Form):
	name=StringField('Name',[validators.Length(min=1, max=50)])
	username=StringField('Username',[validators.Length(min=4, max=25)])
	email=StringField('Email',[validators.Length(min=6, max=50)])
	password=PasswordField('Password',[
		validators.DataRequired(),
		validators.EqualTo('confirm',message='Passwords do not match'),
		validators.Length(min=6, max=50)
	])
	confirm=PasswordField('Cofirm Password')

# user registeration logic
@app.route('/register', methods=['GET', 'POST'])
def register():
	form_variable=RegisterForm(request.form)
	if request.method=='POST' and form_variable.validate():
		name=form_variable.name.data
		email=form_variable.email.data
		username=form_variable.username.data
		password=sha256_crypt.encrypt(form_variable.password.data)

		# create cursor cur
		cur=mysql.connection.cursor()

		# execute query
		cur.execute("INSERT INTO users(name, email, username, password) VALUES (%s, %s, %s, %s)", (name, email, username, password))

		# commit to database
		mysql.connection.commit()

		# close connection
		cur.close()

		# flashing with categories
		flash('Registeration Successfull. You can Log In now', 'success')

		# redirect to login page
		return redirect(url_for('login'))


	return render_template('register.html', form=form_variable)


@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method=='POST':
		# get form fields
		username=request.form['username']
		password_received=request.form['password']

		# create cursor
		cur=mysql.connection.cursor()

		# get user by username
		result=cur.execute("SELECT * FROM users WHERE username=%s",[username])

		if result>0:
			# get stored password hash
			data=cur.fetchone()
			password_stored=data['password']

			# compare passwords
			if sha256_crypt.verify(password_received, password_stored):
				# all information verified
				session['logged_in']=True
				session['username']=username

				flash('Login Successfull','success')
				return redirect(url_for('home'))
			else:
				manual_error_message="Invalid Password"
				return render_template('login.html', manual_error_message=manual_error_message)

			cur.close()
		else:
			manual_error_message="Username not found"
			return render_template('login.html', manual_error_message=manual_error_message)

	return render_template('login.html')


@app.route('/home')
@is_logged_in
def home():
	# create cursor
	cur=mysql.connection.cursor()

	# get user by username
	result=cur.execute("SELECT * FROM blogs_table")

	blogs_retrieved=cur.fetchall()

	if result>0:
		return render_template('home.html', blogs_list=blogs_retrieved)
	else:
		msg="No Blogs found"
		return render_template('home.html', msg_received=msg)

	# close connection
	cur.close()


@app.route('/logout')
@is_logged_in
def logout():
	session.clear()
	flash('Log Out Successfull', 'success')
	return redirect(url_for('login'))


# blog form class 
class BlogForm(Form):
	title=StringField('Title',[validators.Length(min=1, max=200)])
	body=TextAreaField('Body')


@app.route('/add_blog', methods=['GET', 'POST'])
@is_logged_in
def add_blog():
	new_blog=BlogForm(request.form)
	if request.method=='POST' and new_blog.validate():
		title=new_blog.title.data
		body=new_blog.body.data

		# create cursor cur
		cur=mysql.connection.cursor()

		# execute query
		cur.execute("INSERT INTO blogs_table(title, author, body) VALUES (%s, %s, %s)", (title, session['username'], body))

		# commit to database
		mysql.connection.commit()

		# close connection
		cur.close()

		# flashing with categories
		flash('New Blog created Successfully.', 'success')

		# redirect to login page
		return redirect(url_for('home'))

	return render_template('add_blog.html', html_new_blog=new_blog)


# edit blog
@app.route('/edit_blog/<string:blog_id>', methods=['GET', 'POST'])
@is_logged_in
def edit_blog(blog_id):

	# create cursor cur
	cur=mysql.connection.cursor()

	# execute query
	cur.execute("SELECT * FROM blogs_table WHERE id=%s", (blog_id))

	# get stored data of blog
	stored_blog_data=cur.fetchone()

	# get blog to be edited
	blog=BlogForm(request.form)

	# set values in form
	blog.title.data=stored_blog_data['title']
	blog.body.data=stored_blog_data['body']

	if request.method=='POST' and blog.validate():
		title=request.form['title']
		body=request.form['body']

		# create cursor cur
		cur=mysql.connection.cursor()

		# execute query
		cur.execute("UPDATE blogs_table SET title=%s, body=%s WHERE id=%s", (title, body, blog_id))

		# commit to database
		mysql.connection.commit()

		# close connection
		cur.close()

		# flashing with categories
		flash('Blog edited successfully.', 'success')

		# redirect to login page
		return redirect(url_for('home'))

	return render_template('edit_blog.html', html_blog=blog)


# delete blog
@app.route('/delete_blog/<string:blog_id>', methods=['POST'])
@is_logged_in
def delete_blog(blog_id):
	# create cursor cur
	cur=mysql.connection.cursor()

	# execute query
	cur.execute("DELETE FROM blogs_table WHERE id=%s", [blog_id])

	# commit to database
	mysql.connection.commit()

	# close connection
	cur.close()

	# flashing with categories
	flash('Blog Deleted Successfully.', 'success')

	# redirect to login page
	return redirect(url_for('home'))


if __name__=='__main__':
	app.secret_key='secret_key12345' # this is required if the application uses functionality of sessions tracking
	app.run(debug=True)