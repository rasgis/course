export const Content = ({ children, error }) =>
	error ? (
		<>
			<h2 className="text-2xl font-medium text-orange-500 mb-6">Ошибка</h2>
			<p className="text-orange-500 mb-6">{error}</p>
		</>
	) : (
		children
	);
