# Seattle Prep Tutors website

A responsive static website for Jack, Quinn, Paul, and Matisse. The site uses royal blue and white, includes lightweight animations, and is ready for Netlify.

## Add the real images

The `assets` folder contains five clearly labeled placeholder PNG files:

- `seattle-prep-logo-placeholder.png`
- `jack-headshot-placeholder.png`
- `quinn-headshot-placeholder.png`
- `paul-headshot-placeholder.png`
- `matisse-headshot-placeholder.png`

Replace each placeholder with the correct image while keeping the same filename. The website will update automatically.

## Connect the contact form to Formspree

1. Go to https://formspree.io and create or sign in to an account.
2. Create a new form and choose the email address that should receive inquiries.
3. Formspree will provide an endpoint similar to `https://formspree.io/f/abcdwxyz`.
4. Open `index.html`, find `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID`, and replace it with the endpoint Formspree provides.
5. Commit the change and submit one test message from the live website.

Until that endpoint is replaced, the website keeps the form from submitting and directs visitors to the contact details displayed beside it.

## Publish on Netlify

Import this GitHub repository as a new Netlify site. No build command is needed. Netlify will use `netlify.toml` and publish the repository root. After the first deployment, a custom domain can be added in Netlify under **Domain management**.
