import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  status: DS.attr('string'),
  tax: DS.attr('number'),
  discount: DS.attr('number'),
  startDate: DS.attr('date'),
  finishDate: DS.attr('date')
});
