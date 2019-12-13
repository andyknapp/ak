<section id="contact" class="contact stage-contact container-content" data-color="color-red">
  <div class="container-site">
    <header class="flex-row stage">
      <div class="employer">
        <span class="headline-xs">comments / inquiries</span>
        <h4 class="title-l">Contact Information</h4>
      </div>
    </header>

    <div class="project">

        <?php if (isset($_POST['form_submitted'])): ?>

            <p>Thank You <?php echo $_POST['name']; ?> </p>

            <?php
                $to = 'aknapp1@gmail.com';
                $subject = 'Contact form submission';
                //$email = $_POST['email'];
                $message = $_POST['message'];
                $headers = 'From: site@andyknapp.com' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

                mail($to, $subject, $message, $headers);
            ?>

        <?php else: ?>

            <form action="/#contact" method="POST">
                <div class="flex-row">
                    <div class="flex-child">
                        <label for="name">Name<span class="req">*</span></label>
                        <input id="name" name="name" type="text" value="" maxlength="255" tabindex="1" required placeholder="Name" />
                    </div>

                    <div class="flex-child">
                        <label for="email">Email<span class="req">*</span></label>
                        <input id="email" name="email" type="email" value="" maxlength="255" tabindex="1" required placeholder="Email" />
                    </div>
                </div>

                <div>
                    <label for="message">Message<span class="req">*</span></label>
                    <textarea id="message" name="message" spellcheck="false" rows="4" cols="50" tabindex="3" onkeyup="" placeholder="Message" required></textarea>
                </div>

                <input type="hidden" name="form_submitted" value="1" />

                <div class="buttons">
                    <input name="submit" class="submit" type="submit" value="Send"/>
                </div>
            </form>

      <?php endif; ?>

    </div>
  </div>
</section>
