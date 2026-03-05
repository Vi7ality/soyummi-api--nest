import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RecipesModule,
    MongooseModule.forRoot(process.env.DB_HOST!),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
