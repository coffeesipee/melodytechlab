# Use Cases

This document outlines the primary interactions users will have with the Melodytechlab platform.

## Actor Definitions

1.  **Visitor / Potential Client:** An individual or business representative visiting the site to evaluate the agency's services.
2.  **Agency Owner (Admin):** The owner/developer managing the site content and reviewing inquiries.

---

## Use Case 1: Exploring Agency Services & Brand

**Actor:** Visitor
**Goal:** Understand what Melodytechlab does and evaluate if they are a fit for a project.

**Flow:**
1.  Visitor lands on the Home page (`/`).
2.  Visitor sees the hero section outlining the value proposition ("Premium, fast, reliable").
3.  Visitor scrolls down to read the summary of services offered (Web Development, Mobile Apps).
4.  Visitor navigates to the About page (`/about`) via the navigation menu to learn about the founder's background and technical approach.
5.  **Outcome:** The visitor has a clear understanding of the agency's capabilities and brand identity.

---

## Use Case 2: Evaluating Past Work (Portfolio)

**Actor:** Visitor
**Goal:** Assess the quality and technical complexity of the agency's previous projects.

**Flow:**
1.  Visitor navigates to the Portfolio page (`/portfolio`).
2.  Visitor browses a grid/list of past projects.
3.  Visitor clicks on a specific project to view its details.
4.  Visitor reads the case study, noting the problem solved, technologies used (e.g., Next.js, Supabase), and views project screenshots or live links.
5.  **Outcome:** The visitor gains confidence in the agency's ability to deliver high-quality software.

---

## Use Case 3: Contacting the Agency

**Actor:** Visitor
**Goal:** Initiate a conversation regarding a potential project.

**Flow:**
1.  Visitor clicks a "Contact" or "Start a Project" Call to Action (CTA) button, or navigates to the contact section (`/#contact`).
2.  Visitor fills out a contact form (providing name, email, and project details) or clicks a direct mailto link.
3.  (If using a form) Visitor submits the form.
4.  System validates the input and sends a confirmation message to the visitor.
5.  System notifies the Agency Owner (via email or database entry in Supabase).
6.  **Outcome:** A lead is generated and a communication channel is opened.

---

## Use Case 4: Reading Technical Articles

**Actor:** Visitor
**Goal:** Learn from the agency's technical insights or evaluate their domain expertise.

**Flow:**
1.  Visitor navigates to the Articles page (`/articles`).
2.  Visitor browses the list of available blog posts.
3.  Visitor selects an article to read.
4.  Visitor reads the content, which is formatted cleanly with markdown/code snippets.
5.  **Outcome:** The visitor gains technical knowledge and perceives the agency as an authority in software engineering.

---

## Use Case 5: Managing Site Content (Admin)

**Actor:** Agency Owner
**Goal:** Update portfolio items, publish new articles, or view contact inquiries.

**Flow:**
1.  Owner navigates to the administrative section (`/super` or via a headless CMS/Supabase dashboard).
2.  Owner authenticates using secure credentials.
3.  Owner selects the action they wish to perform (e.g., "Add New Portfolio Item").
4.  Owner enters the content and saves the changes.
5.  System updates the database and triggers a site rebuild (if using static generation) or updates the live data immediately.
6.  **Outcome:** The website content is kept fresh and up-to-date without requiring manual code changes for content entries.
