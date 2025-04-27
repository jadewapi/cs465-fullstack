# Full Stack Web Application - Project Reflection

## Overview

This project is part of my portfolio for the CS 465 course, showcasing a full stack web application that supports both customer and admin sides. I built out the backend logic, connected it to a MongoDB database, secured the admin login, and developed the frontend using Angular. This README serves as both a reflection on the process and a walkthrough of the technologies I used.

---

## Architecture

For the frontend, I used Angular, which allowed me to build a smooth single-page application (SPA). This made the user experience feel more responsive, since the page doesn't reload every time the user clicks something new. On the other hand, I also used server-side rendering with Express and HTML templates for certain static or admin pages where that made more sense. The main difference between these approaches:

- **Angular SPA**: Dynamic, loads data via API calls without reloading the whole page.
- **Express HTML Templates**: Server-rendered, refreshes the page each time, useful for simpler or admin views.

The backend used Node.js with Express and connected to a **NoSQL MongoDB database**. I chose MongoDB because it handles data as flexible JSON-like documents, which made it easier to store complex, varying data structures without needing a rigid schema (unlike SQL databases).

---

## Functionality

### JSON vs JavaScript

**JSON (JavaScript Object Notation)** is just a format for structuring data. It looks like JavaScript objects but is purely for data storage and transfer. **JavaScript**, on the other hand, is a full programming language. JSON helped tie the frontend and backend together because the backend sends data in JSON format, and the Angular frontend can easily consume that data.

### Code Refactoring & Reusable Components

Along the way, I refactored parts of the frontend to improve performance and keep the code clean. For example, I created reusable UI components in Angular for things like form inputs and buttons. This made the codebase easier to maintain, reduced duplication, and kept the UI consistent across different parts of the app.

---

## Testing

For the backend, I tested API **endpoints** (the URLs that the frontend uses to get or send data) using tools like Postman. Testing became trickier once I added **security** features like authentication, since I had to include valid tokens in my test requests. I learned about different **HTTP methods** like GET (retrieve data), POST (send new data), PUT (update data), and DELETE (remove data), and made sure each one worked as expected in my app.

Testing security meant checking that unauthorized users couldn’t access protected routes. This involved testing both the happy paths (when everything works) and edge cases (when users try something they shouldn’t).

---

## Reflection

This course helped me grow as a developer by giving me hands-on experience building a full stack web application from scratch. I’ve learned how to connect a frontend framework (Angular) to a backend (Node.js/Express), work with a database (MongoDB), and secure sensitive areas (like admin logins). These are all skills that I know will make me more marketable as I move forward in my career.

I feel more confident now working across both frontend and backend, understanding how the pieces fit together, and knowing how to troubleshoot issues when they come up.


