import { useEffect, useState } from "react"
import { fetchMovieById } from "./helpers/ApiService" 
import { useParams, Outlet, Link } from "react-router-dom"

export const FilmDetailsView = () => {
    const { filmId } = useParams()
    const [filmDetails, setFilmDetails] = useState(null)
    
    useEffect(() => {
    fetchMovieById(filmId).then(setFilmDetails)
    }, [filmId])
    const dateYears = filmDetails?.release_date.split('').slice(0,4)
 
    return (<>
         <Link to='/'>go to main</Link>
        {filmDetails && <>
            <h2>{filmDetails.title} ({dateYears})</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} width="300" alt={filmDetails.name} />
            <h3>Overview :</h3>
            <p>{filmDetails.overview}</p>
            <b>Genres : <p>{filmDetails.genres?.map(el => el.name)}</p></b>
            <h3>Additional information</h3>
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>
            <Outlet></Outlet>
        </>}    
    </>)
}
