
document.getElementById("select-type-pokemon").addEventListener("change",(evento)=>{
    evento.preventDefault();
    let type = document.getElementById("select-type-pokemon").value;
    fetch ("data/pokemon/pokemon.json")
      .then(data1 => data1.json())
      .then(data1 => { 
        tabla(pokemones.filterData(data1.pokemon,type))
   })
  })
  
  const contenido = document.querySelector("#contenido")
    fetch ("data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data => {
        tabla(data)
     })
  
    function tabla(data){
      contenido.innerHTML="";
        if (Array.isArray(data)){
          for (let valor of data){
            //console.log(valor.img)
            contenido.innerHTML +=`
              <div class="col s6 m3">
                <div class="card">
                  <div class="card-image">
                    <img class="responsive-img" src= "${valor.img}">
                  </div>
                  <div class="card-content">
                    <p>#${valor.num}</p>
                    <span class="card-title">${valor.name}</span>
                    <p>${valor.type}</p>
                  </div>
                </div>
              </div> 
            `
        }
        }else{
        for (let valor of data.pokemon){
          //console.log(valor.img)
          contenido.innerHTML +=`
            <div class="col s6 m3">
              <div class="card">
                <div class="card-image">
                  <img class="responsive-img" src= "${valor.img}">
                </div>
                <div class="card-content">
                  <p>#${valor.num}</p>
                  <span class="card-title">${valor.name}</span>
                  <p>${valor.type}</p>
                </div>
              </div>
            </div> 
          `
        } 
        }
    }
    document.getElementById("option-order").addEventListener("change", () => {
      contenido.innerHTML = "";
      if (document.getElementById("option-order").value === "az" || document.getElementById("option-order").value === "za"){
        fetch ("data/pokemon/pokemon.json")
        .then(data => data.json())
        .then(data=>{
   
          for (let valor of pokemones.sortData(data.pokemon,"name",document.getElementById("option-order").value)){
            //console.log(valor.img)
            contenido.innerHTML +=`
              <div class="col s6 m3">
                <div class="card">
                  <div class="card-image">
                    <img class="responsive-img" src= "${valor.img}">
                  </div>
                  <div class="card-content">
                    <p>#${valor.num}</p>
                    <span class="card-title">${valor.name}</span>
                    <p>${valor.type}</p>
                  </div>
                </div>
              </div>
            `
      }
    })
   }
   if (document.getElementById("option-order").value === "small-big" || document.getElementById("option-order").value === "big-small"){
    fetch ("data/pokemon/pokemon.json")
    .then(data => data.json())
    .then(data=>{
   
      for (let valor of pokemones.sortData(data.pokemon,"num",document.getElementById("option-order").value)){
        //console.log(valor.img)
        contenido.innerHTML +=`
          <div class="col s6 m3">
            <div class="card">
              <div class="card-image">
                <img class="responsive-img" src= "${valor.img}">
              </div>
              <div class="card-content">
                <p>#${valor.num}</p>
                <span class="card-title">${valor.name}</span>
                <p>${valor.type}</p>
              </div>
            </div>
          </div>
        `
   }
   })
   }
   })
  