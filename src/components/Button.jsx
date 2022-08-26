import styled from "styled-components"
const StyledButton = styled.button`
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
    
 &:hover {
    cursor: pointer;
    background-color: #00a046;
    color: #fff;
  }
`
export default StyledButton