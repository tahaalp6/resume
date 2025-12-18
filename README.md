# Agency

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```
# Resume Template (Angular)

A clean, responsive Angular resume/CV template. This repo contains the "resume" starterkit for building a personal portfolio/resume site with ready-made sections, assets, and styles.

## Features

- Responsive resume/portfolio layout
- Prebuilt sections: About, Experience, Skills, Portfolio, Contact
- SCSS-based theming with multiple color variants
- Uses Angular tooling (`@angular/cli`) for development and build

## Tech Stack

- Angular (TypeScript)
- SCSS/CSS
- Third-party libraries included in `public/assets`

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Angular CLI (optional, for global `ng` command)

## Quick start

1. Install dependencies

```bash
npm install
# or
# yarn install
```

2. Run the development server

```bash
npm run start
# or
# ng serve --open
```

The app will usually be available at http://localhost:4200/.

## Build

```bash
npm run build
# or
# ng build --prod
```

Production-ready files will be emitted to the `dist/` folder.

## Project structure (high level)

- `angular.json` — Angular workspace config
- `package.json` — scripts & dependencies
- `public/assets/` — images, styles, fonts, JS plugins
- `src/` — application source
	- `src/index.html` — app shell
	- `src/main.ts` — Angular bootstrap
	- `src/styles.scss` — global styles
	- `src/app/` — app code and layout modules

## Customization

- Theme colors and SCSS variables live under `public/assets/scss/`.
- Replace images in `public/assets/images/` to update visuals.
- Modify layouts under `src/app/layouts/` (e.g., `resume/`) to change section content or structure.

## Common commands

- `npm run start` — start dev server
- `npm run lint` — run linter (if configured)
- `npm run build` — production build

## Troubleshooting

- If `ng serve` fails, ensure Node.js and Angular CLI versions match the project's required versions.
- Delete `node_modules/` and reinstall if dependencies are inconsistent:

```bash
rm -rf node_modules package-lock.json
npm install
```

(Windows PowerShell users can use `Remove-Item -Recurse -Force node_modules`.)

