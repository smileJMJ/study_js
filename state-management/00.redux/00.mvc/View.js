class View {
  constructor(parent, callback) {
    this.$parent = parent;
    this.changeCallback = callback;
  }

  template() {
    return (`
      <div class="list-wrap"></div>
      <div class="btn-wrap">
        <input type="text" id="keyword" />
        <button class="btn-add">+ 추가</button>
      </div>
    `);
  }

  render(parent) {
    parent?.insertAdjacentHTML('beforeend', this.template());
    this.addEvent();
  }

  addEvent() {
    this.$parent?.addEventListener('click', e => {
      const target = e.target;
      if(target?.classList?.contains('btn-add')) {
        const keyword = document.querySelector('#keyword').value;
        typeof this.changeCallback === 'function' && this.changeCallback(keyword); // View에서 받은 데이터로 Model을 업데이트함
      }
    });
  }
}

export default View;