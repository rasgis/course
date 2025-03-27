import { transformPost } from '../transformers';

export const getPosts = async (page, limit) => {
	const response = await fetch('http://localhost:3005/posts');
	const allPosts = await response.json();

	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;

	const paginatedPosts = allPosts.slice(startIndex, endIndex);

	return paginatedPosts && paginatedPosts.map(transformPost);
};
