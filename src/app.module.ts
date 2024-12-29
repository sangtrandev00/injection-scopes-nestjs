import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';
import { RequestIdMiddleware } from './middleware/request-id-middleware';
import { RandomModule } from './random/random.module';
import { CounterModule } from './counter/counter.module';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [DatabaseModule, UsersModule, LoggerModule, RandomModule, CounterModule, HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*'); // Apply middleware globally
  }
}
