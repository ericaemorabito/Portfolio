import "./App.css";
import { Container } from "react-bootstrap";
import Header from './components/Header'
import Home from "./components/Home";

function App() {
  return (
    <Container fluid className="app gx-0">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
