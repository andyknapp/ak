<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Civic Data Experiment</title>
    <style type="text/css">
        <?php //include('css/critical.min.css'); ?>
    </style>
    <link rel="stylesheet" type="text/css" href="css/style.min.css?ver=1.01">

    <script>
    /**
    * Build and execute request to look up voter info for provided address.
    * @param {string} address Address for which to fetch voter info.
    * @param {function(Object)} callback Function which takes the
    *     response object as a parameter.
    */

    function lookup(address, callback) {
    /**
      * Election ID for which to fetch voter info.
      * @type {number}
      */

     var electionId = 2000;

     /**
      * Request object for given parameters.
      * @type {gapi.client.HttpRequest}
      */

     var req = gapi.client.request({
         'path' : '/civicinfo/v2/representatives',
         'params' : {'address' : address}
     });

    req.execute(callback);
   }


    /**
       * Initialize the API client and make a request.
     */

      function load() {
        gapi.client.setApiKey('AIzaSyAShkkEK7y2pbgdOsGeBBLbT6RxLze9Unw');
        lookup('304 Spalding Rd. Wilmington DE', renderResults);
      }
    </script>


    <script src="https://apis.google.com/js/client.js?onload=load"></script>

</head>

<body>
    <header id="header" class="site-header">
        <h1>WTF Do these People Do?</h1>
    </header>


    <main id="results" class="main-content">
        <section class="state-level">

        </section>
    </main>

    <footer class="site-footer" role="contentinfo">
        <ul>
            <li class="headline-sub">&copy; <?php echo date('Y');?> | Andy Knapp</li>
        </ul>
    </footer>

    <script src="js/cd.js"></script>

    <script>
        // load webfonts async
        WebFontConfig = {
        google: { families: [ 'Open+Sans:300,400,600', 'Rubik:400,500,700' ] }
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

</body>
</html>
