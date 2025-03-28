import { Button, Input } from '../../../../components';

export const Search = ({ searchPhrase, onChange }) => {
	return (
		<div className="flex justify-center mt-6">
			<div className="relative w-1/2">
				<Input
					className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Поиск..."
					value={searchPhrase}
					onChange={onChange}
				/>
				<Button className="absolute inset-y-0 right-2 flex items-center px-3 text-gray-500 cursor-default">
					<i className="fa fa-search"></i>
				</Button>
			</div>
		</div>
	);
};
