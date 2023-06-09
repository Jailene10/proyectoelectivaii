import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal:true
  }) ,TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: true,
  }) ,UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
