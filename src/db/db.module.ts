import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { ConfigService } from '../config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (config: ConfigService) => ({
                type: 'sqlite',
                database: config.DB_NAME,
                entities: [resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
    exports: [TypeOrmModule],
})
export class DbModule { }
