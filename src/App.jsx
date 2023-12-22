import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav />
      <Container></Container>
    </>
  );
}

export default App;
