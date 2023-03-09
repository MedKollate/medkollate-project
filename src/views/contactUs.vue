<script setup>
import homeNav from '../components/homeNav.vue';

</script>

<template>
    <main class="w-screen h-screen overflow-x-hidden py-16 px-20">
        <homeNav class="mb-16" />

        <div>
            <div class="mailchimp p-10 rounded-2xl flex justify-center items-center">
                <!-- Begin Mailchimp Signup Form -->
                <div class="w-1/2 pr-10" id="mc_embed_signup">
                    <div class=" w-full touch mb-5">
                        <h2>GET IN TOUCH</h2>
                        <p>We’ve Got Your Back! What Do You Need?</p>
                    </div>
                    <form
                        action="https://medkollate.us17.list-manage.com/subscribe/post?u=2e934d6235de3f841565553fb&amp;id=23b29b4d44&amp;f_id=002242e0f0"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                        target="_self">
                        <div class="form" id="mc_embed_signup_scroll">
                            <div class="flex flex-col mb-5 mc-field-group">
                                <label for="mce-FULLNAME">Name <span class="asterisk"></span>
                                </label>
                                <input type="text" value="" name="FULLNAME" class="required" id="mce-FULLNAME" required>
                                <span id="mce-FULLNAME-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div class="flex flex-col mb-5 mc-field-group">
                                <label for="mce-EMAIL">Email Address <span class="asterisk"></span>
                                </label>
                                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
                                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div class="flex flex-col mb-5 mc-field-group">
                                <label for="mce-TEXT">Tell us something </label>
                                <input type="text" value="" name="TEXT" class="" id="mce-TEXT">
                                <span id="mce-TEXT-HELPERTEXT" class="helper_text"></span>
                            </div>
                            <div hidden="true"><input type="hidden" name="tags" value="6455381"></div>
                            <div id="mce-responses" class="clear foot">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>
                            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                    name="b_2e934d6235de3f841565553fb_23b29b4d44" tabindex="-1" value=""></div>
                            <div class="optionalParent">
                                <div class="clear foot">
                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                        class="button">
                                    <p class="brandingLogo"><a href="http://eepurl.com/h373F9"
                                            title="Mailchimp - email marketing made easy and fun"><img
                                                src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <!--End mc_embed_signup-->

                <img src="../assets/images/services.png" alt="Services">
            </div>

            <div class="flex justify-between m-100px mt-6">
                <div>
                    <h2 class="text-green">Get in touch with us via </h2>
                    <div class="flex">
                        <a href="https://web.facebook.com/profile.php?id=100082947026709"
                            class="flex justify-center items-center mr-6"><img src="../assets/images/SVGs/facebook.svg"
                                alt="Facebook">@facebook</a>
                        <a href="https://www.instagram.com/medkollateng/" class="flex justify-center items-center mr-6"><img
                                src="../assets/images/SVGs/instagram.svg" alt="instagram">@instagram</a>
                        <a href="https://twitter.com/MedKollate" class="flex justify-center items-center mr-6"><img
                                src="../assets/images/SVGs/twitter.svg" alt="Twitter">@twitter</a>
                    </div>
                </div>
                <div>
                    <h4 class="text-green">Send a direct mail</h4>
                    <a href="mailto: medkollate@gmail.com">MedKollate@gmail.com</a>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background: url(../assets/images/service-2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: inherit;
}


.mailchimp {
    background: #FFFFFF;
    box-shadow: 0px 9px 46px 8px rgba(39, 107, 88, 0.25);
    border-radius: 30px;
}

.touch h2 {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 28px;
    color: #31856E;
    margin-bottom: 10px;
}

.touch p {
    font-family: 'K2D';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #31856E;
}

.form label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #202020;
    margin-bottom: 5px;
}

.form input {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid #4ED5AF;
    border-radius: 6px;
    padding: 6px;
}

.button {
    width: 100%;
    border-radius: 8px;
    color: #1AA1E5;
    font-weight: 700;
    margin: 20px 0 40px 0;
    transition: .5s;
}

.button:hover {
    box-shadow: 0px 9px 46px 8px rgba(39, 107, 88, 0.25);
}

.text-green {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 42px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: rgba(72, 197, 162, 0.9);
    margin-bottom: 10px;
}
</style>