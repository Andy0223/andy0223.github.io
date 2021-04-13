//vue 3.0寫法
const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')


//vue 2.0 寫法

var app = new Vue({
    el: '#app',
    data: {
      msg:"of_couse_lee",
    },
  });

var app1 = new Vue({
  el: '#app02',
  data: {
    number:5,
    fontColor:"red",
    styleObject: {
      color: 'red',
      fontSize: '2em'
    }
  },
});

var app3 = new Vue ({
  el: '#app03',
  data:{
    fontColor:"red",
    counter:0
  },
  methods: {
    add: function(event){
      this.counter += 1;
    }
  }
  
});

var app4 = Vue.createApp({
  el: '#example-3',
  methods: {
    say(message) {
      alert(message)
    }
  }
}).mount('#inline-handler')
  

