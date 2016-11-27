import NippoDate from '../../../src/js/mixins/nippo-date.js';

describe('NippoDateミックスイン', () => {
  it('datetime形式を日本語表記に変換する', function() {
    expect(NippoDate.methods.toJpDate('2016-11-19 18:46:00')).to.be.eql('2016年11月19日')
  });
});
