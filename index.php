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

  <nav class="site-nav">
    <ul>
      <li>
        <a href="#experience">Experience</a>
        <ul>
          <li>
            <a href="#kd">King Design</a>
          </li>
          <li>
            <a href="#freelance">Freelance</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#advertising">Previous Career</a>
      </li>
    </ul>
  </nav>

  <div class="content-container">

    <?php
      include('components/resume.php');
      include('components/contact.php');
      include('components/footer.php');
    ?>
  </div>


</body>
</html>
