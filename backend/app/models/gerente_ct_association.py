from app import db

gerente_ct_association = db.Table('gerente_ct_association', db.Column('gerente_id', db.Integer, db.ForeignKey('gerente.id'), primary_key=True), db.Column('ct_id', db.Integer, db.ForeignKey('ct.id'), primary_key=True))
