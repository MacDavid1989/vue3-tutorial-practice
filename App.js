const app = Vue.createApp({
  data() {
    return {
      url: "https://www.github.com",
      showBooks: false,
      books: [
        {
          title: "The Final Countdown",
          author: "Dave",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "Dust in the Wind",
          author: "Dave",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "Oathbreaker",
          author: "Dave",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
