import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

//Dar nome a biblioteca
const minhaBiblioteca = new Biblioteca("GT Bezerra - Tarde");

//Cria objeto livro1 com base na class livro
const livro1 = new LivroEspecial("Dom Casmurro", "Machado de Assis", 1899, 'Regional');
const livro2 = new Livro("O Elogio da Loucura", "Erasmo de Rotterdam", 1509);
const livro3 = new Livro("Os Miseráveis", "Victor Hugo", 1800);
const livro4 = new LivroEspecial('Biblia', 'Varios Autores (Jesus)', 100, 'Biblico');

//Adiciono o livro1 à biblioteca 
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

livro1.emprestar();
livro2.emprestar();
livro1.devolver();

//Listagem dos livros
minhaBiblioteca.listarLivros();