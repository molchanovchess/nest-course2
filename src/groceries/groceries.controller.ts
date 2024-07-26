import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GroceriesService } from './groceries.service';

@Controller('groceries')
export class GroceriesController {

  constructor(private readonly groceriesService: GroceriesService) {}

  @Get() // GET /groceries or /groceries
  findAll() {
    return this.groceriesService.findAll();
  }
  @Get(':id') // GET /groceries/:id
  findOne(@Param('id') id: string) {
    return this.groceriesService.findOne(+id);
  }
  @Post() // POST /groceries
  create(@Body() grocery: {
    item: string,
  }) {
    return this.groceriesService.create(grocery)
  }
  @Patch(':id') // PATCH /groceries/:id
  update(@Param('id') id: string, @Body() groceryUpdate: {
    item?: string,
  }) {
    return this.groceriesService.update(+id, groceryUpdate);
  }
  @Delete(':id') // DELETE /groceries/:id
  delete(@Param('id') id: string) {
    return this.groceriesService.delete(+id);
  }
}
