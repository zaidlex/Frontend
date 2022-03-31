import { createStore } from 'vuex'

export default createStore({
  state: {
    PedidosTotales: [
      {"sabor": ["durazno","limon", "fresa"], 
      "diseno": ["monarca"], 
      "nombre": "Jaime",
      "telefono": "443-2233-222",
      "correo": "jmRD@gmail.com",
      "precio": 200}
      ,
      {"sabor": ["vainilla","chocolate"], 
      "diseno": ["roseton","frutal"], 
      "nombre": "Rodrigo",
      "telefono": "443-2323-587",
      "correo": "RD@gmail.com",
      "precio": 240}],
  },
  getters: {
  },
  mutations: {
    
  },
  actions: {
    addPedido(pedido){
      PedidosTotales.push(pedido);
      console.log(PedidosTotales);
    }
  },
  modules: {
  }
})
