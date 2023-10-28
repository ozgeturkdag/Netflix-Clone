import { useEffect } from "react";
import axios from "axios";
import { options } from "../app/actions/movieAction";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseImgUrl } from "./Hero";
import { Link } from "react-router-dom";

const MovieCategories = ({ title, fetchUrl }) => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl, options)
      // gelen veriyi state aktar
      .then((res) => setFilms(res.data.results));
  });

  return (
    <div className="bg-dark text-light p-4">
      <h1>{title}</h1>

      <Splide options={{ autoWidth: true, gap: 10, pagination: false }}>
        {films.map((film) => (
          <SplideSlide>
            <Link to={`/movie/${film.id}`}>
              <img
                className="film"
                src={`${baseImgUrl}${film.backdrop_path}`}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieCategories;
