<template>
    <h2 class="title backColor" id="top">Crea tu propio pastel con tus sabores deseados y
        los diseños que tu escojas.</h2>
    <br>

    <!--checkbox para escoger sabores-->
    <div class="sabores">
        <label class="labelTitle" for="saboresInput">Escoge los sabores de tu pastel ($20.00 cada uno).</label> <br>
        <input type="checkbox" name="SabVainilla" id="SabVainilla" v-model="sabores" value="vainilla"> Vainilla
        |
        <input type="checkbox" name="SabChocolate" id="SabChocolate" v-model="sabores" value="chocolate"> Chocolate
        |
        <input type="checkbox" name="SabFresa" id="SabFresa" v-model="sabores" value="fresa"> Fresa
        |
        <input type="checkbox" name="SabDurazno" id="SabDurazno" v-model="sabores" value="durazno"> Durazno 
        |
        <input type="checkbox" name="SabLimon" id="SabLimon" v-model="sabores" value="limon"> Limón
    </div>
    <br><br>

    <!--checkbox para escoger diseños-->
    <div class="disenos">
        <label class="labelTitle" for="disenosInput">Escoge los diseños de tu pastel ($40.00 cada uno).</label>
        <br>
        <ul>
            <li>
                <input type="checkbox" class="boxDisenos" name="DisMonarca" id="DisMonarca" v-model="disenos" value="monarca"><img width="200" height="160" src="@/assets/LaMonarca.jpg" alt="La monarca">
            </li>
            <br>
            <li>
                <input type="checkbox" class="boxDisenos" name="DisRoseton" id="DisRoseton" v-model="disenos" value="roseton"><img width="200" height="160" src="@/assets/RosetonAmarilloRosa.jpg" alt="Rosetón amarillo y rosa">
            </li>
            <br>
            <li>
                <input type="checkbox" class="boxDisenos" name="DisFrutal" id="DisFrutal" v-model="disenos" value="frutal"><img width="200" height="160" src="@/assets/Frutal.jpg" alt="Frutal">
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
            <input type="text" v-model="nombre" name="Nombre" id="Nombre" placeholder="Obligatorio"  required>
        </div>
        <br>
        <div class="inputDatos">
            <label for="Telefono">Teléfono:</label>
            <input type="tel" v-model="telefono" name="Telefono" id="Telefono" placeholder="Obligatorio" required>
        </div>
        <br>
        <div class="inputDatos">
            <label for="Correo">Correo electronico:</label>
            <input type="email" v-model="correo" name="Correo" id="Correo" placeholder="Obligatorio" required>
        </div>
        <div class="inputDatos">
            <span >Precio total: ${{precioTotal}}.00</span>
            <!-- <span >Precio t: ${{$store.state.precioTotal}}.00</span> -->
        </div>
    </div>
    <div class="botones" >
        <!-- <input type="reset" class="boton" value="Limpiar pedido"> -->
        <button class="boton" @click="reset">Limpiar pedido</button>
        <button class="boton" @click="nuevoPedido" :disabled='isDisabled'>Comprar</button>
    </div>

</template>

<script>
export default {
    name: "ordenar",
    data: function(){
        return {
            sabores: [],
            disenos: [],
            nombre: "",
            telefono: "",
            correo: "",
            precio: 120,
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {
        reset: function() {
            this.$router.go();
        },

        nuevoPedido: function() {
            let pedido = {"sabor": this.sabores, 
                "diseno": this.disenos, 
                "nombre": this.nombre,
                "telefono": this.telefono,
                "correo": this.correo,
                "precio": this.precio}
            //console.log(pedido);
            this.$store.commit('pedidoEnFila', pedido)
            this.$router.push({ path: '/' })
        },
    },
    computed: {
        precioTotal: function() {            
            this.precio = 120;  
            this.precio += this.sabores.length * 20;
            this.precio += this.disenos.length * 40;
            return this.precio;
        },
        isDisabled: function(){
    	    return !( 
                this.sabores.length >= 1 && 
                this.disenos.length >=1 &&
                this.nombre != "" &&
                this.telefono != "" &&
                this.correo != ""
                );
        }
    },
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

.backColor {
    background-color:rgb(238,208,157,0.85);
}

.boxDisenos{
    margin: 10px;
}

.nota {
    font-size: 12px;
    text-align: right;
}

.datos {
    background-color: rgb(212,172,104,0.85);
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
    background-color: rgb(248,211,137,0.85);
    font-size: 20px;
    border-radius: 4px;
    margin: 20px;
}
</style>