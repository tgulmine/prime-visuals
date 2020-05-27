import * as React from 'react';
import './styles/main.scss';
import Spiral from './components/Spiral/Spiral';
import Header from './components/Header/Header';
/* import PrimeGenerator from './components/PrimeGenerator/PrimeGenerator'; */

const App: React.FC = () => {
  //fazer desenho das bordas da espiral
  //criar vetor com os estados, borda cima, baixo, esquerda, direita e combinações
  //na função da spiral setar o estado, criar prop no dot e mudar a border

  return (
    <div className="flex bg-black h-screen justify-between">
      <Header />
      <Spiral min={1} max={1000} />
    </div>
  );
};

export default App;
