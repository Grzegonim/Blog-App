//selectors
export const postsList = state => state.posts;
// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;