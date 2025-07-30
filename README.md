# The DDD East Midlands Blog

[![DDDEMBlog Deploy](https://github.com/DDDEastMidlandsLimited/dddem-blog/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/DDDEastMidlandsLimited/dddem-blog/actions/workflows/main.yml)

Welcome to the repository for the [DDD East Midlands Blog](https://blog.dddeastmidlands.com/)!

After much persuasion from the community, we have decided to move away from Medium and host our blogs using [Jekyll](https://jekyllrb.com/).

We chose Jekyll as it is a framework we, the organisers, are familiar with and it allows posts to be submitted in markdown, which we hope will still keep the barrier to entry low.

## Want to contribute?

We have some handy [contribution guidelines](.github/contributing.md) to help provide some guidance.

### But first....

Please read through the [Code Of Conduct](./CODE_OF_CONDUCT.md) to make sure your submissions abide to it.

## Running Locally

Install the dependencies:

~~~bash
$ npm run install-jekyll
~~~

Run the website:

~~~bash
$ bundle exec jekyll serve --source site --port 6060
~~~

## Accessibility Features

This blog includes several accessibility features to ensure it's usable by everyone:

- **Skip to Content Link**: Allows keyboard users to skip directly to the main content
- **Keyboard Navigation**: All interactive elements are accessible via keyboard (Tab, Enter, Space, Escape)
- **Focus Indicators**: Clear visual focus indicators for all interactive elements
- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Proper use of semantic elements for better screen reader navigation

### Keyboard Shortcuts

- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close the mobile navigation menu

## Deployment pipeline

GitHub Actions is set up to build on pull request. When a pull request is merged into main, the site will be deployed through github actions
