import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Library_PRO API')
    .setDescription(
      'The library API is a simple manager system that allows you to manage books and authors.',
    )
    .setVersion('1.0')
    .addTag('library')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('/v1/api');
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/v1/api
  `);

  console.log(`Swagger is running on: http://localhost:${port}/api`);
}
bootstrap();
