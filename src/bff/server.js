import { getUser } from './getUser';
import { addUser } from './addUser';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	//! Автороизация
	authorize: async (authLogin, authPassword) => {
		try {
			const user = await getUser(authLogin);

			if (!user) {
				return {
					error: 'Такой пользователь не найден',
					res: null,
				};
			}

			if (authPassword !== user.password) {
				return {
					error: 'Неверный пароль',
					res: null,
				};
			}

			return {
				error: null,
				res: {
					id: user.id,
					login: user.login,
					role_id: user.role_id,
					session: sessions.create(user),
				},
			};
		} catch (error) {
			console.error('Ошибка при авторизации:', error);
			return { error: error.message };
		}
	},

	//! Регистрация
	async register(regLogin, regPassword) {
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
	},
};
