import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeComment, openModal, CLOSE_MODAL } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../../../../../selectors';
import { Button } from '../../../../../../components';
import { ROLE } from '../../../../../../constants';

export const Comment = ({ postId, id, author, published_at, content }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);
	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Вы действительно хотите удалить комментарий?',
				onConfirm: () => {
					dispatch(removeComment(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className=" flex ">
			<div className="mb-2 border-solid border-2 border-gray-300 shadow-sm hover:border-blue-500  bg-white text-gray-700 p-2 rounded-md w-[100%] mx-auto">
				<div className="flex justify-between ">
					<div className="flex justify-between">
						<Button className="fa fa-user-circle-o text-blue-500  mx-2 cursor-default" />
						{author}
					</div>
					<div className="flex justify-between ">
						<Button className="fa fa-calendar-o text-blue-500  mr-2 cursor-default" />
						{published_at}
					</div>
				</div>
				<div className="text-black text-left ml-2">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Button
					className="fa fa-trash-o text-red-500 hover:text-red-700 ml-2 fa-lg"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	published_at: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};
