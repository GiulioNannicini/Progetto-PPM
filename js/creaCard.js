
/*
                                                <div class="col-lg-6 col-md-12" >
                                                    <hr class="lineaNera">

                                                    <div class="card border-0 my-1">
                                                        <div class="card-body py-2">
                                                            <div class="row">
                                                                <div class="col-9">
                                                                    <i class="bi bi-square-fill text-primary"> Lorem Ipsum</i>
                                                                </div>

                                                                <div class="col-3 text-end">
                                                                    <a href="#">
                                                                        <i class="bi bi-arrow-right text-primary"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <a href="#">
                                                            <img src="https://via.placeholder.com/300x160/cfcfcf/ffffff?text=Post" class="card-img rounded-0" alt="...">
                                                        </a>

                                                        <div class="card-body py-2">
                                                            <a href="#" class="text-decoration-none">
                                                                <h3 class="card-title text-dark fw-bold h6">Lorem ipsum dolor sit amet consectetur</h3>
                                                            </a>
                                                        </div>

                                                    </div>
                                                </div>

*/

let requestURL = "js/dati.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    const dati = request.response;
    dati.forEach(element => {
        console.log(element.titoloAlto);
        creaCard(element);
    });
   
}

function creaCard(dati) {
    let colonnaPrincipale = document.createElement("div"); //<div class="col-lg-6 col-md-12" >
    colonnaPrincipale.className = "col-lg-6 col-md-12";    

    let lineaNera = document.createElement("hr");         //   <hr class="lineaNera">
    lineaNera.className = "lineaNera";
    colonnaPrincipale.appendChild(lineaNera);

    let corpoCard = document.createElement("div");        //   <div class="card border-0 my-1">
    corpoCard.className = "card border-0 my-1";
    colonnaPrincipale.appendChild(corpoCard);
    
    let divDentroCorpoCard = document.createElement("div"); //        <div class="card-body py-2">
    divDentroCorpoCard.className = "card-body py-2"; 
    corpoCard.appendChild(divDentroCorpoCard);

    let divRowCardBody = document.createElement("div");     //                <div class="row">
    divRowCardBody.className = "row"; 
    divDentroCorpoCard.appendChild(divRowCardBody);

    let divCol9 = document.createElement("div");            //                      <div class="col-9">
    divCol9.className = "col-9";
    divRowCardBody.appendChild(divCol9);

    let tagI = document.createElement("i");                //                               <i class="bi bi-square-fill text-primary"> Lorem Ipsum</i>
    tagI.className = "bi bi-square-fill text-primary";
    tagI.appendChild(document.createTextNode(dati.titoloAlto));
    divCol9.appendChild(tagI);

    let divCol3 = document.createElement("div");         //                          <div class="col-3 text-end">
    divCol3.className = "col-3 text-end";
    divRowCardBody.appendChild(divCol3);

    let LinkA1 = document.createElement("a");           //                                    <a href="#">
    LinkA1.href = "#";
    divCol3.appendChild(LinkA1);

    let iDentroLinkA1 = document.createElement("i");    //                                             <i class="bi bi-arrow-right text-primary"></i>
    iDentroLinkA1.className = "bi bi-arrow-right text-primary";
    LinkA1.appendChild(iDentroLinkA1);

    let linkImg = document.createElement("a");          //      <a href="#">      
    linkImg.href = "#";
    corpoCard.appendChild(linkImg);

    let immagine = document.createElement("img");       //             <img src="https://via.placeholder.com/300x160/cfcfcf/ffffff?text=Post" class="card-img rounded-0" alt="...">  
    immagine.src = dati.img;
    immagine.className = "card-img rounded-0";
    immagine.alt = "immagine articolo";
    linkImg.appendChild(immagine);

    let divContenuto = document.createElement("div");
    divContenuto.className = "card-body py-2";
    corpoCard.appendChild(divContenuto);

    let linkContenuto = document.createElement("a");
    linkContenuto.href = "#";
    linkContenuto.className = "text-decoration-none";
    divContenuto.appendChild(linkContenuto);

    let contenuto = document.createElement("h6");
    contenuto.className = "card-title text-dark fw-bold";
    contenuto.appendChild(document.createTextNode(dati.titoloArticolo));
    linkContenuto.appendChild(contenuto);


    document.getElementById("rowContainerArticoli").appendChild(colonnaPrincipale);

}