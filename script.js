let searchbar=document.getElementById("searchbar")
let button=document.getElementById("button")
let result=document.getElementById("result")

button.addEventListener("click",search)
searchbar.addEventListener("keydown",(event)=>{
    if(event.key=="Enter") search()
})


async function search(){
    let val=searchbar.value
    let data= await fetch(`https://api.jikan.moe/v4/anime?q=${val}&sfw`)
    let responce = await data.json()
    result.innerHTML=""

    for(let i=0;i<=responce.data.length;i++){
        result.innerHTML+=`<a href="${responce.data[i].url}" target="_blank" class="card">
        <div class="warper" style="background-image:url(${responce.data[i].images.jpg.image_url})">
        </div>
        <p>${responce.data[i].title_english ? responce.data[i].title_english : responce.data[i].title_japanese}</p>
        <p>${responce.data[i].episodes} Episodes</p>
        </a>
        `
    }
    
    
    
    
    
    // result.innerHTML=responce.data[0].title_english
}