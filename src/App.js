import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw; /* Toda Largura da tela */
  height: 100vh; /*Toda Altura da tela */
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
