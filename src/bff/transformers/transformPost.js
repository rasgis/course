export const transformPost = (dbPost) => ({
	id: dbPost.id,
	title: dbPost.title,
	content: dbPost.content,
	published_at: dbPost.published_at,
	image_url: dbPost.image_url,
});
