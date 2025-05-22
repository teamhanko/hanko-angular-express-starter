# Hanko Angular-Express Starter

This repo demonstrates how to integrate Hanko with an Angular application for authentication and user management. It includes an Express.js backend for JWT verification and middleware for securing pages under authentication.

Hanko is an open-source authentication and user management solution with a focus on moving the login beyond passwords while being 100% deployable today.

- Built for [passkeys](https://www.passkeys.io) as introduced by Apple, Google, and Microsoft
- Fast integration with Hanko Elements web components (login box and user profile)
- API-first, small footprint, cloud-native

## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed (version 20.0.0 or later)
- Hanko API URL from [Hanko Cloud](https://cloud.hanko.io/)

> **Note:**
> You'll need to create a Authentication Project on Hanko Cloud with the App URL `http://localhost:4200`. See our docs to learn how to setup a [auth project](https://docs.hanko.io/setup-hanko-cloud).

## Getting started

1. Clone the repository

```bash
git clone https://github.com/teamhanko/hanko-angular-express-starter.git
```

#### Frontend

1. Navigate to the frontend directory:

```bash
cd angular-frontend
```

2. Create a `.env` file in the frontend directory (`angular-frontend`) and add the following environment variable:

```sh
VITE_HANKO_API_URL=your-hanko-api-url
```

3. Install the frontend dependencies using your preferred package manager (e.g., `npm`, `pnpm`, `yarn`, or `bun`). For this project, we've used `pnpm`:

```bash
pnpm install -g @angular/cli
pnpm install
```

4. Start the frontend development server:

```bash
ng serve
```

#### Backend

1. Navigate to the backend directory:

```bash
cd express-server
```

2. Create a `.env` file in the backend directory (`express-server`) and add the following environment variable:

```sh
HANKO_API_URL=your-hanko-api-url
```

3. Install the backend dependencies:

```bash
pnpm install
```

4. Start the backend server:

```bash
pnpm dev
```

## Usage

1. Start the application:

   - Access the application by navigating to `http://localhost:5173` in your web browser.

2. Navigate to login page and experience Hanko Authentication.


## Support

Feel free to reach out to us on [Discord](https://hanko.io/community) if you get into any issues.

## License

This project is licensed under the MIT License.



