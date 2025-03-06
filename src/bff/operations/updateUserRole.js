import { setUserRole } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const updateUserRole = async (userSession, userId, roleId) => {
	const accessRoles = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	setUserRole(userId, roleId);
	return {
		error: null,
		res: true,
	};
};
