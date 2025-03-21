import { Button, Input } from '../../../../components';

export const PostForm = ({ post }) => {
	return (
		<div className="">
			<Input
				defaultValue={post.image_url}
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4"
			/>
			<Input
				defaultValue={post.title}
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4 text-lg font-semibold"
			/>
			<div className=" text-gray-700 text-left mb-4 flex justify-between items-center border-b pb-2">
				<div className="flex items-center">
					<Button
						className={`fa fa-calendar-o text-blue-500 hover:text-blue-700 mr-4 `}
						// onClick={}
					/>
					{post.published_at}
				</div>
				<div className="flex justify-start ">
					<Button
						className={`fa fa-floppy-o text-blue-500 hover:text-blue-700 mr-4`}
						// onClick={}
					/>{' '}
					<Button
						className={`fa fa-trash-o text-red-500 hover:text-red-700 `}
						// onClick={}
					/>
				</div>
			</div>
			<div
				contentEditable={true}
				suppressContentEditableWarning={true}
				className=" text-gray-800 text-left leading-relaxed whitespace-pre-line"
			>
				{post.content}
			</div>
		</div>
	);
};
