import styled from "styled-components"
import { Link } from "react-router-dom" 
const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
 
    font-family: BlinkMacSystemFont,-apple-system,Arial,Segoe UI,Roboto,Helvetica,sans-serif;
    margin: 15px;
    outline: none;

    text-align: center;
    transition-duration: .2s;
    transition-property: color,background-color,border-color;
    transition-timing-function: ease-in-out; 
    color: grey;
    background-color: orangered;
    padding: 5px 20px;
    border-radius: 0 3px 3px 0;
    
 &:hover {
    cursor: pointer;
    background-color: #00a046;
    color: #fff;
 }`

const StyledContainer=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const NotFoundPage = () => {
  return (<><StyledContainer><h2>This page is not found,please</h2> 
     <StyledLink to='/'>Go Home</StyledLink></StyledContainer>
   </>)
}
export default NotFoundPage

