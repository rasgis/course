import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../../../constants';
import { Button } from '../../../button/Button';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const role_id = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], role_id);

	return (
		<div className="w-[120px]">
			<div className="flex justify-end pb-2">
				{role_id === ROLE.GUEST ? (
					<Button>
						<Link
							className="border-2 border-black px-2  rounded-lg hover:border-indigo-400"
							to="/login"
						>
							Войти
						</Link>
					</Button>
				) : (
					<>
						<span className="mr-2">{login}</span>
						<Button
							onClick={onLogout}
							className="fa fa-sign-out"
						/>
					</>
				)}
			</div>
			<div className="flex justify-end gap-4">
				<Button
					onClick={() => navigate(-1)}
					className="fa fa-backward"
				></Button>

				{isAdmin && (
					<>
						<Link
							to="/post"
							className="fa fa-file-text-o"
						></Link>

						<Link
							to="/users"
							className="fa fa-users"
						></Link>
					</>
				)}
			</div>
		</div>
	);
};
