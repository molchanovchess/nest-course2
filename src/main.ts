import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Define your CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  };

  // Enable CORS with the options
  app.enableCors(corsOptions);

  await app.listen(5000);
}
bootstrap();
