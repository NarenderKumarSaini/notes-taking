import { IsString, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(50)
  title: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  @MaxLength(300)
  content: string;
}
