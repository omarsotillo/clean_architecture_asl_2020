import { Injectable } from '@nestjs/common';
import { ICard, ICardApi } from 'core';

@Injectable()
export class CardService implements ICardApi {
  getCards(): ICard[] {
    const fs = require('fs');
    return JSON.parse(fs.readFileSync('./src/database.json'));
  }

  createCard(cardDto): ICard {
    const fs = require('fs');
    let data = JSON.parse(fs.readFileSync('./src/database.json'));
    data.push(cardDto);
    fs.writeFile('./src/database.json', JSON.stringify(data), err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    return cardDto;
  }
}
