import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { UserRow } from './components';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { checkAccess } from '../../utils';
import { Content } from '../../components';
import { ROLE } from '../../constants';

export const Users = () => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState();
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
	const userRole = useSelector(selectUserRole);
	const requestServer = useServerRequest();

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, shouldUpdateUserList, userRole]);

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}
		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<Content
			access={[ROLE.ADMIN]}
			serverError={errorMessage}
		>
			<h2 className="text-2xl font-medium text-orange-500 mb-6 mt-[130px]">
				Страница пользователей
			</h2>
			<div className=" max-w-4xl">
				<div className="border-b border-gray-300">
					<div className="grid grid-cols-3 py-2 bg-gray-100 text-gray-700 font-medium w-[700px] mx-auto">
						<div className="px-4 text-left">Логин</div>
						<div className="px-4 text-left">Дата регистрации</div>
						<div className="px-4 text-left">Роль</div>
					</div>
				</div>

				{users.map(({ id, login, register_at, role_id }) => (
					<UserRow
						key={id}
						id={id}
						login={login}
						register_at={register_at}
						role_id={role_id}
						roles={roles.filter(
							({ id: roleId }) => Number(roleId) !== ROLE.GUEST,
						)}
						onUserRemove={() => onUserRemove(id)}
					/>
				))}
			</div>
		</Content>
	);
};
