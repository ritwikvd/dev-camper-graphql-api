const { gql } = require("apollo-server");

module.exports = gql`
	union Object = Bootcamp | Course | Review

	type PagObject {
		page: Int
		limit: Int
	}

	type Pagination {
		total: Int
		next: PagObject
		prev: PagObject
	}

	type User {
		role: String
		id: String
		_id: String
		name: String
		email: String
	}

	type Location {
		type: String
		coordinates: [Float]
		formattedAddress: String
		street: String
		city: String
		state: String
		zipcode: String
		country: String
	}

	type Review {
		id: String
		_id: String
		title: String
		text: String
		rating: String
		user: User
		bootcamp: Bootcamp
		createdAt: String
	}

	type Course {
		scholarshipAvailable: Boolean
		_id: String
		id: String
		title: String
		description: String
		weeks: String
		tuition: String
		minimumSkill: String
		user: String
		bootcamp: String
		createdAt: String
	}

	type Bootcamp {
		_id: String
		id: String
		location: Location
		careers: [String]
		photo: String
		housing: Boolean
		jobAssistance: Boolean
		jobGuarantee: Boolean
		acceptGi: Boolean
		name: String
		address: String
		email: String
		phone: String
		website: String
		description: String
		user: String
		createdAt: String
		averageCost: Float
		averageRating: Float
		courses: [Course]
	}
`;
