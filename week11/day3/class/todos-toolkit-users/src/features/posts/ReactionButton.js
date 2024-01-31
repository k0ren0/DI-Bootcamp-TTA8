import React from 'react';
import { useDispatch } from 'react-redux';
import { addReactionToPost } from './postsSlice'; // Import the action creator

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();

    const handleReactionClick = (reactionType) => {
        dispatch(addReactionToPost({ postId: post.id, reaction: reactionType }));
    };

    const renderButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() => handleReactionClick(name)}
        >
            {emoji} {post.reactions[name]}
        </button>
    ));

    return <div>{renderButtons}</div>;
};

export default ReactionButton;
