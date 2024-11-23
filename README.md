# EE Website

This repository contains the source code for the EE website. It's a static website built with HTML and served via Apache.

## Repository Structure

- `/` - Root directory containing main website files
  - `index.html` - Main landing page
  - `404.html` - Custom 404 error page
  - `.htaccess` - Apache server configuration
  - `robots.txt` - Search engine crawler instructions
  - `sitemap.xml` - XML sitemap for search engines
- `/images` - Directory containing website images
- `/archive` - Directory for archived content

## Setup

The website is served as a static site. To run it locally, you can use any web server of your choice (Apache, nginx, etc.).

## Deployment

The website is configured with Apache server settings through the `.htaccess` file. Make sure your server is properly configured to handle these settings.

## SEO

The website includes:
- A `robots.txt` file for search engine crawling instructions
- An XML sitemap (`sitemap.xml`) for better search engine indexing
- Custom 404 error page for better user experience

## Contributing

When contributing to this repository, please ensure you:
1. Test any changes locally before pushing
2. Follow existing code style and conventions
3. Update the sitemap if adding new pages
4. Optimize any new images before adding them to the `/images` directory
