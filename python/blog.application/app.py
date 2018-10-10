from flask import Flask, render_template, flash, redirect, url_for, session, logging, request
from flask_mysqldb import MySQL
from wtforms import Form, StringField, TextAreaField, PasswordField, validators
from passlib.hash import sha256_crypt


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
	return render_template('home.html')


@app.route('/home')
def home():
	return render_template('home.html')


@app.route('/about')
def about():
	return render_template('about.html')


@app.route('/blogs')
def blogs():
	return render_template('blogs.html')


# registeration logic
class RegisterForm(Form):
	name=StringField('Name',[validators.Length(min=1, max=50)])
	username=StringField('Username',[validators.Length(min=4, max=25)])
	email=StringField('Email',[validators.Length(min=6, max=50)])
	password=PasswordField('Password',[
		validators.DataRequired(),
		validators.EqualTo('confirm',message='Passwords do not match')
	])
	confirm=PasswordField('Cofirm Password')

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
		flash('You are now registered\nYou can LogIn now', 'success')

		return redirect(url_for('login'))


	return render_template('register.html', form=form_variable)


@app.route('/login')
def login():
	return render_template('login.html')


if __name__=='__main__':
	app.secret_key='secret_key12345'
	app.run(debug=True)