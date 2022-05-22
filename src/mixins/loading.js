export const loading = {
  data() {
    return {
      loading: false
    };
  },

  methods: {
    showLoader(state) {
      this.loading = state;
    }
  }
};
