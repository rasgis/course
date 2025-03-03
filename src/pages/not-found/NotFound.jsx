export const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-inherit">
			<div className="mb-8">
				<h1 className="text-9xl font-bold text-indigo-500">404</h1>
				<p className="text-7xl font-medium text-gray-700 mt-4">
					Страница не найдена
				</p>
			</div>
			<div className="text-center max-w-md">
				<p className="text-gray-600 mb-8">
					Кажется, запрашиваемая вами страница не существует или была
					перемещена.
				</p>
			</div>
			<a
				href="/"
				className="px-6 py-3 bg-indigo-500 text-gray-700 font-bold text-lg rounded-lg shadow hover:bg-indigo-600 transition duration-300"
			>
				Вернуться на главную
			</a>
		</div>
	);
};
