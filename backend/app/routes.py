from flask import current_app as app, request, jsonify, render_template
from app import db
from app.models.usuario import Usuario
from app.models.aluno import Aluno
from app.models.gerente import Gerente
from app.models.treinador import Treinador
from app.models.ct import CT
from app.models.gerente_ct_association import gerente_ct_association
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

@app.route('/api/create_treino', methods = ['POST'])
def create_treino():
    data = request.json
    date = data.get('date')
    horario = data.get('horario')
    ct_id = data.get('ct_id')
    nivel = data.get('nivel')
    recorrente = data.get('recorrencia')

    ct = CT.query.get(ct_id)
    if not ct:
        return jsonify({'error': 'CT not found'}), 404

    
    new_treino = Treino(date=date, horario=horario, ct_id=ct_id, nivel=nivel, recorrente=recorrente)

    db.session.add(new_treino)
    db.session.commit()

    ct.treinos.append(new_treino)
    db.session.commit()

    return jsonify({'message': 'Treino criado com sucesso'})

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
