import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "bootstrap/dist/css/bootstrap.css";
import GalleryPlaceholder from "./GalleryPlaceholder";
import ErrorComponent from "./ErrorComponent";

const MovieGallery = ({ title, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=a32f801a&s=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [searchQuery]);

  const handleRetry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return <ErrorComponent errorMessage={error} onRetry={handleRetry} />;
  }

  if (isLoading) {
    return <GalleryPlaceholder />;
  }

  return (
    <div className="mx-2">
      <h4 className="text-light mb-2 mt-4">{title}</h4>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className="gallery-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieGallery;
