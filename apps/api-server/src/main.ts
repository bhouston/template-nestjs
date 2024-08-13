import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule
} from '@nestjs/swagger';

const initializeGlobalValidation = (app: INestApplication<any>) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );
};

const initializeSwagger = (app: INestApplication<any>) => {
  // Create Swagger options
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('files', 'Operations related to files')
    .addTag('users', 'Operations related to users')
    .addTag('orgs', 'Operations related to organizations')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      `${controllerKey.replace('Controller', '')}_${methodKey}`
  };

  // Create Swagger document
  const document = SwaggerModule.createDocument(app, config, options);

  // Set up the Swagger module
  SwaggerModule.setup('api-docs', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  initializeGlobalValidation(app);
  initializeSwagger(app);

  await app.listen(3000);
}

bootstrap();
