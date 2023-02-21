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
exports.NoteDao = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const page_dto_1 = require("../common/utils/page.dto");
const typeorm_2 = require("typeorm");
const note_entity_1 = require("./entities/note.entity");
let NoteDao = class NoteDao {
    constructor(repo) {
        this.repo = repo;
    }
    async list(data) {
        var _a, _b;
        const [notes, count] = await this.repo.findAndCount({
            where: ((_a = data.search) === null || _a === void 0 ? void 0 : _a.value)
                ? { noteText: (0, typeorm_2.Like)(`%${(_b = data.search) === null || _b === void 0 ? void 0 : _b.value}%`) }
                : {},
            take: data.length,
            skip: data.start,
        });
        return new page_dto_1.PageDto({ count, data: notes });
    }
    create(note) {
        return this.repo.save(note);
    }
    update(id, note) {
        return this.repo.update(id, note);
    }
    remove(id) {
        return this.repo.delete(id);
    }
    findOne(noteText) {
        return this.repo.findOne({
            where: {
                noteText,
            },
        });
    }
};
NoteDao = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoteDao);
exports.NoteDao = NoteDao;
//# sourceMappingURL=note.dao.js.map