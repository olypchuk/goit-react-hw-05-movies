import { useEffect, useState } from "react"
import { fetchMovieById } from "./helpers/ApiService" 
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom"
import StyledLink from "./StyledLink"
import defaultImg from '../defaultImg.jpeg'
import StyledButton from "./Button"
import StyledContainer from "./Container"
 const FilmDetailsView = () => {
    const { filmId } = useParams()
    const [filmDetails, setFilmDetails] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'
  
    const goBack = () => navigate(from)
    
    useEffect(() => {
    fetchMovieById(filmId).then(setFilmDetails)
    }, [filmId])

     const dateYears = filmDetails?.release_date.split('').slice(0, 4);
     const userScore = String(filmDetails?.vote_average * 10).slice(0, 2);
    return (<StyledContainer>
     
        <StyledButton onClick={goBack}>goBack</StyledButton>
        {filmDetails && <>
            <h2>{filmDetails.title} ({dateYears})</h2>
            <p>User Score : {userScore} %</p>

            {filmDetails?.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} width="300" alt={filmDetails.name} />
                : <img src={defaultImg} width="300" alt={filmDetails.name} />
            }
            <h3>Overview :</h3>
            <p>{filmDetails.overview}</p>
            <b>Genres : <p>{filmDetails.genres?.map(el => el.name).join(' , ')}</p></b>
            <h3>Additional information</h3>
            <StyledLink state={{from}}to='cast'>Cast</StyledLink>
            <StyledLink state={{from}} to='reviews'> Reviews</StyledLink>
            <Outlet></Outlet>
        </>}    
    </StyledContainer>)
}
export default FilmDetailsView