# Rick and Morty Character Feed

This project is a simple web application that utilizes the [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest) to display a list of episodes and characters from the popular animated series "Rick and Morty". Users can select an episode to view the characters that appear in it.

## Features

- **List Episodes**: View all episodes from "Rick and Morty" on initial page load.
- **Character Display**: See characters displayed as image cards on the main screen.
- **Dynamic Episode Selection**: Click on an episode to see the characters from that episode in the main view.
- **Responsive Design**: The app is built to be responsive, providing a seamless experience on both desktop and mobile devices.

## Built With

- [Next.js](https://nextjs.org/docs) - The React framework for production
- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript
- [Rick and Morty API](https://rickandmortyapi.com/) - The data source for episodes and characters

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))

### Installation

1. Clone the repository:
```sh
git clone https://github.com/gladysbenitez/Rick-And-Morty.git
```
Navigate to the project directory and install NPM packages

```bash
cd my-rick-and-morty-app
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Usage

After launching the app, you can interact with it as follows:

- The episodes are listed on the left side of the page. Click on any episode to view the characters that appeared in that episode.
- Click on an episode again to unselect and revert to the initial view.

## Contact & Acknowledgements

Gladys Benitez - gladysbenitez.an@gmail.com

## Learn More

Project Link: https://github.com/gladysbenitez/My-Rick-And-Morty-App

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
