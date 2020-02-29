<template>
  <div class="card mt-3">
    <div class="card-body">
        <div class="messages" v-for="(route, index) in liveRoute" :key="index">
           <p><span class="font-weight-bold">{{ getDirection(route.direction) }} </span></p>
        </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            liveRoute : [],
            socket : io('localhost:3000')
        }
    },
    methods: {
       /*  sendMessage(e) {
            e.preventDefault();
            
            this.socket.emit('connection', {
                user: this.user,
                message: this.message
            });
            this.message = ''
        } */
        getDirection(direction){
          switch (direction) {
            case 0:
              return "izquierda";
              break;
          
            case 1:
              return "derecha";
              break;

            case 2:
              return "arriba";
              break;

            case 3:
              return "abajo";
              break;
          }
        }
    },
    mounted() {
        this.socket.on('getroutemap', (data) => {   
              console.log(data);     
             this.liveRoute = (data);             
        });
    }
}

</script>

<style>
</style>