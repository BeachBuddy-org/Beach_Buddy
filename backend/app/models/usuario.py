from app import db
import bcrypt

class Usuario(db.Model):

    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    cpf = db.Column(db.String(120), index=True, unique=True, nullable=False)
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))
    password_hash = db.Column(db.String(128), nullable=False)
    type = db.Column(db.String(50))

    __mapper_args__ = {
        'polymorphic_identity': 'usuario',
        'polymorphic_on': type
    }

    def set_password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash)

    def __repr__(self):
        return f'<User {self.username}>'

    def __str__(self):
        return (f'User(id={self.id}, username={self.username}, email={self.email}, cpf={self.cpf} '
                f'first_name={self.first_name}, last_name={self.last_name})')
        