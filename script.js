const searchform=document.getElementById("searchForm");
const searbox=document.getElementById("input-box");
const searchresult=document.getElementById("search-result");
const showbtn=document.getElementById("showMore-btn");

const accessKey="HigT4HMqpbUAZ3JLhsb5gXWLjPLnKO_jwQumqpC4miE"

let page=1;
async function searchimages()
{
    let keyword=document.getElementById("input-box").value;
    console.log(keyword);
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response= await fetch(url);
    let data= await response.json();
    console.log(data);
    const results = data.results;
    results.map((result)=>
    {
        const image=document.createElement('img');
        image.src=result.urls.small;
        const imglink=document.createElement("a");
        imglink.href=result.links.html;
        imglink.target="_blamk";
        imglink.appendChild(image);
        searchresult.appendChild(imglink);
    });

    showbtn.style.display="block";
   

   
}

searchform.addEventListener('submit',(e)=>
{
    e.preventDefault();
    page=1;
    searchimages();

});

document.getElementById("showMore-btn").addEventListener('click',()=>
{
    page++;
    searchimages();
    

});