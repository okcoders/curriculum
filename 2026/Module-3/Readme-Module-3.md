# Module 3: Intermediate Programming with Node.js
# Server, APIs, Database



## Overview

| Module | Duration | Focus | Homework Platform |
|--------|----------|-------|-------------------|
| Module 3 | 4 weeks | Node.js, Express, PostgreSQL/Supabase | fCC YouTube + Custom Content |

**Structure per module:** 4 Wednesday sessions (1 hr each) + 4 Saturday sessions (4 hrs each)  
**Total Contact Time:** 20 hours per module  
**Homework Expectation:** ~10 hours/week

### Class Format

**Wednesdays (1 hr):**
- Homework Q&A (questions from freeCodeCamp or videos)
- Lesson sheet review (instructor walks through key concepts)

**Saturdays (4 hrs):**
- Debug exercises and Read the Code exercises
- Q&A and concept clarification
- Build time with instructor support (more demo/watch-me-code in Modules 2-3)
- Students ask questions as they work

---

## Expense Tracker: The Through-Line Project

The Expense Tracker project evolves across Modules 2-3, giving students a complete full-stack application they build incrementally.

### Project Evolution

| Module | Week | What Students Build |
|--------|------|---------------------|
| | 1 | Express API with in-memory storage |
| | 2 | Connect frontend to API (replace localStorage) |
| | 3 | Supabase database integration |
| | 4 | Currency API, Deployment |

### Expense Tracker Features (Final)

**Core Features:**
- Add/edit/delete expenses (description, amount, category, date)
- View expense list with sorting and filtering
- Category management
- Monthly/weekly totals and summaries
- Budget warnings

**External API Features:**
- Currency conversion (Exchange Rate API)

**Technical Stack:**
- **Frontend:** Vanilla JavaScript, DOM manipulation, Fetch API
- **Backend:** Node.js, Express.js, REST API
- **Database:** PostgreSQL via Supabase
- **External APIs:** Currency exchange
- **Deployment:** Vercel (frontend), Railway/Render (backend)

---

# Module 3: Node.js, Express, and PostgreSQL/Supabase

## Learning Resources

Since freeCodeCamp's Back-End Development curriculum is not yet released, we'll use:
- **freeCodeCamp YouTube:** Node.js and Express tutorials
- **Custom content:** PostgreSQL basics, Supabase integration
- **Hands-on projects:** Building real APIs

### Recommended YouTube Videos
1. **Node.js Tutorial for Beginners** - freeCodeCamp (3+ hours)
2. **Express.js Full Course** - freeCodeCamp (2+ hours)
3. **REST API Design** - freeCodeCamp (1+ hour)
4. **PostgreSQL Tutorial** - freeCodeCamp (4+ hours)

---

## Week 1: Introduction to Node.js and Express Basics

### Homework (Before Wednesday) — ~5 hrs
- **Watch:** freeCodeCamp Node.js Tutorial (first 2 hours)
- **Watch:** freeCodeCamp Express.js Tutorial (first hour)
- **Read:** Node.js documentation - Getting Started
- **Practice:** 
  - Install Node.js and npm
  - Create first Node.js scripts
  - Set up a basic Express server

### Topics Covered
- What is Node.js? Runtime vs browser JavaScript
- npm and package.json
- CommonJS modules (require/exports) vs ES modules (import/export)
- Express setup and basic routing
- Request/response objects
- Middleware basics (express.json())

### Wednesday (1 hr) — Lesson: Node.js and Express Fundamentals
- Homework Q&A (YouTube video questions)
- Lesson sheet review:
  - Node.js vs browser JavaScript
  - npm and package.json
  - Express setup and routing
  - HTTP methods: GET, POST, PUT, DELETE
  - Middleware basics

### Saturday (4 hrs) — Expense Tracker Backend Phase 1: Express API Setup
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:45 | Instructor demo: Setting up Express, creating routes, using express.json() |
| 1:45-4:00 | Build time: Students set up Express API. Instructor demos as needed |

**Week 1 Build Goals:**
- Initialize Node.js project with package.json
- Set up Express server
- Create CRUD routes: GET/POST/PUT/DELETE /api/expenses
- Use in-memory array for storage (temporary)
- Test with curl

---

## Week 2: Frontend-Backend Integration

### Homework (Before Wednesday) — ~5 hrs
- **Read:** Fetch API documentation
- **Read:** CORS explained
- **Practice:**
  - Use fetch() to call your Express API
  - Handle CORS errors
  - Update DOM based on API responses

### Topics Covered
- Connecting frontend to backend (fetch API)
- CORS: what it is and why it exists
- Configuring CORS in Express
- Replacing localStorage with API calls
- Loading states and error handling in UI
- Environment variables for API URLs

### Wednesday (1 hr) — Lesson: Fetch API and CORS
- Homework Q&A
- Lesson sheet review:
  - Fetch API syntax (GET, POST, PUT, DELETE)
  - Handling JSON responses
  - CORS and how to configure it
  - Error handling with try/catch

### Saturday (4 hrs) — Expense Tracker Backend Phase 2: Connect Frontend
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:45 | Instructor demo: Adding CORS, updating frontend to use fetch |
| 1:45-4:00 | Build time: Students connect frontend to API. Instructor demos as needed |

**Week 2 Build Goals:**
- Add CORS middleware to Express
- Update frontend: replace localStorage with fetch() calls
- Implement loading states in UI
- Handle API errors gracefully in frontend
- Full CRUD working through the UI → API → in-memory storage

---

## Week 3: Supabase Database Integration

### Homework (Before Wednesday) — ~6 hrs
- **Read:** Supabase documentation - Getting Started, Database section
- **Watch:** Supabase JavaScript Client tutorial
- **Setup:** Create free Supabase account and project
- **Practice:**
  - Use Supabase dashboard to create tables
  - Basic SQL in Supabase SQL editor
  - Supabase JavaScript client basics

### Topics Covered
- Supabase overview (PostgreSQL + auth + storage + realtime)
- Creating tables in Supabase dashboard
- SQL basics: SELECT, INSERT, UPDATE, DELETE
- Supabase JavaScript client (@supabase/supabase-js)
- Environment variables for Supabase credentials
- Replacing in-memory storage with database
- Async database queries in Express

### Wednesday (1 hr) — Lesson: Supabase and Database Basics
- Homework Q&A (Supabase setup questions)
- Lesson sheet review:
  - Relational database concepts
  - SQL CRUD operations
  - Supabase client setup
  - Async database queries
  - Error handling for database operations

### Saturday (4 hrs) — Expense Tracker Backend Phase 3: Supabase Database
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:45 | Instructor demo: Creating tables in Supabase, updating Express routes |
| 1:45-4:00 | Build time: Students integrate Supabase. Instructor demos as needed |

**Week 3 Build Goals:**
- Create `expenses` table in Supabase (id, description, amount, category, date, created_at)
- Create `categories` table (id, name, color)
- Set up Supabase client in Express app
- Replace in-memory array with Supabase queries
- Update all CRUD routes to use database
- Test full flow: UI → API → Database

---

## Week 4: External API and Deployment

### Homework (Before Wednesday) — ~5 hrs
- **Read:** Vercel and Railway deployment docs
- **Practice:**
  - Explore a free external API (exchange rate)
  - Environment variables in production

### Topics Covered
- Integrating external APIs (currency exchange)
- Making API calls from Express (server-side fetch/node-fetch)
- Deployment to Vercel (frontend) and Railway/Render (backend)
- Environment variables in production
- Testing production endpoints with curl

### Wednesday (1 hr) — Lesson: External APIs & Deployment
- Homework Q&A
- Lesson sheet review:
  - Calling external APIs from Node.js
  - Deployment overview (Vercel, Railway)
  - Environment variables in different environments
  - Production debugging tips

### Saturday (4 hrs) — Expense Tracker Phase 4: Polish & Deploy
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-2:00 | Instructor demo: Currency API integration, deployment walkthrough |
| 2:00-3:30 | Build time: Students add currency feature and deploy. Instructor demos as needed |
| 3:30-4:00 | **Module 3 Demo** — Show deployed full-stack Expense Trackers |

**Week 4 Build Goals:**
- Integrate **Exchange Rate API** — convert expense amounts to different currencies
- Deploy backend to Railway or Render
- Deploy frontend to Vercel
- Configure production environment variables
- Test production API with curl

**End of Module 3:** Students have a deployed full-stack Expense Tracker with:
- Vanilla JS frontend (Vercel)
- Express.js REST API (Railway/Render)
- Supabase PostgreSQL database
- Currency conversion feature
- Production URLs they can share

---
```javascript
// Bug 1: External API call fails in Express
const response = await fetch('https://api.exchangerate.com/latest');
// Error: fetch is not defined — why?

// Bug 2: Works locally, fails in production
const API_URL = 'http://localhost:3000';
// How should this change for deployment?

// Bug 3: Production environment variable missing
// Set SUPABASE_URL in Railway but still undefined
// Where else might you need to configure this?

// Bug 4: CORS works locally but not in production
// Frontend deployed to Vercel, backend to Railway
// What origin do you need to allow now?
```

---

## Module 3 Assessment Criteria

### Comprehension Checkpoints
- **Can they explain the request lifecycle?** — Client → Express → Middleware → Route → Database → Response
- **Can they design a schema?** — Appropriate tables, relationships, constraints
- **Can they debug async issues?** — Callbacks, promises, async/await flow

### Saturday Build Verification
- **API testing:** All endpoints work correctly in Postman
- **Database queries:** Proper parameterized queries, no SQL injection
- **Error handling:** Appropriate error responses and status codes

### Pass Requirements
- Complete all homework assignments
- Build working APIs each Saturday
- Successfully connect Express to PostgreSQL/Supabase
- 75%+ on Module 3 quiz



---