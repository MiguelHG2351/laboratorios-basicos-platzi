class ItemStore {
  constructor(completed, title) {
    this.id = Date.now();
    this.completed = completed;
    this.title = title;
  }
}

class MyStore {
  store = () => {
    try {
      const storage = localStorage.getItem('mydayapp-js');
      const parse = JSON.parse(storage);

      return parse;
    } catch (e) {
      console.warn('Error parsing localStorage');
      return null;
    }
  };
  static instance = null;

  /**
   *
   * @returns {MyStore}
   */
  static initStore(initialState) {
    if (this.instance) return this.instance;
    this.instance = new MyStore(initialState);
    return this.instance;
  }

  /**
   *
   * @returns {ItemStore[]}
   */
  updateStore(store) {
    localStorage.setItem('mydayapp-js', JSON.stringify(store));
  }

  getStore() {
    return this.store();
  }

  addItem(title) {
    const store = this.store();
    const item = new ItemStore(false, title);
    store.push(item);
    this.updateStore(store);
  }

  toggleCompleted(id) {
    const store = this.store();
    const item = this.#findItem(store, id);
    item.completed = !item.completed;
    this.updateStore(store);
  }

  removeItem(id) {
    const store = this.store();
    const item = this.#findItem(store, id);
    const index = store.indexOf(item);
    store.splice(index, 1);
    localStorage.setItem('mydayapp-js', JSON.stringify(store));
  }

  /**
   * @param {Number} id
   * @returns {ItemStore}
   */
  #findItem(store, id) {
    const item = store.find((item) => item.id === id);

    return item;
  }

  constructor(initialState) {
    if (!this.store()) {
      let state = initialState;
      if (typeof state === 'undefined') {
        console.warn('No initial state provided');
        state = [];
      }
      localStorage.setItem('mydayapp-js', JSON.stringify(state));
    }
  }
}

export { MyStore };
