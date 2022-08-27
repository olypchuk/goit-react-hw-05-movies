import { fetchMovieById } from "./helpers/ApiService" 
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom"
import {StyledNavLink} from "./StyledLink"
import defaultImg from '../defaultImg.jpeg'
import StyledButton from "./Button"
import StyledContainer from "./Container"
import styled from "styled-components"
import useFetchAndLoading from "./hooks/useFetchAndLoading"
import Loader from "./Loader"
const StyledFlexContainer=styled.div`
    display: flex;
`
const StyledDescription=styled.div`
    width: 300px;
    margin: 30px;
`

 const FilmDetailsView = () => {
    const { filmId } = useParams()
    const { data, isLoading } = useFetchAndLoading(fetchMovieById, filmId)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/'
    const goBack = () => navigate(from)
  
    const {release_date,vote_average,title,poster_path,name,overview,genres}=data
    const dateYears = release_date?.split('').slice(0, 4);
    const userScore = String(vote_average * 10).slice(0, 2);

     return (
         <StyledContainer><StyledButton onClick={goBack}>goBack</StyledButton>
             {isLoading&&<Loader/>}
        {data &&<>
            <StyledFlexContainer><div><h2>{title} ({dateYears})</h2>
            <p>User Score : {userScore} %</p>

            {poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} width="300" alt={name} />
                : <img src={defaultImg} width="300" alt={name} />
                     }</div>
                     <StyledDescription>
            <h3>Overview :</h3>
            <p>{overview}</p>
            <b>Genres : <p>{genres?.map(el => el.name).join(' , ')}</p></b>
            </StyledDescription></StyledFlexContainer> 
            <h3>Additional information</h3>
            <StyledNavLink state={{from}}to='cast'>Cast</StyledNavLink>
            <StyledNavLink state={{from}} to='reviews'> Reviews</StyledNavLink>
          
        </>}<Outlet/>    
    </StyledContainer>)
}
export default FilmDetailsView