// Used here as serializer and as entity for the database.
export interface ICard {
  title: string
  text: string
  tags: string[]
}

export interface ICardApi {
  getCards(): ICard[] | Promise<ICard[]>
  createCard(cardDto: ICardDto): ICard | Promise<ICard>
}

export interface ICardDto {
  title: string
  text: string
}
