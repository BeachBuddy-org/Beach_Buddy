from flask import current_app as app, request, jsonify, render_template
from app import db
from app.models.usuario import Usuario
from app.models.aluno import Aluno
from app.models.gerente import Gerente
from app.models.treinador import Treinador



@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.json
    user_type = data.get('type')
    username = data.get('username')
    email = data.get('email')
    cpf = data.get('cpf')
    password = data.get('password')
    first_name = data.get('first_name', '')
    last_name = data.get('last_name', '')

    if user_type == 'aluno':
        user = Aluno(username=username, email=email,cpf =cpf, first_name=first_name, last_name=last_name)
    elif user_type == 'gerente':
        user = Gerente(username=username, email=email,cpf =cpf, first_name=first_name, last_name=last_name)
    elif user_type == 'treinador':
       
        user = Treinador(username=username, email=email,cpf =cpf, first_name=first_name, last_name=last_name)
    else:
        return jsonify({'error': 'Invalid user type'}), 400

    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201