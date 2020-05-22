import { ICard, ICardApi, ICardDto } from '../../interfaces/card.interfaces'
import { create } from 'domain'

export class MockedCardsApi implements ICardApi {
  getCards() {
    return new Array<ICard>(
      {
        title: 'test',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh nisi, gravida et cursus et, lacinia sit amet nibh. Mauris suscipit quis quam sit amet luctus. Morbi id elit quis turpis egestas lacinia. Nullam tincidunt convallis ullamcorper. Ut malesuada viverra metus. Ut orci ante, consequat eu luctus quis, efficitur et libero. Maecenas sollicitudin velit at semper scelerisque.',
        tags: ['clean', 'architecture']
      },
      {
        title: 'Clean Test',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh nisi, gravida et cursus et, lacinia sit amet nibh. Mauris suscipit quis quam sit amet luctus. Morbi id elit quis turpis egestas lacinia. Nullam tincidunt convallis ullamcorper. Ut malesuada viverra metus. Ut orci ante, consequat eu luctus quis, efficitur et libero. Maecenas sollicitudin velit at semper scelerisque.',
        tags: ['clean', 'architecture']
      }
    )
  }
  createCard(createCard: ICardDto): ICard {
    return {
      title: createCard.title,
      text: 'test',
      tags: ['test', 'test']
    }
  }
}
