"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteDto = void 0;
class CreateNoteDto {
    constructor(id, title, body, category, status) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.category = category;
        this.status = status;
    }
    static create(props) {
        const { id, title, body, category, status } = props;
        if (!category)
            return ['Category is not valid', undefined];
        return [undefined, new CreateNoteDto(id, title, body, category, status)];
    }
}
exports.CreateNoteDto = CreateNoteDto;
//# sourceMappingURL=create-note.dto.js.map