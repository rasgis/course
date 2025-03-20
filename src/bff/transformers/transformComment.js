export const transformComment = (dbComment) => ({
	id: dbComment.id,
	post_id: dbComment.post_id,
	author_id: dbComment.author_id,
	content: dbComment.content,
	published_at: dbComment.published_at,
});
