// next.config.js
module.exports = {
  // Indicates where your application should start from. Required for static export.
  exportPathMap: async function () {
    return {
      target: "server",
      "/": { page: "/" },
      "/beach": { page: "/beach" },
      // Add other pages you want to export as static HTML here
    };
  },
};
