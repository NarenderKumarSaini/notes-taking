import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(@InjectRepository(Note) private repo: Repository<Note>) {}

  create(noteText: string) {
    const note = this.repo.create({ noteText });
    return this.repo.save(note);
  }

  find(noteText: string) {
    return this.repo.find({
      where: noteText ? { noteText: Like(`%${noteText}%`) } : {},
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
