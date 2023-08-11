import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoGameCadastrado({
            nome,
            plataforma,
            imagem,
            categoria
        })
        setNome('')
        setPlataforma('')
        setImagem('')
        setCategoria('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados abaixo para criar o card do game:</h2>
                <CampoTexto
                 obrigatorio= {true} 
                 label="Nome" 
                 placeholder="Digite o nome do game..."
                 valor={nome}
                 aoAlterado={valor => setNome(valor)}
                 />
                <CampoTexto 
                 obrigatorio= {true} 
                 label="Plataforma" 
                 placeholder="Digite a plataforma do game..."
                 valor={plataforma}
                 aoAlterado={valor => setPlataforma(valor)}
                 
                 />
                <CampoTexto
                 label="Imagem" 
                 placeholder="Anexe um link contendo a imagem do game..."
                 valor={imagem}
                 aoAlterado={valor => setImagem(valor)}
                 
                 />
                <ListaSuspensa
                 obrigatorio= {true} 
                 label="Categorias"
                 itens ={props.categorias}
                 valor={categoria}
                 aoAlterado={valor => setCategoria(valor)}
                 />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
} 

export default Formulario