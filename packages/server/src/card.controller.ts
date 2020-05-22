import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CardService } from './card.service';
import { ICard } from 'core';
import { CardDto } from './card.dto';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getCards(): ICard[] {
    return this.cardService.getCards();
  }

  @Post()
  createCards(@Body() params: CardDto): ICard {
    return this.cardService.createCard(new CardDto(params));
  }
}
