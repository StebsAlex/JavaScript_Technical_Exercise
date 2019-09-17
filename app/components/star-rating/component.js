import Component from '@ember/component';
import {equal} from '@ember/object/computed';

export default Component.extend({
  classNames: ['star-rating'],
  rating: null,
  readonly: false,
  rating1: equal('rating', 1),
  rating2: equal('rating', 2),
  rating3: equal('rating', 3),
  rating4: equal('rating', 4),
  rating5: equal('rating', 5),


  actions: {
    rating() {
      const rating = event.target.value;
      this.set('rating', rating);
    }
  }
});
