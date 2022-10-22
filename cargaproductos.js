//consumir json para tarjetas de productos

const { createApp } = Vue

const appM=createApp({//fragancias de damas
  data() {
    return {
      fragM: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.fragM=data.damas
                this.cargando=false  
            })

    }
  },
  created(){
  this.fetchData("https://ro-garzon.github.io/json-proyecto-eclat/productos.json") 
  }
}).mount('#appM')



const appH=createApp({//fragancias de caballeros
  data() {
    return {
      fragH: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
              this.fragH=data.caballeros  
              this.cargando=false
              }
            )
    }
  },
  created(){
  this.fetchData("https://ro-garzon.github.io/json-proyecto-eclat/productos.json") 
  }
}).mount('#appH')



const appN=createApp({//fragancias de niños
  data() {
    return {
      fragN: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.fragN=data.niños
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("https://ro-garzon.github.io/json-proyecto-eclat/productos.json") 
  }
}).mount('#appN')



const appMaq=createApp({//maquillaje
  data() {
    return {
      maq: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.maq=data.maquillaje
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("https://ro-garzon.github.io/json-proyecto-eclat/productos.json") 
  }
}).mount('#appMaq')



const appP=createApp({//promociones
  data() {
    return {
      prom: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.prom=data.promociones
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("https://ro-garzon.github.io/json-proyecto-eclat/productos.json") 
  }
}).mount('#appP')
