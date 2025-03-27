import { Button } from '../../../../components';

export const Pagination = ({ page, setPage }) => {
	return (
		<div className="flex justify-center items-center mt-6 space-x-3">
			<Button
				disabled={page === 1}
				onClick={() => setPage(1)}
				className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-200"
			>
				⏮ В начало
			</Button>

			<Button
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
				className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-default disabled:hover:bg-blue-500"
			>
				◀ Предыдущая
			</Button>

			<div className="px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md text-lg font-semibold text-black">
				{page}
			</div>

			<Button
				onClick={() => {
					setPage(page + 1);
				}}
				className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-default disabled:hover:bg-blue-500"
			>
				Следующая ▶
			</Button>

			<Button
				onClick={() => setPage(1)}
				className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-default disabled:hover:bg-gray-200"
			>
				В конец ⏭
			</Button>
		</div>
	);
};
