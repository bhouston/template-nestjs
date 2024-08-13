import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const initializeGlobalValidation = (app: INestApplication<any>) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
};

const initializeSwagger = (app: INestApplication<any>) => {
  // Create Swagger options
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Set up the Swagger module
  SwaggerModule.setup('api-docs', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initializeGlobalValidation(app);
  app.setGlobalPrefix('api');

  initializeSwagger(app);

  await app.listen(3000);
}
bootstrap();
