import { EventEmiiter } from "events";
import dispatcher from "./appDispatcher";
import actionTypes from "./actionTypes";

const CHANGE_EVENT = "change";
let _posts = [];

class PostStore extends EventEmiiter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emitChange(CHANGE_EVENT);
  }

  getPosts() {
    return _posts;
  }
}

const store = new PostStore();
export default store;