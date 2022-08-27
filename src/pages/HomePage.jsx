

import styled from "styled-components"
import StyledContainer from "components/Container"
import StyledLink from "components/StyledLink"
import useFetchAndLoading from "components/hooks/useFetchAndLoading"
import { fetchAllVideo } from "components/helpers/ApiService"
import Loader from "components/Loader"
const MainTitleStyled = styled.h1`
text-align: center;
`

const HomePage = () => {
    const { data, isLoading } = useFetchAndLoading(fetchAllVideo)
   
    return ( 
        <StyledContainer>
            <MainTitleStyled>Trending today</MainTitleStyled>
        <ul>{isLoading&&<Loader/>}
                {data.results?.map(el => {
                    return <li key={el.id}>
                        <StyledLink to={`/movies/${el.id}`}>
                        {el.title || el.name}
                        </StyledLink>
                        </li>
                })}  </ul></StyledContainer>)
}
export default HomePage


