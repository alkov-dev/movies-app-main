import './Movie.css'
import { Link } from 'react-router-dom';
const Movie = (props) => {
  const {
    Title: title,
    Poster: poster,
    imdbID: id,
  } = props;
  return (
    <>
      <li onClick={() => props.onSelectedMovie(id)} className='movie' id={id}>
        <Link to={`/info/${id}`}>
          {poster === "N/A" ? (<img src="https://via.placeholder.com/350x400" alt="" />) :
            (<img src={poster} alt="" />)
          }
          <h3>{title}</h3>
        </Link>
      </li>
    </>
  )
}
export default Movie