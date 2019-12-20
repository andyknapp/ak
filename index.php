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
        </header>

        <nav class="site-nav">
            <span class="nav-logo"><?php include('logo/ak.svg'); ?></span>
            <a href="#lead-block" class="nav-item nav-item-exp">Experience</a>
            <a href="#contact" class="nav-item nav-item-contact">Contact</a>
        </nav>

        <main class="main-content">

            <?php include('components/experience.php'); ?>

            <section id="contact" class="experience-block">
                <header class="section-title experience-header">
                    <div class="header-group">
                        <h2 class="headline-xs">comments / inquiries</h2>
                        <h3 class="title-m">Contact Me</h3>
                    </div>
                </header>

                <div class="experience-description">
                    <p>Have a question? Want to work together? You can reach me over <a href="mailto:aknapp1@gmail.com" target="_blank">email</a> or <a href="https://twitter.com/_aknapp" target="_blank" >Twitter DM</a>.</p>
                </div>
            </section>
        </main>

        <footer class="site-footer" role="contentinfo">
            <ul>
                <li class="headline-sub">&copy; <?php echo date('Y');?> | Andy Knapp</li>
                <li class="headline-sub"><a href="/andy-knapp-resume.pdf" target="_blank">resume pdf</a></li>
            </ul>
        </footer>

  </div>

  <script type="text/javascript">
    <?php include('js/loadCSS.min.js'); ?>
    <?php include('js/cssrelpreload.min.js'); ?>
  </script>
  <script src="js/site.js"></script>

</body>
</html>
