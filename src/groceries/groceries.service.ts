import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceriesService {
    private groceries = [
        {
          id: 1,
          checked: false,
          item: 'Pizza',
        },
        {
          id: 2,
          checked: false,
          item: 'Banana',
        },
        {
          id: 3,
          checked: false,
          item: 'Milk',
        },
      ];
    
      findAll() {
        return this.groceries;
      }
    
      findOne(id: number) {
        const groceries = this.groceries.find((groceries) => groceries.id === id);
    
        return groceries;
      }
    
      create(groceries: {
        item: string,
        checked?: boolean
      }) {
        const groceriesByHighestId = [...this.groceries].sort((a, b) => b.id - a.id);
        const newGroceries = {
          id: groceriesByHighestId[0].id + 1,
          checked: false,
          ...groceries,
        };
        this.groceries.push(newGroceries);
    
        return newGroceries;
      }
    
      update(
        id: number,
        updatedGrocery: {
          item?: string,
        },
      ) {
        this.groceries = this.groceries.map(grocery => {
            if (grocery.id === id) {
                return {...grocery, ...updatedGrocery}
            }
            return grocery
        })
    
        return this.findOne(id);
      }
    
      delete (id: number) {
        const removedGrocery = this.findOne(id);
    
        this.groceries = this.groceries.filter(grocery => grocery.id !== id);
    
        return removedGrocery;
      }
}
