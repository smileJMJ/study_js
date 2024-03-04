class ItemView {
  constructor() {
  }

  template(data, index) {
    return `<p key="${data}-${index}">${data}</p>`;
  }

  render(parent, data = []) {
    Array.isArray(data) && data?.length > 0 && data?.forEach((v, i) => 
      !parent?.querySelector(`[key="${v}-${i}"]`) && parent?.insertAdjacentHTML('beforeend', this.template(v, i))
    );
  }
}

export default ItemView;