import { Button } from '../../../../components';
import { openModal, CLOSE_MODAL, removePost } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks';
import { useDispatch } from 'react-redux';

export const SpecialPanel = ({ post: { id, published_at }, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Вы действительно хотите удалить пост?',
				onConfirm: () => {
					dispatch(removePost(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<>
			<div className=" text-gray-700 text-left mb-4 flex justify-between items-center border-b pb-2">
				<div className="flex items-center">
					{published_at && (
						<Button
							className={`fa fa-calendar-o text-blue-500  mr-4 cursor-default`}
						/>
					)}
					{published_at}
				</div>
				<div className="flex justify-start ">
					{editButton}
					{published_at && (
						<Button
							className={`fa fa-trash-o text-red-500 hover:text-red-700 ml-4`}
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			</div>
		</>
	);
};
