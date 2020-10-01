const { gql } = require("apollo-server");

module.exports = gql`
	type GenericResponse {
		success: Boolean!
		error: String
		message: String
	}

	type MutLoginResponse {
		success: Boolean!
		token: String
		user: User
		error: String
		message: String
		data: String
	}

	type MutCourseResponse {
		success: Boolean!
		data: Course
		avgCost: Int
		error: String
		message: String
	}

	type MutResetPasswordResponse {
		success: Boolean!
		error: String
		message: String
		resetToken: String
	}

	type QueBootcampsResponse {
		success: Boolean!
		count: Int
		pagination: Pagination
		data: [Bootcamp]
		error: String
		message: String
	}

	type QueBootcampReviewsResponse {
		success: Boolean!
		data: [Review]
		error: String
		message: String
	}

	type QuePubBootcampResponse {
		success: Boolean!
		data: Bootcamp
		error: String
		message: String
	}
`;
