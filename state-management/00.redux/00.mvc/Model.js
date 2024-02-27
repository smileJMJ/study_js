class Model {
  #state;

  constructor() {
    this.#state = {
      count: 0,
      data: []
    };
  }

  addData(keyword) {
    this.#state = {
      count: this.#state.count + 1,
      data: this.#state.data.concat([keyword])
    }
  }

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = {...this.#state, value};
  }
}

export default Model;