import { UserRow } from './components';

export const Users = () => {
	const users = [
		{ id: 1, login: 'user1', register_at: '2023-10-01', role_id: 'Admin' },
		{ id: 2, login: 'user2', register_at: '2023-09-15', role_id: 'User' },
	];

	return (
		<div className="flex flex-col items-center justify-center h-full pt-[130px]">
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

				{users.length > 0 ? (
					users.map(({ id: userId, login, register_at, role_id }) => (
						<UserRow
							key={userId}
							login={login}
							register_at={register_at}
							role_id={role_id}
						/>
					))
				) : (
					<div className="py-4 text-center text-gray-500 w-[700px] mx-auto">
						Список пользователей пуст
					</div>
				)}
			</div>
		</div>
	);
};
