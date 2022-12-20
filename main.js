let accessKey = "1VKQVAEI_FuS9BhcWtwqzkRERtiWMCPlPLKGm2eQ8GA";
let input = document.querySelector(".search");
let searchbtn = document.querySelector(".imaginput");

let pagenr = 1;
let search = false;
let query = "";

input.addEventListener("input", (event) => {
  event.preventDefault();
  query = event.target.value;
});

async function createdPhotoes(pagenr) {
  let data = await fetch(
    `   https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=random&per_page=30`
  );
  let result = await data.json();
  let apiData = result.results;
  apiData.forEach((photo, index) => {
    let pic = document.createElement("div");
    let imageDiv = document.createElement("img");
    pic.appendChild(imageDiv);
     pic.classList.add("pic-class");
    imageDiv.classList.add("pic-class");
    imageDiv.src = `${photo.urls.regular}`;
    let paraDiv = document.createElement("div");
    pic.appendChild(paraDiv);
    paraDiv.classList.add("paradiv-class");
    let para1 = document.createElement("p");
    paraDiv.appendChild(para1);
    para1.innerText = `${photo.user.name}`;
    let para2 = document.createElement("p");
    paraDiv.appendChild(para2);
    para2.innerText = `${photo.likes} likes`;
    let profileDiv = document.createElement("img");
    profileDiv.classList.add("profilediv-class");
    paraDiv.appendChild(
      profileDiv
    ).src = `${photo.user.profile_image.small}   `;

    document.querySelector(".gallery").appendChild(pic);
  });
}

async function searchPhotos(query, pagenr) {
  let data = await fetch(
    `   https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${pagenr}&query=${query}&per_page=30`
  );
  let result = await data.json();
  console.log(result);
  let apiData = result.results;
  apiData.forEach((photo) => {
    let pic = document.createElement("div");
    let imageDiv = document.createElement("img");
    pic.appendChild(imageDiv);
     pic.classList.add("pic-class");
    imageDiv.classList.add("pic-class");
    imageDiv.src = `${photo.urls.regular}`;
    let paraDiv = document.createElement("div");
    pic.appendChild(paraDiv);
    paraDiv.classList.add("paradiv-class");
    let para1 = document.createElement("p");
    paraDiv.appendChild(para1);
    para1.innerText = `${photo.user.name}`;
    let para2 = document.createElement("p");
    paraDiv.appendChild(para2);
    para2.innerText = `${photo.likes} likes`;
    let profileDiv = document.createElement("img");
    paraDiv.appendChild(
      profileDiv
    ).src = `${photo.user.profile_image.small}   `;
    profileDiv.classList.add("profilediv-class");
    document.querySelector(".gallery").appendChild(pic);
  });
}

function clear() {
  input.value = "";
  document.querySelector(".gallery").innerHTML = "";
}

searchbtn.addEventListener("click", (event) => {
  if (input.value === "") return;
  clear();
  search = true;
  searchPhotos(query, pagenr);
});

input.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    if (input.value === "") return;
    clear();
    search = true;
    searchPhotos(query, pagenr);
  }
});
createdPhotoes(pagenr);
