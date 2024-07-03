from app import db
from datetime import time
from sqlalchemy import Boolean

presenca = db.Table('presenca',
    db.Column('treino_id', db.Integer, db.ForeignKey('treino.id'), primary_key=True),
    db.Column('aluno_id', db.Integer, db.ForeignKey('aluno.id'), primary_key=True)
)

class Treino(db.Model):
    __tablename__ = 'treino'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String, nullable=False)
    horario = db.Column(db.Time, nullable=False)
    ct_id = db.Column(db.Integer, db.ForeignKey('ct.id'), nullable=False)
    nivel = db.Column(db.String(64), nullable=False)
    recorrente = db.Column(Boolean, default = True, nullable=False)

    ct = db.relationship('CT', back_populates='treinos')
    alunos = db.relationship('Aluno', secondary=presenca, backref=db.backref('treinos', lazy='dynamic'))

    def __repr__(self):
        return f'<Treino {self.name}>'

    def __str__(self):
        return (f'Treino(id={self.id}, name={self.name}, date={self.date}, ct_id={self.ct_id}), horario={self.horario}, nivel{self.nivel}')

    def to_dict(self):
        return {
            'id': self.id,
            'date': self.date,
            'horario': self.horario.strftime('%H:%M:%S'),
            'ct_id': self.ct_id,
            'nivel': self.nivel,
            'recorrente': self.recorrente,
            'alunos': [aluno.username for aluno in self.alunos]
        }