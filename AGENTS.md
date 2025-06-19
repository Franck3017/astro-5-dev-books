```markdown
# Agent Instructions for Dev Books Project

Welcome, fellow agent! This document provides guidelines for working on the Dev Books Astro project.

## Project Overview

This is a simple e-commerce website for selling programming books, built with Astro. Key features include:
- Listing books from Markdown content collections.
- Displaying individual book details.
- Dynamic buy buttons based on user's detected country (via Vercel headers).
- Book scores fetched from an API.

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript (for content collections configuration)

## Project Structure

- `src/content/books/`: Markdown files for each book. Ensure all fields in `src/content/config.ts` are present.
- `src/content/config.ts`: Defines the schema for book content. If you add new fields here, update all markdown files.
- `src/components/`: Reusable Astro components.
- `src/layouts/`: Base layout for pages.
- `src/pages/`: Astro pages.
- `public/`: Static assets, including book cover images. Ensure images referenced in markdown files are placed here.

## Development

- **Install dependencies**: `pnpm install` (based on `pnpm-lock.yaml`)
- **Run dev server**: `pnpm run dev`
- **Build project**: `pnpm run build`

## Coding Conventions

- **Follow existing style**: Try to match the coding style of existing files.
- **Astro components**: Keep components focused and reusable where possible.
- **Tailwind CSS**: Utilize Tailwind utility classes for styling.
- **Accessibility**:
    - Provide `alt` text for all images that convey meaning.
    - Use `aria-hidden="true"` for decorative SVGs or images.
    - Ensure interactive elements are keyboard accessible and have appropriate ARIA attributes (e.g., `aria-label` for icon buttons or links whose text content might not be sufficiently descriptive).
- **Data Management**:
    - Book information (title, author, price, etc.) should be managed in the markdown files under `src/content/books/`.
    - Avoid hardcoding data in components if it can be derived from the content collection.
- **Environment Variables**:
    - Sensitive information or configurations that change between environments should be managed through environment variables (e.g., `SCORE_API_ENDPOINT`, `SHOW_BUY_BUTTON`). Refer to Astro documentation for handling environment variables.

## Testing

- No automated tests are currently set up in this project.
- **Manual testing is crucial**:
    - Verify that book listings and detail pages display correctly.
    - Check that images load.
    - Test buy buttons (though actual purchase redirection might depend on valid links).
    - Ensure the book score component loads correctly (or displays an error/loading state).
    - Check responsiveness on different screen sizes.

## Committing Changes

- Use conventional commit messages if possible (e.g., `feat: ...`, `fix: ...`, `docs: ...`, `refactor: ...`).
- Ensure the project builds successfully (`pnpm run build`) before submitting changes.

## Future Agent Notes

- If you modify the content schema in `src/content/config.ts`, remember to update all corresponding markdown files in `src/content/books/`.
- When adding new images for books, place them in the `public/` directory and reference them correctly in the markdown frontmatter.
```
