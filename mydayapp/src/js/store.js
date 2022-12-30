class ItemStore {
  constructor(isCompleted, text) {
    this.isCompleted = isCompleted;
    this.text = text;
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

  getStore() {
    console.log(this.store());
  }

  addItem(text) {
    const store = this.store();
    const item = new ItemStore(false, text);
    store.push(item);
    localStorage.setItem('mydayapp-js', JSON.stringify(store));
  }

  findItem(id) {
    const store = this.store();
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
