const { Toast } = require("ngx-toastr");

function obtenerPokemon() {
    const nombre = document.getElementById("nombre").value;//recojo nombre con el id
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;//url con la que voy a trabajar y recojo el nombre que se escribe en  el input


    fetch(url)// realiza una http a la variable url que devuelve una promesa

    .then((response) => {
        if (!response) {//repuesta de cualquier estado distinto de 200
            alert("pokemon no encontrado")
            return;//este return frena la secuancia en caso de respuesta erronea

        } else {
            return response.json() //la respuesta valida se convierte a formato json
        }
    })
    .then((data) => {// este the se ejecuta si la respesta es valida
        if (data) { //data son los datos que ha recopilado de la api y verifica el if que sean correctos

            const nombrePokemon = data.name; //se guarda el nombre del pokemon en la variable nombrePokemon

            const imagenPokemon = data.sprites.front_default;  // se guarda la imagen. la obtengo en la web mirando la direccion url con un nombre de un pokemon...
            // .........la parte de sprites, front_default estan las imagenes
           
            const habilidadesPokemon = [];
            for (let habilidad of data.abilities) {
                habilidadesPokemon.push(habilidad.ability.name)
    }


           
            mostrarPokemon(nombrePokemon, imagenPokemon, habilidadesPokemon)//mostramos todos los datos
        }
    })
    .catch((error) => {
          alert("Error al buscar el pokemon:", error);
    });

}


function mostrarPokemon(nombre, imagen, habilidades) {
    const contenedor = document.querySelector(".container");

    // https://www.youtube.com/watch?v=myxPDjhHAVA&t=880s  / ESTE VIDEO APRENDI LO DE LAS COMILLAS INVERTIDAS Y VARIOS TEMAS MAS

    contenedor.innerHTML = `<h2>${nombre}</h2>`;

    
    contenedor.innerHTML += `<img src="${imagen}" alt="${nombre}">`;

   
    let habilidadesHTML = "<ul>";

    habilidades.forEach(habilidad => {
        habilidadesHTML += `<li>${habilidad}</li>`;
    })

    habilidadesHTML += "</ul>";

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
