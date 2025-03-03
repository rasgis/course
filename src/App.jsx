import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { NotFound } from './pages';
import { Authorization } from './pages';

const Content = ({ className, children }) => (
	<main className={className}>{children}</main>
);

export const App = () => {
	return (
		<div className="flex flex-col justify-between w-[1000px] min-h-full mx-auto bg-slate-50 text-gray-900 min-w-[700px">
			<Header />
			<Content className="flex-1 w-full max-w-6xl mx-auto bg-teal-200 shadow-lg rounded-lg p-4 md:p-6 min-h-[calc(100vh-120px)]">
				<Routes>
					<Route
						path="/"
						element={
							<h3 className="text-lg font-medium text-blue-500">
								Главная страница
							</h3>
						}
					/>
					<Route
						path="/login"
						element={<Authorization />}
					/>
					<Route
						path="/register"
						element={
							<h3 className="text-lg font-medium text-purple-500">
								Регистрация
							</h3>
						}
					/>
					<Route
						path="/users"
						element={
							<h3 className="text-lg font-medium text-orange-500">
								Страница пользователей
							</h3>
						}
					/>
					<Route
						path="/post/:postId"
						element={
							<h3 className="text-lg font-medium text-red-500">Статьи</h3>
						}
					/>
					<Route
						path="/post"
						element={
							<h3 className="text-lg font-medium text-indigo-500">
								Новая Статья
							</h3>
						}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Content>

			<Footer />
		</div>
	);
};
