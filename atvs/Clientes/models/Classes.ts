class Cliente {
    id: number = new Date().getTime() + Math.floor(Math.random() * 100000);
    nome: string;
    email: string;
    endereco: string;
    telefone: string;
    cpf: string;
    
    constructor (nome: string, email: string, endereco: string, telefone: string, cpf: string) {
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    };
};

class Produto {
    codigo: number;
    nome: string;
    descricao: string;
    valor: number;
    foto: string;
    quantidade: number;

    constructor (codigo: number,nome: string, descricao: string, valor: number, foto: string, quantidade: number = 0) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.foto = foto;
        this.quantidade = quantidade;
    };
};

class Venda {
    id: number = new Date().getTime() + Math.floor(Math.random() * 100000);
    cliente: string;
    produtos: Array<Produto>;
    valorTotal: number;

    constructor (cliente: string,produtos: Array<Produto>, valorTotal: number) {
        this.cliente = cliente;
        this.produtos = produtos;
        this.valorTotal = valorTotal;
    };
}

export { Cliente, Produto, Venda };