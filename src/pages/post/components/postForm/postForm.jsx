import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../../../../components';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { sanitizeContent } from './utils';
import { useServerRequest } from '../../../../hooks';
import { savePost } from '../../../../actions';
import { PROP_TYPE } from '../../../../constants';

export const PostForm = ({ post, post: { id, image_url, title, content } }) => {
	const [imageUrlValue, setImageUrlValue] = useState(image_url);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(image_url);
		setTitleValue(title);
	}, [image_url, title]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();
	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePost(requestServer, {
				id,
				image_url: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => {
		setImageUrlValue(target.value);
	};

	const onTitleChange = ({ target }) => {
		setTitleValue(target.value);
	};

	return (
		<div className="">
			<Input
				value={imageUrlValue}
				placeholder="Ссылка на картинку"
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4"
				onChange={onImageChange}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок"
				className="w-full border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2 mb-4 text-lg font-semibold"
				onChange={onTitleChange}
			/>
			<SpecialPanel
				id={id}
				post={post}
				editButton={
					<Button
						className={`fa fa-floppy-o text-blue-500 hover:text-blue-700 `}
						onClick={onSave}
					/>
				}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className=" text-gray-800 text-left leading-relaxed whitespace-pre-line min-h-20 border-black border-[1px] p-2 rounded-md"
			>
				{content}
			</div>
		</div>
	);
};

PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
