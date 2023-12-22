import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import { Container } from "react-bootstrap";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <>
      <MyNav />
      <Container fluid>
        <TopBar />
        <MovieGallery title="Trending Now" searchQuery="transformers" />
        <MovieGallery title="Watch it Again" searchQuery="lord of the rings" />
        <MovieGallery title="New Releases" searchQuery="goofy" />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
