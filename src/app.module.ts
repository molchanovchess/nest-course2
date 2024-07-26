import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GroceriesModule } from './groceries/groceries.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, GroceriesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
