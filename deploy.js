// push current dist directory to gh-pages branch

const ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {
    console.error(err);
});