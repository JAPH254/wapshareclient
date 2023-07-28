import React from 'react';

function SingleComment({comment}) {
    return (
        <div>
            <p>{comment.CONTENT}</p>
        </div>
    );
}

export default SingleComment;