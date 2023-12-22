import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid>
        <TopBar />
      </Container>
    </>
  );
}

export default App;
