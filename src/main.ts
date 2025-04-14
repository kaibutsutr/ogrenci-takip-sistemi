import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const cookieSession = require('cookie-session'); // we need to write it like this, it has compatilability issues with TS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    // activate cookie-section
    cookieSession({
      keys: ['asdf'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }), // we want validation pipe for all requests
  );
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap(); //main entry
