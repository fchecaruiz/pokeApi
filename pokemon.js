
function obtenerPokemon() {
    const nombre = document.getElementById("nombre").value;//recojo nombre con el id
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;//url con la que voy a trabajar y recojo el nombre que se escribe en  el input


    fetch(url)// realiza una http a la variable url que devuelve una promesa

    .then((response) => {
        if (!response) {//si la repuesta es invalida , salta el alert
            alert("pokemon no encontrado")
        }
    console.log("Respuesta valida ", response);  // se imprime la respuesta completa
    return response.json(); // se convierte a formato json si la respuesta es valida

})

    .then((data) => {// este the se ejecuta si la respesta es valida
        console.log(data)// compruebo en consola los datos convertidos a json
        // al verlos en consola, observo como puedo acceder a eos datos , data.name, data.sprites......etc....
        if (data) { //data son los datos que ha recopilado de la api y verifica el if que sean correctos

            const nombrePokemon = data.name; //se guarda el nombre del pokemon en la variable nombrePokemon

            const imagenPokemon = data.sprites.front_default;  // se guarda la imagen. la obtengo en la web mirando la direccion url con un nombre de un pokemon...
            // .........la parte de sprites, front_default estan las imagenes
           
            const habilidadesPokemon = [];// las habilidades estan en un array, y hay que recorrer ese arrya para seleccionar el pokemon de esa url
            for (let habilidad of data.abilities) {// hago un for of que es el mas facil para mi en este caso
                habilidadesPokemon.push(habilidad.ability.name)
    }


           
            mostrarPokemon(nombrePokemon, imagenPokemon, habilidadesPokemon)//mostramos todos los datos
        }
    })
    .catch((error) => {
          alert("Error al buscar el pokemon:", error);
    });

}


function mostrarPokemon(nombre, imagen, habilidades) {//selecciono .container para mostrar todos los datos en la vista
    const contenedor = document.querySelector(".container");

    // https://www.youtube.com/watch?v=myxPDjhHAVA&t=880s  / ESTE VIDEO APRENDI LO DE LAS COMILLAS INVERTIDAS Y VARIOS TEMAS MAS

    contenedor.innerHTML = `<h1>${nombre}</h1>`;// con innerHtml cambiamos a traves del Dom todos los datos de la vista

    
    contenedor.innerHTML += `<img src="${imagen}" alt="${nombre}">`;

   
    let habilidadesHTML = "<ul>";// abrimos lista 
    for (let habilidad of habilidades) {
        habilidadesHTML += `<li>${habilidad}</li>`;
    }

    habilidadesHTML += "</ul>";// cerrramos lista 

    contenedor.innerHTML += habilidadesHTML;
}














































// class Pokemon { 
//     constructor(nombre, imagen, habilidades) 
//     {   this.nombre = nombre; 
//         this.imagen = imagen; 
//         this.habilidades = habilidades;
//     }
// }

// function postPokemon()
// {

//     let pokemon = new Pokemon (document.getElementById("nombre").value)

//     const url = "https://pokeapi.co/api/v2/pokemon";

//     if (validateHeaderName(user))
//     {

//     let param = 
//     {
//         headers: {"content-type": "aplication/json; charset=UTF-8"},
//         body : JSON.stringify(pokemon),
//         metodo:"POST",
//     }

//     fetch (url,param)

//     .then(function(data)
//     {
//       return data.json();
//     })

//     .then(function(result)
//     {
//         if(result.error)
//             showToast("error: " + result.mensaje)
//         else 
//             showToast("usuario creado crrectamente")

//             console.log(result)
//     })

//     .catch(function(error)
//     {
//         console.log(error)
//     })
        
        
//     }
// }



















// const boton = document.getElementById('enviar');

// boton.addEventListener('click', function() {
//     const nombrePokemon = document.getElementById('nombre').value;
//     obtenerDatosPokemon(nombrePokemon);
// });

// function obtenerDatosPokemon(name) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//         .then(respuesta => {
//             if (!respuesta.ok) {
//                 throw new Error('Pokemon no encontrado');
//             }
//             return respuesta.json();
//         })
//         .then(datos => {
//             console.log(datos); // Aquí puedes manejar los datos del Pokémon
//         })
//         .catch(error => {
//             console.error('Error al obtener datos del Pokémon:', error);
//         });
// }
