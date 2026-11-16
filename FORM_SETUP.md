# Enquiry form setup for Hostinger

The website stays static and uses Formspree to email form submissions. No server code or email password is added to the site.

1. In Formspree, make sure this form's notification recipient is `support@tenderpilot.in` and verify the address if requested.
2. The form endpoint `https://formspree.io/f/meagarpz` is configured in `src/config.ts`.
3. Run `npm run build` and upload the contents of `dist/` to your Hostinger website's `public_html` directory.
4. Submit a test enquiry from the live website and confirm it arrives at `support@tenderpilot.in`.

The form sends the visitor's name, phone number, business type and enquiry text to Formspree, which routes the submission to the configured recipient. Formspree also stores submissions in its dashboard. The public endpoint identifies the form; do not put an email password or private API key in the frontend.

The WhatsApp link remains available as a separate, prefilled message to `+91 91879 43361`. Visitors still press Send in WhatsApp.
