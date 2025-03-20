import { setPostData } from './setPostData';

export const addComment = (requestServer, userId, postId, content) => (dispatch) => {
	requestServer('addPostComment', userId, postId, content).then((postData) => {
		dispatch(setPostData(postData.res));
	});
};
