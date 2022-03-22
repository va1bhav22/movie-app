
let data;
async function searchBtn()
{
  let inputSearch = document.getElementById("search").value;

  if((inputSearch==="" || inputSearch===undefined))
  {
    inputSearch="thor";
    
  }

  try{
    let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&s=${inputSearch}&apikey=1038f3cc`);
    data=await res.json();
    showMovies(data)
   
     console.log(data)
  }
  catch(error)
  {
    console.log("error",error)
  }
 
}
searchBtn()


let movie=document.getElementById("movieData");
function showMovies(data)
{
  // console.log(data)
  movie.innerHTML=null;

  data.Search.map(function(ele){
    let movdiv=document.createElement("div");

    let poster=document.createElement("img")
    poster.setAttribute("id","img")
    poster.src=ele.Poster;

    let title=document.createElement("p");
    title.innerText=ele.Title;

    let type=document.createElement("p");
    type.innerText=ele.Type;

    let year=document.createElement("p");
    year.innerText=ele.Year;

    let Rating=(Math.random()*10).toFixed(1);

    let rating=document.createElement("p");
    rating.innerHTML=`  Rating : ${Rating} &#9733 `;

    


     
     
    
    movdiv.append(poster,title,type,year,rating)
    movie.append(movdiv)

      if(Rating>8)
      {
        let  p=document.createElement("div")
        p.setAttribute("id","Rec")
        p.innerText="Recomanded";

        movdiv.append(p)
      }
     

    
   
  })
}

