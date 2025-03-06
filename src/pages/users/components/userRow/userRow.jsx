import { useDispatch } from 'react-redux';
import { Button } from '../../../../components';
import { useState } from 'react';

export const UserRow = ({ login, register_at, role_id, roles }) => {
	const [selectedRoleId, setSelectedRoleId] = useState(role_id);
	const dispatch = useDispatch();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(target.value);
	};

	const isSaveButtonDisabled = Number(selectedRoleId) === role_id;

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
						onClick={() => dispatch()} // TODO: add action
						disabled={isSaveButtonDisabled}
						aria-label={`Сохранить роль ${login}`}
					/>
					<div className="w-[14px] h-[16px]"></div>
				</div>
			</div>
			<Button
				className="fa fa-trash-o text-red-500 hover:text-red-700 ml-4 "
				onClick={() => dispatch()} // TODO: add action
				aria-label={`Удалить пользователя ${login}`}
			/>
		</div>
	);
};
