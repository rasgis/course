import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components';

export const PostCard = ({ id, title, image_url, published_at, commentsCount }) => {
	return (
		<div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_#4f46e5] flex flex-col w-full max-w-[280px] mx-auto sm:mx-2">
			<Link
				to={`/post/${id}`}
				className="flex flex-col h-full"
			>
				<div className="p-3">
					<img
						src={image_url}
						alt={title}
						className="w-full h-40 object-cover rounded-lg"
					/>
				</div>
				<div className="px-4 pb-4 flex flex-col flex-grow">
					<h3 className="text-md font-semibold text-gray-900 mb-3">{title}</h3>
					<div className="mt-auto flex justify-between text-gray-500 text-sm">
						<div className="flex items-center gap-2">
							<Button className="fa fa-calendar-o text-blue-500" />
							{published_at}
						</div>
						<div className="flex items-center gap-2">
							<Button className="fa fa-comment-o text-gray-500" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image_url: PropTypes.string.isRequired,
	published_at: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
