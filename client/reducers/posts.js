// a reducer takes in two things

// 1. The action (info about what happened)
// 2. Copy of current state

// first time this function runs, the state is nothing, so we set it to be an empty array
// A reducer edits the state


function posts(state = [], action) {
    switch (action.type) {
    case 'INCREMENT_LIKES':
        const i = action.index;
        console.log('incrementing likes..');
        return [
            ...state.slice(0, i), // before the one we are updating
            {
                ...state[i],
                likes: state[i].likes + 1
            },
            ...state.slice(i + 1), // after the one we are updating
        ];
    // return the updated state
    default:
        return state;
    }
}

export default posts;