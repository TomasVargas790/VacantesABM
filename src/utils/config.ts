import { registerAs } from '@nestjs/config';
export default registerAs('config', () => ({
  postgres: {
    name: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    host: process.env.POSTGRES_HOST,
  },
}));
