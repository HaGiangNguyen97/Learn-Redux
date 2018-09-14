export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function selectSubreddit(subreddit) {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	};
}

export function invalidateSubreddit(subreddit) {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	};
}

export function requestPosts(subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	};
}
export function receivePosts(subreddit, json) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		post: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	};
}

const fetchPosts = subreddit => dispatch => {
	dispatch(requestPosts(subreddit));
	return fetch(`https://www.reddit.com/r/${subreddit}.json`)
		.then(response => response.json())
		.then(json => dispatch(receivePosts(subreddit, json)));
};

const shouldFetchPosts = (state, subreddit) => {
	const posts = state.postsBySubreddit[subreddit];
	if (!posts) {
		return true;
	}
	if (posts.isFetching) {
		return false;
	}
	return posts.didInvalidate;
};
export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
	if (shouldFetchPosts(getState(), subreddit)) {
		return dispatch(fetchPosts(subreddit));
	}
};
