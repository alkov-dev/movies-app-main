import Movie from "../Movie/Movie"
import './Movies.css'

const  Movies = (props) => {
  const { movies = [], onSelectedMovie, searchTitle} = props;
  console.log(props.movies);
  return (
    <>
        <h4>Результаты по поиску: {searchTitle}</h4>
          <ul className='movies-list'>
        {movies.length ? (movies.map(movie => {
          return <Movie key={`${movie.imdbID}_${movie.Title}`} {...movie} onSelectedMovie={onSelectedMovie} />})) :
          <h3>Фильм с таким названием не существует</h3>
        }
    </ul>
    </>
  )
}
export default Movies