import moment from 'moment';
export default {
  methods: {
    currentDate() {
      return '今日は' + moment().format('YYYY年MM月DD日') + 'です';
    },
    toJpDate(datetime) {
      return moment(datetime).format('YYYY年MM月DD日');
    }
  }
}
