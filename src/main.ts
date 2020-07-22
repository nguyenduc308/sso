import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["warn", "error"]
  });
  
  app.setGlobalPrefix('/api');

  const port = process.env.PORT || 5000;
  await app.listen(port, ()=> {
    console.log(port)
  });
}
bootstrap();
