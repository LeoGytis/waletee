# Waletee

A React application built with React, TypeScript and Tailwind CSS.

Waletee is a dynamic Server-drive UI (SDUI) builder that allows developers to create and manage user interfaces through JSON schemas. It provides a flexible and maintainable way to build complex UIs by defining component structures in a declarative format. The project focuses on type safety, component validation, and real-time rendering of UI elements.

## To Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will open automatically in your browser at [http://localhost:3000](http://localhost:3000).

## How It Works

-   This project implements a dynamic UI rendering system that converts JSON schemas into React components.
-   The system uses a schema-based approach where UI components are defined in JSON format `@page-schema.json`
-   The project uses TypeScript interfaces to ensure type safety and proper component structure `@types.ts`
-   Includes validation schemas to catch potential errors `@componentValidations.ts`
-   The API layer handles schema fetching with simulated delay and comprehensive component validation `@api.ts`
-   The component then interprets this schema and renders the appropriate components based on their type and properties `@DynamicUIRenderer.tsx`
-   Users can see the rendered UI components!
-   Error handling is implemented with a user-friendly approach:
    -   When schema validation fails, a user-friendly error message is displayed in the UI
    -   Detailed validation errors are logged to the console using `console.error` for debugging purposes
    -   This dual approach ensures users aren't overwhelmed with technical details while maintaining developer visibility into issues

## Technologies Used

-   React
-   TypeScript
-   Tailwind CSS
