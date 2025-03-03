import { Logo, Discription, ControlPanel } from './components';

export const Header = () => (
	<header className="flex flex-wrap items-center bg-indigo-400 text-slate-700 p-6 mb-5 text-center text-xl font-bold h-auto min-h-[120px] rounded-b-md shadow-[0px_12px_12px_-4px_#4f46e5] fixed w-full max-w-[1000px] justify-between gap-4 md:gap-2">
		<Logo />
		<Discription />
		<ControlPanel />
	</header>
);
