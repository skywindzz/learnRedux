/* since this is a small app one actioncreator file is engouh if you have complex app better to seperate
actionCreator for different components */

//increment likes payload is the index, an action only pass along necessary information of the change

export const increment = index => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }    
}
//add comment

export const addComment = (postId, author, comment) => {
    console.log('from actionCreater' );
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment

export const removeComment = (postId, i) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}

//change of route will be handle by react-router-redux not in actionCreators

 function printNumbers() {
     for (let i = 0; i < 10; i++) {
         setTimeout(function() {
             console.log(i)
         }, i * 100)
     }
 }

 printNumbers();