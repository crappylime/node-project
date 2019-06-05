import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

import { app as expressApp } from '../express/app';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Nest API Example')
    .setDescription('Przykładowy projekt w Node.js i Typescript')
    .setVersion('1.0')
    .addTag('user')
    // .addBearerAuth(config.TOKEN_HEADER_NAME, 'header')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);

}
bootstrap();
