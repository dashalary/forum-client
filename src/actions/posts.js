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

export const editPost = (post) => {
  return (dispatch) => {
    fetch(`/posts/${post.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({type: 'EDIT_POST', payload: post}))
  }
}

export const likePost = (post) => {
  return (dispatch) => {
    fetch(`/posts/${post.id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => dispatch({type: 'LIKE_POST', payload: post}))
  }
}

export const addComment = (comment, postId) => {
    return (dispatch) => {
      fetch(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(post => {dispatch({type: 'ADD_COMMENT', payload: post})
     })
    }
}

export const deleteComment = (commentId, postId) => {
    return (dispatch) => {
      fetch(`/posts/${postId}/comments/${commentId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(post => dispatch({type: 'DELETE_COMMENT', payload: post}))
    }
}