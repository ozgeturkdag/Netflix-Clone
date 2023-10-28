import axios from "axios";
import { Actiontypes } from "../actionTypes";

// Atılacak İstek İçin Ayarlar
export const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzFhYTVmNTkwMjBlM2JlODJlNGZkOTA2MGM2ZTYzNiIsInN1YiI6IjY0NzQ5OTM5OTQwOGVjMDBjMjhmYTU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKe2uazo7iAtiZVbMS4VQ2mhnm32Kx7p1q6IiVwkdbw",
  },
};
// Temel Url Tanımlalama
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// Asenkron Aksiyon
export const getFilms = () => (dispatch) => {
  // veri çekme işlemleri
  axios
    .get("/movie/popular", options)
    // çektiği verileri reducera aktarma
    .then((res) =>
      dispatch({
        type: Actiontypes.GET_FILMS,
        payload: res.data.results,
      })
    );
};

// Kategori Aksiyon
export const getGenres = () => (dispatch) => {
  // veri çekme
  axios
    .get("/genre/movie/list", options)
    // çekilen verileri reducera aktarma
    .then((res) =>
      dispatch({
        type: Actiontypes.GET_GENRES,
        payload: res.data.genres,
      })
    );
};
