import { NestFactory } from '@nestjs/core';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { join } from 'path';
import { app as expressApp } from '../express/app';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  app.useStaticAssets(join(__dirname, '..', 'assets'));
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Nest API Example')
    .setDescription('Przykładowy projekt w Node.js i Typescript')
    .setVersion('1.0')
    .setBasePath('api')
    .addTag('user')
    // .addBearerAuth(config.TOKEN_HEADER_NAME, 'header')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);

}
bootstrap();
