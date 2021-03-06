enum Sexo {
  Masculino = 0,
  Feminino = 1,
} 

enum Status{
  ativo = 0,
  inativo = 1,
}

export class Pessoa {
  idpessoa: number;
  nome: string;
  nomeusuario: string;
  datanascimento: Date;
  cpf: string
  sexo: Sexo
  pontuacao: number
  status: Status
  bairro: string
  municipio: string
  estado: string
  cep: string
  senha: string

  constructor() { }
}
