/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { createProxyMiddleware } from 'http-proxy-middleware'

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;
  app.enableCors();

  // this works, but will block every other route on the backend (/hello)
  // app.use('/', createProxyMiddleware({
  //   target: 'http://localhost:4200'
  // }))

  // this doesn't work anymore, wont load the scripts
  app.use('/proxy', createProxyMiddleware({
    target: 'http://localhost:4200',
    pathRewrite: {'/proxy': '/'}
  }))
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/`
  );
}

bootstrap();
