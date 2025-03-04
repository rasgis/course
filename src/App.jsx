import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { NotFound, Users } from './pages';
import { Authorization, Registration } from './pages';

const Content = ({ className, children }) => (
	<main className={className}>{children}</main>
);

export const App = () => {
	return (
		<div className="min-h-screen bg-gray-900 ">
			<div className="max-w-[1000px] min-h-screen mx-auto flex flex-col">
				<Header />
				<Content className="flex-1 w-full ">
					<div className="max-w-6xl mx-auto bg-teal-200 shadow-lg rounded-lg p-4 md:p-6 min-h-[calc(100vh-120px)] ">
						<Routes>
							<Route
								path="/"
								element={
									<div className="flex justify-center items-center h-full w-full pt-[130px]">
										<h3 className="text-2xl font-medium text-blue-500 text-center ">
											Главная страница
										</h3>
									</div>
								}
							/>
							<Route
								path="/login"
								element={<Authorization />}
							/>
							<Route
								path="/register"
								element={<Registration />}
							/>
							<Route
								path="/users"
								element={<Users />}
							/>
							<Route
								path="/post/:postId"
								element={
									<div className="flex justify-center items-center h-full pt-[130px]">
										<h3 className="text-lg font-medium text-red-500">
											Статьи
										</h3>
									</div>
								}
							/>
							<Route
								path="/post"
								element={
									<div className="flex justify-center items-center h-full pt-[130px]">
										<h3 className="text-lg font-medium text-indigo-500">
											Новая Статья
										</h3>
									</div>
								}
							/>
							<Route
								path="*"
								element={<NotFound />}
							/>
						</Routes>
					</div>
				</Content>
				<Footer />
			</div>
		</div>
	);
};
