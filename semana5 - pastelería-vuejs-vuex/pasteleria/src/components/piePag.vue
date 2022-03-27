<template>
    <footer>
        <div class="info" >
            <span><strong>West Los Angeles, California, Estados Unidos</strong></span>
            <br><br>
            <span><strong>Telefono:</strong> 443-322-3560</span>
            <br><br>
            <span><strong>horarios:</strong></span> 
            <br>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;Lunes a Viernes de 10:00am a 10:00pm <br>
            &nbsp;&nbsp;&nbsp;&nbsp;Sábado de 10:00am a 2:00pm <br></span>       
        </div>
        <div class="derechosAutor">
            <span><i>Con amor, por que Pantheon siempre quizo ser panadero.</i></span>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'piePag',
  props: {
      
  }
}
</script>

<style scoped>
footer {
    background-color: #c29b61;
    padding-top: 30px;
    padding-bottom: 20px;

    text-align: left;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto; 
}
.info {
    padding-left: 100px;
}
.derechosAutor {
    padding-right: 100px;
    text-align: right;
}
</style>