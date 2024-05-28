from app import db
from .aluno_ct_association import aluno_ct_association
from .gerente_ct_association import gerente_ct_association
from .treinador_ct_association import treinador_ct_association
from .treino import Treino

class CT(db.Model):
    __tablename__ = 'ct'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    cnpj = db.Column(db.String(120), index=True, unique=True, nullable=False)
    address = db.Column(db.String(200))

    gerentes = db.relationship('Gerente', secondary=gerente_ct_association, back_populates='cts')
    alunos = db.relationship('Aluno', secondary=aluno_ct_association, back_populates='cts')
    treinadores = db.relationship('Treinador', secondary=treinador_ct_association, back_populates='cts')
    treinos = db.relationship('Treino', back_populates='ct', cascade='all, delete-orphan')

    def __repr__(self):
        return f'<CT {self.name}>'

    def __str__(self):
        return (f'CT(id={self.id}, name={self.name}, cnpj={self.cnpj}, '
                f'address={self.address}')
