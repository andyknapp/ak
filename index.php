<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Andy Knapp | Web Developer</title>
  <style type="text/css">
    <?php include('css/critical.min.css'); ?>
  </style>
  <link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/style.css"></noscript>
  <!-- <link rel="stylesheet" type="text/css" href="css/style.min.css"> -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Rubik:300,400,500,700,900" rel="stylesheet">
</head>

<body>
  <header class="site-header">
    <div class="full-screen flex-col">
      <h1 class="logo title-intro">Andy Knapp <span>Web Developer</span></h1>
    </div>
  </header>
  <nav class="site-nav grid-nav">
    <div class="nav-container">
      <a href="#experience" class="nav-item">Experience</a>
      <a href="#education" class="nav-item">Education</a>
      <a href="#contact" class="nav-item">Contact</a>
    </div>
  </nav>


  <div class="sticky-container">
    <div class="grid-container">
      <?php
        include('components/resume.php');
        include('components/contact.php');
        include('components/footer.php');
      ?>

    </div>
  </div>

</body>
</html>
