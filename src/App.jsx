import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid>
        <TopBar />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
