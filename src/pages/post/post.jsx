import { useSelector, useDispatch } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { useServerRequest } from '../../hooks';
import { PostContent, PostForm, Comments } from './components';
import { loadPost, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';

export const Post = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPost(requestServer, params.id));
	}, [requestServer, params.id, dispatch, isCreating]);
	return (
		<div className=" min-h-screen mt-[120px]  ">
			<div className=" w-full  bg-white shadow-lg rounded-lg overflow-hidden p-10">
				{isCreating || isEditing ? (
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
