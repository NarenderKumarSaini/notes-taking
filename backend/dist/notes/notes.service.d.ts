import { Repository } from 'typeorm';
import { Note } from './entities/note.entity';
export declare class NotesService {
    private repo;
    constructor(repo: Repository<Note>);
    create(noteText: string): Promise<Note>;
    find(noteText: string): Promise<Note[]>;
    findOne(id: number): Promise<Note>;
    update(id: number, attrs: Partial<Note>): Promise<Note>;
    remove(id: number): Promise<Note>;
}
