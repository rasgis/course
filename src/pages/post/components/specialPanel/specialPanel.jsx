import { Button } from '../../../../components';

export const SpecialPanel = ({ post, editButton }) => {
	return (
		<>
			<div className=" text-gray-700 text-left mb-4 flex justify-between items-center border-b pb-2">
				<div className="flex items-center">
					<Button
						className={`fa fa-calendar-o text-blue-500 hover:text-blue-700 mr-4 `}
						// onClick={}
					/>
					{post.published_at}
				</div>
				<div className="flex justify-start ">
					{editButton}
					<Button
						className={`fa fa-trash-o text-red-500 hover:text-red-700 `}
						// onClick={}
					/>
				</div>
			</div>
		</>
	);
};
