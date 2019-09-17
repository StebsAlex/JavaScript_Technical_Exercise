import Controller from '@ember/controller';


export default Controller.extend({
  movie: null,
  actions: {
    addMovie(title, description, image, rating) {
      const newMovie = this.store.createRecord('movie', {
        title,
        description,
        image,
        rating
      });
      newMovie.save();
    },
    updateMovie(movie) {
      movie.save();
      this.set('movie', null);
    },
    cancelMovie(movie) {
      movie.rollbackAttributes();
      this.set('movie', null);
    },
    deleteMovie(movie) {
      movie.deleteRecord();
      movie.save();
    },
    editMovie(movie) {
      this.set('movie', movie);
    }
  }
});