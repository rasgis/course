import { useEffect, useState, useMemo } from 'react';
import { PostCard, Pagination, Search } from './components';
import { getLastPageFromLink, debounce } from '../../bff/utils';
import { useServerRequest } from '../../hooks';

const PAGINATION_LIMIT = 9;

export const Main = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLink(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};
	return (
		<div className="pt-[130px] flex flex-col justify-between ">
			<div className="">
				<Search
					onChange={onSearch}
					searchPhrase={searchPhrase}
				/>
				<div className="mt-6"></div>
				{posts.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-[60px]">
						{posts.map(
							({ id, title, image_url, published_at, commentsCount }) => (
								<PostCard
									className="w-[280px]"
									key={id}
									id={id}
									title={title}
									image_url={image_url}
									published_at={published_at}
									commentsCount={commentsCount}
								/>
							),
						)}
					</div>
				) : (
					<div className="text-center text-gray-500 text-lg font-semibold mt-10">
						Статьи не найдены
					</div>
				)}
			</div>
			{posts.length > 0 && lastPage > 1 && (
				<Pagination
					page={page}
					lastPage={lastPage}
					setPage={setPage}
				/>
			)}
		</div>
	);
};
