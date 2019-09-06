import { ADD_ARTICLES } from "../constants/action-type";
const initialState = {
    articles: []
}
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLES) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};
export default rootReducer;