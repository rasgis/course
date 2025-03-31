import { setPostData } from './setPostData';

export const loadPost = (requestServer, id) => (dispatch) =>
	requestServer('fetchPost', id).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res));
		}
		return postData;
	});
