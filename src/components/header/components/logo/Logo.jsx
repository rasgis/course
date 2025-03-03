import { Link } from 'react-router-dom';

export const Logo = () => (
	<Link
		className="flex"
		to="/"
	>
		<i
			className="fa fa-code text-[68px] mr-3"
			aria-hidden="true"
		></i>
		<div className="flex flex-col justify-between ">
			<div className="flex font-medium text-[48px] justify-start mb-2">Блог </div>
			<div className="flex font-bold text-[18px] justify-start">
				веб-разработчика
			</div>
		</div>
	</Link>
);
