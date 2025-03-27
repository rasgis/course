export const getCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(({ post_id }) => post_id === postId);
	return postComments.length;
};
