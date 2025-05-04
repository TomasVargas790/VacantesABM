import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { environment } from './utils/environments';
import Joi from 'joi';
import config from './utils/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      envFilePath: environment[process.env.NODE_ENV || 'dev'],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().hostname().required(),
      }),
    }),
    DatabaseModule,
    ApiModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
