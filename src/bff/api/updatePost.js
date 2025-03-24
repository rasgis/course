export const updatePost = ({ id, image_url, title, content }) =>
	fetch(`http://localhost:3005/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url,
			title,
			content,
		}),
	}).then((updatedPost) => updatedPost.json());
