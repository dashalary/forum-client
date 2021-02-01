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