import App from '../../../src/js/components/app.vue';

describe('Appコンポーネント', function() {
  it('should have a created hook', function() {
    expect(App.created).to.be.a('function');
  });

  it('should have a fetchNippoes method', function() {
    expect(App.methods.fetchNippoes).to.be.a('function');
  });
});
