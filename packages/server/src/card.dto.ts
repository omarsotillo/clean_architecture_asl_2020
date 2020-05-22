import { IsString, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ICardDto } from 'core';

@Exclude()
export class CardDto implements ICardDto {
  @Expose()
  @IsString()
  readonly title: string;

  @Expose()
  @IsString()
  readonly text: string;

  constructor(props) {
    Object.assign(this, props);
  }
}
