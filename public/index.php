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
      <?php include ('partial/othello.php'); ?>
      <?php include ('partial/othello.php'); ?>
    </div>
  </div>
  <script src="/scripts/main.js"></script>
</body>
</html>
