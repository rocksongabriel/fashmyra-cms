module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'fashmyra_cms_db'),
      user: env('DATABASE_USERNAME', 'fashmyra_admin_user'),
      password: env('DATABASE_PASSWORD', 'testpass1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
