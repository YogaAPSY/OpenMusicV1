module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, options) => {
    const songs = options.songs;
    server.route([
      {
        method: 'GET',
        path: '/songs',
        handler: () => {
          return songs;
        }
      }
    ])
  },
};