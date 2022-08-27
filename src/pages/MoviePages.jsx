import { useSearchParams ,useLocation} from "react-router-dom"
import { fetchByQuery } from "components/helpers/ApiService";
import { useEffect,useState } from "react";
import StyledButton from "components/Button";
import Loader from "components/Loader";
import styled from "styled-components";
import StyledContainer from "components/Container";
import StyledLink from "components/StyledLink";

const StyledInput = styled.input`

    margin: 0 auto;
    padding-left: 40px;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,95,1) 30%, rgba(0,212,255,1) 100%);
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    color:#fff;
`
const Form=styled.form`
 width: 500px;
 margin: 0 auto;
`
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("query") ?? "";
  const [filmList, setFilmList] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
}

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const res = await fetchByQuery(query)
        setFilmList(res?.results)

      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setLoading(false)
      }

    }
    if (query) { fetch() }
  },[query])



  return (
    <main>
      <StyledContainer>
      <Form onSubmit={handleSubmit}>
    <label htmlFor="search"></label>
        <StyledInput type="text" name="search" id="search" required />
        <StyledButton type="submit">search</StyledButton>
      </Form>{loading&&<Loader/>}
      <ul>
        {filmList?.length!==0 && filmList?.map(( {title,id} ) => (<li key={id}><StyledLink state={{from:location}} to={`/movies/${id}`}>{title}</StyledLink></li>))}
        </ul>
        </StyledContainer>
  </main>)
}
export default MoviesPage