import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import sinon from 'sinon';


module('Integration | Component | movie-list/movie-list-item', function (hooks) {
  setupRenderingTest(hooks);

  test('show movie', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const movie = EmberObject.create({
      title: 'yo',
      description: 'blah',
      image: 'giphyyyyy',
      rating: 3
    })

    const deleteSpy = sinon.spy()
    const edit = sinon.spy();

    this.set('movie', movie);
    this.set('delete', deleteSpy);
    this.set('edit', edit);

    await render(hbs`
    {{movie-list/movie-list-item
      movie=movie
      delete=delete
      edit=edit
    }}`);

    assert.ok(this.$().length);
    assert.equal(this.$('.movie-details h1').text().trim(), 'yo', 'header is displayed');
  });
});
