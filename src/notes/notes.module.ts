import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from 'src/Schemas/note.schema';
import { AuthService } from 'src/services/auth/auth.service';
import { NoteService } from './services/note/note.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Note.name, schema: NoteSchema },
        ])
    ],
    exports: [NoteService],
    providers: [NoteService,AuthService],
})
export class NotesModule { }
