import { useEffect, useState } from 'react';
import { useServerRequest } from '../../hooks';
import { UserRow } from './components';
import { Content } from '../../components';
export const Users = () => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState();
	const requestServer = useServerRequest();

	useEffect(() => {
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
	}, [requestServer]);

	return (
		<div className="flex flex-col items-center justify-center h-full pt-[130px]">
			<Content error={errorMessage}>
				<h2 className="text-2xl font-medium text-orange-500 mb-6">
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

					{users.map(({ id: userId, login, register_at, role_id }) => (
						<UserRow
							key={userId}
							login={login}
							register_at={register_at}
							role_id={role_id}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};
