import { Module } from '@nestjs/common';
import { RandomGeneratorService } from './random.service';
import { RandomController } from './random.controller';

@Module({
    providers: [RandomGeneratorService],
    exports: [RandomGeneratorService],
    controllers: [RandomController]
})
export class RandomModule { }
