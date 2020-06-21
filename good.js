setInterval(
    function () {
      if (location.href == "https://twitter.com/home") {
        var likes = document.body.querySelectorAll('div[data-testid="like"]');
        for (var i = 0; i < likes.length; i++) {
            likes[i].click();
        };
      };
    }, 1000);
