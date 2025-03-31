import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components';
import { openModal, CLOSE_MODAL, removePost } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';
import { checkAccess } from '../../../../utils';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants';

export const SpecialPanel = ({ post: { id, published_at }, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);
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

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

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
				{isAdmin && (
					<div className="flex justify-start ">
						{editButton}
						{published_at && (
							<Button
								className={`fa fa-trash-o text-red-500 hover:text-red-700 ml-4`}
								onClick={() => onPostRemove(id)}
							/>
						)}
					</div>
				)}
			</div>
		</>
	);
};
