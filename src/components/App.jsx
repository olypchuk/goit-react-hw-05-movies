import React, { useEffect,useState } from "react";
import { Route, Routes, NavLink, Outlet} from "react-router-dom"
import styled from "styled-components";
import { HomePage } from "pages/HomePage";
import { NotFoundPage } from "pages/NotFoundPage";
import { MoviesPage } from "pages/MoviePages";
import { FilmDetailsView } from "./FilmDetailsView";
import { Reviews } from "./reviews";
import { Cast } from "./Cast";
import { fetchAllVideo} from "./helpers/ApiService";

const StyledLink=styled(NavLink)`
  
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
    font-family: BlinkMacSystemFont,-apple-system,Arial,Segoe UI,Roboto,Helvetica,sans-serif;
    margin: 15px;
    outline: none;
 
    position: relative;
    text-align: center;
    transition-duration: .2s;
    transition-property: color,background-color,border-color;
    transition-timing-function: ease-in-out;
    
 color: grey;
    background-color: orangered;
    padding: 10px 20px;
    border-radius: 0 3px 3px 0;
    
  &.active {
  background-color: #00a046;
    color: #fff;
  }
`
const SharedLayout = () => {
  return(<>
  <header><nav>
    <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/movies'>Movies</StyledLink>
</nav></header >
  <Outlet /></>)
}

export const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    
    const fetchVideo = async () => {
    const res = await fetchAllVideo()

setData(prevState=>[...prevState,...res.results])
        // setData(data=>[...data, ...res.results])
        ////тут буде якась помилка тре від попереднього розпиляти типу setData([...data,...res.results])
    }
    fetchVideo()
  },[])
  return (
    <>
   
      <Routes>
        <Route path ='/' element={<SharedLayout/>}>
        <Route index element={<HomePage data={data} />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:filmId' element={<FilmDetailsView />}>
          <Route path='cast' element={<Cast />} />
          <Route path ="reviews" element={<Reviews/>}/>
          </Route>
    
        <Route path="*" element={<NotFoundPage/>}/>
    </Route>
      </Routes>
      <Outlet />  
     </>
  );
};
