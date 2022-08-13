import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from 'src/Schemas/note.schema';
import { Note as NoteModel } from 'src/models/note.model';


@Injectable()
export class NoteService {

    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) { }

    async create(note: NoteModel) {
        note.dateCreated = Date.now().toString();
        let createdNote = new this.noteModel(note);
        await createdNote.save();
    }
    async findAll() {
        return await this.noteModel.find().exec();
    }
    async findByContent(content: string) {
        return await this.noteModel.find({ content: content }).exec();
    }
    async deleteNote(id: string) {
        return await this.noteModel.findByIdAndDelete(id).exec();
    }
    async updateNote(id: string, note: NoteModel) {
        return await this.noteModel.findByIdAndUpdate(id, note).exec();
    }
}
