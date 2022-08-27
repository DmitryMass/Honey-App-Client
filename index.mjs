import fastify from 'fastify';
import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyStatic from '@fastify/static';
import * as dotenv from 'dotenv';
dotenv.config();
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

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
  server.get(element, async (request, reply) => {
    return reply.sendFile('index.html', join(__dirname, 'dist'));
  });
});

server
  .listen({
    port: process.env.PORT || 8081,
    host: '0.0.0.0',
  })
  .then(() => console.log(process.env.PORT));
