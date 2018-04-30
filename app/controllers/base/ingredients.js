import Controller from '@ember/controller';
import { match, not , and } from '@ember/object/computed';

export default Controller.extend({
  responseMessage: '',
  foodName: '',
  foodGroup: '',

  isValid: match('foodName', /[a-zA-Z]+/),
  isDisabled: not('isValid'),

  actions: {
    updateValue: function(value) {
      this.set('foodGroup', value);
      console.log(value);
    },

    saveFood() {
      const ingredient = this.get('foodName');
      const group = this.get('foodGroup');

      const newIngredient = this.store.createRecord('ingredient', {
        ingredient: ingredient,
        foodGroup: group
      });

      newIngredient.save();
      this.set('responseMessage',
          `Saved ${this.get('foodName')} group: ${this.get('foodGroup')} `);
      this.set('foodName', '');
      this.set('foodGroup', '');
    }
  } //actions

});
