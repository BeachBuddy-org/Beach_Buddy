from flask import current_app as app, render_template, request, redirect, url_for
from app.models.usuario import Usuario
from app import db


@app.route('/')
def home():
    # Adicionando um usuário para demonstração
    # user = Usuario(username='anaclara', email='anaClara@example.com', first_name='Ana', last_name='Galvao', cpf='18721871')
    # db.session.add(user)
    # db.session.commit()
    
    # Consulta um usuário pelo username
    username = request.args.get('username', 'anaclara')
    user = Usuario.query.filter_by(username=username).first()
    
    if user:
        user_details = str(user)
    else:
        user_details = "User not found."
    
    return render_template('index.html', user_details=user_details)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        cpf = request.form['cpf']
        password = request.form['password']
        first_name = request.form.get('first_name', '')
        last_name = request.form.get('last_name', '')

        # Verificar se o usuário já existe
        existing_user = Usuario.query.filter_by(username=username).first()
        if existing_user is None:
            user = Usuario(username=username, email=email,cpf=cpf, first_name=first_name, last_name=last_name)
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            return redirect(url_for('home'))
        else:
            return 'Username already exists. Please choose a different username.', 400

    return render_template('register.html')