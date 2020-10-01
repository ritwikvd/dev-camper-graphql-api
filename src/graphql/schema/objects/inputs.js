const { gql } = require("apollo-server-express");

module.exports = gql`
	input BootcampInput {
		careers: [String]
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
	}

	input CourseInput {
		scholarshipAvailable: Boolean
		title: String
		description: String
		weeks: String
		tuition: String
		minimumSkill: String
	}

	input ReviewInput {
		rating: String
		title: String
		text: String
	}
`;
