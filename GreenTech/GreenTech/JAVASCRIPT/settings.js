document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("modeToggle");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const closeBtn = document.getElementById("closeModal");
  const languageLink = document.getElementById("languageLink");
  const acceptCheckbox = document.getElementById("acceptCheckbox");
  const submitButton = document.getElementById("submitButton");

  // Translations object
  const translations = {
    English: {
      settingsTitle: "Settings",
      modeLabel: "Mode",
      languageLink: "Language",
      termsLink: "Terms and Conditions",
      privacyLink: "Privacy Policy",
      aboutLink: "About Website",
      shareLink: "Share this App",
      footerAboutTitle: "GreenTech",
      footerAboutText: "Join us in transforming agriculture with cutting-edge technology.",
      footerSignUp: "Sign Up",
      footerQuickLinks: "Quick Links",
      footerHomeLink: "Home",
      footerDashboardLink: "Dashboard",
      footerCommunityLink: "Community",
      footerHelpLink: "Help/Support",
      footerSettingsLink: "Settings",
      footerFollowUs: "Follow Us"
    },
    Zulu: {
      settingsTitle: "Izilungiselelo",
      modeLabel: "Imodi",
      languageLink: "Ulimi",
      termsLink: "Imigomo Nezimo",
      privacyLink: "Inqubomgomo Yokuphatha",
      aboutLink: "Mayelana Newebhusayithi",
      shareLink: "Yabelana Ngalesi Sicelo",
      footerAboutTitle: "GreenTech",
      footerAboutText: "Hlanganyela nathi ekuguquleni ezolimo ngezobuchwepheshe obuphambili.",
      footerSignUp: "Bhalisela",
      footerQuickLinks: "Izixhumanisi Ezisheshayo",
      footerHomeLink: "Ikhaya",
      footerDashboardLink: "Ibhodi",
      footerCommunityLink: "Umphakathi",
      footerHelpLink: "Usizo/Ukusekela",
      footerSettingsLink: "Izilungiselelo",
      footerFollowUs: "Silandela"
    },
    Xhosa: {
      settingsTitle: "Isetyhinig",
      modeLabel: "Imowudi",
      languageLink: "Ulwimi",
      termsLink: "Imigaqo nemibandela",
      privacyLink: "Umgaqo-nkqubo wokuqinisekisa",
      aboutLink: "Ngomgibeli",
      shareLink: "Yabelana ngale app",
      footerAboutTitle: "GreenTech",
      footerAboutText: "Joyina nathi ekuvuleni ezolimo ngemonakalo yobuchwepheshe obuphambili.",
      footerSignUp: "Bhalisela",
      footerQuickLinks: "Izixhumanisi ezikhawulezayo",
      footerHomeLink: "Ikhaya",
      footerDashboardLink: "Ibhodi",
      footerCommunityLink: "Uluntu",
      footerHelpLink: "Uncedo/Inkxaso",
      footerSettingsLink: "Isetyhinig",
      footerFollowUs: "Silandele"
    },
    Afrikaans: {
      settingsTitle: "Instellings",
      modeLabel: "Modus",
      languageLink: "Taal",
      termsLink: "Terme en Voorwaardes",
      privacyLink: "Privaatheidsbeleid",
      aboutLink: "Oor die Webwerf",
      shareLink: "Deel hierdie App",
      footerAboutTitle: "GreenTech",
      footerAboutText: "Sluit by ons aan om landbou te transformeer met gevorderde tegnologie.",
      footerSignUp: "Teken In",
      footerQuickLinks: "Vinige Skakels",
      footerHomeLink: "Tuis",
      footerDashboardLink: "Dashboard",
      footerCommunityLink: "Gemeenskap",
      footerHelpLink: "Hulp/Ondersteuning",
      footerSettingsLink: "Instellings",
      footerFollowUs: "Volg Ons"
    }
  };

  // Function to update text content
  function updateTextContent(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[language] && translations[language][key]) {
        el.textContent = translations[language][key];
      }
    });
  }

  // Function to open the modal and display language buttons
  function openLanguageModal() {
    modalBody.innerHTML = `
      <h3>Select your language:</h3>
      <button class="language-button" data-language="English">English</button>
      <button class="language-button" data-language="Zulu">Zulu</button>
      <button class="language-button" data-language="Xhosa">Xhosa</button>
      <button class="language-button" data-language="Afrikaans">Afrikaans</button>
    `;
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    modalBody.querySelector('.language-button').focus(); // Focus on the first button
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    document.body.focus(); // Return focus to the body or previous focused element
  }

  // Event listener for language button click
  modalBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("language-button")) {
      const language = event.target.dataset.language;
      updateTextContent(language); // Update page content
      closeModal();
    }
  });

  // Event listener for language link click
  languageLink.addEventListener("click", (event) => {
    event.preventDefault();
    openLanguageModal();
  });

  // Event listener for close button click
  closeBtn.addEventListener("click", closeModal);

  // Close modal if clicked outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Handle mode toggle
  modeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", modeToggle.checked);
  });

  // Handle checkbox and submit button
  acceptCheckbox.addEventListener("change", () => {
    if (acceptCheckbox.checked) {
      submitButton.disabled = false;
      submitButton.classList.remove("button-disabled");
    } else {
      submitButton.disabled = true;
      submitButton.classList.add("button-disabled");
    }
  });
  
  // Modal content for links
  const links = {
    termsLink: `<h3>Terms and Conditions</h3>
                <p>Welcome to GreenTech! These terms and conditions outline the rules and regulations for the use of GreenTech's Website, located at <a href="https://www.greentech.com">greentech.com</a>.</p>
                <p>By accessing this website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, you must not use this website.</p>
                <h4>1. Use of the Website</h4>
                <p>GreenTech grants you a limited, non-exclusive, non-transferable license to access and use the website for personal and non-commercial use. You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website or interfere with any other party's use of the website.</p>
                <h4>2. Intellectual Property</h4>
                <p>All content and materials on the website, including but not limited to text, graphics, logos, images, and software, are the property of GreenTech or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on the website without the express written consent of GreenTech.</p>
                <h4>3. User Conduct</h4>
                <p>You agree to use the website in accordance with all applicable laws and regulations. You may not post or transmit any content that is unlawful, defamatory, obscene, or otherwise objectionable. GreenTech reserves the right to remove any content that violates these terms or is otherwise objectionable at its sole discretion.</p>
                <h4>4. Third-Party Links</h4>
                <p>The website may contain links to third-party websites that are not owned or controlled by GreenTech. GreenTech has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that GreenTech is not responsible or liable for any damage or loss caused by or in connection with the use of any third-party websites.</p>
                <h4>5. Limitation of Liability</h4>
                <p>To the fullest extent permitted by law, GreenTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use of or inability to use the website; (b) any unauthorized access to or use of GreenTech's servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the website; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the website; and (e) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available via the website.</p>
                <h4>6. Changes to Terms</h4>
                <p>GreenTech reserves the right to modify or replace these terms at any time. If a revision is material, GreenTech will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at GreenTech's sole discretion. By continuing to access or use the website after those revisions become effective, you agree to be bound by the revised terms.</p>
                <h4>7. Governing Law</h4>
                <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which GreenTech is based, without regard to its conflict of law principles. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts located in that jurisdiction.</p>
                <h4>8. Contact Information</h4>
                <p>If you have any questions about these terms, please contact us at <a href="mailto:support@greentech.com">support@greentech.com</a>.</p>`,
    privacyLink: `<h3>Privacy Policy</h3>
                  <p>At GreenTech, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when you use our website and services.</p>
                  <h4>1. Information Collection</h4>
                  <p>We may collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide. We may also collect information about your use of the website, such as your IP address, browser type, and usage patterns.</p>
                  <h4>2. Use of Information</h4>
                  <p>We use the information we collect to provide and improve our services, to communicate with you, and to personalize your experience. We may use your information to send you updates, newsletters, or promotional materials related to our services. You can opt out of receiving such communications at any time.</p>
                  <h4>3. Sharing of Information</h4>
                  <p>We do not sell or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and providing our services. These third parties are bound by confidentiality agreements and are prohibited from using your information for any other purpose.</p>
                  <h4>4. Security</h4>
                  <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.</p>
                  <h4>5. Cookies</h4>
                  <p>We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and provide you with a more personalized experience. You can control cookie settings through your browser.</p>
                  <h4>6. Your Rights</h4>
                  <p>You have the right to access, update, or delete your personal information. You may also have the right to object to or restrict certain processing of your information. If you wish to exercise any of these rights, please contact us using the contact information provided below.</p>
                  <h4>7. Changes to Privacy Policy</h4>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</p>
                  <h4>8. Contact Us</h4>
                  <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@greentech.com">support@greentech.com</a>.</p>`,
    aboutLink: `<h3>About Our Website</h3>
                <p>Welcome to GreenTech, a platform dedicated to revolutionizing agriculture with advanced technology. Our website provides a range of resources and tools designed to support farmers and agricultural professionals in optimizing their practices and achieving sustainable outcomes.</p>
                <h4>Mission</h4>
                <p>Our mission is to transform the agricultural sector by providing innovative solutions and cutting-edge technology that enhance productivity, sustainability, and profitability. We are committed to supporting farmers and agricultural professionals in their quest for success.</p>
                <h4>Vision</h4>
                <p>We envision a future where technology and agriculture converge to create a more efficient, sustainable, and resilient agricultural industry. Through our website and services, we aim to drive positive change and empower our users to achieve their goals.</p>
                <h4>Team</h4>
                <p>Our team consists of experts in agriculture, technology, and business who are passionate about making a difference. We work collaboratively to develop and deliver solutions that meet the needs of our users and advance the industry.</p>
                <h4>Contact Us</h4>
                <p>If you have any questions or feedback, please feel free to reach out to us. We value your input and are always looking for ways to improve our services. Contact us at <a href="mailto:support@greentech.com">support@greentech.com</a>.</p>`,
    shareLink: `<h3>Share This App</h3>
                <p>Help us spread the word about GreenTech! Share our app with your friends, family, and colleagues to help them discover the benefits of our platform. Use the links below to share on your favorite social media platforms:</p>
                <ul>
                  <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.greentech.com" target="_blank">Share on Facebook</a></li>
                  <li><a href="https://twitter.com/intent/tweet?url=https://www.greentech.com&text=Check%20out%20GreenTech%21" target="_blank">Share on Twitter</a></li>
                  <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.greentech.com" target="_blank">Share on LinkedIn</a></li>
                </ul>`
  };

  // Function to open modal with link content
  function openLinkModal(linkType) {
    modalBody.innerHTML = links[linkType];
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
  }

  // Event listeners for link buttons
  document.querySelectorAll('[data-link]').forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const linkType = link.getAttribute("data-link");
      openLinkModal(linkType);
    });
  });
});
