import { useSelector, useDispatch } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { useServerRequest } from '../../hooks';
import { PostContent, PostForm, Comments } from './components';
import { loadPost } from '../../actions';
import { selectPost } from '../../selectors';

export const Post = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPost(requestServer, params.id));
	}, [requestServer, params.id, dispatch]);
	return (
		<div className=" min-h-screen mt-[120px]  ">
			<div className=" w-full  bg-white shadow-lg rounded-lg overflow-hidden p-10">
				{isEditing ? (
					<PostForm post={post} />
				) : (
					<>
						<PostContent post={post} />
						<Comments
							comments={post.comments}
							postId={post.id}
						/>
					</>
				)}
			</div>
		</div>
	);
};
