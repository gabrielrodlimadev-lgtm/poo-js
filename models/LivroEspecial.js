import Livro from "./Livro.js";

// Herança de classes - Herda caracteristicas de Livro
class LivroEspecial extends Livro {
    constructor(titulo, autor, ano, categoria) {
        super(titulo, autor, ano);
        this.categoria = categoria;
    }

    exibirInfo() {
        return `${super.exibirInfo()} [${this.categoria.toUpperCase()}]`;
    }
}

export default LivroEspecial;