import DS from 'ember-data';

export default DS.Model.extend({
  ingredient: DS.attr('string'),
  foodGroup: DS.attr('string')
});
