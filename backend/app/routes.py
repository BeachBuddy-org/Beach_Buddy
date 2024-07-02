from flask import current_app as app, request, jsonify, render_template, Blueprint
from app import db
from app.models.usuario import Usuario
from app.models.aluno import Aluno
from app.models.gerente import Gerente
from app.models.treinador import Treinador
from app.models.ct import CT
from app.models.gerente_ct_association import gerente_ct_association
from app.models.treino import Treino
from werkzeug.security import check_password_hash

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
    first_name = data.get('firstName', '')  # Corrigir para firstName
    last_name = data.get('lastName', '')    # Corrigir para lastName

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

@app.route('/api/create_treino', methods=['POST'])
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

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    print(f"Tentativa de login para usuário: {username}")  # Log para verificar o usuário
    aluno = Aluno.query.filter_by(username=username).first()

    if aluno:
        print(f"Usuário encontrado: {aluno.username}")  # Log para verificar se o usuário foi encontrado
        if aluno.check_password(password):
            print("Senha correta")  # Log para verificar se a senha está correta
            return jsonify({"success": True, "message": "Login bem-sucedido!"})
        else:
            print("Senha incorreta")  # Log para verificar se a senha está incorreta
    else:
        print("Usuário não encontrado")  # Log para verificar se o usuário não foi encontrado

    return jsonify({"success": False, "message": "Nome de usuário ou senha incorretos."}), 401

@auth_bp.route('/api/login-treinador', methods=['POST'])
def login_treinador():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    print(f"Tentativa de login para treinador: {username}")  # Log para verificar o usuário
    treinador = Treinador.query.filter_by(username=username).first()

    if treinador:
        print(f"Usuário encontrado: {treinador.username}")  # Log para verificar se o usuário foi encontrado
        if treinador.check_password(password):
            print("Senha correta")  # Log para verificar se a senha está correta
            return jsonify({"success": True, "message": "Login bem-sucedido!"})
        else:
            print("Senha incorreta")  # Log para verificar se a senha está incorreta
    else:
        print("Usuário não encontrado")  # Log para verificar se o usuário não foi encontrado

    return jsonify({"success": False, "message": "Nome de usuário ou senha incorretos."}), 401

@auth_bp.route('/api/login-gerente', methods=['POST'])
def login_gerente():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    print(f"Tentativa de login para gerente: {username}")  # Log para verificar o usuário
    gerente = Gerente.query.filter_by(username=username).first()

    if gerente:
        print(f"Usuário encontrado: {gerente.username}")  # Log para verificar se o usuário foi encontrado
        if gerente.check_password(password):
            print("Senha correta")  # Log para verificar se a senha está correta
            return jsonify({"success": True, "message": "Login bem-sucedido!"})
        else:
            print("Senha incorreta")  # Log para verificar se a senha está incorreta
    else:
        print("Usuário não encontrado")  # Log para verificar se o usuário não foi encontrado

    return jsonify({"success": False, "message": "Nome de usuário ou senha incorretos."}), 401


@app.route('/api/userdata/<username>', methods=['GET'])
def get_user_info(username):
    user = Usuario.query.filter_by(username=username).first()
    if user:
        user_info = {
            "username": user.username,
            "email": user.email,
            "cpf": user.cpf,
            "firstName": user.first_name,
            "lastName": user.last_name
        }
        print(user_info)  # Imprimir as informações do usuário no console
        return jsonify(user_info), 200
    else:
        return jsonify({"error": "Usuário não encontrado"}), 404

@app.route('/api/cts_inscritos/<username>', methods=['GET'])
def get_cts_inscritos(username):
    aluno = Aluno.query.filter_by(username=username).first()
    if not aluno:
        return jsonify({'error': 'Aluno não encontrado'}), 404

    cts = [ct.to_dict() for ct in aluno.cts]
    return jsonify(cts), 200

@app.route('/api/treinos/<int:ct_id>', methods=['GET'])
def get_treinos(ct_id):
    treinos = Treino.query.filter_by(ct_id=ct_id).all()
    return jsonify([treino.to_dict() for treino in treinos]), 200

@app.route('/api/confirmar_presenca', methods=['POST'])
def confirmar_presenca():
    data = request.json
    treino_id = data.get('treino_id')
    username = data.get('username')

    aluno = Aluno.query.filter_by(username=username).first()
    if not aluno:
        return jsonify({'error': 'Aluno não encontrado'}), 404

    treino = Treino.query.get(treino_id)
    if not treino:
        return jsonify({'error': 'Treino não encontrado'}), 404

    treino.alunos.append(aluno)
    db.session.commit()

    return jsonify({'message': 'Presença confirmada com sucesso!'}), 200

@app.route('/api/inscrever_aluno_ct', methods=['POST'])
def inscrever_aluno_ct():
    data = request.json
    username = data.get('username')
    ct_id = data.get('ct_id')

    aluno = Aluno.query.filter_by(username=username).first()
    if not aluno:
        return jsonify({'error': 'Aluno não encontrado'}), 404

    ct = CT.query.get(ct_id)
    if not ct:
        return jsonify({'error': 'CT não encontrado'}), 404

    aluno.cts.append(ct)
    db.session.commit()

    return jsonify({'message': 'Aluno inscrito com sucesso no CT!'}), 200


# Registrar o blueprint
app.register_blueprint(auth_bp)
