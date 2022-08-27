import { lazy, Suspense} from "react";
import { Route, Routes, Outlet } from "react-router-dom"
import SharedLayout from "./SharedLayout";
import Loader from "./Loader";

const HomePage=lazy(()=>import("pages/HomePage"))
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));
const MoviesPage=lazy(()=>import( "pages/MoviePages"))
const FilmDetailsView=lazy(()=>import("./FilmDetailsView"))
const Cast = lazy(() => import("./Cast"))
const Reviews =lazy(()=>import("./Reviews"))

const FilmRoutes = () => {

    return (<>

     <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path ='/' element={<SharedLayout/>}>
        <Route index element={<HomePage  />}/>
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