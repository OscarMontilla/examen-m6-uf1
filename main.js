// Datos de los coches en formato JSON
const coches = [
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: "1,500+ caballos de fuerza",
        motor: "8.0 litros W16",
        foto: "imagenes/bugatti-chiron-super-sport-300-1-1568021423.jpg"
    },
    {
        nombre: "Koenigsegg Jesko",
        potencia: "1,600+ caballos de fuerza",
        motor: "V8 de 5.0 litros",
        foto: "imagenes/koenigsegg-jesko-1626446571.jpg"
    },
    {
        nombre: "Hennessey Venom F5",
        potencia: "1,800+ caballos de fuerza",
        motor: "V8 de 6.6 litros",
        foto: "imagenes/descarga.jpg"
    },
    {
        nombre: "Rimac C_Two",
        potencia: "1,900+ caballos de fuerza",
        motor: "Eléctrico",
        foto: "imagenes/rimac.jpg"
    },
    {
        nombre: "Lamborghini Sian",
        potencia: "800+ caballos de fuerza",
        motor: "V12 híbrido",
        foto: "imagenes/lamborghini-sian-roadster.jpg"
    }
];

// Función para llenar las tarjetas de los coches
function llenarTarjetas() {
    const cochesContainer = document.querySelector("#cochesContainer");
    //Inicializo la variable con una lista vacia
    let tarjetasHTML = "";
    // Utilizo forEach para recorrer el array de coches
    coches.forEach(coche => { 
        tarjetasHTML += `
            <div class="card mb-4" style="width: 18rem;">
                <img src="${coche.foto}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${coche.nombre}</h5>
                    <p>Potencia: ${coche.potencia}</p>
                    <p>Motor: ${coche.motor}</p>
                </div>
            </div>
        `;
    });
//inyecto las tarjetas creadas en un div
    cochesContainer.innerHTML = tarjetasHTML;
}

// Función para llenar los selectores con los nombres de los coches
function llenarSelectores() {
    // Selecciona los elementos HTML con los IDs 'coche1' y 'coche2' y los asigna a las variables 'coche1Select' y 'coche2Select'
    const coche1Select = document.querySelector("#coche1");
    const coche2Select = document.querySelector("#coche2");

    // Inicializa una cadena vacía para almacenar las opciones de los select
    let selectOptionsHTML = "";

    // Itera a través del array 'coches' usando un bucle 'for' para crear las opciones de los select
    for (let i = 0; i < coches.length; i++) {
        // Agrega una opción al contenido de 'selectOptionsHTML' para cada coche en el array
        // La opción tiene un valor igual al índice del coche y muestra el nombre del coche como texto
        selectOptionsHTML += `<option value="${i}">${coches[i].nombre}</option>`;
    }

    // Asigna el contenido HTML de 'coche1Select' y 'coche2Select'
    // Agrega una opción adicional para seleccionar un coche por defecto al inicio
    coche1Select.innerHTML = '<option value="0">Selecciona un coche</option>' + selectOptionsHTML;
    coche2Select.innerHTML = '<option value="0">Selecciona un coche</option>' + selectOptionsHTML;
}


// Función para comparar coches
// Obtiene el valor seleccionado de los selectores y lo almacena en cocheindex
function compararCoches() {
    const coche1Index = document.querySelector("#coche1").value;
    const coche2Index = document.querySelector("#coche2").value;
// Accede a los objetos de coche correspondientes en el array 'coches' utilizando los índices obtenidos
    const coche1 = coches[coche1Index];
    const coche2 = coches[coche2Index];

    const tablaComparativa = `
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>${coche1.nombre}</th>
                    <th>${coche2.nombre}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Potencia</td>
                    <td>${coche1.potencia}</td>
                    <td>${coche2.potencia}</td>
                </tr>
                <tr>
                    <td>Motor</td>
                    <td>${coche1.motor}</td>
                    <td>${coche2.motor}</td>
                </tr>
            </tbody>
        </table>
    `;

    document.querySelector("#tablaComparativa").innerHTML = tablaComparativa;
}

// Función para buscar coches con más potencia que el numero que introduce el usuario
function buscarCochesPotentes() {
    // Obtiene el valor del input con el ID "potenciaInput" y lo convierte a un número entero
    const potenciaInput = parseInt(document.querySelector("#potenciaInput").value);

    // Selecciono el elemento HTML con el ID "cochesPotentes" y lo asigno a la variable 'listaCochesPotentes'
    const listaCochesPotentes = document.querySelector("#cochesPotentes");

    // Limpia cualquier contenido existente en el elemento 'listaCochesPotentes'
    listaCochesPotentes.innerHTML = '';

    // Obtiene la fecha y hora actual
    const fechaActual = new Date();

    // Muestra la hora de la consulta en el div
    document.querySelector("#momentoConsulta").textContent = fechaActual.toLocaleTimeString();

    // Inicializa una cadena de HTML para almacenar los elementos de la lista
    let cochesPotentesHTML = '';

    // Itera a través del array coches utilizando un bucle forEach
    coches.forEach(coche => {
        // Convierte la potencia del coche en un número entero al eliminar caracteres no numéricos
        const potenciaNumerica = parseInt(coche.potencia.replace(/\D/g, ''));

        // Comprueba si la potencia del coche es mayor que el valor ingresado por el usuario
        if (potenciaNumerica > potenciaInput) {
            // Agrega un elemento <li> con el nombre y la potencia del coche al contenido de 'cochesPotentesHTML'
            cochesPotentesHTML += `<li>${coche.nombre} - ${coche.potencia}</li>`;
        }
    });

    // Establece el contenido de la lista 'listaCochesPotentes' con la cadena de HTML construida
    listaCochesPotentes.innerHTML = `<ul>${cochesPotentesHTML}</ul>`;
}


// Llama a las funciones para llenar tarjetas y selectores al cargar la página
llenarTarjetas();
llenarSelectores();

// capturo el div en una variable y añado un event listener al botón de comparar
const compararBtn = document.querySelector("#compararBtn");
compararBtn.addEventListener("click", compararCoches);

// capturo el div en una variable y añado event listener al botón de buscar coches potentes
const buscarBtn = document.querySelector("#buscarBtn");
buscarBtn.addEventListener("click", buscarCochesPotentes);
