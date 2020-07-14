<section id="contact" class="contact-block offset-left dark-block">
    <div class="container-content">
        <header class="section-title experience-header">
            <div class="header-group">
                <h2 class="headline-xs">comments / inquiries</h2>
                <h3 class="title-m">Contact Me</h3>
            </div>

            <div class="resume">
                <a href="/andy-knapp-resume.pdf" target="_blank" class="headline-sub" title="PDF Resume">resume
                    <span class="visually-hidden">PDF opens in separate tab</span>
                </a>
                <svg>
                    <use xlink:href="#icon-pdf"></use>
                </svg>
            </div>

        </header>

        <div class="form-container">
            <form method="post" action="../form/contactengine.php">
                <div class="field-group">

                    <div class="field">
        				<input type="text" name="Name" id="Name" placeholder="Your Name" required />
                        <label for="Name" class="floating-label">Name</label>
                    </div>

                    <div class="field">
        				<input type="text" name="Email" id="Email" placeholder="your email" required />
                        <label for="Email" class="floating-label">Email</label>
                    </div>

                </div>

                <div class="field floating">
                    <textarea name="Message" rows="10" cols="20" id="Message" placeholder="Hello!" class="text-area"></textarea>
                    <label for="Message" class="floating-label">Message</label>
                </div>

				<input type="submit" name="submit" value="Send" class="submit" />
			</form>

        </div>
    </div>
</section>
