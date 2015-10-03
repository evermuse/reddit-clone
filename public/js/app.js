'use strict';

/*jslint browser: true*/
/*global $, jQuery, alert*/

(function() {

  console.log('sanity check');

  $.ajax({

    url : "https://www.reddit.com/r/programming.json",
    success : function(data) {

      console.log(data);

      var titleArray = data.data.children[i].data.title;

      for (var i = 1; i < data.data.children.length; i++) {

        var article = document.createElement('article');
        article.id = 'article_' + i;
        article.className = 'article';
        document.body.appendChild(article);

        $(article).append('<h1>' + data.data.children[i].data.title + '</h1>');



      }

    },

    error : function(err) {

      console.log(err);

    }

  });

})();