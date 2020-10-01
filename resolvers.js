const api = require("./api");

const wrap = f => (_, args, { auth }) => f(args, auth);

module.exports = {
	Query: {
		bootcamps: wrap(api.getAllBootcamps),
		publisherBootcamp: wrap(api.getPubBootcamp),
		bootcamp: wrap(api.getBootcamp),
		bootcampReviews: wrap(api.getBootcampReviews),
		userReviews: wrap(api.getUserReviews)
	},
	Mutation: {
		login: wrap(api.login),
		register: wrap(api.register),
		resetPass: wrap(api.resetPass),
		logout: wrap(api.logout),
		updateAccount: wrap(api.updateAccount),
		createBootcamp: wrap(api.createBootcamp),
		editBootcamp: wrap(api.editBootcamp),
		createCourse: wrap(api.createCourse),
		editCourse: wrap(api.editCourse),
		deleteCourse: wrap(api.deleteCourse),
		submitReview: wrap(api.submitReview),
		updatePassword: wrap(api.updatePassword),
		resetToken: wrap(api.resetToken),
		editReview: wrap(api.editReview),
		deleteReview: wrap(api.deleteReview)
	}
};
