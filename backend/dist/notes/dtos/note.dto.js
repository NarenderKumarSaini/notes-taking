"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNote = exports.NoteDto = void 0;
const note_entity_1 = require("../entities/note.entity");
class NoteDto {
}
exports.NoteDto = NoteDto;
function toNote(dto) {
    const note = new note_entity_1.Note();
    note.noteText = dto.noteText;
    return note;
}
exports.toNote = toNote;
//# sourceMappingURL=note.dto.js.map