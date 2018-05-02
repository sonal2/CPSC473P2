import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import $ from 'jquery';

export default Controller.extend({
  responseMessage: '',
  foodName: '',
  foodGroup: '',

  isValid: match('foodName', /[a-zA-Z]+/),
  isDisabled: not('isValid'),

  actions: {
    updateValue: function(value) {
      this.set('foodGroup', value);
    },

    saveFood() {
      const ingredient = this.get('foodName');
      let group = this.get('foodGroup');

      if(group == '') {
        group = $('#food-group').find(":selected").text();
      }

      const newIngredient = this.store.createRecord('ingredient', {
        ingredient: ingredient,
        foodGroup: group
      });

      newIngredient.save();
      this.set('responseMessage',
          `Saved ${this.get('foodName')} group: ` + group);
      this.set('foodName', '');
      this.set('foodGroup', '');
    }
  } //actions

});
