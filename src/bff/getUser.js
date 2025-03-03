import { getUsers } from './getUsers';

export const getUser = async (enterLogin) => {
	const users = await getUsers();

	if (!users) {
		return null;
	}

	const foundUser = users.find(({ login }) => {
		return login === enterLogin;
	});
	return foundUser;
};
