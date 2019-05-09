const { buildSchema } = require("graphql");

module.exports = buildSchema(`

	type Todo{
		id: ID!
		title: String!
		completed: Boolean!
		steps: [Step]
	}

	type Step {
		title: String!
		completed: Boolean!
	}

	enum Status {
		COMPLETED
		UNCOMPLETED 
	}
  
	type Query {
		todo(id:ID!): Todo!
		todos(status: Status): [Todo]! 
	} 

	
`);
