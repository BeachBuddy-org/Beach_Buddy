from app import db
from .presenca import Presenca

class Treino(db.Model):
    __tablename__ = 'treino'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), nullable=False)
    date = db.Column(db.Date, nullable=False)
    ct_id = db.Column(db.Integer, db.ForeignKey('ct.id'), nullable=False)

    ct = db.relationship('CT', back_populates='treinos')
    presencas = db.relationship('Presenca', back_populates='treino', cascade='all, delete-orphan')

    def __repr__(self):
        return f'<Treino {self.name}>'

    def __str__(self):
        return (f'Treino(id={self.id}, name={self.name}, date={self.date}, ct_id={self.ct_id})')
