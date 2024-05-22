class Usuario:

    def __init__(self, username, email, cpf):
        self.username = username
        self.email = email
        self.cpf = cpf

    def getUserName(self):
        return self.username
    
    def getEmail(self):
        return self.email
    
    def getCPF(self):
        return self.cpf
    
    def setUserName(self, name):
        self.username = name

    def setUserName(self, email):
        self.email = email

    def setCPF(self, cpf):
        self.cpf = cpf