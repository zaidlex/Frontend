<template>
    <div class="administrador">
        <table class="tablaPedidos">
            <tr id="trTablaTitulos">
                <th>Pedido</th>
                <th>Sabor de pastel</th>
                <th>diseño de pastel</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Correo</th>
                <th>Precio</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Vainilla</td>
                <td>monarca</td>
                <td>Rodrigo Hernández</td>
                <td>4435673412</td>
                <td>RodHerr@gmail.com</td>
                <td>$190.00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Vainilla chocolate</td>
                <td>frutal roseton</td>
                <td>Daniela Guzmán</td>
                <td>44456334412</td>
                <td>daniG@gmail.com</td>
                <td>$380.00</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "administrador",
    props: {

    }
}
</script>

<style scoped>
.administrador {
    overflow-x:auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
#trTablaTitulos {
    background-color: rgb(212,172,104,0.85);
    width: 100%;
}
th {
    font-size: 20px;
    padding: 5px;
    border-bottom: 2px solid black;
}

td {
    padding: 5px;
    border-bottom: 1px solid gray;
}

.tablaPedidos {
    background-color: rgb(248,211,137,0.85);
    width: 80%;
    border-collapse: collapse;
    margin-left: 10%;
    margin-right: 10%;
}
</style>