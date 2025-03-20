import { transformComment } from '../transformers';

export const getComments = (postId) =>
	fetch(`http://localhost:3005/comment?post_id=${postId}`)
		.then((loadedComments) => loadedComments.json())
		.then((comments) => comments.map(transformComment));
