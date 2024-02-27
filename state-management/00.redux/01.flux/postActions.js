import dispatcher from "./appDispatcher";
import actionTypes from "./actionTypes";

export function getPosts() {
  dispatcher.dispatch({
    actionTypes: actionTypes.GET_POSTS,
    posts: [
      {
        "id": 1,
        "title": "Hello World",
        "author": "Sharvin Shah",
        "body": "Example of blog application"
      },
      {
        "id": 2,
        "title": "Hello Again",
        "author": "John Doe",
        "body": "Testing another component"
      }
    ]
  })
}