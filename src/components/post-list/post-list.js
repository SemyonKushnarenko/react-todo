import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

// create new component
const PostList = ({data, onDelete}) => {
    const elements = data.map(item => {

        if (typeof(item) === "object" && isEmpty(item)) {
            const {id, ...itemProps} = item;

            return (
                <li 
                key={id} 
                className="list-group-item">
                    <PostListItem 
                    onDelete={ () => onDelete(id)} 
                    {...itemProps} />
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for (let key in obj) {
            if (key) {
                return true
            } else {
                return false
            }
        }
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;