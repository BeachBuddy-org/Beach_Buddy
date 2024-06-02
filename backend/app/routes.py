from flask import current_app as app, request, jsonify, render_template
from app import db
from app.models.usuario import Usuario
from app.models.aluno import Aluno
from app.models.gerente import Gerente
from app.models.treinador import Treinador
from app.models.ct import CT
from app.models.gerente_ct_association import gerente_ct_association
from app.models.presenca import Presenca



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

@app.route('/api/register_ct', methods=['POST'])
def register_ct():
    data = request.json
    name = data.get('name')
    cnpj = data.get('cnpj')
    address = data.get('address')
    gerente_id = data.get('gerente_id')
    # Verificar se o gerente existe
    gerente = Gerente.query.get(gerente_id)
    if not gerente:
        return jsonify({'error': 'Gerente not found'}), 404

    # Criar uma nova instância de CT
    new_ct = CT(name=name, cnpj=cnpj, address=address)

    # Adicionar o novo CT ao banco de dados
    db.session.add(new_ct)
    db.session.commit()

    # Adicionar a associação do gerente com o novo CT
    gerente.cts.append(new_ct)
    db.session.commit()

    return jsonify({'message': 'CT registered successfully'}), 201

@app.route('/confirmar_presenca', methods=['POST'])
def confirmar_presenca():
    data = request.get_json()
    aluno_id = data.get('aluno_id')
    treino_id = data.get('treino_id')
    presenca = Presenca.query.filter_by(aluno_id=aluno_id, treino_id=treino_id).first()
    if not presenca:
        presenca = Presenca(aluno_id=aluno_id, treino_id=treino_id, presente=True)
        db.session.add(presenca)
    else:
        presenca.presente = True
    db.session.commit()
    return jsonify({'message': 'Presença confirmada!'})

@app.route('/cancelar_presenca', methods=['POST'])
def cancelar_presenca():
    data = request.get_json()
    aluno_id = data.get('aluno_id')
    treino_id = data.get('treino_id')
    presenca = Presenca.query.filter_by(aluno_id=aluno_id, treino_id=treino_id).first()
    if presenca:
        db.session.delete(presenca)
        db.session.commit()
        return jsonify({'message': 'Presença cancelada!'})
    else:
        return jsonify({'error': 'Presença não encontrada!'}), 404
    