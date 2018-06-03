<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Andy Knapp | Web Developer</title>
  <style type="text/css">
    <?php //include('css/critical.min.css'); ?>
  </style>
  <link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/style.css"></noscript>
  <!-- <link rel="stylesheet" type="text/css" href="css/style.min.css"> -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Rubik:300,400,500,700,900" rel="stylesheet">
</head>

<body>
  <header class="site-header flex-col">
    <div>
      <?php include('logo/andyknapp-r.svg'); ?>

      <h1 class="screen-reader-text">Andy Knapp</h1>
      <span class="position">Web Developer</span>
    </div>
    <nav class="site-nav">
      <a href="#resume" class="nav-item">Work</a>
      <a href="#contact" class="nav-item">Contact</a>
    </nav>
  </header>

  <div class="sticky-container">
    <?php
      include('components/resume.php');
      include('components/contact.php');
      include('components/footer.php');
    ?>
  </div>

  <script type="text/javascript">
    <?php include('js/loadCSS.min.js'); ?>
    <?php include('js/cssrelpreload.min.js'); ?>
  </script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="js/scroll.js"></script>
  <script src="js/wufoo.js"></script>

  <?php include('icons/svg-defs.svg'); ?>

</body>
</html>
