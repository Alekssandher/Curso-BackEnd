import prompt from 'prompt-sync';
import { Cliente, Produto, Venda } from './models/Classes';

let ListaProdutos: Array<Produto> = [];
let ListaClientes: Array<Cliente> = [];
let ListaVendas: Array<Venda> = [];

const promptSync = prompt();

function Main() {
    ShowMenu();
};

function ShowMenu() {
    console.log("1 - Cadastrar Cliente");
    console.log("2 - Cadastrar Produto");
    console.log("3 - Listar Clientes");
    console.log("4 - Listar Produtos");
    console.log("5 - Aumentar produto no estoque");
    console.log("7 - Diminuir produto no estoque");
    console.log("8 - Excluir produto");
    console.log("9 - Cadastrar vendas");
    console.log("10 - Listar vendas");
    console.log("11 - Procurar vendas por cliente");
    console.log("12 - Detalhar venda");
    console.log("13 - Sair");

    let opcao = +promptSync("Escolha uma opção: ");

    console.clear();

    switch(opcao) {
        
        case 1:
            CadastrarCliente();
            break;
        case 2:
            CadastrarProduto();
            break;
        case 3:
            ListarClientes();
            break;
        case 4:
            ListarProdutos();
            break;
        case 5:
            AumentarEstoque();
            break;
        case 7:
            DiminuirEstoque();
            break;
        case 8:
            ExcludeProduct();
            break
        case 9:
            CadastrarVenda();
            break;
        case 10:
            ListarVendas();
            break;
        case 11:
            ProcurarVenda();
            break;
        case 12:
            DetalharVenda();
            break;
        case 13:
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida");
            promptSync("Pressione enter para continuar...");
            console.clear();
            Main();
            break;
    };
}

function CadastrarCliente() {
    
    let nome = promptSync("Digite o nome do cliente: ");
    let email = promptSync("Digite o email do cliente: ");
    let endereco = promptSync("Digite o endereço do cliente: ");
    let telefone = promptSync("Digite o telefone do cliente: ");
    let cpf = promptSync("Digite o cpf do cliente: ");

    let cliente = new Cliente(nome, email, endereco, telefone, cpf);
    ListaClientes.push(cliente);
    console.log("Cliente cadastrado com sucesso!");
    
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function CadastrarProduto() {

    let codigo = +promptSync("Digite o código do produto: ");
    let nome = promptSync("Digite o nome do produto: ");
    let descricao = promptSync("Digite a descrição do produto: ");
    let valor = +promptSync("Digite o valor do produto: ");
    let foto = promptSync("Digite a url da foto do produto: ");
    let quantidade = +promptSync("Digite a quantidade do produto: ");

    let produto = new Produto(codigo, nome, descricao, valor, foto, quantidade);
    ListaProdutos.push(produto);
    console.log("Produto cadastrado com sucesso!");

    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function ListarClientes() {
    ListaClientes.forEach(cliente => {
        console.log("Id: " + cliente.id);
        console.log("Nome: " + cliente.nome);
        console.log("Email: " + cliente.email);
        console.log("Endereço: " + cliente.endereco);
        console.log("Telefone: " + cliente.telefone);
        console.log("CPF: " + cliente.cpf);
        console.log("---------------------------------------------------");
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function ListarProdutos() {
    ListaProdutos.forEach(produto => {
        console.log("Código: " + produto.codigo);
        console.log("Nome: " + produto.nome);
        console.log("Descrição: " + produto.descricao);
        console.log("Valor: " + produto.valor);
        console.log("Foto: " + produto.foto);
        console.log("Quantidade: " + produto.quantidade);
        console.log("---------------------------------------------------");
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function AumentarEstoque() {
    let codProduto = +promptSync("Digite o código do produto que deseja aumentar o estoque: ");
    let quantidade = +promptSync("Digite a quantidade que deseja aumentar: ");

    ListaProdutos.forEach(produto => {
        if(produto.codigo === codProduto) {
            produto.quantidade += quantidade;
            console.log("Estoque atualizado com sucesso!");
        };
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function DiminuirEstoque() {
    let codProduto = +promptSync("Digite o código do produto que deseja diminuir o estoque: ");
    let quantidade = +promptSync("Digite a quantidade que deseja diminuir: ");

    ListaProdutos.forEach(produto => {
        if(produto.codigo === codProduto) {
            produto.quantidade -= quantidade;
            console.log("Estoque atualizado com sucesso!");
        };
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
};

function ExcludeProduct() {
    let codProduto = +promptSync("Digite o código do produto que deseja excluir: ");

    ListaProdutos = ListaProdutos.filter(produto => produto.codigo !== codProduto);
    console.log("Produto excluído com sucesso!");

    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
}

function CadastrarVenda() {
    if(ListaProdutos.length === 0) {
        console.log("Não há produtos cadastrados!");
        promptSync("Pressione enter para continuar...");
        console.clear();
        Main();
        return;
    }
    if(ListaClientes.length === 0) {
        console.log("Não há clientes cadastrados!");
        promptSync("Pressione enter para continuar...");
        console.clear();
        Main();
        return;
    }

    console.log("Digite o Id do cliente para cadastrar a venda: ");
    let idCliente = +promptSync("Digite o Id do cliente: ");
    
    ListaClientes.forEach(cliente => {
        if(cliente.id === idCliente) {
            let produtos: Array<Produto> = [];
            let valorTotal = 0;
            let continuar: boolean = true;
            while(continuar) {
                let codProduto = +promptSync("Digite o código do produto: ");
                let quantidade = +promptSync("Digite a quantidade: ");
                let produto = ListaProdutos.find(produto => produto.codigo === codProduto);
                if(produto) {
                    if(produto.quantidade >= quantidade) {
                        produto.quantidade -= quantidade;
                        valorTotal += produto.valor * quantidade;
                        produtos.push(produto);
                    } else {
                        console.log("Quantidade indisponível no estoque!");
                    }
                } else {
                    console.log("Produto não encontrado!");
                }
                continuar = promptSync("Deseja adicionar mais produtos? (s/n) ") === "s";
            }
            let venda = new Venda(cliente.nome, produtos, valorTotal);
            ListaVendas.push(venda);

            console.log("Venda cadastrada com sucesso!");
            promptSync("Pressione enter para continuar...");
            console.clear();
            Main();
        }
    });
}

function ListarVendas() {
    ListaVendas.forEach(venda => {
        console.log("Id: " + venda.id);
        console.log("Cliente: " + venda.cliente);
        console.log("Produtos: " + venda.produtos.length);
        venda.produtos.forEach(produto => {
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
        });
        console.log("Valor total: " + venda.valorTotal);
        console.log("---------------------------------------------------");
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
}

function ProcurarVenda() {
    let nomeCliente = promptSync("Digite o nome do cliente: ");
    let vendasCliente = ListaVendas.filter(venda => venda.cliente === nomeCliente);
    vendasCliente.forEach(venda => {
        console.log("Id: " + venda.id);
        console.log("Cliente: " + venda.cliente);
        console.log("Produtos: " + venda.produtos.length);
        venda.produtos.forEach(produto => {
            console.log("Nome: " + produto.nome);
            console.log("Valor: " + produto.valor);
        });
        console.log("Valor total: " + venda.valorTotal);
        console.log("---------------------------------------------------");
    });
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
}

function DetalharVenda() {
    let idVenda = +promptSync("Digite o Id da venda: ");
    let venda = ListaVendas.find(venda => venda.id === idVenda);
    if(venda) {
        console.log("Id: " + venda.id);
        console.log("Cliente: " + venda.cliente);
        console.log("Produtos: ");
        venda.produtos.forEach(produto => {
            console.log("Código: " + produto.codigo);
            console.log("Nome: " + produto.nome);
            console.log("Descrição: " + produto.descricao);
            console.log("Valor: " + produto.valor);
            console.log("Foto: " + produto.foto);
        });
        console.log("Lucro total: " + venda.valorTotal);
    } else {
        console.log("Venda não encontrada!");
    }
    promptSync("Pressione enter para continuar...");
    console.clear();
    Main();
}
Main();