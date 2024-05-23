from flask import current_app as app, render_template, request
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
