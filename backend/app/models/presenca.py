from app import db

class Presenca(db.Model):
    __tablename__ = 'presenca'
    aluno_id = db.Column(db.Integer, db.ForeignKey('aluno.id'), primary_key=True)
    treino_id = db.Column(db.Integer, db.ForeignKey('treino.id'), primary_key=True)
    presente = db.Column(db.Boolean, default=False)

    aluno = db.relationship('Aluno', back_populates='presencas')
    treino = db.relationship('Treino', back_populates='presencas')

    def __repr__(self):
        return f'<Presenca aluno_id={self.aluno_id} treino_id={self.treino_id} presente={self.presente}>'
