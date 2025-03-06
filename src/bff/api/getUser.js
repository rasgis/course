import { transformUser } from '../transformers';
export const getUser = async (enterLogin) =>
	fetch(`http://localhost:3005/users?login=${enterLogin}`)
		.then((response) => response.json())
		.then(([user]) => user && transformUser(user));
