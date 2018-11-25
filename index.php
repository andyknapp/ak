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
  <div class="site-container">
    <header id="header" class="site-header">
      <h1 class="screen-reader-text">Andy Knapp</h1>
      <div class="logo-container">
        <?php include('logo/andyknapp.svg'); ?>
        <span class="position">Web Developer</span>
      </div>

      <nav class="site-nav">
        <span class="nav-logo">
          <?php include('logo/ak.svg'); ?>
        </span>
        <a href="#resume" class="nav-item">Work</a>
        <a href="#contact" class="nav-item">Contact</a>
      </nav>
    </header>

    <main class="main-content">
      <?php
        include('components/resume.php');
        include('components/contact.php');
      ?>
    </main>

    <footer class="site-footer" role="contentinfo">
      <ul>
        <li><a href="tel:+19173751114">917.375.1114</a></li>
        <li><a href="mailto:aknapp1@gmail.com">aknapp1@gmail.com</a></li>
        <li><a href="https://twitter.com/_aknapp">@_aknapp</a></li>
        <li>Wilmington, DE</li>
      </ul>
    </footer>

  </div>

  <script type="text/javascript">
    <?php include('js/loadCSS.min.js'); ?>
    <?php include('js/cssrelpreload.min.js'); ?>
  </script>
  <script src="js/scroll.js"></script>
  <script src="js/wufoo.js"></script>

  <?php include('icons/svg-defs.svg'); ?>

</body>
</html>
