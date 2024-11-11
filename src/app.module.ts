import { TypeOrmModule } from '@nestjs/typeorm'; // we need typeorm for db connection
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //config for typeorm
      type: 'sqlite', //db type
      database: 'db.sqlite', //db name
      entities: [], //entities connected
      synchronize: true, // auto migration, this is for development only. You dont want to do migrations after app is developed!!!
    }),
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
