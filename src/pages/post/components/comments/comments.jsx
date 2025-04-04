import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components';
import { Comment } from './components';
import { useServerRequest } from '../../../../hooks';
import { PROP_TYPE, ROLE } from '../../../../constants';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { addComment } from '../../../../actions';

export const Comments = ({ comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addComment(requestServer, userId, postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className="mx-auto">
			{!isGuest && (
				<div className="mt-5 w-full flex justify-center">
					<textarea
						name="comment"
						value={newComment}
						onChange={({ target }) => setNewComment(target.value)}
						placeholder="Комментарий..."
						className=" h-24 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 p-2 rounded-md w-[580px] mb-5"
					></textarea>
					<Button
						className="fa fa-paper-plane-o text-blue-500 hover:text-blue-700 ml-2 w-4"
						onClick={() => onNewCommentAdd(userId, postId, newComment)}
					/>
				</div>
			)}
			<div>
				{comments?.map(({ id, author, content, published_at }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						published_at={published_at}
					/>
				))}
			</div>
		</div>
	);
};

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT).isRequired,
	postId: PropTypes.string.isRequired,
};
