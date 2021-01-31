export const getPosts = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_POSTS"})
        fetch ('/posts')
        .then(res => res.json())
        .then(posts => dispatch({type: "FETCH_POSTS", payload: posts}))
    }
}