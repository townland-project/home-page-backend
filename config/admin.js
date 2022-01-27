module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '81835db5bda291f9403a5537e27d8948'),
  },
});
