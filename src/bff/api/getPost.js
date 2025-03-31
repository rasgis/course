import { transformPost } from '../transformers';

export const getPost = async (post_id) =>
	await fetch(`http://localhost:3005/posts/${post_id}`)
		.then((response) => {
			if (response.ok) {
				return response;
			}

			const error =
				response.status === 404
					? 'Такого поста не существует'
					: 'Произошла ошибка';

			return Promise.reject(error);
		})
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
