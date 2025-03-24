import { setPostData } from './setPostData';

export const savePost = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostData(updatedPost.res));
	});
