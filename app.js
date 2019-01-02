 const contenido = document.querySelector('#principal')

 page2=()=>{
     fetch('pokemon.json')
     .then (data=> data.json())
     .then(data => {
        pageTwo(data)
        
     })
    }
  pageTwo=(data) =>{
    //principal.innerHTML = "";
    if (Array.isArray(data.pokemon)) {
        for (let valor of data.pokemon) {
            console.log(valor.name)
            principal.innerHTML += `
                       
                    <div class="col-md-2">
                        <div class="card mb-2 shadow-sm">
                            <img class="card-img-top" src="${valor.img}" alt="Card ${valor.name}">
                            <div class="d-flex justify-content-between align-items-center">
                                <button type="button" class="btn btn-sm btn-outline-dark w-100">${valor.name}</button>
                            </div>
                        </div>
                     </div>`
        }
    }
  }
 function click1() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
            const result = data.pokemon.filter(elemento => {
                return elemento.type.indexOf ("Grass") !== -1;
            })
                grass (result)
            }
            )}
  grass = (result) => {
      principal.innerHTML = "";
      if (Array.isArray(result)) {
          for (let valor of result) {
              console.log(valor.name)
              principal.innerHTML += `
                <div class = "col-md-2">
                  <div class = "card mb-2 shadow-sm">
                  <img class = "card-img-top" src = "${valor.img}"alt = "Card  ${valor.name}">
                  <div class = "d-flex justify-content-between align-items-center">
                  <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                  </div> 
                 </div> 
             </div> `
          }
      }
  }

function click2() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
            const result = data.pokemon.filter(elemento => {
                return elemento.type.indexOf ("Poison") !== -1;  
                })
               poison(result)
            }
        )}
    poison = (result) => {
     principal.innerHTML = "";
        if (Array.isArray(result)) {
             for (let valor of result) {
                console.log(valor.name)
                principal.innerHTML += `
                      <div class = "col-md-2">
                        <div class = "card mb-2 shadow-sm">
                        <img class = "card-img-top" src = "${valor.img}"alt = "Card Pidgeotto">
                        <div class = "d-flex justify-content-between align-items-center">
                        <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                        </div> 
                       </div> 
                   </div> `
                }
            }
        }
function click3() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
            const result = data.pokemon.filter(elemento => {
                return elemento.type.indexOf ("Fire") !== -1;
                   
                })
               fire (result)
            }    
         )}
         
 fire = (result) => {
            principal.innerHTML = "";
               if (Array.isArray(result)) {
                    for (let valor of result) {
                       console.log(valor.name)
                       principal.innerHTML += `
                             <div class = "col-md-2">
                               <div class = "card mb-2 shadow-sm">
                               <img class = "card-img-top" src = "${valor.img}"alt = "Card Pidgeotto">
                               <div class = "d-flex justify-content-between align-items-center">
                               <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                               </div> 
                              </div> 
                          </div> `
                       }
                   }
               }
         
 

 /*filtro = (data) => {
     
   const result = data.pokemon.filter(elemento => {
     return elemento.type.indexOf ("Grass") !== -1;
        
     })
     console.log(result)

 }
*/
 function orderA() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
              const resultOrden = data.pokemon.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } if (a.name < b.name) {
                        return -1;
                    } return 0;
                });
                aOrder(resultOrden)
            }
         )} 
 aOrder = (resultOrden) => {
    principal.innerHTML = "";
    if (Array.isArray(resultOrden)) {
    for (let valor of resultOrden){
        console.log(valor.name)
        principal.innerHTML +=`
        <div class = "col-md-2">
        <div class = "card mb-2 shadow-sm">
        <img class = "card-img-top" src = "${valor.img}"alt = "Card Pidgeotto">
        <div class = "d-flex justify-content-between align-items-center">
        <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
        </div> 
       </div> 
   </div> `
        
 }
}}

 function orderZ() {
    fetch('pokemon.json')
        .then(data => data.json())
        .then(data => {
              const resultOrden2 = data.pokemon.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    } if (a.name > b.name) {
                        return -1;
                    } return 0;
                });
                zOrder(resultOrden2)
            }
            )}
    zOrder = (resultOrden2) => {
                principal.innerHTML = "";
                if (Array.isArray(resultOrden2)) {
                for (let valor of resultOrden2){
                    console.log(valor.name)
                    principal.innerHTML +=`
                    <div class = "col-md-2">
                    <div class = "card mb-2 shadow-sm">
                    <img class = "card-img-top" src = "${valor.img}"alt = "Card Pidgeotto">
                    <div class = "d-flex justify-content-between align-items-center">
                    <button type = "button" class = "btn btn-sm btn-outline-dark w-100"> ${valor.name} </button> 
                    </div> 
                   </div> 
               </div> `
                    
             }
            }}
