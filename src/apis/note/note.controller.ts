import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NoteService } from 'src/notes/services/note/note.service';
import { Note } from 'src/Schemas/note.schema';

@Controller('note')
export class NoteController {

    constructor(private noteService: NoteService) { }

    @Post('/send')
    public async sendNote(@Body() note: Note) {
        return await this.noteService.create(note);
    }

    @Get('/')
    public async getNotes(@Query('content') content: string) {
        return await this.noteService.findByContent(content);
    }


}
