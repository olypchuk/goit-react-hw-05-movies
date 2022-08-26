

import styled from "styled-components"
import StyledContainer from "components/Container"
import StyledLink from "components/StyledLink"
const MainTitleStyled = styled.h1`
text-align: center;
`

 const HomePage = ({ data }) => {
    return ( 
        <StyledContainer>
            <MainTitleStyled>Trending today</MainTitleStyled>
        <ul>
                {data.map(el => {
                    return <li key={el.id}>
                        <StyledLink to={`/movies/${el.id}`}>
                        {el.title || el.name}
                        </StyledLink>
                        </li>
                })}  </ul></StyledContainer>)
}
export default HomePage

    // {`https://image.tmdb.org/t/p/w300/${filmDetails.poster_path}`}
