import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this);
    return this.store.findAll('project');
  }
});
