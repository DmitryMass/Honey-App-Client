import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyHttpProxy from '@fastify/http-proxy';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROUTES = ['/'];

const server = fastify({
  logger: true,
});

server.register(fastifyStatic, {
  root: join(__dirname, 'dist'),
});

server.register(fastifyHttpProxy, {
  upstream: 'https://honey-app-server.herokuapp.com/api',
  prefix: '/api',
  // http: true,
});

ROUTES.forEach((element) => {
  console.log(element);
  server.get(element, async (request, reply) => {
    return reply.sendFile('index.html', join(__dirname, 'dist'));
  });
});

server
  .listen({
    port: process.env.PORT || 8082,
    host: '0.0.0.0',
  })
  .then(() => console.log(process.env.PORT));
