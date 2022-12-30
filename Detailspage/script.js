const id = new URLSearchParams(location.search).get("id");
let results = [];
const details = async ()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        results = data;
        
        const keyarr = Object.keys(results.moves);
        // console.log(keyarr);        
        
        const final = keyarr.map((key)=>{
            const value = results.moves[key];
            return value.move.name;
        })
        
        const keyarr2 = Object.keys(results.abilities);
        console.log(keyarr2);

        const abilities = keyarr2.map((key)=>{
            const value = results.abilities[key];
            return value.ability.name;
        })
        console.log(abilities);

        let card = document.createElement("div");
        let header = document.createElement("div");
                
        header.innerHTML = id;
        header.classList.add("fs-5","text-center","fw-bold","fs-1");

        let body = document.createElement("div");
        body.classList.add("d-flex","flex-column","text-start","m-3","fs-6")

        card.type="div";
        card.classList.add("card","d-flex","flex-column","mx-auto","text-center","justify-content-center");
        card.style.width = "30rem";
        card.style.height = "70rem";

        let photo = document.createElement("div");
        photo.type="div";
        photo.classList.add("d-flex","flex-col","justify-content-start");
        
        let frontDefault = document.createElement("img");
        frontDefault.type="img";
        frontDefault.classList.add("img-fluid","col");
        frontDefault.setAttribute("src",`${results.sprites.front_default}`);
        frontDefault.setAttribute("width","350rem");
        frontDefault.setAttribute("height","auto");

        let rearDefault = document.createElement("img");
        rearDefault.type="img";
        rearDefault.classList.add("img-fluid","col");
        rearDefault.setAttribute("src",`${results.sprites.back_default}`);
        rearDefault.setAttribute("width","350rem");
        rearDefault.setAttribute("height","350rem");

        photo.append(frontDefault,rearDefault);

        let weight = document.createElement("div");
        weight.type = "div";
        weight.classList.add("col","m-3")
        weight.innerHTML = `<b>Weight</b>: &nbsp ${results.weight} pounds`;

        let ability1 = document.createElement("div");
        ability1.type = "div";
        ability1.classList.add("m-3")
        ability1.innerHTML = `<b>Abilities</b>: &nbsp ${abilities.join(" , ")} dm`;

        let height = document.createElement("div");
        height.type = "div";
        height.classList.add("m-3")
        height.innerHTML = `<b>Height</b>: ${results.height} dm`;

        let species_name = document.createElement("div");
        species_name.type = "div";
        species_name.classList.add("m-3")
        species_name.innerHTML = `<b>Species Name</b> : &nbsp ${results.species.name}`;

        let moves = document.createElement("div");
        moves.type = "div";
        moves.classList.add("p-3","text-start");
        moves.innerHTML = `<b>Moves</b>: ${final.join(" , ")}`;

        body.append(photo,weight,height,ability1,species_name,moves);    
        card.append(header,body);
        document.body.append(card);

    });
}
details();

