import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
    background-image: linear-gradiente(90deg, #002F52 35%, #326589);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 279px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ResultadoLivros = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursos: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid #fff;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textoDigitado = event.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado)) //Verifica se existe Livro nos livros
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />

            { livrosPesquisados.map( livro => (
                <ResultadoLivros>
                    <img src={livro.src} alt="Livro {livro.nome}"/>
                    <p>{livro.nome}</p>
                </ResultadoLivros>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa;