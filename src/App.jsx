import "./App.css";
import movies from "./assets/movies.json";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <>
      <img src={logo} className="logo" alt="" />
      {movies.map((movie, index) => {
        //console.log(movie.images);
        return (
          <div key={index}>
            <h2>{movie.category}</h2>
            <div className="resize">
              {movie.images.map((url, index) => {
                console.log(url);

                return (
                  <div key={url}>
                    <img src={url} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
