import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import sinon from 'sinon';

module('Integration | Component | movie-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const movie = EmberObject.create({
      title: 'yo',
      description: 'blah',
      image: 'giphyyyyy',
      rating: 3
    })
    const edit = sinon.spy();
    const deleteSpy = sinon.spy();
    const movies = [movie, movie];

    this.set('movies', movies);
    this.set('edit', edit);
    this.set('delete', deleteSpy);

    await render(hbs`
    {{movie-list
      movies=movies
      edit=edit
      delete=delete
    }}`);

    assert.ok(this.$().length);
    assert.equal(this.$('select').length, 2, 'the 2 select dropdown');
    assert.equal(this.$('.movie-details h1').length, 2, '2 movies are shown');
  });
});
