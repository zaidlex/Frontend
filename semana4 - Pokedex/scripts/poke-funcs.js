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
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;//imagen
            let pokeNom = data.forms[0].name; //Nombre del pokemon
            let pokeTipo = data.types[0].type.name; //tipo de pokemon
            let movimientos = data.moves;// movimientos del pokemon
            let estadisticas = data.stats; // estadisticas del pokemon

            pokeImage(pokeImg);
            pokeTitle(pokeNom, poketipo);
            pokeType(poketipo)
            pokeStatistics(estadisticas)
            pokeMoves(movimiento)
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeTitle = (nombrePokemon, tipoPokemon) => {
    let nombre;
    let numero;
}

const pokeType = (tipoPokemon) => {
    let tipoUno;
    let tipoDos;
}

const pokeStatistics = (estadisticasPokemon) => {
    let peso ; //entre 10 m
    let altura; // entre 10 kg
    let ps;
    let ataque;
    let defensa
    let atqEspecial;
    let DefensaEspecial;
    let vel;
}

const pokeMoves = (movimientosPokemon) => {
    
}