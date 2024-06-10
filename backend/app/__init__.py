from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)
    CORS(app)  # Habilita CORS para o app Flask
    migrate = Migrate(app, db)

    with app.app_context():
        from . import routes  # Importa as rotas
        return app
