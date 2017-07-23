<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Andy Knapp | Front End Developer</title>
  <style type="text/css">
    <?php include('css/critical.min.css'); ?>
  </style>
  <link rel="preload" href="css/style.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/style.css"></noscript>
  <!-- <link rel="stylesheet" type="text/css" href="css/style.min.css"> -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Rubik:300,400,500,700,900" rel="stylesheet">
</head>

<body>
  <section class="intro flex-col">
    <h1 class="logo title-intro">Andy Knapp<span>Web Developer</span></h1>
    
  </section>
  
  <?php 
    include('components/resume.php'); 
    include('components/contact.php'); 
    include('components/footer.php'); 
  ?>
  
</body>
</html>
