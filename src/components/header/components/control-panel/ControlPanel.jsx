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

export const ControlPanel = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	return (
		<div className="w-[120px]">
			<div className="flex justify-end pb-2">
				{roleId === ROLE.GUEST ? (
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
							onClick={() => dispatch(logout(session))}
							className="fa fa-sign-out"
							aria-hidden="true"
						/>
					</>
				)}
			</div>
			<div className="flex justify-end gap-4">
				<Button
					onClick={() => navigate(-1)}
					className="fa fa-backward"
					aria-hidden="true"
				></Button>

				<Link
					to="/post"
					className="fa fa-file-text-o"
					aria-hidden="true"
				></Link>

				<Link
					to="/users"
					className="fa fa-users"
					aria-hidden="true"
				></Link>
			</div>
		</div>
	);
};
