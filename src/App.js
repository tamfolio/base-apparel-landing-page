
import { Container } from "./components/styled/Container.styled";
import { Image } from "./components/styled/Image.styled";
import GlobalStyle from "./components/styled/Global";
import Left from "./components/Left";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Container>
      <Left/>
      <Image>
        <img src="./images/hero-desktop.jpg" alt="" />
      </Image>
    </Container>
    </>
  );
}

export default App;
