import PropTypes from 'prop-types';
import { Button } from '../../../../components';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';
import { PROP_TYPE } from '../../../../constants';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../actions';

export const UserRow = ({ id, login, register_at, role_id, roles, onUserRemove }) => {
	const [initialRoleId, setInitialRoleId] = useState(role_id);
	const [selectedRoleId, setSelectedRoleId] = useState(role_id);
	const requestServer = useServerRequest();
	const dispatch = useDispatch();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(target.value);
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			const newRoleId = Number(newUserRoleId);
			setInitialRoleId(newRoleId);
			setSelectedRoleId(newRoleId);
		});
	};

	const handleDelete = () => {
		dispatch(
			openModal({
				text: `Вы действительно хотите удалить пользователя ${login}?`,
				onConfirm: () => {
					onUserRemove();
					dispatch({ type: 'CLOSE_MODAL' });
				},
				onCancel: () => dispatch({ type: 'CLOSE_MODAL' }),
			}),
		);
	};

	const isSaveButtonDisabled = Number(selectedRoleId) === initialRoleId;

	return (
		<div className="relative flex items-center justify-between w-[700px] mx-auto my-2">
			<div className="grid grid-cols-3 border-b border-gray-200 hover:bg-gray-50 transition duration-200 bg-[#b2dfff] text-gray-700 flex-1 p-2 rounded-md">
				<div className="px-4 py-2 text-left">{login}</div>
				<div className="px-4 py-2 text-left">{register_at}</div>
				<div className="flex items-center">
					<select
						value={selectedRoleId}
						className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 capitalize cursor-pointer transition duration-200"
						onChange={onRoleChange}
					>
						{roles.map(({ id, name }) => (
							<option
								key={id}
								value={id}
								className="text-gray-700 capitalize"
							>
								{name}
							</option>
						))}
					</select>
					<Button
						className={`fa fa-floppy-o text-blue-500 hover:text-blue-700 ml-4 ${
							isSaveButtonDisabled ? 'opacity-0' : ''
						}`}
						onClick={() => onRoleSave(id, selectedRoleId)}
						disabled={isSaveButtonDisabled}
					/>
					<div className="w-[14px] h-[16px]"></div>
				</div>
			</div>
			<Button
				className="fa fa-trash-o text-red-500 hover:text-red-700 ml-4 "
				onClick={handleDelete}
			/>
		</div>
	);
};

UserRow.propTypes = {
	id: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	register_at: PropTypes.stringisRequired,
	role_id: PROP_TYPE.ROLE.isRequired,
	roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
