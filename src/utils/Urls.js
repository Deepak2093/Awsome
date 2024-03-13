import axios from "axios"


export const URLs={
MOVIES_List:'/discover/movie',
SINGLE_Movie:'/movie/',
TRANDING:'/trending/movie/day?language=en-US',
base_url:'https://api.themoviedb.org/3',
TOKEN:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjYwYTEwOWQ0MDNiMGJkZGVmMWJhYzZjMDkxZTM2NiIsInN1YiI6IjY1NDI3MDkwMjg2NmZhMDBhYjBmMTk0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DPgHhIuwbkWCqj55Y0b8xP66obivBCCW37wzxgdLJQY'

}
// export const APIS=axios.create({
//     base_url:'https://api.themoviedb.org/3',
// })