import { PROP_TYPE } from '../../constants';

export const Error = ({ error }) => {
	if (!error) return null;

	return (
		<div className="flex flex-col items-center justify-center  bg-inherit	min-h-screen">
			<div className="mb-8 text-center">
				<h3 className="text-8xl font-bold text-indigo-500">Ошибка</h3>
			</div>

			<h2 className="text-indigo-500 mb-8 text-5xl ">{error}</h2>

			<a
				href="/"
				className="px-6 py-3 bg-indigo-500 text-gray-100 font-bold text-lg rounded-lg shadow hover:bg-indigo-600 transition duration-300"
			>
				Вернуться на главную
			</a>
		</div>
	);
};

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
