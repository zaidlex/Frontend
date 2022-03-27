<template>
    <div class="pasteleria">    
        <div class="center">
            <h2>Pastelería Pantheon el panadero</h2>
            <i>"Siempre quice ser panadero." pantheon</i>
            <br>
            <img id="pantheon" alt="imagen pantheon panadero feliz" width="196" eigth="196" srcset="" src="https://64.media.tumblr.com/eedf2eb5e02a5e0fd94b6ffd5b4678d3/tumblr_pvo5avG7Og1vo6vclo10_400.png">
        </div>
        <br>

        <!--Sabores de los pasteles-->
        <div class="sabores">
            <h3 class="title">Sabores disponibles para los pasteles por tan sólo $40.00 pesos mxn!.</h3>
            <ul class="lista">
                <li>Vainilla</li>
                <li>Chocolate</li>
                <li>Fresa</li>
                <li>Durazno</li>
                <li>Limon</li>
            </ul>
        </div>
        <br><br>

        <!--Diseños de los pasteles-->
        <div class="disenos">
            <h3 class="title" >Diseños que se les puede colocar al pastel.</h3>
            <table class="tablaDisenos">
                <tr>
                    <td><img src="https://lh6.googleusercontent.com/-S1Qa5nGH62U/VRBCLcrQvDI/AAAAAAABsLA/qzq8cPMQzkw/s800/DSC05808.JPG" alt="La monarca"></td>
                    <td>La monarca.</td>
                </tr>
                <tr>
                    <td><img src="https://m.media-amazon.com/images/I/712zHoGantL._AC_SX466_.jpg" alt="Rosetón amarillo y rosa"></td>
                    <td>Rosetón amarillo y rosa.</td>
                </tr>
                <tr>
                    <td><img src="https://image.winudf.com/v2/image1/Y29tLkJpcnRoZGF5Q2FrZS5QYXBhdGhfc2NyZWVuXzRfMTU0NzM1MDA0N18wODg/screen-4.jpg?fakeurl=1&type=.jpg" alt="Frutal"></td>
                    <td>Frutal.</td>
                </tr>
            </table>
            <br><br>
            <div>
                <a href="./PasteleriaCompra.html">
                    <button class="botonPedir" id="pedido">Hacer pedido</button>
                </a>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePasteleria',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pasteleria {
    margin: auto;    
}

#pantheon {
    border-radius: 30px;
    border: 1px solid blue;
    padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
    max-width: 80%;
    min-width: 40%;
    height: auto;
}
td {
    font-size: 25px;
    display:inline-block;
    padding: 5px;
}
tr {
    background-color: rgb(238,208,157,0.6);
    border: 3px #E2B05A solid;
    border-radius: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    display: block;
}

.title {
    font-weight:800;
    font-family: 'Times New Roman', serif;    
}

.sabores {
    background-color: rgb(238,208,157,0.6);
    padding: 7px;
    border-radius: 30px;
    margin-left: 10%;
    margin-right: 10%;
}

.disenos {
    background-color: rgb(248,211,137,0.6);
    margin-bottom: 30px;
    margin-left: 10%;
    margin-right: 10%;
    padding: 7px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 30px;
}

.tablaDisenos {
    padding: 20px;
    margin: auto;
}

.botonPedir {
    background-color: rgb(248,211,137,0.6);
    font-size: 25px;
    border-radius: 4px;
}
</style>
