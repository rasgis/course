import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROLE } from '../../constants';
import { server } from '../../bff';
import { Input, Button } from '../../components';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { useResetForm, useScroll } from '../../hooks';

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверный логин, допускаются только буквы и цифры')
		.min(3, 'Минимум 3 символа')
		.max(20, 'Максимум 20 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль, допускаются буквы, цифры и знаки # %',
		)
		.min(6, 'Минимум 6 символов')
		.max(30, 'Максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Повторите пароль')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const role_id = useSelector(selectUserRole);

	useResetForm(reset);
	useScroll();

	const onSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса ${error}`);
			}

			dispatch(setUser(res));
			sessionStorage.setItem('userData', JSON.stringify(res));
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMessage = formError || serverError;

	if (role_id !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className="flex min-h-screen min-w-full items-center justify-center  bg-inherit">
			<div className="max-w-md w-full p-6 bg-indigo-400 rounded-lg shadow-[10px_12px_12px_-2px_#4f46e5]">
				<h2 className="max-w-md mx-auto p-4 bg-inherit rounded-md text-sky-950 font-bold font-serif text-4xl mb-3 text-center">
					Регистрация
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div>
						<label
							htmlFor="login"
							className="block text-sm font-medium text-slate-700"
						>
							Логин
						</label>
						<Input
							type="text"
							id="login"
							{...register('login', {
								onChange: () => setServerError(null),
							})}
							className={`mt-1 block w-full px-3 py-2 border rounded-md focus:shadow-[10px_10px_8px_-4px_#78f5da] hover:shadow-[10px_10px_8px_-4px_#78f5da] text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${
								errors.login ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder="Введите логин"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-slate-700"
						>
							Пароль
						</label>
						<Input
							type="password"
							id="password"
							{...register('password', {
								onChange: () => setServerError(null),
							})}
							className={`mt-1 block w-full px-3 py-2 border rounded-md focus:shadow-[10px_10px_8px_-4px_#78f5da] hover:shadow-[10px_10px_8px_-4px_#78f5da] text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${
								errors.password ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder="Введите пароль"
						/>
					</div>
					<div>
						<label
							htmlFor="passcheck"
							className="block text-sm font-medium text-slate-700"
						>
							Повторите пароль
						</label>
						<Input
							type="password"
							id="passcheck"
							{...register('passcheck', {
								onChange: () => setServerError(null),
							})}
							className={`mt-1 block w-full px-3 py-2 border rounded-md focus:shadow-[10px_10px_8px_-4px_#78f5da] hover:shadow-[10px_10px_8px_-4px_#78f5da] text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${
								errors.password ? 'border-red-500' : 'border-gray-300'
							}`}
							placeholder="Введите пароль"
						/>
					</div>
					{errorMessage && (
						<p className="text-red-500 text-sm mt-1">{errorMessage}</p>
					)}
					<Button
						type="submit"
						disabled={!!formError || !!serverError}
						className={`w-full py-2 px-4 border border-transparent rounded-md  text-sm font-medium text-white ${
							!!formError || !!serverError
								? 'bg-gray-300 cursor-not-allowed'
								: 'bg-black text-gray-300 border-2 border-indigo-950  hover:bg-violet-800 hover:shadow-[10px_10px_8px_-4px_#78f5da]'
						}`}
					>
						Зарегистрироваться
					</Button>
				</form>
			</div>
		</div>
	);
};
