<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Andy Knapp | Front End Developer</title>
  <style type="text/css">
    <?php include('css/critical.min.css'); ?>
  </style>
  <link rel="preload" href="css/style.min.css" as="style" onload="this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="css/style.min.css"></noscript>
  <!-- <link rel="stylesheet" type="text/css" href="css/style.min.css"> -->
</head>

<body>
  <section class="intro flex-col">
    <h1 class="logo">Andy Knapp</h1>
  </section>
  
  <?php 
    include('components/resume.php'); 
    include('components/contact.php'); 
  ?>
  
  
  <footer class="site-footer" rol e="contentinfo">
    <div class="container">
      <span>&copy; <?php echo date('Y'); ?> AndyKnapp.com</span>
    </div>
  </footer>
  
  <script type="text/javascript">
    <?php include('js/loadCSS.min.js'); ?>
    <?php include('js/cssrelpreload.min.js'); ?>
  </script>
  
  <?php include('icons/svg-defs.svg'); ?>
  
</body>
</html>
