"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const note_entity_1 = require("./entities/note.entity");
let NotesService = class NotesService {
    constructor(repo) {
        this.repo = repo;
    }
    create(noteText) {
        const note = this.repo.create({ noteText });
        return this.repo.save(note);
    }
    find(noteText) {
        return this.repo.find({
            where: noteText ? { noteText: (0, typeorm_1.Like)(`%${noteText}%`) } : {},
        });
    }
    findOne(id) {
        if (!id) {
            return null;
        }
        return this.repo.findOne({ where: { id } });
    }
    async update(id, attrs) {
        const note = await this.findOne(id);
        if (!note) {
            throw new common_1.NotFoundException('Note not found');
        }
        Object.assign(note, attrs);
        return this.repo.save(note);
    }
    async remove(id) {
        const note = await this.findOne(id);
        if (!note) {
            throw new common_1.NotFoundException('Note not found');
        }
        return this.repo.remove(note);
    }
};
NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map