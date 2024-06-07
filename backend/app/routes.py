from flask import current_app as app, request, jsonify, render_template
from app import db
from app.models.usuario import Usuario
from app.models.aluno import Aluno
from app.models.gerente import Gerente
from app.models.treinador import Treinador
from app.models.ct import CT
from app.models.gerente_ct_association import gerente_ct_association
from app.models.presenca import Presenca
from app.models.treino import Treino

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/registerCT')
def register_ct_form():
    return render_template('registerCT.html')

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
        user = Aluno(username=username, email=email, cpf=cpf, first_name=first_name, last_name=last_name)
    elif user_type == 'gerente':
        user = Gerente(username=username, email=email, cpf=cpf, first_name=first_name, last_name=last_name)
    elif user_type == 'treinador':
        user = Treinador(username=username, email=email, cpf=cpf, first_name=first_name, last_name=last_name)
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

    gerente = Gerente.query.get(gerente_id)
    if not gerente:
        return jsonify({'error': 'Gerente not found'}), 404

    new_ct = CT(name=name, cnpj=cnpj, address=address)

    db.session.add(new_ct)
    db.session.commit()

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

@app.route('/visualizar_presencas', methods=['GET'])
def visualizar_presencas():
    treino_id = request.args.get('treino_id')
    if not treino_id:
        return jsonify({'error': 'Treino ID é necessário'}), 400

    presencas = Presenca.query.filter_by(treino_id=treino_id).all()
    if not presencas:
        return jsonify({'error': 'Nenhuma presença encontrada para este treino'}), 404

    resultados = []
    for presenca in presencas:
        aluno = Aluno.query.get(presenca.aluno_id)
        if aluno:
            resultados.append({
                'aluno_id': aluno.id,
                'username': aluno.username,
                'email': aluno.email,
                'first_name': aluno.first_name,
                'last_name': aluno.last_name
            })

    return jsonify(resultados)

@app.route('/horarios_disponiveis', methods=['GET'])
def horarios_disponiveis():
    ct_id = request.args.get('ct_id')
    if not ct_id:
        return jsonify({'error': 'CT ID é necessário'}), 400

    treinos = Treino.query.filter_by(ct_id=ct_id).all()
    if not treinos:
        return jsonify({'error': 'Nenhum treino encontrado para este CT'}), 404

    resultados = []
    for treino in treinos:
        resultados.append({
            'treino_id': treino.id,
            'name': treino.name,
            'date': treino.date.isoformat()
        })

    return jsonify(resultados)
