# The Wild Oasis - Cabin Booking Website

**The Wild Oasis** is a cabin booking platform built with [Next.js](https://nextjs.org/), offering a seamless reservation experience. Users can log in via their Google account to book available cabins, with all reservation data securely stored and managed through [Supabase](https://supabase.com/).

## Key Features:

- **Next.js Framework**: Utilized for its server-side rendering (SSR) and static site generation (SSG) capabilities, ensuring fast page loads and an optimal user experience.
- **Google OAuth Authentication**: Provides a simple and secure login mechanism via Google, enabling users to authenticate and manage their bookings.
- **Supabase Integration**: Handles real-time data storage and user management, offering an efficient backend solution for all reservations and user data.
- **API Routes**: Custom Next.js API routes handle interactions between the frontend and the database, enabling secure and efficient data transactions.
- **React & Tailwind CSS**: The frontend is designed with React components and styled using Tailwind CSS, ensuring a responsive and visually appealing user interface.

## Tech Stack:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL for data storage, Authentication for Google OAuth)
- **Authentication**: Google OAuth via Supabase
- **Hosting**: Vercel (leveraging Next.js's optimized deployment options)

This project exemplifies the integration of modern web technologies to create a fast, secure, and intuitive user experience for cabin bookings.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
