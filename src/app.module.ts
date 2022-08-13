import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { NoteController } from './apis/note/note.controller';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.23aecds.mongodb.net/?retryWrites=true&w=majority"),
    NotesModule,
  ],
  controllers: [AppController, NoteController],
  providers: [AppService],
})
export class AppModule { }
