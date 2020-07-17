<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Andy Knapp | Web Developer</title>
    <style type="text/css">
        <?php //include('css/critical.min.css'); ?>
    </style>
    <!-- <link rel="stylesheet" type="text/css" href="css/style.min.css?ver=1.01"> -->
    <link rel="stylesheet" type="text/css" href="css/style.min.css?ver=1.2">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-38353868-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-38353868-1');
    </script>

</head>

<body>
    <div class="site-container">

        <?php
            include( 'components/header.php' );
            include( 'components/nav.php' );
        ?>

        <main class="main-content">

            <?php
                include( 'components/work.php' );
                include( 'components/experience.php' );
                include( 'components/contact.php' );
            ?>

        </main>

        <?php include( 'components/footer.php' ); ?>

    </div>

    <?php include( 'assets/svg-defs.svg' ); ?>

    <script src="js/site-js.min.js?ver=1.2"></script>

    <script>
        // load webfonts async
        WebFontConfig = {
        google: { families: [ 'Open+Sans:300,400,600,700', 'Rubik:400,500,700' ] }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
    </script>

    <script src="https://kwes.io/js/kwes.js"></script>

</body>
</html>
