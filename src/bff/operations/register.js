import { getUser, addUser } from '../api';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
	const user = await getUser(regLogin);
	if (user) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	const newUser = await addUser(regLogin, regPassword);

	return {
		error: null,
		res: {
			id: newUser.id,
			login: newUser.login,
			role_id: newUser.role_id,
			session: sessions.create(newUser),
		},
	};
};
