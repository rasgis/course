import PropTypes from 'prop-types';
import { ROLE } from './role';

export const PROP_TYPE = {
	ROLE: PropTypes.oneOf(Object.values(ROLE)),
	ERROR: PropTypes.oneOfType([PropTypes.string, PropTypes.exact(null)]),
	COMMENT: PropTypes.shape({
		id: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		published_at: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	}),
	POST: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		published_at: PropTypes.string.isRequired,
	}),
};
