/* since this is a small app one actioncreator file is engouh if you have complex app better to seperate
actionCreator for different components */

//increment likes payload is the index, an action only pass along necessary information of the change

export const increment => index {
    return {
        type: 'INCREMENT_LIKES',
        index
    }    
}
//add comment

export const addComment => (postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment

export const removeComment => (postId, indexToRemove) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        indexToRemove
    }
}

//change of route will be handle by react-router-redux not in actionCreators

 