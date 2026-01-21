
## Jessica Brentnall's Personal Website

The personal website of Jessica Brentnall.

## Development Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby 3.2+** (as specified in GitHub Actions)
- **Node.js 20.x** (as specified in GitHub Actions)
- **Bundler** (Ruby gem manager)

### Setting up Dependencies

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Install Ruby dependencies:**
   ```bash
   npm run install-jekyll
   ```
   
   This runs `bundle install` to install Jekyll and all required gems.

   If you don't have Bundler installed, install it first:
   ```bash
   gem install bundler
   ```

### Building the Site

To build the Jekyll site locally:

```bash
cd ./site
bundle exec jekyll build
```

The built site will be available in the `site/_site/` directory.

### Running and Previewing Locally

To run the development server and preview the site:

```bash
cd ./site
bundle exec jekyll serve --source . --port 6060
```

The site will be available at [http://localhost:6060](http://localhost:6060).

**Alternative method (if npm dependencies are working):**
```bash
npm run jekyll
```

**Note:** The `npm start` command may have dependency issues. Use the direct Jekyll command above for reliable local development.

### Running Tests

Currently, this repository does not have any automated tests configured. Testing is done manually by:

1. Building the site successfully
2. Running the local development server
3. Verifying the site loads correctly in a browser

To check if your changes work:
```bash
# Build the site to check for errors
cd ./site
bundle exec jekyll build

# Run the development server
bundle exec jekyll serve --source . --port 6060
```

### Design Notes

This website is built using:

- **Jekyll 4.4.1** - Static site generator
- **Bookshop Components** - A component library system for Jekyll
- **CloudCannon CMS** - Content management integration
- **Sass** - CSS preprocessing
- **GitHub Actions** - CI/CD pipeline

**Architecture:**
- Site source files are in the `site/` directory
- Bookshop components are in the `components/` directory
- The site uses a custom Jekyll theme called "Vonge"
- Posts are in `site/collections/_posts/`
- Pages are in `site/collections/_pages/`
- Testimonials are in `site/collections/_testimonials/`

**Development Notes:**
- The site uses Jekyll's collection system for content organization
- Bookshop provides reusable components for consistent design
- CloudCannon provides a CMS interface for content editing
- The build process compiles Sass, processes Jekyll templates, and generates static HTML

## Gotchas

- When running locally, you will only see posts that are in the past or dated for the current day.
- Sometimes the `.html`'s are not automatically removed from urls, breaking the websites paths post deployment

## Deployment pipeline
---
GitHub Actions is set up to build on pull request. When a pull request is merged into main, the site will be deployed through github actions

## Jekyll Template Used
---
Vonge is a Personal portfolio/blog site template for Jekyll. Browse through a [live demo](https://jazzed-kale.cloudvent.net/).
Increase the web presence of your brand with this configurable theme.

Vonge was made by [CloudCannon](http://cloudcannon.com/), the JAMStack Cloud CMS.
The component library is built and maintained for use with [Bookshop](https://github.com/cloudcannon/bookshop/)