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


@app.route('/')
def index():
	return render_template('index.html')


@app.route('/about')
def about():
	return render_template('about.html')


@app.route('/blogs')
def blogs():
	return render_template('blogs.html')


# register form class 
class RegisterForm(Form):
	name=StringField('Name',[validators.Length(min=1, max=50)])
	username=StringField('Username',[validators.Length(min=4, max=25)])
	email=StringField('Email',[validators.Length(min=6, max=50)])
	password=PasswordField('Password',[
		validators.DataRequired(),
		validators.EqualTo('confirm',message='Passwords do not match'),
		[validators.Length(min=6, max=50)]
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


@app.route('/home')
@is_logged_in
def home():
	return render_template('home.html')


@app.route('/logout')
def logout():
	session.clear()
	flash('Log Out Successfull', 'success')
	return redirect(url_for('login'))


if __name__=='__main__':
	app.secret_key='secret_key12345' # this is required if the application uses functionality of sessions tracking
	app.run(debug=True)