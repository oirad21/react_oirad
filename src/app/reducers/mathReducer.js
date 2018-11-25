const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type.toUpperCase()) {
        // the fulfilled suffix comes from the redux-promise-middleware
        case "MATH_ADD_FULFILLED":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        case "MATH_SUB":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        default:
    }

    return state;
}

export default mathReducer;
