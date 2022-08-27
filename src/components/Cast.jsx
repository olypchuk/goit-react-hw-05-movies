import React from "react";
import { fetchCast } from "./helpers/ApiService";
import { useParams } from "react-router-dom";
import useFetchAndLoading from "./hooks/useFetchAndLoading";
import Loader from "./Loader";
import defaultImg from '../defaultImg.jpeg'

const API_KEY = '2fbaf0abda7e75b14a06c1d021f41a8b'


const Cast = () => {
const { filmId } = useParams()
const {data,isLoading}=useFetchAndLoading(fetchCast,filmId)

const casts=data?.cast?.map(el => {
        return <li key={el.id}>
          <div>
            {el.profile_path ?
            <img src={`https://image.tmdb.org/t/p/w300/${el.profile_path}?api_key=${API_KEY}`} alt='test ' />
              : <img src={defaultImg} alt={el.name} width={300} />}
          </div>
          <p>{el.name}</p>
        <p>Character : { el.character}</p> 
      </li>
})
  
  return (<>
    {isLoading && <Loader />}
    <ul>{data?.cast?.length === 0
      ?<div>We do not have any  cast on this movie</div>
      :casts}
    </ul>
  </>)
}
export default Cast