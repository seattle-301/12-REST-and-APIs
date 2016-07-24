(function(module) {
  var repoView = {};
  /* TODO: Let's compile our new template!
      Save the result in this `repoCompiler` variable that we will pass to
      the append method below. */
  var repoCompiler = Handlebars.compile($('#repo-template').text());

  // NOTE: STRETCH EXAMPLE COMPILING A NEW TEMPLATE
  var followersCompiler = Handlebars.compile($('#followers-template').text());
  // END STRETCH EXAMPLE

  /* NOTE: If all the data is loaded, we can
      render the repos. */
  repoView.renderRepos = function() {
    $('#about .projects').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
    // NOTE: RESULT OF THE STRETCH GOAL APPENDS HERE
    $('#about .followers').empty().append(
       reposObj.followers.map(followersCompiler)
     );
    // END STRETCH EXAMPLE
  };
  // TODO: Call the function that loads (or 'requests') our repo data.
  //  Pass in some view function as a higher order callback, so our repos
  //  will render after the data is loaded.
  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
