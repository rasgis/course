import { setPostData } from './setPostData';

export const loadPost = (requestServer, id) => (dispatch) => {
	requestServer('fetchPost', id).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
