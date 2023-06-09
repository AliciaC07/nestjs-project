import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import {User} from "./user/entities/user.entity";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User],
        migrations: ['dist/migrations/*.{ts,js}'],
        migrationsTableName: 'typeorm_migrations',
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
