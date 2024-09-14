import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single() {
    const img_url = "https://image.tmdb.org/t/p/w500";
    const id = useParams()
    const [vidio,setVidio]= useState([])
    const [single, setSingle] = useState({})
    const [actior,setActior]= useState([])
    const api_key = "api_key=9b702a6b89b0278738dab62417267c49";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?${api_key}`)
        .then((res) => res.json())
        .then((res) => setSingle(res))      
        
   
    },[]);

 useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}/credits?${api_key} `)
        .then((res) => res.json())
        .then((res) => setActior(res.cast));
    },[]);



   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id.id}/videos?${api_key} `)
    .then((res) => res.json())
    .then((res) => setVidio(res.results));
},[]);

    
  return (
    <div className="w-full  " >
       <img src={img_url+single.backdrop_path} className="w-full h-screen absolute top-0 -z-20" />
      <div className="w-full  p-20px my-2 bg-black/50 ">
      <div className="w-70% h-70% flex flex-wrap gap-[40px] justify-center	 ">
        <img src={img_url+single.poster_path} />
     <div  className="text-center gap-[20px] w-[300px] h-[200px] flex flex-col " >
      <h1 className="text-white text-4xl	"  > {single.original_title} </h1>
      <samp className="text-red-600">{single.release_date} </samp>
      <p className="text-white  text-xl	 ">{single.overview} </p>
      
      </div>
     </div>
      </div>
     <div className="bg-black">
        <h1 className=" text-4xl  text-white  text-center">Credits</h1>
         <div className="w-full flex overflow-x-scroll gap-2 ">
        {
          actior.map((e,i)=>{
            return <div key={i} className="w-full text-center  ">
              <div className="w-[400px] h-[500px] p-40px m-5   ">
              <img src={img_url+e.profile_path}  className='w-[300px] h-[300px]'/>
              <h1 className="text-3xl text-white">{e.name} </h1>
              </div>
             
            </div>
          })
        }
         </div>
     </div>

     <div className="bg-black">
     <h1 className=" text-4xl  text-white  text-center">Videos</h1>
     <div className="w-full flex overflow-x-scroll gap-2 ">
      <div className=" flex  gap-40 " >
      {
          vidio.map((elm,ind)=>{
            return <div key={ind} className="w-full text-center flex  ">
              <div className="w-[300px] h-[200px] p-40px m-5   ">
              <iframe  class='iframe'   allowfullscreen  src={` https://www.youtube.com/embed/${elm.key}`}  frameborder="0">  </iframe>
              </div>
            </div>
          })
        }
      </div>
     </div> 
     </div>
    </div>
    
  );
}

export default Single