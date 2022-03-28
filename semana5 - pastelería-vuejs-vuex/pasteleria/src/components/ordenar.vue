<template>
    <h2 class="title">Crea tu propio pastel con tus sabores deseados y los diseños que tu escojas.</h2>
    <br>
    <!--Formulario para realizar pedido-->
    <form action="#" method="post">
        <!--checkbox para escoger sabores-->
        <div class="sabores">
        <label for="saboresInput">Escoge el sabor de tu pastel.</label> <br>
        <input type="checkbox" name="SabVainilla" id="SabVainilla" value="vainilla"> Vainilla
        <input type="checkbox" name="SabChocolate" id="SabChocolate" value="chocolate"> Chocolate
        <input type="checkbox" name="SabFresa" id="SabFresa" value="fresa"> Fresa
        <input type="checkbox" name="SabDurazno" id="SabDurazno" value="durazno"> Durazno
        <input type="checkbox" name="SabLimon" id="SabLimon" value="limon"> Limon
        </div>
        <br><br>

        <!--checkbox para escoger diseños-->
        <div class="disenos">
            <label class="" for="disenosInput">Escoge el sabor de tu pastel.</label> <br>
            <input type="checkbox" name="DisMonarca" id="DisMonarca" value="monarca"><img width="100" height="80" src="https://lh6.googleusercontent.com/-S1Qa5nGH62U/VRBCLcrQvDI/AAAAAAABsLA/qzq8cPMQzkw/s800/DSC05808.JPG" alt="La monarca">
            <br>
            <input type="checkbox" name="DisRoseton" id="DisRoseton" value="roseton"><img width="100" height="80" src="https://m.media-amazon.com/images/I/712zHoGantL._AC_SX466_.jpg" alt="Rosetón amarillo y rosa">
            <br>
            <input type="checkbox" name="DisFrutal" id="DisFrutal" value="frutal"><img width="100" height="80" src="https://image.winudf.com/v2/image1/Y29tLkJpcnRoZGF5Q2FrZS5QYXBhdGhfc2NyZWVuXzRfMTU0NzM1MDA0N18wODg/screen-4.jpg?fakeurl=1&type=.jpg" alt="Frutal">
            <br>
            <span class="nota">*Nota: al escoger 2 o más diseños, el pastel se dividirá en partes iguales.</span>
        </div>
        <br><br>

        <!--Datos del cliente-->
        <div class="datos">
            <h2 class="title">Para poder concluir el pedido, por favor llenar la siguiente información.</h2>
            <label for="Nombre">Nombre:</label>
            <input type="text" name="Nombre" id="Nombre">
            <br>

            <label for="Telefono">Teléfono:</label>
            <input type="tel" name="Telefono" id="Telefono">
            <br>

            <label for="Correo">Correo electronico:</label>
            <input type="email" name="Correo" id="Correo">
        </div>
        
        <input type="reset" value="Limpiar pedido">
        <input type="submit" value="Comprar">
        
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
.nota {
    font-size: 12px;
}

.datos {
    background-color: rgb(212,172,104,0.6);
}
</style>