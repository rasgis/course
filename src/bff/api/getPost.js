import { transformPost } from '../transformers';

export const getPost = async (post_id) =>
	await fetch(`http://localhost:3005/posts/${post_id}`)
		.then((loadedPost) => loadedPost.json())
		.then((loadedPost) => loadedPost && transformPost(loadedPost));
