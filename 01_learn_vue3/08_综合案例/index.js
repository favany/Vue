const App = {
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: '《Unix编程艺术》',
          date: '2006-2',
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2008-10',
          price: 32.0,
          count: 1,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      let sum = 0;
      for (let book of this.books) {
        sum += book.price * book.count;
      }
      return sum;
    },
  },
  methods: {
    increase(index) {
      this.books[index].count++;
    },
    decrease(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    addSymbol(price) {
      return '¥' + price;
    },
  },
};

Vue.createApp(App).mount('#app');
