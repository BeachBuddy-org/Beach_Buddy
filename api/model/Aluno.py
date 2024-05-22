from model import Usuario
from model import CentroTreinamento

class Aluno(Usuario):

    def __init__(self, name, email, cpf):
        super().__init__(name, email, cpf)
    
    CTs = []

    def getCTs(self):
        return self.CTs
    
    def addCTs(self, ct: CentroTreinamento):
        self.CTs.insert(ct)

    def removeCT(self, ct: CentroTreinamento):
        self.CTs.remove(ct)
    
    