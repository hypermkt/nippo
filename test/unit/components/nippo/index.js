import Vue from 'vue';
import _Index from '../../../../src/js/components/nippo/index.vue';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';

const Index = Vue.extend(_Index);

describe('Appコンポーネント', () => {
  it('メソッドが存在する', function() {
    expect(_Index.created).to.be.a('function');
    expect(_Index.methods.fetchNippoes).to.be.a('function');
  });

  it('fetchNippoesで日報一覧が取得できる', (done) => {
    let nippoes = [ { content: 'hoge' } ];

    let resolved = new Promise.resolve({
      data: nippoes
    });
    let stub = sinon.stub(axios, 'get').returns(resolved);
    const vm = new Index()

    vm.fetchNippoes();
    resolved.then(() => {
      expect(vm.nippoes).to.be.eql(nippoes)
      done();
    })
  })
});
