<template>
  <ApolloQuery :query="query" :variables="{ name: 'vue' }">
    <template slot-scope="{ result: { loading, error, data } }">
      <span v-if="loading">Loading...</span>
      <span v-else-if="error">An error occured</span>
      <section v-if="data">
          <ul v-if="data.getRouteMap.length">
            <li :key="dir.id" v-for="dir in data.getRouteMap" >
              {{getDirection(dir.direction)}}
            </li>
          </ul>        
           <span v-else>No directions, oh no :(</span>
      </section>
    </template>
  </ApolloQuery>
</template>
<script>
import { gql } from "apollo-boost";
const queryDirections  = 
 gql` 
 query {
        getRouteMap{
                      _id
                    direction
                    time
                    }
      }
`
export default {
  name: "Directions",
  data() {
    return {
      query: queryDirections
    };
  },
   methods: {
        getDirection(direction){
          let mensaje ="x"
          if(direction==0)
              mensaje = "izquierda"
          if(direction==1)
              mensaje = "derecha"
          if(direction==2)
              mensaje = "arriba"
          if(direction==3)
              mensaje = "abajo"
          if(direction==4)
              mensaje = "abajo"
          return mensaje
        }
    }
};
</script>

<style>
</style>