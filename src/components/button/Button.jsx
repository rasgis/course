import PropTypes from 'prop-types';

export const Button = ({ children, ...props }) => {
	return <button {...props}> {children}</button>;
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
};
