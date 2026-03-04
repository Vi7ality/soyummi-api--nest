import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipesService) {}

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get('popular-recipe')
  findPopular() {
    return [];
  }

  @Get('popular-recipe/:category')
  findPopularByCategory() {
    return [];
  }

  @Get('own-recipes')
  findOwnRecipes() {
    return [];
  }

  @Post('own-recipes')
  addOwn() {
    return [];
  }

  @Delete('own-recipe/:id')
  deleteOwn() {
    return [];
  }

  @Get('main-page')
  findMainPageRecipes() {
    return [];
  }
  @Get('list/:category')
  findListByCategory() {
    return [];
  }

  @Get('category-list')
  findCategoryList() {
    return [];
  }

  @Get('/search')
  searchRecipe() {
    return [];
  }

  @Get('/ingredients')
  findIngredients() {
    return [];
  }

  @Get(':id')
  findIdRecipe(@Param('id') id: string) {
    return id;
  }
}
