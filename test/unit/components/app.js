import App from '../../../src/js/components/app.vue';

describe('Appコンポーネント', function() {
  it('メソッドが存在する', function() {
    expect(App.created).to.be.a('function');
    expect(App.methods.fetchNippoes).to.be.a('function');
  });
});
