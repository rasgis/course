import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = 'http://localhost:3005/comments';
const POSTS_COMMENTS_URL = 'http://localhost:3005/comments?post_id=';

export const getComments = (postId) => {
	const url = postId === undefined ? ALL_COMMENTS_URL : POSTS_COMMENTS_URL + postId;

	return fetch(url)
		.then((loadedComments) => loadedComments.json())
		.then((comments) => comments.map(transformComment));
};
