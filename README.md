# electron-react-typescript-tailwind Template

## Overview

This is a ready-to-go template to build ElectronJS Application by leveraging ReactJS, Typescript and TailwindCSS. Organized file structure pre-defined path aliases further contribute to the developer experience.

## Features

- **Electron**: Used for building the desktop application.
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Provides static type checking.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Custom Webpack Configuration**: Managed with `react-app-rewired` for customized build setups.
- **Content Security Policy (CSP)**: Configured to handle inline styles and WebSocket connections securely.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AshishAntil07/electron-react-ts-tw-template.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd electron-react-ts-tw-template
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Development

To start the development server and open the Electron app:

```bash
npm run dev
```

The development server will be accessible at `http://localhost:3000`, and Electron will load the app from this URL.

## Building for Production

To create a production build of the React app:

```bash
npm run build
```

Then, you can run Electron with the built files:

```bash
npm run electron
```

## Packaging for distribution

To Package the app for distribution:

```bash
npm run package
```

## Configuration

- **Content Security Policy**: Updated in `index.html` to allow specific resources. Modify the `meta` tag in `index.html` if needed.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
