import Ember from 'ember';

export default
Ember.Component.extend({
	
  isVisible: false,
  actions: {
    close: function() {
      this.toggleProperty('isVisible'); 
    },
    proceed : function(){
      this.toggleProperty('isVisible'); 
      this.sendAction('proceed',this.get('confirmType'));
    }
  }
});
