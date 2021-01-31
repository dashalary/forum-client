export default (state = [], action) => {
    let index;
    let post;

    switch (action.type) {

        case 'ADD_POST':
          return [...state, action.post]

    default:
        return state;
    }
}  