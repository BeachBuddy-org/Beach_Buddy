from app import db
from .usuario import Usuario
from .treinador_ct_association import treinador_ct_association


class Treinador(Usuario):
    __tablename__ = 'treinador'
    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)

    cts = db.relationship('CT', secondary=treinador_ct_association, back_populates='treinadores')

    __mapper_args__ = {
        'polymorphic_identity': 'treinador',
    }

    def __repr__(self):
        return f'<Treinador {self.username}>'

    def __str__(self):
        return (f'Treinador(id={self.id}, username={self.username}, email={self.email}, '
                f'first_name={self.first_name}, last_name={self.last_name}')

