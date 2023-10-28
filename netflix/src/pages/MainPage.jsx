import Hero from "../components/Hero";
import MovieCategories from "../components/MovieCategories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getGenres } from "../app/actions/movieAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  console.log(state.genres);

  useEffect(() => {
    // popüler film verilerini çek
    dispatch(getFilms());

    // kategorileri çek
    dispatch(getGenres());
  }, []);

  return (
    <div className="bg-dark text-light">
      {/* Popüler film (Banner) */}
      <Hero />

      {/* Film Listeleri (Kategoriye Göre) */}
      {state.genres.slice(0, 10).map((genre) => (
        <MovieCategories
          key={genre.id}
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;
