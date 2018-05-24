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
    <span class="logo title-logo">AK</span>
    <nav class="site-nav">
      <a href="#contact" class="nav-item">Contact</a>
      <a href="#resume" class="nav-item">Work</a>
    </nav>
  </header>

  <section class="intro full-screen">
    <h1 class="title-intro">Andy Knapp <span>Web Developer</span></h1>
  </section>


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
  <script src="js/wufoo.js"></script>

  <?php include('icons/svg-defs.svg'); ?>

</body>
</html>
