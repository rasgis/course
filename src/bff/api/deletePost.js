export const deletePost = async (postTd) => {
	fetch(`http://localhost:3005/posts/${postTd}`, {
		method: 'DELETE',
	});
};
