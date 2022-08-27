import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const ContainerLoader=styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
