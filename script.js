//creating dummy variables to store the details;
let resultNames = [];
let nameresults = [];
// //creating an array for adding numbers in a page
// let countList = new Array();
// //creating an array for adding number of pagess
// let addPageList = new Array();
// let presentPage = 1;
// let countPerEachPage = 10;
// let countOfPages = 0;

//fetching the data from API
const pokemonNames = async () => {
    //Using Try/catch to fetch the data and avoiding errors
    try{
        const request =  fetch("https://pokeapi.co/api/v2/pokemon/?limit=80");
        request.then((response)=>response.json())
        .then((data) => {
            console.log(data);
            resultNames = data.results;
            showDetails(resultNames);   //displaying the names on the webpage
        });
    }
    catch{
        console.error(error);
    }
}
pokemonNames();

let showDetails = (arr) => {

    //making an array of keys of the object
    const keyarr = Object.keys(arr);

    nameresults = keyarr.map((key) => {
        const value = arr[key];

        let card = document.createElement("div");
        let header = document.createElement("div");
        let body = document.createElement("div");
        header.classList.add("fs-5", "text-center", "fw-bold")
        header.innerHTML = `${value.name}`;

        body.classList.add("d-flex", "flex-column", "text-center")

        card.type = "div";
        card.classList.add("card", "d-flex", "flex-column", "m-5", "text-center", "justify-content-around", "shadow");
        card.setAttribute("id", "card");
        card.style.width = "10rem";
        card.style.height = "10rem";

        let btn = document.createElement("div");
        btn.type = "button";
        btn.textContent = "click";
        btn.style.color = "white";
        btn.style.backgroundColor = "#326789";
        btn.classList.add("btn", "btn-warning","fw-bold","border");

        let links = document.createElement("a");
        links.type = "a";
        links.setAttribute("href", `./Detailspage/index.html?id=${value.name}`);


        // let next = document.createElement("button");
        // next.type="div";
        // next.classList.add("btn","btn-primary");
        // next.innerHTML = ` <button class="btn btn-primary" id="next">next</button>
        // </div>`
        // next.setAttribute("id","next")
        // next.textContent = "next";

        // let prev = document.createElement("button");
        // prev.type="div";
        // prev.classList.add("btn","btn-primary");
        // prev.innerHTML = `<button class="btn btn-primary" id="prev">prev</button>`
        // prev.setAttribute("id","prev")
        // prev.textContent = "prev";

        links.append(btn);
        body.append(links);
        card.append(header, body);
        document.body.append(card);
        return value;

    })
    // console.log(typeof(nameresults));
    
    // const pdiv = document.getElementById("paginationDiv");
    // const noOfPages = Math.ceil(nameresults.length/10);
    // console.log(nameresults.length);
    // console.log(noOfPages);
    
    // for(let i =1 ;i<noOfPages;i++){
    //     let li = document.createElement("li");
    //     li.innerHTML += `<a class="page-link" href="#">${i}</a>`;
    //     // console.log(li);
    //     pdiv.append(li);

    //     li.addEventListener("click", ()=>{
    //         const pageData = nameresults.slice((i-1)*10, i*10);
    //         // console.log(pageData);
    //         document.querySelector("#card").innerHTML = "";
    //         pageData.map((element)=> createRow(element)); //to update
    //     });
    // }
    // const firstTenUsers = nameresults.slice(0,10);
    // firstTenUsers.map((element)=> createRow(element)); //to update
    // function createRow(value){
    //     document.querySelector("#card").innerHTML = `<div class="card d-flex flex-column m-3 text-center justify-content-around shadow" id="card" style="width: 10rem; height: 10rem; background-color: wheat;"><div class="fs-5 text-center fw-bold">${value.name}</div><div class="d-flex flex-column text-center"><a type="a" href="./Detailspage/index.html?id=charizard" target="_blank"><div class="btn btn-primary">click</div></a></div></div>`
    // };

}

