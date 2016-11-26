import Vue from 'vue';
import _App from '../../../src/js/components/app.vue';

const App = Vue.extend(_App);

describe('Appコンポーネント', () => {
  it('メソッドが存在する', function() {
    expect(_App.created).to.be.a('function');
    expect(_App.methods.fetchNippoes).to.be.a('function');
  });

  it('datetime形式を日本語表記に変換する', function() {
    expect(_App.methods.toJpDate('2016-11-19 18:46:00')).to.be.eql('2016年11月19日')
  });

  it('fetchNippoesで日報一覧が取得できる', (done) => {
    let nippoes = [ { content: 'hoge' } ];

    let resolved = new Promise.resolve({
      json() { return new Promise.resolve(nippoes) }
    });
    const vm = new App()
    vm.$Vue.http = {
      get () {
        return resolved;
      }
    }

    vm.fetchNippoes();
    setTimeout(() => {
      expect(vm.nippoes).to.be.eql(nippoes)
      done();
    }, 0)
  })
});
