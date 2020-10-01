const { gql } = require("apollo-server-express");

module.exports = gql`
	type Query {
		bootcamps(page: Int, rating: String, zip: String, miles: String): QueBootcampsResponse!
		publisherBootcamp(id: String): QuePubBootcampResponse!
		bootcamp(id: String): QuePubBootcampResponse!
		bootcampReviews(id: String): QueBootcampReviewsResponse!
		userReviews(id: String): QueBootcampReviewsResponse!
	}
`;
