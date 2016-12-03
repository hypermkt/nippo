import Vue from 'vue';
import _App from '../../../src/js/components/app.vue';
import sinon from 'sinon';
import axios from 'axios';

const App = Vue.extend(_App);

describe('Appコンポーネント', () => {
  it('メソッドが存在する', function() {
    expect(_App.created).to.be.a('function');
    expect(_App.methods.fetchNippoes).to.be.a('function');
  });

  it('fetchNippoesで日報一覧が取得できる', (done) => {
    let nippoes = [ { content: 'hoge' } ];

    let resolved = new Promise.resolve({
      data: nippoes
    });
    let stub = sinon.stub(axios, 'get').returns(resolved);
    const vm = new App()

    vm.fetchNippoes();
    setTimeout(() => {
      expect(vm.nippoes).to.be.eql(nippoes)
      done();
    }, 0)
  })
});
