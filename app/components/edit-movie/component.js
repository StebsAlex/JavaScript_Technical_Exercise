import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  classNames: ['edit-movie-form'],

  title: null,
  image: null,
  description: null,
  rating: null,

  update: null,
  cancel: null

});
