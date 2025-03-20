import { useSelector } from 'react-redux';
import { Button } from '../button/Button';
import {
	selectModalIsOpen,
	selectModalText,
	selectModalOnConfirm,
	selectModalOnCancel,
} from '../../selectors';

export const Modal = () => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
			<div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] max-w-full text-center animate-fadeIn">
				<h3 className="text-2xl font-bold text-gray-900 mb-4">
					Удалить комментарий?
				</h3>
				<p className="text-gray-600 text-sm mb-6">{text}</p>
				<div className="flex justify-center gap-4">
					<Button
						className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-200"
						onClick={onConfirm}
					>
						<i className="fa fa-check mr-2"></i>Да
					</Button>
					<Button
						className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200"
						onClick={onCancel}
					>
						<i className="fa fa-close mr-2"></i>Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};
