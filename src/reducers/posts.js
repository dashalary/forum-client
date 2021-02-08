const postReducer = (state = {posts: [], loading: false}, action) => {

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
        // case 'DELETE_POST':
        //     let posts = state.posts.filter(post => post.id !== action.id);
        //     return { ...state, posts: posts}

        case 'EDIT_POST':
            let postEdit = state.posts.map(post => {
                if (post.id === action.payload.id) {
                return action.payload
                } else {
                return post
                }
            })
            return {...state, posts: postEdit}

        case 'ADD_COMMENT':
            let p = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })
            return {...state, posts: p}
        
        case 'DELETE_COMMENT': 
            let postsDelete = state.posts.map(post => {
                if (post.id === action.payload.id) {
                return action.payload
                } else {
                return post
                }
            })
            return {...state, posts: postsDelete}

        case 'LIKE_POST':
            let newPosts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    const counter = post.likes += 1
                    return {...post, likes: counter}
                } else {
                    return post
                }
            })
            return {...state, posts: newPosts}

    default:
        return state;
    }
}  

export default postReducer