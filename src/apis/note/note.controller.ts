import { Body, Controller, Get, Request, Post, Query, Put, Delete } from '@nestjs/common';
import { NoteService } from 'src/notes/services/note/note.service';
import { Note } from 'src/Schemas/note.schema';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('note')
export class NoteController {

    constructor(private noteService: NoteService, private authService: AuthService) { }

    @Post('/send')
    public async sendNote(@Body() note: Note,@Request() req:any) { 
        console.log(req.user);
        note.userID = req.user.uid;
        return await this.noteService.create(note);
    }

    @Get('/')
    public async getNotes(@Query('content') content: string) {
        return await this.noteService.findByContent(content);
    }

    @Get('/all')
    public async getAllNotes() {
        return await this.noteService.findAll();
    }

    @Put("/")
    public async updateNote(@Body() note: Note) {
      return await this.noteService.updateNote(note.id, note);
    }
    
    @Delete("/")
    public async deleteNote(@Query("id") id: string) {
      return await this.noteService.deleteNote(id);
    }

}