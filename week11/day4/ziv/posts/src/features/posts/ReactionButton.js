import { useDispatch } from "react-redux";
import { addreaction } from "./postsSlice";
import {memo} from 'react';
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {

  console.log('ReactionButton render');
  const dispatch = useDispatch();
  const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        onClick={() => dispatch(addreaction({ id: post.id, name }))}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{renderReactions}</div>;
};
export default memo(ReactionButton);
