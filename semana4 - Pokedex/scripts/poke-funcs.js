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
            let pokeNumero = data.id; //Nombre del pokemon
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
console.log("Event  ")
event.preventDefault();
if (event.key === 'Enter') {
    document.getElementById("buscarPokemon").click();
}
});

/* Paginación de pokemon */

const paginacion =() => {
    let min = document.getElementById("rangoPokemonsMin").value;
    let max = document.getElementById("rangoPokemonsMax").value;
    
    if (min > max) {
        alert('Rango de pokemons incorrecto');
        return null;
    }

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${min}&offset=${max}`;
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
            console.log(data);
        }
    });
}