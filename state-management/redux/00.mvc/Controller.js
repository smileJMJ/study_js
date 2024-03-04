/**
 * MVC: Controller -> Model -><- View 
 * - View에서 받은 데이터로 Model을 업데이트 할 수 있음
 * - 양방향 데이터 통신이 가능한 상황 (Model->View, View->Model 데이터 흐름이 양방향이며, Model과 View는 서로 밀접한 관계)
 */

import View from './View.js';
import ItemView from './ItemView.js';
import Model from './Model.js';

class Controller {
  $parent;

  constructor(parent) {
    this.$parent = parent;
    this.model = new Model();
    this.view = new View(this.$parent, (keyword) => this.setState(keyword));
    this.itemView = new ItemView();

    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.view.render(this.$parent);
  }

  mounted() {
    const $listWrap = this.$parent?.querySelector('.list-wrap');
    this.itemView.render($listWrap, this.model.state.data);
  }

  setState(keyword) {
    this.model.addData(keyword);
    this.mounted();
  }
}

export default Controller;