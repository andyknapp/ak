<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Civic Data Experiment</title>
    <style type="text/css">
        <?php //include('css/critical.min.css'); ?>
    </style>
    <link rel="stylesheet" type="text/css" href="css/style.css?ver=1.01">
</head>

<body>
    <?php
        if( isset( $GET_['st'] ) ) {
            $state = $_GET['st'];
        } else {
            $state = 'delaware';
        }

    ?>
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

         //Initialize the API client and make a request.
        function loadState() {
            gapi.client.setApiKey('AIzaSyAShkkEK7y2pbgdOsGeBBLbT6RxLze9Unw');
            lookup('<?php echo $state; ?>', renderResults);
        }
    </script>


    <header id="header" class="cd-header">
        <h1 class="title-l"><?php echo $state; ?></h1>
        <h2 class="headline-xs">WTF Do these People Do?</h2>
    </header>


    <main id="results" class="results-content"></main>

    <footer class="site-footer" role="contentinfo">
        <ul>
            <li class="headline-sub">&copy; <?php echo date('Y');?> | Andy Knapp</li>
        </ul>
    </footer>





    <script src="https://apis.google.com/js/client.js?onload=loadState"></script>
    <script src="js/handlebars-v4.7.3.js"></script>
    <script src="js/cd.js"></script>

    <script id="office-block-template" type="text/x-handlebars-template">
    	{{#each divisions}}
            <section class="division">
                <h2 class="title-m">{{divisionName}}</h2>

                <div class="division-grid">
                    {{#each divisionOffices}}
                        <div class="office" data-office-level="{{officeLevel}}">

                            <header class="office-header">
                                <h3 class="title-s office-title">{{officeName}}</h3>
                                <p><strong>What does a {{officeName}} do?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="/">more...</a></p>

                                <p><strong>Why should you care?</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="/">more...</a></p>
                            </header>

                            <div class="official-grid">

                                {{#each officials}}
                                    <div class="official-block">
                                        <h4 class="official-title">{{officialName}}</h4>
                                        <div class="official-meta">
                                            <span>{{officialParty}}</span>
                                            <span>{{officialUrls}}</span>
                                            <span>{{officialPhones}}</span>

                                            {{#each officialChannels}}
                                                <span>{{this.type}} {{this.id}}</span>
                                            {{/each}}
                                        </div>
                                    </div>
                                {{/each}}
                            </div>
                        </div>
                    {{/each}}
                </div>
            </section>

    	{{/each}}

    </script>

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
