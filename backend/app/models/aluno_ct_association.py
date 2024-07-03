from app import db

aluno_ct_association = db.Table('aluno_ct_association', db.Column('aluno_id', db.Integer, db.ForeignKey('aluno.id'), primary_key=True), db.Column('ct_id', db.Integer, db.ForeignKey('ct.id'), primary_key=True))
