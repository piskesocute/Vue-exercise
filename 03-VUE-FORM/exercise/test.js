const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    
    computed:{
      result(){
          if(this.counter < 37){
              return 'Not there yet'   
          }else if(this.counter === 37){
              return this.counter  
          }
          else{
              return 'Too much!'
              
          }
      }
    },
    watch:{
      
      result(){
          const that = this
          setTimeout(function(){
            console.log('hi')
            that.counter = 0;
          }, 1000);
      }
    },
    methods: {
      add(num){
          return this.counter += num ;
      }
    },
  });
  
  app.mount("#assignment");
  