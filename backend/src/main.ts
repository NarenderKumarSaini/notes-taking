import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(port);
  console.log(`Listining on port ${port}`)
}
bootstrap();
