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
      getIndex: (state) => (pedido) =>{
        return state.PedidosTotales.indexOf(pedido) + 1;
      },
      getSabores: (state) => (pedido) => {
        let sabores ="";
        return sabores.concat(pedido.sabor);
      },
      getDisenos: (state) => (pedido) => {
        let disenos ="";
        return disenos.concat(pedido.diseno);
      }
  },
  mutations: {
    pedidoEnFila(state, pedido){
      PedidosTotales.push(pedido);
    }
  },
  actions: {
    addPedido (pedido){
      
      console.log(PedidosTotales);
    }
  },
  modules: {
  }
})
