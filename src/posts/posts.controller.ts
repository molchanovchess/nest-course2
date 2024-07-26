import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get() // GET /posts or /posts
  findAll() {
    return this.postsService.findAll();
  }
  @Get(':id') // GET /posts/:id
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }
  @Post() // POST /posts
  create(@Body() post: { title: string; datetime: string; body: string }) {
    return this.postsService.create(post);
  }
  @Patch(':id') // PATCH /posts/:id
  update(
    @Param('id') id: string,
    @Body()
    postUpdate: { title?: string; datetime?: string; body?: string },
  ) {
    return this.postsService.update(+id, postUpdate);
  }
  @Put(':id') // PUT /posts/:id
  put(
    @Param('id') id: string,
    @Body()
    postUpdate: { title?: string; datetime?: string; body?: string },
  ) {
    return this.postsService.update(+id, postUpdate);
  }
  @Delete(':id') // DELETE /posts/:id
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}
