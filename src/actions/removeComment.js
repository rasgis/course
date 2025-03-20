import { setPostData } from './setPostData';
export const removeComment = (requestServer, postId, id) => (dispatch) => {
	requestServer('removePostComment', postId, id).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
