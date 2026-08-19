# Seattle Prep Tutors website

A responsive static website for Seattle Prep Tutors. Services include the HSPT Comprehensive Package, HSPT, homework help, test prep, essays, reading & writing, and math. The site includes lightweight animations and is ready for Netlify.

## Images

The site loads five PNG files from the `assets` folder:

- `seattle-prep-logo-placeholder.png`
- `jack-headshot-placeholder.png`
- `quinn-headshot-placeholder.png`
- `paul-headshot-placeholder.png`
- `matisse-headshot-placeholder.png`

To change an image later, replace its file while keeping the same filename. The website will update automatically.

## Contact form

The contact form is connected to `https://formspree.io/f/maewajwn`. After deployment, submit one test message and confirm it arrives at the email address configured in Formspree.

## Publish on Netlify

Import this GitHub repository as a new Netlify site. No build command is needed. Netlify will use `netlify.toml` and publish the repository root. After the first deployment, a custom domain can be added in Netlify under **Domain management**.
