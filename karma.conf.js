module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['browserify', 'mocha', 'chai'],
    files: ['test/unit/**/*.js'],
    reporters: ['spec'],
    singleRun: true,
    preprocessors: {
      'test/unit/**/*.js': ['browserify']
    }
  });
};
