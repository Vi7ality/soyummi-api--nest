import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

const timeRegExp = /^\d+$/;

const CATEGORIES = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];

export type Category = (typeof CATEGORIES)[number];

@Schema({ _id: false })
export class RecipeIngredient {
  @Prop({ type: Types.ObjectId, ref: 'ingredient', required: true })
  id: Types.ObjectId;

  @Prop({ type: String, required: true })
  measure: string;
}

export const RecipeIngredientSchema =
  SchemaFactory.createForClass(RecipeIngredient);

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Recipe {
  @Prop({ required: [true, 'Set title for recipe'] })
  title: string;

  @Prop({ required: [true, 'Set category for recipe'], enum: CATEGORIES })
  category: string;

  @Prop({ default: 'Worldwide' })
  area: string;

  @Prop({ required: [true, 'Set instructions for recipe'] })
  instructions: string;

  @Prop({ required: [true, 'Set description for recipe'] })
  description: string;

  @Prop({ required: [true, 'Set thumb for recipe'] })
  thumb: string;

  @Prop({ required: [true, 'Set preview for recipe'] })
  preview: string;

  @Prop({ required: [true, 'Set time for recipe'], match: timeRegExp })
  time: string;

  @Prop({ default: 0 })
  popularity: number;

  @Prop({ type: [Types.ObjectId], ref: 'user' })
  favorites: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'user' })
  likes: Types.ObjectId[];

  @Prop({ type: String })
  youtube?: string;

  @Prop({ type: [String] })
  tags?: string[];

  @Prop({ type: Types.ObjectId, ref: 'user', required: true })
  owner: Types.ObjectId;

  @Prop({ type: [RecipeIngredientSchema] })
  ingredients: RecipeIngredient[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
