const API_KEY = '2fbaf0abda7e75b14a06c1d021f41a8b'
const BASE_URL='https://api.themoviedb.org/3'
export const fetchMovieById = async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}?api_key=${API_KEY}&language=en-US`)
        if (!res.ok) {
          throw new Error(res.status);
      }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }

}
export const fetchCast = async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}/credits?api_key=${API_KEY}&language=en-US`)
    //     if (!res.ok) {
    //       throw new Error(res.status);
    //   }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }
 
}
export const fetchReviews= async (value) => {
    try {
        const res = await fetch(`${BASE_URL}/movie/${value}/reviews?api_key=${API_KEY}&language=en-US`)
    //     if (!res.ok) {
    //       throw new Error(res.status);
    //   }
    const response = await res.json()
    return response 
    } catch (error) {
        console.log('error :>> ', error);
    }
 
}
export const fetchAllVideo = async () => {
try {
  const res = await fetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`)
     if (!res.ok) {
          throw new Error(res.status);
      }
const response = await res.json()
return response
} catch (error) {
          console.log('error :>> ', error);
}

}