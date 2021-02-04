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

        case "FETCH_COMMENTS":
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        case "LOADING_COMMENTS":
            return {
                ...state,
                loading: true
            }
        case 'ADD_COMMENT':
            let p = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                } else {
                    return post
                }
            })
            return {...state, posts: p}
        
        // case "COMMENT_ADDED":
        //     return {
        //         ...state,
        //         posts: [...state.posts, action.payload],
        //         loading: false
        //     }
        case 'DELETE_COMMENT': 
            let postsDelete = state.posts.map(post => {
                if (post.id === action.payload.id) {
                return action.payload
                } else {
                return post
                }
            })
            return {...state, posts: postsDelete}

    default:
        return state;
    }
}  

export default postReducer