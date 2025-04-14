import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const cookieSession = require('cookie-session'); // we need to write it like this, it has compatilability issues with TS

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.use(
    // activate cookie-section
    cookieSession({
      keys: ['asdf'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }), // we want validation pipe for all requests
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
