import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../../components';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { sanitizeContent } from './utils';
import { useServerRequest } from '../../../../hooks';
import { savePost } from '../../../../actions';

export const PostForm = ({ post, post: { id, image_url, title, content } }) => {
	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePost(requestServer, {
				id,
				image_url: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};

	return (
		<div className="">
			<Input
				ref={imageRef}
				defaultValue={image_url}
				placeholder="Ссылка на картинку"
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4"
			/>
			<Input
				ref={titleRef}
				defaultValue={title}
				placeholder="Заголовок"
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4 text-lg font-semibold"
			/>
			<SpecialPanel
				post={post}
				editButton={
					<Button
						className={`fa fa-floppy-o text-blue-500 hover:text-blue-700 mr-4`}
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className=" text-gray-800 text-left leading-relaxed whitespace-pre-line"
			>
				{content}
			</div>
		</div>
	);
};
