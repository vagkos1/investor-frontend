# preqin-frontend

This project is a React-based frontend for the Preqin investor dashboard. It provides a user interface for viewing and interacting with investor data and their commitments.

## Overview

The Preqin Frontend is built using React with TypeScript. It consists of two main views:
1. An investor list view, showing all investors.
2. An investor detail view, showing commitments for a specific investor.

The application uses React Router for navigation between these views.

## Prerequisites

- Node.js
- npm
- Preqin Backend running on `http://localhost:8000`

## Setup and Running

1. Clone the repository:
   ```
   git clone https://github.com/vagkos1/preqin-frontend.git
   cd preqin-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

Note: Ensure that the Preqin Backend is running on `http://localhost:8000` before starting the frontend.

## Architecture and Design Choices

- **React with TypeScript**: Provides strong typing and better developer experience.
- **CSS Modules**: For component-scoped styling to prevent global namespace conflicts.
- **Functional Components with Hooks**: Modern React practices for better performance and readability.
- **React Router**: For declarative routing in the application.

## Trade-offs and Alternative Approaches

### State Management: Choosing useState and useEffect Over Redux or Context API

For this project, I opted to use **React's built-in `useState` and `useEffect` hooks** to manage state.  
Given the small scale of the project and its relatively limited state management needs, I wanted to keep things simple and straightforward.  

Using `useState` and `useEffect` is the quickest way to get up and running. It keeps the code clean and reduces the learning curve for anyone jumping into the project. However, I’m fully aware that this might not scale well if the app grows. If the state management starts to get more complicated or if there’s a need to share state more broadly across components, I’d consider moving to Redux or the Context API. For now the current setup gets the job done with minimal fuss.

In a more complex or larger-scale application, I might reach for **Redux** or the **Context API**:

**Redux** is like the Swiss Army knife of state management for React. It’s perfect when you’re dealing with a big application that has a lot of shared state and intricate state transitions. Redux provides a single, centralized store for all your state, which can be a lifesaver for consistency and debugging—especially with tools like Redux DevTools. But, let’s be honest: Redux can be a bit of a beast. The setup requires quite a bit of boilerplate (think action creators, reducers, and middleware) which might feel like overkill for a project that doesn’t have a ton of state to manage.

**Context API** - I consider this to be like Redux Lite. It’s built right into React and lets you share state across your component tree without all the extra baggage of Redux. It’s great for simpler scenarios where you just need to avoid "prop drilling" through multiple levels of components. But there’s a catch: the Context API isn’t the best when your state management needs get more complex. It lacks the robust debugging tools that Redux offers and can run into performance issues if you’re managing a lot of state with it.

### CSS Modules vs. Styled-Components vs. Tailwind CSS

I chose to use **CSS Modules** for this project to keep things simple and straightforward. CSS Modules provide a good balance between modularity and ease of use without introducing additional dependencies or complexity.

In a real-world scenario, I would prefer **Styled-Components** for its dynamic styling capabilities, which are particularly useful in applications that require a high level of customization and theming. **Styled-Components** also integrate seamlessly with React's component-based architecture, allowing for more maintainable and readable code.

On the other hand, **Tailwind CSS** offers a utility-first approach that enables rapid development. However, it comes with a steeper learning curve and requires more familiarity with its utility classes.

By opting for CSS Modules, I aimed to maintain simplicity by ensuring that styles are scoped locally to prevent conflicts, which suits the needs of this take-home test project.

### API Calls: Choosing Axios in useEffect Hooks

For making API calls, I decided to go with **Axios directly within `useEffect` hooks**. This approach keeps the data fetching logic close to where it's used in the component, making it easier to follow and debug. Axios is a versatile HTTP client, and by using it directly in `useEffect`, I'm keeping things simple and transparent—perfect for a smaller project like this.

However, if this were a larger project, I’d consider using something like **React Query** or **SWR**. 

- **React Query** or **SWR**: These libraries are designed specifically for data fetching in React and bring a lot to the table—automatic caching, background refetching, and easy state management for server data. They reduce boilerplate code and make managing server state much more intuitive. But with these benefits might feel like over-engineering for a simple project. For now, Axios does the job just fine, but as the project scales and the complexity of data fetching grows, I’d definitely consider switching to React Query or SWR for the added flexibility and power.

### Component Structure: Flat Structure with Reusable Components

For the component structure, I opted for a **relatively flat setup with some reusable components** like the `Table` component.  
This choice is all about keeping things simple and manageable. With a smaller project, a flat structure makes it easier to find what you're looking for, and there’s less overhead in terms of navigating through nested folders and files. Reusable components also help cut down on duplicate code, making the app easier to maintain.

That said, if the project grows, a more **granular component breakdown** could be beneficial. This approach would involve breaking components down into smaller, more focused pieces. It’s great for reusability and maintainability, especially in a larger codebase. Smaller components are easier to test and reason about. However, the trade-off here is complexity—it’s easy to end up with "component hell," where there are too many tiny components, making the app structure harder to navigate and understand at a glance. For now, the flat structure keeps things straightforward, but I'd be ready to refactor into more granular components if and when the need arises.

### Routing Choice: React Router

I went with React Router for our routing needs. 
I also considered Next.js but React Router is straightforward and does exactly what we need right now.  
Next.js is cool, but it's got a bunch of bells and whistles we don't really need at the moment.  
If we need servier-side rendering we can always revisit this decision.

## Future Improvements

- Implement error boundaries for better error handling
- Add unit and integration tests
- Consider implementing a more robust state management solution if the application grows in complexity
- Improve accessibility features
- Implement performance optimizations like code splitting
