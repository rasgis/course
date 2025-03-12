import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useServerRequest } from '../../hooks';
import { PostContent, Comments } from './components';
import { loadPost } from '../../actions';
import { selectPost } from '../../selectors';

export const Post = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPost(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);

	return (
		<div className=" min-h-screen mt-[120px]  ">
			<div className=" w-full  bg-white shadow-lg rounded-lg overflow-hidden p-10">
				<PostContent post={post} />
				<Comments comments={post.comments} />
			</div>
		</div>
	);
};
