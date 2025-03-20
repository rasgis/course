import { Button } from '../../../../../../components';

export const Comment = ({ id, author, content, published_at }) => {
	return (
		<div className=" flex ">
			<div className="mb-2 border-solid border-2 border-gray-300 shadow-sm  bg-white text-gray-700 p-2 rounded-md w-[100%] mx-auto">
				<div className="flex justify-between ">
					<div className="flex justify-between">
						<Button className="fa fa-user-circle-o text-blue-500 hover:text-blue-700 mx-2 " />
						{author}
					</div>
					<div className="flex justify-between ">
						<Button className="fa fa-calendar-o text-blue-500 hover:text-blue-700 mr-2 " />
						{published_at}
					</div>
				</div>
				<div className="text-black text-left ml-2">{content}</div>
			</div>
			<Button className="fa fa-trash-o text-red-500 hover:text-red-700 ml-2 fa-lg" />
		</div>
	);
};
