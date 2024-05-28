from app import db
from .usuario import Usuario
from .gerente_ct_association import gerente_ct_association

class gerente(Usuario):
    __tablename__='gerente'
    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)

    cts = db.relationship('CT', secondary=gerente_ct_association, back_populates='gerentes')

    __mapper_args__ = {
        'polymorphic_identity': 'gerente',
    }

    def __repr__(self):
        return f'<Gerente {self.username}>'

    def __str__(self):
        return (f'Gerente(id={self.id}, username={self.username}, email={self.email}, '
                f'first_name={self.first_name}, last_name={self.last_name}')
