import { Button } from '../../../../components';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { useNavigate } from 'react-router-dom';

export const PostContent = ({ post, post: { id, image_url, title, content } }) => {
	const navigate = useNavigate();
	return (
		<div className="">
			<img
				src={image_url || 'image.jpg'}
				alt={title}
				className="w-[50%] max-w-[300px]  rounded-lg float-left mr-9 mb-2 "
			/>

			<h2 className=" text-black text-left mb-2 font-bold text-[24px]">{title}</h2>
			<SpecialPanel
				id={id}
				post={post}
				editButton={
					<Button
						className={`fa fa-pencil-square-o text-slate-500 hover:text-slate-700 mr-4`}
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>

			<div className=" text-black text-left whitespace-pre-line">{content}</div>
		</div>
	);
};
