import React from "react";
import { fetchReviews } from "./helpers/ApiService";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import useFetchAndLoading from "./hooks/useFetchAndLoading";


const Reviews = () => {
  const { filmId } = useParams()
  const { data, isLoading } = useFetchAndLoading(fetchReviews, filmId)

  return (
    <>{isLoading && <Loader />}
          <ul>
            {data.results?.length === 0
        ?<div>We do not have any  reviews on this movie</div>
      :data.results?.map(el => {
      return <li key={el.id}><b>Author :{el.author}</b>
        <p>{el.content}</p></li>
    }) }
      
</ul>
    
  </>)
}
export default Reviews