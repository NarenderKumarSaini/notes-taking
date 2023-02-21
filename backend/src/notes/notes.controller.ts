import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  create(@Body() body: CreateNoteDto) {
    return this.notesService.create(body.noteText);
  }

  @Get()
  findAll(@Query('noteText') noteText: string) {
    return this.notesService.find(noteText);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const note = await this.notesService.findOne(+id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    return note;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateNoteDto) {
    return this.notesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
