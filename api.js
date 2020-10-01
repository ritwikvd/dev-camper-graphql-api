const axios = require("axios");

const instance = axios.create({
	baseURL: process.env.MAIN_API
});

const helper = async (method, url, authorization, data) => {
	const arr = [data, { headers: { authorization } }];
	method === "get" ? arr.shift() : null;

	const { data: result } = await instance[method](url, ...arr);
	return result;
};

module.exports = {
	getAllBootcamps: async ({ page, rating, zip, miles }, authorization) => {
		const url = `/bootcamps?limit=5&page=${page}${rating ? `&averageRating[gte]=${rating}` : ""}${zip ? `&zip=${zip}&miles=${miles}` : ""}`;
		return helper("get", url, authorization);
	},

	getPubBootcamp: async ({ id }, authorization) => helper("get", `/bootcamps/user/${id}`, authorization),

	getBootcamp: async ({ id }, authorization) => helper("get", `/bootcamps/${id}`, authorization),

	getBootcampReviews: async ({ id }, authorization) => helper("get", `/bootcamps/${id}/reviews`, authorization),

	getUserReviews: async ({ id }, authorization) => helper("get", `/reviews/user/${id}`, authorization),

	login: async body => helper("post", `/auth/login`, null, body),

	register: async body => helper("post", `/auth/register`, null, body),

	resetPass: async ({ resetToken, password }) => helper("put", `/auth/password/${resetToken}`, null, { password }),

	logout: async (_, authorization) => helper("get", `/auth/logout`, authorization),

	updateAccount: async (body, authorization) => helper("put", `/auth/updatedetails`, authorization, body),

	createBootcamp: async (body, authorization) => helper("post", `/bootcamps`, authorization, body.bootcamp),

	editBootcamp: async ({ id, bootcamp }, authorization) => helper("put", `/bootcamps/${id}`, authorization, bootcamp),

	createCourse: async ({ id, course }, authorization) => helper("post", `/courses`, authorization, { id, ...course }),

	editCourse: async ({ id, course }, authorization) => helper("put", `/courses/${id}`, authorization, course),

	deleteCourse: async ({ id }, authorization) => helper("delete", `/courses/${id}`, authorization),

	submitReview: async ({ id, review }, authorization) => helper("post", `/bootcamps/${id}/reviews`, authorization, review),

	updatePassword: async (body, authorization) => helper("put", `/auth/updatepassword`, authorization, body),

	resetToken: async (body, authorization) => helper("post", `/auth/password`, authorization, body),

	editReview: async ({ id, review }, authorization) => helper("put", `/reviews/${id}`, authorization, review),

	deleteReview: async ({ id }, authorization) => helper("delete", `/reviews/${id}`, authorization)
};
