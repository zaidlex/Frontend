/*Tiene que mostrar 
Nombre
Imágen
Tipo de pokemón
Estadísticas
Movimientos
 */

// Api https://pokeapi.co
//rango de pokemons pokemon?limit=100&offset=200.
//numero de pokemon y nombre de pokemon
// pokemon/ditto, pokemon/1

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;//api
    
    fetch(url).then((res) => { // obtiene el resultado
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/psyduck confuso.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.other.home.front_default;//imagen
            let pokeNom = data.forms[0].name; //Nombre del pokemon
            let pokeNumero = data.id; //Número del pokemon
            let pokeTipo = data.types; //tipo de pokemon
            let movimientos = data.moves;// movimientos del pokemon
            let estadisticas = data.stats; // estadisticas del pokemon
            let weight = data.weight;
            let height = data.height;

            pokeImage(pokeImg);
            pokeTitle(pokeNom, pokeNumero);
            pokeType(pokeTipo)
            pokeStatistics(weight, height, estadisticas)
            pokeMoves(movimientos)
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeTitle = (nombrePokemon, tipoPokemon) => { 
    document.getElementById('pokemonTitleName').textContent = nombrePokemon;
    document.getElementById('pokeNumber').textContent = "N.°" + tipoPokemon;
}

const pokeType = (tipoPokemon) => {
    let tiposPokemon = "";
    tipoPokemon.forEach(element => {
        tiposPokemon += element.type.name + " ";
    });
    document.getElementById('poketipo').textContent = tiposPokemon;
}

const pokeStatistics = (weight, height, estadisticasPokemon) => {
    document.getElementById('Peso').textContent ="Peso: "+ (weight/10) + "kg";
    document.getElementById('Altura').textContent ="Altura: "+ (height/10)+ "m";
    document.getElementById('PS').textContent = "PS: "+ estadisticasPokemon[0].base_stat;
    document.getElementById('Ataque').textContent ="Ataque: "+ estadisticasPokemon[1].base_stat;
    document.getElementById('Defensa').textContent ="Defensa: "+ estadisticasPokemon[2].base_stat;
    document.getElementById('AtaqueEspecial').textContent ="At. Especial: "+ estadisticasPokemon[3].base_stat;
    document.getElementById('DefensaEspecial').textContent ="Def. especial: "+ estadisticasPokemon[4].base_stat;
    document.getElementById('Velocidad').textContent ="Velocidad: "+ estadisticasPokemon[5].base_stat;
}

const pokeMoves = (movimientosPokemon) => {
    let listaMovimientos = document.getElementById("ListaMovimientos");
    let movimiento;
    movimientosPokemon.forEach(movimientos => {
        movimiento = document.createElement("li");
        movimiento.appendChild(document.createTextNode(movimientos.move.name));
        listaMovimientos.appendChild(movimiento); 
    });
}

/* Evento para buscar pokemon al pulsar enter*/
document.getElementById("pokeName")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.key === 'Enter') {
    document.getElementById("buscarPokemon").click();
}
});

/* Paginación de pokemon */

const paginacion =() => {
    let min = document.getElementById("rangoPokemonsMin").value;
    let max = document.getElementById("rangoPokemonsMax").value;
    let limit = max - min;
    let err = document.getElementById("errorPaginacion");

    if (min > max) {        
        err.hidden = false;
        return null;
    }
    err.hidden = true;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${min}`;
    fetch(url).then((res) => { // obtiene el resultado
        if (res.status != "200") {
            console.log(res);
            //error al cargar los pokemons
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokemons = data.results;
            pokemons.forEach(pokemon => {
                let info = getImagenNumero(pokemon.url, pokemon.name);
            });
        }
    });
}


const getImagenNumero = (url, pokeNom) =>{
    fetch(url).then((res) => { // obtiene el resultado
        if (res.status != "200") {
            console.log(res);
            let pokeImg = "./images/psyduck confuso.gif";//imagen
            let pokeNumero = "0000"; //Número del pokemon
            paginacionItem(pokeImg, pokeNom, pokeNumero);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let pokeImg = data.sprites.other.home.front_default;//imagen
            let pokeNumero = data.id; //Número del pokemon
            paginacionItem(pokeImg, pokeNom, pokeNumero);
        }
    });
}

const paginacionItem = (imagen, nombre, numero) => {
    let listaPokemons = document.getElementById("listaPokemonsPag");

    pokemon = document.createElement("div");
    pokemon.classList.add("PokePag")

    let img = document.createElement("img");
    img.width = 150;
    img.height = 150;
    img.src = imagen;
    let nom = document.createElement("h2");
    nom.textContent = nombre;
    let num = document.createElement("h4");
    num.textContent = numero; 
    
    pokemon.appendChild(img);
    pokemon.appendChild(nom);
    pokemon.appendChild(num);

    listaPokemons.appendChild(pokemon);
}