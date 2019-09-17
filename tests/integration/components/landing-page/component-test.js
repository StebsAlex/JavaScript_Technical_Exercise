import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {click, fillIn, render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import sinon from 'sinon';

module('Integration | Component | landing-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{landing-page}}`);
    assert.ok(this.$().length);
  });
  test('landing page scen: edit movie', async function (assert) {
    const update = sinon.spy()
    const cancel = sinon.spy()
    const movie = EmberObject.create({
      title: 'yo',
      description: 'blah',
      image: 'giphyyyyy',
      rating: '3'
    })
    this.set('movie', movie);
    this.set('update', update);
    this.set('cancel', cancel);

    await render(hbs`
      {{landing-page
        movie=movie
        update=update
        cancel=cancel
        }}`);
    await click('.save');
    assert.ok(update.calledWith(movie), 'the update action is called')
  })
  test('landing page scene: add movie', async function (assert) {
    const add = sinon.spy();
    const movie = null;

    this.set('movie', movie);
    this.set('add', add);

    await render(hbs`
      {{landing-page
        movie=movie
        add=add
      }}`);

    assert.ok(this.$('.add-movie-form').length, 'add form is rendered')
    await fillIn('.form-title', 'hi');
    await fillIn('.form-description', 'hello');
    await fillIn('.form-image-url', 'Robbles');

    await click('.addMovie');
    assert.ok(add.called, 'the update action is called')
  })
});
