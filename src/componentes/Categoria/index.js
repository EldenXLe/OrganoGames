import Cards from '../Cards'
import './Categoria.css'


const Categoria = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.games.length > 0) ? <section className='categoria' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='cards'>
                {props.games.map( game => <Cards corDeFundo={props.corPrimaria} key={game.nome} nome={game.nome} plataforma={game.plataforma} imagem={game.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Categoria
