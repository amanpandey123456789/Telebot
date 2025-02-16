import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { TelegramService } from './telegram/telegram.service';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI || ''),
    AdminModule,
    UserModule,
  ],
  providers: [TelegramService, WeatherService],
})
export class AppModule {}
