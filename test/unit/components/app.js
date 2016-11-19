import App from '../../../src/js/components/app.vue';

describe('Appコンポーネント', function() {
  it('メソッドが存在する', function() {
    expect(App.created).to.be.a('function');
    expect(App.methods.fetchNippoes).to.be.a('function');
  });

  it('datetime形式を日本語表記に変換する', function() {
    expect(App.methods.toJpDate('2016-11-19 18:46:00')).to.be.eql('2016年11月19日')
  });
});
