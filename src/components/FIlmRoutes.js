import { lazy, Suspense,useEffect,useState} from "react";
import { Route, Routes, Outlet } from "react-router-dom"
import SharedLayout from "./SharedLayout";
import { fetchAllVideo } from "./helpers/ApiService";
import Loader from "./Loader";
import Reviews from "./Reviews";
const HomePage=lazy(()=>import("pages/HomePage"))
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const MoviesPage=lazy(()=>import( "pages/MoviePages"))
const FilmDetailsView=lazy(()=>import("./FilmDetailsView"))
const Cast = lazy(() => import("./Cast"))
// const Reviews =lazy(()=>import("./Reviews"))

const FilmRoutes = () => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    
  useEffect(() => {
    const fetchVideo = async () => {
    const res = await fetchAllVideo()

    setData(prevState=>[...prevState,...res.results])
        // setData(data=>[...data, ...res.results])
        ////тут буде якась помилка тре від попереднього розпиляти типу setData([...data,...res.results])
    }
    fetchVideo()
  }, [])
    
    return (<>

     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path ='/' element={<SharedLayout/>}>
        <Route index element={<HomePage data={data} />}/>
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:filmId' element={<FilmDetailsView />}>
          <Route path='cast' element={<Cast />} />
          <Route path ='reviews' element={<Reviews/>}/>
          </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Route>
        </Routes>
      </Suspense>
      <Outlet /> </> )
}
export default FilmRoutes