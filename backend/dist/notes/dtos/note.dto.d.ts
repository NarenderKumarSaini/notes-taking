import { Note } from '../entities/note.entity';
export declare class NoteDto {
    id: number;
    noteText: string;
}
export declare function toNote(dto: NoteDto): Note;
