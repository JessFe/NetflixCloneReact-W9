import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";
import { Container } from "react-bootstrap";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <MyNav onNavigation={(page) => setCurrentPage(page)} />
      <Container fluid>
        {currentPage === "home" && (
          <div className="pt-custom">
            <TopBar />
            <MovieGallery title="Trending Now" searchQuery="terminator" />
            <MovieGallery title="Watch it Again" searchQuery="back to the future" />
            <MovieGallery title="New Releases" searchQuery="mad max" />
          </div>
        )}
        {currentPage === "profile" && <ProfilePage />}
        {currentPage === "settings" && <SettingsPage />}
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
