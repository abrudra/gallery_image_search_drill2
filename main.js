let accessKey = "1VKQVAEI_FuS9BhcWtwqzkRERtiWMCPlPLKGm2eQ8GA";
let input = document.querySelector(".search");
let searchbtn = document.querySelector(".imaginput");

let pagenr = 1;
let search = false;
let query = "";


input.addEventListener("input",(e) =>{
    e.preventDefault();
    query = e.target.value;
})

async function createdPhotoes(pagenr){
    let data = await fetch(`
    https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`,
    {
        method:"GET",
        headers:{
            Accept : "application/json",
            Authorization: accessKey
        },
    });
    let resut = await data.json();
   console.log(resut)
}
createdPhotoes(pagenr)