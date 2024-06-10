from app import db
from .usuario import Usuario
from .aluno_ct_association import aluno_ct_association

class Aluno(Usuario):
    __tablename__ = 'aluno'
    id = db.Column(db.Integer, db.ForeignKey('usuario.id'), primary_key=True)

    cts = db.relationship('CT', secondary=aluno_ct_association, back_populates='alunos')

    __mapper_args__ = {
        'polymorphic_identity': 'aluno',
    }

    def __repr__(self):
        return f'<Aluno {self.username}>'

    def __str__(self):
        return (f'Aluno(id={self.id}, username={self.username}, email={self.email}, '
                f'first_name={self.first_name}, last_name={self.last_name}')
