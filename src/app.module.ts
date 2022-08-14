import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { NoteController } from './apis/note/note.controller';
import { AuthService } from './services/auth/auth.service';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.23aecds.mongodb.net/?retryWrites=true&w=majority"),
    NotesModule,
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, AuthService, AuthMiddleware],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }

}
