from app import db

treinador_ct_association = db.Table('treinador_ct_association',
    db.Column('treinador_id', db.Integer, db.ForeignKey('treinador.id'), primary_key=True),
    db.Column('ct_id', db.Integer, db.ForeignKey('ct.id'), primary_key=True)
)