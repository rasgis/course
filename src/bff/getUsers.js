export const getUsers = async () => {
	try {
		const response = await fetch('http://localhost:3005/users');
		const users = await response.json();
		return users;
	} catch (error) {
		console.error('Ошибка при загрузке пользователей:', error);
		return null;
	}
};
