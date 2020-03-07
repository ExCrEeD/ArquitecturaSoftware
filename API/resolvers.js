export default {
    Query: {
        getRouteMap: async (parent, args, { RouteMap }) => {
        const route = await RouteMap.find();
        return route.map(x => {
          x._id = x._id.toString();
          return x;
        })
      }
    },
    Mutation: {
        createRouteMap: async (parent, args, { RouteMap }) => {
        const route = await new RouteMap(args).save();
        route._id = route._id.toString();
        return route;
      }
    }
  }