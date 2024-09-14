import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

const ganre = [
  { id: 28, name: "action" },
  { id: 12, name: "adventure" },
  { id: 16, name: "animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "history" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "ScienceFiction" },
  { id: 10770, name: "TVMovie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
function App() {
  const [page, setPage] = useState(1)
  const [pageNums, setPageNums] = useState([1, page, 3, "..."])
  const [populary, setPopulary] = useState([]);
  const [ganres, setGanres] = useState([])
  const [filmganres,setFilmganres ] = useState([])
  const [searchInp,setSearchInp]= useState('')
  useEffect(() => {
    if (searchInp === "") {
      fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}&page=${page}`)
.then((res) => res.json())
.then((res) => {
          if (searchInp === "") {
            setPopulary(res.results)
            if (res.total_pages) {
              let arr = page > 1 ? [page - 1] : []
              for (let i = page; i < res.total_pages; i++) {
                arr.push(i)
                if (i - page === 10) {
                  break
                }
              }
              setPageNums(arr)
            }
            setGanres(ganre)
          }
        }
        );
    } else {

      fetch(`https://api.themoviedb.org/3/search/movie?${api_key}&query=${searchInp}&page=${page}`)
        .then((res) => res.json())
        .then((res) => {
          setPopulary(res.results)
          if (res.total_pages) {
            let arr = page > 1 ? [page - 1] : []
            for (let i = page; i < res.total_pages; i++) {
              arr.push(i)
              if (i - page === 10) {
                break
              }
            }
            setPageNums(arr)
          }
          setGanres(ganre)
        }
        );
    }
  }, [searchInp]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        if (searchInp === "") {
          setPopulary(res.results)
          if (res.total_pages) {
            let arr = page > 1 ? [page - 1] : []
            for (let i = page; i < res.total_pages; i++) {
              arr.push(i)
              if (i - page === 10) {
                break
              }
            }
            setPageNums(arr)
          }
          setGanres(ganre)
        }
      }
      );
  }, [page]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?${api_key}&with_genres=${filmganres}&page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setPopulary(res.results)
        if (res.total_pages) {
          let arr = page > 1 ? [page - 1] : []
          for (let i = page; i < res.total_pages; i++) {
            arr.push(i)
            if (i - page === 10) {
              break
            }
          }
          setPageNums(arr)
        }
      })
  }, [filmganres, page])


  return <div className="flex justify-center items-center flex-wrap bg-black gap-[20px]">
    <div className="flex justify-center  ">
           <input type="text" className="p-40px text-black w-full text-2xl rounded-2xl m-10  "  value={searchInp} onChange={(e)=>setSearchInp(e.target.value)}  />
        </div>
    <div className="ganres">
      {ganres.map((e, i) => {
         return <button key={i} onClick={() => {
          setFilmganres(e.id)
        }}>{e.name}</button>
      })}
    </div>
    <div className="flex justify-center items-center flex-wrap gap-[20px]">
      {
        populary.map((e) => {
          return <Card populary={e} key={e.id} />
        })
      }
    </div>

    <div className="flex g-[20px]">
      {pageNums.map((e, i) => {

        if (e >= 1) {
          return <button key={i} onClick={() => setPage(e)} className="w-[40px] h-[40px] m-5 bg-white text-black">{e}</button>
        }
        
      })}
    </div>
  </div>;
}

export default App;