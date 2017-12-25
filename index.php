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
  <header class="site-header flex-col">
    <h1 class="logo title-intro">Andy Knapp <span>Web Developer</span></h1>
  </header>

  <div class="sticky-container">
    <div class="grid-container">
      <nav class="site-nav grid-nav">
        <ul class="nav-container">
          <li class="nav-item">
            <a href="#experience">Experience</a>
            <ul>
              <li class="nav-item">
                <a href="#kd">King Design</a>
              </li>
              <li class="nav-item">
                <a href="#freelance">Freelance</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#skills">Skills / Languages</a>
          </li>
          <li class="nav-item">
            <a href="#misc">Misc</a>
          </li>
          <li class="nav-item">
            <a href="#advertising">Previous Career</a>
          </li>
        </ul>
      </nav>

      <?php
        include('components/resume.php');
        include('components/contact.php');
        include('components/footer.php');
      ?>

    </div>
  </div>

</body>
</html>
