import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Modal } from './components';
import { NotFound, Users, Post, Authorization, Registration, Main } from './pages';
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
			<div className="max-w-[1000px] min-h-screen mx-auto flex flex-col relative">
				<Header />
				<Page className="flex-1 w-full ">
					<div className="max-w-6xl mx-auto bg-teal-200 shadow-lg rounded-lg p-4 md:p-6 min-h-[calc(100vh-120px)] ">
						<Routes>
							<Route
								path="/"
								element={<Main />}
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
								element={<Post />}
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
