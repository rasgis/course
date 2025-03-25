import { generateDate } from '../utils/generateDate';

export const addPost = ({ image_url, title, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url,
			published_at: generateDate(),
			title,
			content,
		}),
	}).then((createdPost) => createdPost.json());
