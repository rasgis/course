import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { NotFound, Users, Post, Authorization, Registration } from './pages';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { useLayoutEffect } from 'react';

const Page = ({ className, children }) => <main className={className}>{children}</main>;

export const App = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		); //! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Number
	}, [dispatch]);

	return (
		<div className="min-h-screen bg-gray-900 ">
			<div className="max-w-[1000px] min-h-screen mx-auto flex flex-col">
				<Header />
				<Page className="flex-1 w-full ">
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
								path="/post/:id"
								element={<Post />}
							/>
							<Route
								path="/post/:id/edit"
								element={<Post />}
							/>
							<Route
								path="*"
								element={<NotFound />}
							/>
						</Routes>
					</div>
				</Page>
				<Footer />
				<Modal />
			</div>
		</div>
	);
};
