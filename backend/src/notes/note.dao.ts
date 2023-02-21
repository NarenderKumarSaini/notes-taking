import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/common/utils/page.dto';
import { Like, Repository } from 'typeorm';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteDao {
  constructor(
    @InjectRepository(Note)
    private readonly repo: Repository<Note>,
  ) {}

  async list(data): Promise<PageDto<Note>> {
    const [notes, count] = await this.repo.findAndCount({
      where: data.search?.value
        ? { noteText: Like(`%${data.search?.value}%`) }
        : {},
      take: data.length,
      skip: data.start,
    });
    return new PageDto({ count, data: notes });
  }

  create(note: Note) {
    return this.repo.save(note);
  }

  update(id: string, note: Note) {
    return this.repo.update(id, note);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  findOne(noteText: string) {
    return this.repo.findOne({
      where: {
        noteText,
      },
    });
  }
}
