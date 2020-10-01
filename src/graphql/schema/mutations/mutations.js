const { gql } = require("apollo-server-express");

module.exports = gql`
	type Mutation {
		login(email: String, password: String): MutLoginResponse!
		register(name: String, role: String, email: String, password: String): MutLoginResponse!
		resetPass(resetToken: String, password: String): MutLoginResponse!
		logout: GenericResponse!
		updateAccount(email: String, name: String): GenericResponse!
		createBootcamp(bootcamp: BootcampInput): QuePubBootcampResponse!
		editBootcamp(id: String, bootcamp: BootcampInput): QuePubBootcampResponse!
		createCourse(id: String, course: CourseInput): MutCourseResponse!
		editCourse(id: String, course: CourseInput): MutCourseResponse!
		deleteCourse(id: String): MutCourseResponse!
		submitReview(id: String, review: ReviewInput): GenericResponse!
		updatePassword(currentPassword: String, newPassword: String): GenericResponse!
		resetToken(email: String): MutResetPasswordResponse!
		editReview(id: String, review: ReviewInput): GenericResponse!
		deleteReview(id: String): GenericResponse!
	}
`;
