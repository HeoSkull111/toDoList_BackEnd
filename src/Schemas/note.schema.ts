import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoteDocument = Note & Document;
@Schema()
export class Note {
    @Prop()
    id: string;
    @Prop()
    title: string;
    @Prop()
    content: string;
    @Prop()
    dateCreated: string;
    @Prop()
    status: string;
    @Prop()
    userID: string;
}
export const NoteSchema = SchemaFactory.createForClass(Note);