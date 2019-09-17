import Component from '@ember/component';
import {sort} from '@ember/object/computed';
import {computed} from '@ember/object'

export default Component.extend({
  tagName: 'ul',
  classNames: ['movie-list'],
  movies: null,
  edit: null,
  delete: null,
  sortField: 'title',
  sortDirection: 'asc',
  sortProperties: computed('sortField', 'sortDirection', function () {
    return [`${this.get('sortField')}:${this.get('sortDirection')}`];
  }),
  sortedMovies: sort('movies', 'sortProperties'),

  actions: {
    filterField() {
      const filter = event.target.value;
      // console.log(filter);
      this.set('sortField', filter);
    },
    filterDirection() {
      const filter = event.target.value;
      // console.log(filter);
      this.set('sortDirection', filter);
    }
  }
});
