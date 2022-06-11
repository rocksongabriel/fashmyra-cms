module.exports = ({ env }) => ({
  url: env("PRODUCTION_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
