const { gql } = require("apollo-server");

module.exports = gql`
	interface Response {
		success: Boolean!
		error: String
		message: String
	}

	input BootcampInput {
		careers: [String!]
		housing: Boolean!
		jobAssistance: Boolean!
		jobGuarantee: Boolean!
		acceptGi: Boolean!
		name: String!
		address: String!
		email: String!
		phone: String!
		website: String!
		description: String!
	}

	type GenericResponse implements Response {
		success: Boolean!
		error: String
		message: String
	}

	type MutLoginResponse implements Response {
		success: Boolean!
		token: String
		user: User
		error: String
		message: String
	}

	type QueBootcampsResponse {
		success: Boolean!
		count: Int!
		pagination: Pagination!
		data: [Bootcamp!]!
		error: String
		message: String
	}

	type QuePubBootcampResponse {
		success: Boolean!
		data: Bootcamp
		error: String
		message: String
	}

	type Query {
		bootcamps(page: Int, rating: String, zip: String, miles: String): QueBootcampsResponse!
		publisherBootcamp(id: String): QuePubBootcampResponse!
	}

	type Mutation {
		login(email: String, password: String): Response
		register(name: String, role: String, email: String, password: String): Response
		resetPass(resetToken: String, password: String): Response
		logout: Response
		updateAccount(email: String, name: String): Response
		createBootcamp(bootcamp: BootcampInput): QuePubBootcampResponse!
	}

	type PagObject {
		page: Int!
		limit: Int!
	}

	type Pagination {
		total: Int!
		next: PagObject
		prev: PagObject
	}

	type User {
		role: String!
		id: String!
		name: String!
		email: String!
	}

	type Location {
		type: String!
		coordinates: [Float!]!
		formattedAddress: String!
		street: String!
		city: String!
		state: String
		zipcode: String!
		country: String!
	}

	type Course {
		scholarshipAvailable: String!
		_id: String!
		title: String!
		description: String!
		weeks: String!
		tuition: Float!
		minimumSkill: String!
		user: String!
		bootcamp: String!
		createdAt: String!
	}

	type Bootcamp {
		_id: String!
		id: String!
		location: Location
		careers: [String!]
		photo: String!
		housing: Boolean!
		jobAssistance: Boolean!
		jobGuarantee: Boolean!
		acceptGi: Boolean!
		name: String!
		address: String!
		email: String!
		phone: String!
		website: String!
		description: String!
		user: String!
		createdAt: String!
		averageCost: Float!
		averageRating: Float!
		courses: [Course!]!
	}
`;
