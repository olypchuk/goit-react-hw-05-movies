import styled from "styled-components"
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Loader from "./Loader"

const StyledNav=styled.nav`
 background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,95,1) 30%, rgba(0,212,255,1) 100%);
`
const SharedLayout = () => {
  return(<>
  <header><StyledNav>
    <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/movies'>Movies</StyledLink>
    </StyledNav></header >
     <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense></>)
}
export default SharedLayout
export const StyledLink=styled(NavLink)`
  
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
