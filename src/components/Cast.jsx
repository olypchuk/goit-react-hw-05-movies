import React, { useEffect, useState } from "react";
import { fetchCast } from "./helpers/ApiService";
import { useParams } from "react-router-dom";
const API_KEY = '2fbaf0abda7e75b14a06c1d021f41a8b'
export const Cast = () => {
  const { filmId } = useParams()

  const [cast, setCast] = useState(null)
  useEffect(() => {
    fetchCast(filmId).then(setCast)
  }, [filmId])
  return (<>
    <ul>{cast?.cast.map(el => {
      return <li key={el.id}>
     
        <div><img src={`https://image.tmdb.org/t/p/w300/${el.profile_path}?api_key=${API_KEY}`} alt='test ' /></div><p>{el.name}</p>
        <p>Character : { el.character}</p> 
      </li>
    })}</ul></>)
}
