import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private repo: Repository<Note>) {}

  create(note: CreateNoteDto) {
    const noteIns = this.repo.create(note);
    return this.repo.save(noteIns);
  }

  find(title: string) {
    return this.repo.find({
      where: title ? { title: Like(`%${title}%`) } : {},
    });
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, attrs: Partial<Note>) {
    const note = await this.findOne(id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    Object.assign(note, attrs);
    return this.repo.save(note);
  }

  async remove(id: number) {
    const note = await this.findOne(id);
    if (!note) {
      throw new NotFoundException('Note not found');
    }

    return this.repo.remove(note);
  }
}
