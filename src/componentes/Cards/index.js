import './Cards.css'

const Cards = ({ nome, imagem, plataforma, corDeFundo }) => {
    return (<div className='stcard'>
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{plataforma}</h5>
        </div>
    </div>)
}

export default Cards

