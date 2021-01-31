const postReducer = (state = {posts: [], loading: false}, action) => {
    // let index;
    // let post;

    switch (action.type) {
        case "LOADING_POSTS":
            return {
                ...state,
                loading: true
            }
        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case "ADD_POST":
            return {
                ...state,
                loading: true
            }
        case "POST_ADDED":
            return {
                ...state,
                posts: [...state.posts, action.payload],
                loading: false
            }

    default:
        return state;
    }
}  

export default postReducer