/* eslint-disable prettier/prettier */
//!default setup for nest
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

//! custom validation pipe and advanced validation
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ✅ শুধুমাত্র DTO-তে থাকা property গুলো রাখবে
      forbidNonWhitelisted: true, // ❌ extra property থাকলে এরর দিবে
      transform: true, // 🔄 DTO টাইপ অনুযায়ী কনভার্ট করবে (string -> number ইত্যাদি)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();



//!  next module 13..........................................