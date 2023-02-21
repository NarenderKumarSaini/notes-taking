import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(300)
  noteText: string;
}
