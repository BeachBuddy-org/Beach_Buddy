from app import db

class Usuario(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)
    cpf = db.Column(db.String(120), index=True, unique=True, nullable=False)
    first_name = db.Column(db.String(64))
    last_name = db.Column(db.String(64))

    def __repr__(self):
        return f'<User {self.username}>'
    # fornece uma representação oficial do objeto para depuração.

    def __str__(self):
        return (f'User(id={self.id}, username={self.username}, email={self.email}, '
                f'first_name={self.first_name}, last_name={self.last_name})')
        