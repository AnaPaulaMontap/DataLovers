 const contenido = document.querySelector('#contenido')

 function click1() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
             //filtro(data)
             //tipos(data.pokemon.type) ;
              console.log(data.pokemon.type)


         })
 }
/*
 filtro = (data) => {
     const result = data.pokemon.filter(elemento => {
         return elemento.type.indexOf ("Grass") !== -1;
     })
     console.log(result)

 }

 function click2() {
     fetch('pokemon.json')
         .then(data => data.json())
         .then(data => {
             orden(data)


         })
 }
 orden = (data) => {

     const resultOrden = data.pokemon.sort((a, b) => {
         if (a.name > b.name) {
             return 1;
         } if (a.name < b.name) {
             return -1;
         } return 0;
     });
     console.log(resultOrden)
 }
 function click3() {
    fetch('pokemon.json')
        .then(data => data.json())
        .then(data => {
            orden2(data)
            //tipos(data.pokemon.type) ;
            // console.log(type)


        })
}
orden2 = (data) => {

    const resultOrden2 = data.pokemon.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        } if (a.name > b.name) {
            return -1;
        } return 0;
    });
    console.log(resultOrden2)
}*/