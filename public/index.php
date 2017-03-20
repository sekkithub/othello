<?php ?>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link rel="stylesheet" href="/styles/main.css"/>
  <title>Othello</title>
</head>
<body>
  <div class="c-container">
    <div class="c-lines">
      <?php for ($k = 0 ; $k < 20; $k++){ echo '<div class="c-lines__line  c-lines__vertical-line"></div>'; } ?>
    </div>
    <div class="c-lines">
      <?php for ($k = 0 ; $k < 20; $k++){ echo '<div class="c-lines__line  c-lines__horizontal-line"></div>'; } ?>
    </div>
    <div class="c-othellos">
      <?php for ($k = 0 ; $k < 24; $k++){
        include ('partial/othello.php');
      } ?>
    </div>
  </div>
  <script src="/scripts/main.js"></script>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-45171081-17', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>
