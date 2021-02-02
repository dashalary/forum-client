export const getPosts = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_POSTS"})
        fetch ('/posts')
        .then(res => res.json())
        .then(posts => dispatch({type: "FETCH_POSTS", payload: posts}))
    }
}

export const addPost = post => {
    return (dispatch) => {
        dispatch({type: "ADD_POST"})
        fetch ('/posts', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(post => dispatch({type: "POST_ADDED", payload: post}))
    }
}

export const addComment = (comment, postId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      .then(res => res.json())
      .then(post => {
            dispatch({type: 'ADD_COMMENT', payload: post})
          }
      )
    }
}

export const deleteComment = (commentId, postId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/posts/${postId}/comments/${commentId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(post => dispatch({type: 'DELETE_COMMENT', payload: post}))
    }
}