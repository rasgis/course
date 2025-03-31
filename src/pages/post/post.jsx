import { useSelector, useDispatch } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { PostContent, PostForm, Comments } from './components';
import { Error, Content } from '../../components';
import { loadPost, RESET_POST_DATA } from '../../actions';
import { selectPost, selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

export const Post = () => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = !!useMatch('/post/:id/edit');
	const isCreating = !!useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPost(requestServer, params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [requestServer, params.id, dispatch, isCreating]);

	if (isLoading) {
		return null;
	}

	const PostWithoutError =
		isCreating || isEditing ? (
			<Content
				access={[ROLE.ADMIN]}
				serverError={error}
			>
				<div className="min-h-screen mt-[120px] bg-inherit flex justify-center items-start pt-10">
					<div className=" bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
						<PostForm post={post} />
					</div>
				</div>
			</Content>
		) : (
			<div className="min-h-screen mt-[120px] flex justify-center items-start pt-10">
				<div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
					<PostContent post={post} />
					<hr className="my-6 border-t border-gray-300" />

					<Comments
						comments={post.comments}
						postId={post.id}
					/>
				</div>
			</div>
		);

	return error ? <Error error={error} /> : PostWithoutError;
};
