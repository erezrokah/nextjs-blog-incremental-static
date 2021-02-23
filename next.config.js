module.exports = {
  target: "serverless",
  functions: {
    "pages/index.js": {
      includeFiles: "posts/**/*.md",
    },
    "pages/posts/[id].js": {
      includeFiles: "posts/**/*.md",
    },
  },
};
