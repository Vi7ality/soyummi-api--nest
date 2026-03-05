import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesModule } from './recipes/recipes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RecipesModule, MongooseModule.forRoot(process.env.DB_HOST!)],
  controllers: [AppController, RecipesController],
  providers: [AppService],
})
export class AppModule {}
