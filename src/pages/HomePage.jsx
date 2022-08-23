
import { Link } from "react-router-dom"

export const HomePage = ({ data }) => {
    return ( 
        <><h1>trending today</h1>
        <ul>
                {data.map(el => {
                    return <li key={el.id}>
                        <Link to={`/movies/${el.id}`}>
                        {el.title || el.name}
                        </Link>
                        </li>
                })}  </ul></>)
}


    // {`https://image.tmdb.org/t/p/w300/${filmDetails.poster_path}`}