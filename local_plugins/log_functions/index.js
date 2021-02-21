module.exports = {
  async onPostBuild({
    constants,
    utils: {
      run: { command },
    },
  }) {
    try {
      await command(`ls -lh ${constants.FUNCTIONS_SRC}/next_index`);
      await command(`ls -lh ${constants.FUNCTIONS_SRC}/next_posts_id`);
    } catch (error) {
      console.log(error.message);
    }
  },
};
