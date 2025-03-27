import { useEffect, useState } from 'react';
import { PostCard, Pagination } from './components';
import { useServerRequest } from '../../hooks';

const PAGINATION_LIMIT = 9;

export const Main = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer, page]);
	``;
	return (
		<div className="pt-40">
			<div className="post-list"></div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
				{posts.map(({ id, title, image_url, published_at, commentsCount }) => (
					<PostCard
						className="w-[280px]"
						key={id}
						id={id}
						title={title}
						image_url={image_url}
						published_at={published_at}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			<Pagination
				page={page}
				setPage={setPage}
			/>
		</div>
	);
};
