import { transformUser } from '../transformers';

export const getUsers = () =>
	fetch('http://localhost:3005/users')
		.then((loadedUsers) => loadedUsers.json())
		.then((users) => users.map(transformUser));
