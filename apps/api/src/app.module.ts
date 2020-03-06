import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configFactory, configSchema } from './config/mainConfig';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: configSchema,
            load: [configFactory],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
