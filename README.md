# Shree Samavedhi - Personal Resume Website

This is a one-page scrolling resume website built with Jekyll. It features a clean, responsive design with smooth scrolling navigation between sections.

## Features

- Single-page scrolling layout with section navigation
- Responsive design that works on mobile and desktop
- Timeline displays for work experience and education
- Skills section with visual skill level indicators
- Projects grid to showcase your work
- Contact section with social media links

## Local Development

To run this site locally:

1. Make sure you have Jekyll installed: `gem install jekyll bundler`
2. Navigate to the project directory
3. Run `bundle install` to install dependencies
4. Run `bundle exec jekyll serve` to start the development server
5. Visit `http://localhost:4000` in your browser

## Customizing Content

### Personal Information

Edit `_config.yml` to update your personal information such as name, email, and social media links.

### Resume Sections

All content is in the `index.markdown` file. Update the HTML within each section to reflect your personal information:

- **About**: Update your name, title, and brief bio
- **Experience**: Add your work history with dates, job titles, and descriptions
- **Education**: Add your educational background
- **Skills**: Update the skills and proficiency levels
- **Projects**: Showcase your notable projects
- **Contact**: Your contact information is automatically populated from `_config.yml`

### Styling

The site's styles are defined in `assets/css/main.css`. You can customize colors, spacing, and other visual elements here.

## Deployment

This site is ready to deploy to any static site host like GitHub Pages, Netlify, or Vercel.

For GitHub Pages:
1. Push your code to a GitHub repository
2. Go to repository settings
3. In the "GitHub Pages" section, select the branch to deploy (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

## License

This project is open source and available under the [MIT License](LICENSE).
