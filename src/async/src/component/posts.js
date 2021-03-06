import React from 'react';
import PropTypes from 'prop-type';

const Posts = ({ posts }) => <ul>{posts.map((post, i) => <li key={i}>{post.title}</li>)}</ul>;

Posts.PropTypes = {
	posts: PropTypes.array.isRequired
};

export default Posts;
