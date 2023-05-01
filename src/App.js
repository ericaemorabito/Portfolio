import "./App.css";
import { Container } from "react-bootstrap";
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import Footer from './components/Footer/Footer'
function App() {
  return (
    <Container fluid className="app gx-0">
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
