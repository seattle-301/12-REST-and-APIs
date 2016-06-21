(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
      Save the result in this `repoCompiler` variable that we will pass to
      the append method below. */
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  /* NOTE: If all the data is loaded, we can
      render the repos. */
  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
  };
  // TODO: Call the function that loads (or 'requests') our repo data.
  //  Pass in some view function as a higher order callback, so our repos
  //  will render after the data is loaded.
  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
