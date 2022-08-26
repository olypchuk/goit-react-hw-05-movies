import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const ContainerLoader=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Loader = () => {
  return (
    <ContainerLoader><RotatingLines
  strokeColor="green"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
    /></ContainerLoader >
    )}
  
export default Loader
