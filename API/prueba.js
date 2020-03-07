import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import RouteMap from './models/routemap';
import mongoose from 'mongoose';
import { mongoDb } from '../env';

const app = express();


mongoose.connect(`mongodb://localhost/${mongoDb}`,{useNewUrlParser: true})
  .then(() => console.log(`conected to ${mongoDb}`))
  .catch(err => console.log(err));

import typeDefs from './schema';
import resolvers from './resolvers'; 

app.set('port', process.env.PORT || 3000);

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    RouteMap
  },
  introspection: true,
  playground: true,
  playground: {
      endpoint: `http://localhost:${app.get('port')}/graphql`,
      settings: {
          'editor.theme': 'dark'
      }
  }
})

SERVER.applyMiddleware({
    app
  })
  
  // start the server
  app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  }); 