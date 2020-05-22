import { ICard, ICardApi, ICardDto } from '../../interfaces/card.interfaces'

export class RestCardsApi implements ICardApi {
  async getCards() {
    let cards = Array<ICard>()
    await fetch('http://localhost:3001/cards', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.text())
      .then(json => (cards = JSON.parse(json)))
    return cards
  }
  async createCard(createCard: ICardDto) {
    let card = <ICard>{}
    await fetch('http://localhost:3001/cards', {
      method: 'POST',
      body: JSON.stringify(createCard),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.text())
      .then(json => {
        card = JSON.parse(json)
      })
    return card
  }
}
