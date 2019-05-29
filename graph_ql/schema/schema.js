const qraphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = qraphql;

//Мокавая БД
const movies = [
  { id: "1", name: "Pulp Fiction", genre: "Crime" },
  { id: 2, name: "1984", genre: "Sci-fi" },
  { id: "3", name: "V means Vendetta", genre: "Triller" },
  { id: 4, name: "Snatch", genre: "Crime Comedy" }
];

// GraphQLObjectType - описываем данные хранящиеся в базе
// - это ф-ция которая принимает объект
// содержит поле name и метод fields который возвращает объект с данными

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// корневой запрос.
// Создаем новый объект который описывает запрос
const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    movie: {
      type: MovieType,
      // какие аргументы принимает запрос. в этом случае принимает только поле id
      args: { id: { type: GraphQLID } },
      // в методе resolve описываем данные которые должны вернуться
      resolve(parent, args) {
        // возвращаем фильм по id
        return movies.find(movie => movie.id == args.id);
      }
    }
  }
});

// экспортируем запрос. поместив в поле exports новый объект созданный GraphQLSchema
// и поместив туда поле query со значением Query-объекта запроса который создали ранее
module.exports = new GraphQLSchema({
  query: Query
});
