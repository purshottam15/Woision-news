// change page
let page_no = 1;
let current_query = "world";

next.addEventListener('click', (q) => {
  page_no += 1;
  fetch_query(current_query, page_no);
 
  
});
previous.addEventListener('click', (q) => {
  if (page_no >= 2) { // check if page_no is greater than or equal to 2
    page_no -= 1;
    fetch_query(current_query, page_no);
  }


});
let button=document.getElementById('button')


const fetch_query=async(query,page)=>{
    const x = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=15&page=${page}&apiKey=9f69db15cf7f407880787f3aafe2489a`)
    let r =   await x.json()
    console.log(r)
    current_query = query;
    // article1= Array.from(r)
    random=Math.floor(Math.random()*15)
    random1=Math.floor(Math.random()*15)
    random2=Math.floor(Math.random()*15)
    container.innerHTML=` <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
    <div class="col-md-10  px-0">
      <h1 class="display-8 font-italic" id="Front_title">${r.articles[0].title}</h1>
      <p class="lead my-3 display-14" id="front_desc">${r.articles[0].description}</p>
      <p class="lead mb-0"><a target="_blank" href="${r.articles[0].url}" class="text-white font-weight-bold">Continue reading...</a></p>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded  flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary" >${query}</strong>
         
          <p class="card-text mb-auto"id="down_title">${r.articles[1].description}</p>
      
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src="${r.articles[1].urlToImage}" role="img"  focusable="false"></img>
        </div>
      </div>
    </div>
    <div class="col-md-6">
       <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">${query}</strong>
          
          <p class="mb-auto" id="down_title2">${r.articles[2].description}</p>
          
        </div>
        <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" width="200" height="250" src="${r.articles[2].urlToImage}" role="img"  focusable="false"></img>
        </div>
      </div>
    </div>
  </div>`
  html=""
  r.articles.forEach((art)=>{
    html+=`<div class="card m-4" style="width: 18rem;">
    <img src="${art.urlToImage}" class="card-img-top" alt="..." onerror="this.onerror=null;this.src='https://pixabay.com/images/search/${query}/';">
    <div class="card-body">
      <h5 class="card-title">${art.title}</h5>
      <p class="card-text">${art.description}</p>
      <a href="${art.url}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  container1.innerHTML=html

  })

  

 
   
    
   
        
    
    

}

fetch_query(current_query,page_no)
button.addEventListener('click',(x)=>{
    x.preventDefault()
    search=document.getElementById('search').value
    fetch_query(search,1)
})


// fetch data according to category selected by user
category=document.querySelectorAll(".category")
Array.from(category).forEach((topic)=>{
  topic.addEventListener("click",(w)=>{
   let query= w.target.innerHTML

   w.preventDefault()
   fetch_query(query,1)
  })
})




