(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  // NOTE: STRETCH EXAMPLE FOR FOLLOWERS
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.when(
     $.ajax({
       url: 'https://api.github.com/users/codefellows-seattle-301d9/repos' +
            '?per_page=10' +
            '&sort=updated',
       type: 'GET',
       headers: { 'Authorization': 'token ' + githubToken },
       success: function(data) {
         // NOTE: since the 'data' paramter comes back as an
         // array of objects, we can reassign allRepos below.
         reposObj.allRepos = data;
       }
     }),
     $.ajax({
       url: 'https://api.github.com/users/patci/followers' +
            '?per_page=5' +
            '&sort=updated',
       type: 'GET',
       headers: { 'Authorization': 'token ' + githubToken },
       success: function(data) {
         reposObj.followers = data;
       }
     })
   ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
