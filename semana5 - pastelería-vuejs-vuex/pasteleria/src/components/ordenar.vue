<template>
    <h2 class="title">Crea tu propio pastel con tus sabores deseados y los diseños que tu escojas.</h2>
    <br>
    <!--Formulario para realizar pedido-->
    <form action="" method="post">
        <!--checkbox para escoger sabores-->
        <div class="sabores">
        <label class="labelTitle" for="saboresInput">Escoge los sabores de tu pastel.</label> <br>
        <input type="checkbox" name="SabVainilla" id="SabVainilla" value="vainilla"> Vainilla
        |
        <input type="checkbox" name="SabChocolate" id="SabChocolate" value="chocolate"> Chocolate
        |
        <input type="checkbox" name="SabFresa" id="SabFresa" value="fresa"> Fresa
        |
        <input type="checkbox" name="SabDurazno" id="SabDurazno" value="durazno"> Durazno 
        |
        <input type="checkbox" name="SabLimon" id="SabLimon" value="limon"> Limon
        </div>
        <br><br>

        <!--checkbox para escoger diseños-->
        <div class="disenos">
            <label class="labelTitle" for="disenosInput">Escoge los diseños de tu pastel.</label>
            <br>
            <ul>
                <li>
                    <input type="checkbox" class="boxDisenos" name="DisMonarca" id="DisMonarca" value="monarca"><img width="200" height="160" src="@/assets/LaMonarca.jpg" alt="La monarca">
                </li>
                <br>
                <li>
                    <input type="checkbox" class="boxDisenos" name="DisRoseton" id="DisRoseton" value="roseton"><img width="200" height="160" src="@/assets/RosetonAmarilloRosa.jpg" alt="Rosetón amarillo y rosa">
                </li>
                <br>
                <li>
                    <input type="checkbox" class="boxDisenos" name="DisFrutal" id="DisFrutal" value="frutal"><img width="200" height="160" src="@/assets/Frutal.jpg" alt="Frutal">
                </li>
            </ul>
            
            <br>
            <span class="nota">*Nota: al escoger 2 o más diseños, el pastel se dividirá en partes iguales.</span>
        </div>
        <br><br>

        <!--Datos del cliente-->
        <div class="datos">
            <h2 class="labelTitle">Para poder concluir el pedido, por favor llenar la siguiente información.</h2>
            <div class="inputDatos">
                <label for="Nombre">Nombre:</label>
                <input type="text" name="Nombre" id="Nombre" placeholder="Obligatorio">
            </div>
            <br>
            <div class="inputDatos">
                <label for="Telefono">Teléfono:</label>
                <input type="tel" name="Telefono" id="Telefono" placeholder="Obligatorio">
            </div>
            <br>
            <div class="inputDatos">
                <label for="Correo">Correo electronico:</label>
                <input type="email" name="Correo" id="Correo" placeholder="Obligatorio">
            </div>
        </div>
        <div class="botones" >
            <input type="reset" class="boton" value="Limpiar pedido">
            <input type="submit" class="boton" value="Comprar">
        </div>
        
    </form>
</template>

<script>
export default {
    name: "ordenar",
    props: {

    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
    display: inline-block;
    margin: 10px;
    align-content: center;
  
}
input[type=checkbox] {
    transform: scale(1.5);
}
.labelTitle {
    font-size: 18px;
    font-family: "Georgia", serif;
}

.boxDisenos{
    margin: 10px;
}

.nota {
    font-size: 12px;
    text-align: right;
}

.datos {
    background-color: rgb(212,172,104,0.6);
    margin-left: 10%;
    margin-right: 10%;
    padding: 7px;
    border-radius: 30px;
}

.inputDatos {
    padding: 5px;
    font-size: 20px;
}

input [type=text] {
    margin: 10px;
}

.botones {
    margin: 10px;
    padding: 10px;
}
.boton {
    background-color: rgb(248,211,137,0.6);
    font-size: 20px;
    border-radius: 4px;
    margin: 20px;
}
</style>