async function loadAlmoco(){

    var data = await fetch("almoco.json").then(response=>response.json());
    console.log(data);
    var div = document.getElementById("almoco");

    data.forEach(e => {
        
        var divMenor = document.createElement("div");
        divMenor.setAttribute("class","ele");

        var nome = document.createElement("p");
        nome.innerHTML = e.nome;
        divMenor.appendChild(nome);

        var preco = document.createElement("p");
        preco.innerHTML = "R$: " + e.preco.toFixed(2);
        divMenor.appendChild(preco);

        var img = document.createElement("img")
        img.src=e.img;
        divMenor.appendChild(img)

        div.appendChild(divMenor)

    });

}

async function loadJanta(){

    var data = await fetch("janta.json").then(response=>response.json());
    console.log(data);
    var div = document.getElementById("janta");

    data.forEach(e => {
        
        var divMenor = document.createElement("div");
        divMenor.setAttribute("class","ele");

        var nome = document.createElement("p");
        nome.innerHTML = e.nome;
        divMenor.appendChild(nome);

        var preco = document.createElement("p");
        preco.innerHTML = "R$: " + e.preco.toFixed(2);
        divMenor.appendChild(preco);

        var img = document.createElement("img")
        img.src=e.img;
        divMenor.appendChild(img)

        div.appendChild(divMenor)

    });

}

async function loadBebSob(){

    var data = await fetch("bebSob.json").then(response=>response.json());
    console.log(data);
    var div = document.getElementById("bebSob");

    data.forEach(e => {
        
        var divMenor = document.createElement("div");
        divMenor.setAttribute("class","ele");

        var nome = document.createElement("p");
        nome.innerHTML = e.nome;
        divMenor.appendChild(nome);

        var preco = document.createElement("p");
        preco.innerHTML = "R$: " + e.preco.toFixed(2);
        divMenor.appendChild(preco);

        var img = document.createElement("img")
        img.src=e.img;
        divMenor.appendChild(img)

        div.appendChild(divMenor)

    });

}

function loadData(){

    loadAlmoco();
    loadJanta();
    loadBebSob();

}

document.querySelectorAll(".toggle").forEach((element)=>addEventListener("click",(e)=>{

    var divAtual = e.target.parentElement;
    /* var divPai = divAtual.querySelector(".acordeon");
    console.log(divPai); */

    if(divAtual.classList.contains("acordeon")){

        divAtual.classList.toggle("load");

    }else{

         
        divAtual = divAtual.parentElement;
        divAtual.classList.toggle("load");

    }
    

}))