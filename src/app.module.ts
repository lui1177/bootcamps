import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BootcampsampsController } from './controllers/bootcampsamps.controller';
import { UsersController } from './controllers/users.controller';
import { ReviewsController } from './controllers/reviews.controller';
import { CoursesController } from './controllers/courses.controller';

@Module({
  imports: [],
  controllers: [AppController, BootcampsampsController, UsersController, ReviewsController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
