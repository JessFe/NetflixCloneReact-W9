import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MovieGallery = ({ title, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a32f801a&s=${searchQuery}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid>
      <h4 className="text-light mb-2 mt-4">{title}</h4>
      <Row>
        {movies.map((movie) => (
          <Col className="gx-2 gy-1" key={movie.imdbID} sm={6} md={4} lg={3} xl={2}>
            <img src={movie.Poster} alt={movie.Title} className="gallery-img" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGallery;
