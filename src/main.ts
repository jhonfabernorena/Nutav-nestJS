import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('NUTAV_PRO API')
    .setDescription(
      'The NUTAV_PRO API is a page for turists and guides in antioquia.',
    )
    .setVersion('1.0')
    .addTag('NUTAV_PRO')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('/v1/api');
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/v1/api`);
}
bootstrap();
