import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const categorias = [
        'FPS',
        'RPG',
        'LUTA',
        'INDIE',
        'TERROR',
        'AÇÃO',
        'AVENTURA',
        'ESPORTE',
        'CORRIDA',
        'ESTRATEGIA',
        'SOBREVIVENCIA'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form submetido')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados abaixo para criar o card do game:</h2>
                <CampoTexto obrigatorio= {true} label="Nome" placeholder="Digite o nome do game..."/>
                <CampoTexto obrigatorio= {true} label="Genero" placeholder="Digite uma brever descrição do game..."/>
                <CampoTexto label="Imagem" placeholder="Anexe um link contendo a imagem do game..."/>
                <ListaSuspensa obrigatorio= {true} label="Categorias"itens ={categorias}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
} 

export default Formulario