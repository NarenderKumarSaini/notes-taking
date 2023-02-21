import { PageDto } from 'src/common/utils/page.dto';
import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
export declare class NoteDao {
    private readonly repo;
    constructor(repo: Repository<Note>);
    list(data: any): Promise<PageDto<Note>>;
    create(note: Note): Promise<Note>;
    update(id: string, note: Note): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findOne(noteText: string): Promise<Note>;
}
