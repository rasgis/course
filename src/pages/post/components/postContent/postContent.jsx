import { Button } from '../../../../components';

export const PostContent = ({ post }) => {
	return (
		<div className="">
			<img
				src={post.image_url || 'image.jpg'}
				alt={post.title}
				className="w-[50%] max-w-[300px]  rounded-lg float-left mr-9 mb-2 "
			/>

			<h2 className=" text-black text-left mb-2 font-bold text-[24px]">
				{post.title}
			</h2>
			<div className=" text-black text-left mb-2 flex justify-between">
				<div>
					<Button
						className={`fa fa-calendar-o text-blue-500 hover:text-blue-700 mr-4 `}
						// onClick={}
					/>
					{post.published_at}
				</div>
				<div className="flex justify-start ">
					<Button
						className={`fa fa-pencil-square-o text-slate-500 hover:text-slate-700 mr-4`}
						// onClick={}
					/>{' '}
					<Button
						className={`fa fa-trash-o text-red-500 hover:text-red-700 `}
						// onClick={}
					/>
				</div>
			</div>
			<div className=" text-black text-left">{post.content}</div>
		</div>
	);
};
