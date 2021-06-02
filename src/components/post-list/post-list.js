import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

// create new component
const PostList = ({visiblePosts, onDelete, onToggleLiked, onToggleImportant}) => {
    const elements = visiblePosts.map(item => {
            const {id, ...itemProps} = item;

            return (
                <li 
                key={id} 
                className="list-group-item">
                    <PostListItem 
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    {...itemProps} />
                </li>
            )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;