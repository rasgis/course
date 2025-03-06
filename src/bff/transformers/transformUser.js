export const transformUser = (dbUser) => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	register_at: dbUser.register_at,
	role_id: dbUser.role_id,
});
