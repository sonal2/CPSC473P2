import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      meats: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Meat';
      })),
      fruit: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Fruit';
      })),
      grain: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Grain';
      })),
      veggies: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Vegetables';
      })),
      dairy: this.store.findAll('ingredient').then(results => results.filter((ingredients) => {
        return ingredients.get('foodGroup') === 'Dairy';
      })),
    });
  }
});
