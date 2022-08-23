import React, { useEffect, useState } from "react";
import { fetchReviews } from "./helpers/ApiService";
import { useParams } from "react-router-dom";
export const Reviews = () => {
  const { filmId } = useParams()
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetchReviews(filmId).then(data =>
setReviews(data))
  }, [filmId])
      return (<>
          <ul>
            {reviews.results?.length === 0
        ?<div>We do not have any  reviews on this movie</div>
      :reviews.results?.map(el => {
      return <li key={el.id}><b>Author :{el.author}</b>
        <p>{el.content}</p></li>
    }) }
      
</ul>
    
  </>)
}