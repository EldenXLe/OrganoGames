import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';

function App() {
  
  const categorias = [
    {
      nome: 'FPS',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },
    {
      nome: 'RPG',
      corPrimaria:'#1150c5',
      corSecundaria:'#a8daed'
    },
    {
      nome: 'LUTA',
      corPrimaria:'#e41b1bec',
      corSecundaria:'#d19292'
    },
    {
      nome: 'INDIE',
      corPrimaria:'#f7f1f0',
      corSecundaria:'#b8b5b4'
    },
    {
      nome: 'TERROR',
      corPrimaria:'#000000',
      corSecundaria:'#404344'
    },
    {
      nome: 'AÇÃO',
      corPrimaria:'#df6c0e',
      corSecundaria:'#e3bf96'
    },
    {
      nome: 'AVENTURA',
      corPrimaria:'#117732',
      corSecundaria:'#b1e3cc'
    },
    {
      nome: 'ESPORTE',
      corPrimaria:'#cabe0e',
      corSecundaria:'#d9d296'
    },
    {
      nome: 'CORRIDA',
      corPrimaria:'#5c2bce',
      corSecundaria:'#b398d6'
    },
    {
      nome: 'ESTRATEGIA',
      corPrimaria:'#59595a',
      corSecundaria:'#b4bbb8'
    },
    {
      nome: 'SOBREVIVENCIA',
      corPrimaria:'#7a3311',
      corSecundaria:'#e6b198'
    },
  ]
  
  const [games, setGames] = useState([])

  const aoGameCadastrado =(game) =>{
    setGames([...games, game])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoGameCadastrado={games=> aoGameCadastrado(games)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria}
        games={games.filter(game => game.categoria === categoria.nome)}
      />)}

    </div>
  );
}

export default App;
