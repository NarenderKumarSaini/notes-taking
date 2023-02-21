import { NotesService } from './notes.service';
import { CreateNoteDto } from './dtos/create-note.dto';
import { UpdateNoteDto } from './dtos/update-note.dto';
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    create(body: CreateNoteDto): Promise<import("./entities/note.entity").Note>;
    findAll(noteText: string): Promise<import("./entities/note.entity").Note[]>;
    findOne(id: string): Promise<import("./entities/note.entity").Note>;
    update(id: string, body: UpdateNoteDto): Promise<import("./entities/note.entity").Note>;
    remove(id: string): Promise<import("./entities/note.entity").Note>;
}
