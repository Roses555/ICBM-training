HTML & CSS Assignments

📌 Description

This section contains all theory answers and practical explanations for HTML & CSS fundamentals.

---

SECTION A: HTML BASICS & DOCUMENT STRUCTURE

Q1. HTML Skeleton

The HTML boilerplate defines the structure of a webpage.

- <!DOCTYPE html>→ Declares HTML5 and ensures proper rendering
- <html> → Root element of the page
- <head> → Contains metadata (not visible)
- <body>→ Contains visible content

If <!DOCTYPE html> is removed, the browser may enter quirks mode, causing layout inconsistencies.

---

Q2. <head> vs <body>

Elements in <head>:

- <title>
- <meta>
- <link>
- <style>
- <script>

Elements in <body>:

- <div>
- <p>
- <h1>
- <img>
- <a>

Rule:
Head = metadata (not displayed)
Body = visible content

---

Q3. Block vs Inline Elements

Block Elements:

- Take full width
- Start on a new line
  Examples: <div>, <p>, <h1>

Inline Elements:

- Take only necessary width
  Examples: <span>, <a>, <img>

---

Q4. Attributes

Attributes provide additional information about elements.

Example:

<img src="image.jpg" alt="A description">

- Required: "src"
- Optional: "alt" (but important)

If "alt" is missing, accessibility is reduced and screen readers cannot describe the image.

---

Q5. Hyperlinks & Paths

Absolute URL:

<a href="https://example.com">Visit</a>

Relative URL:

<a href="about.html">About</a>

Use:

- Absolute → external links
- Relative → internal navigation

---

SECTION B: SEMANTIC HTML

Q6. Semantic HTML

Semantic HTML uses meaningful tags like <header> instead of generic <div>.

They are not visually different but improve:

- Readability
- SEO
- Accessibility

---

Q7. Sectioning Elements

- <header> → top section
- <nav> → navigation
- <main> → main content
- <section> → grouped content
- <article> → standalone content
- <aside> → sidebar
- <footer> → bottom section

---

Q8. <section> vs  <article> vs <div>

- <section>n→ related grouped content
- <article>  → independent content (blog post, news)
- <div> → used when no semantic meaning applies

---

Q9. Heading Hierarchy

Incorrect:

<h1>My Blog</h1>
<h4>Latest Posts</h4>
<h6>Post Title</h6>

Correct:

<h1>My Blog</h1>
<h2>Latest Posts</h2>
<h3>Post Title</h3>

Skipping levels harms SEO and accessibility.

---

Q10. Lists

- <ul> → unordered list
- <ol> → ordered list
- <dl> → description list

Lists should not be used purely for layout or indentation.

---

SECTION C: HTML FORMS

Q11. Form Attributes

- "action" → where data is sent
- "method" → how data is sent

GET → visible in URL
POST → secure and used for sensitive data

---

Q12. Input Types

- text
- email
- password
- number
- date
- checkbox
- radio
- file

Each type controls how users input data.

---

Q13. Labels & Accessibility

Correct ways:

<label for="name">Name</label>
<input id="name">

OR

<label>
  Name <input type="text">
</label>

Without labels:

- Poor accessibility
- Hard for screen readers
- Worse user experience

---

Q14. Select, Textarea, Button

<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<textarea></textarea>

<button type="submit">Submit</button>

---

Q15. Validation Attributes

- required
- minlength
- maxlength
- min
- max
- pattern

Example:

<input type="text" required minlength="3" maxlength="10">

---

SECTION D: CSS BASICS

Q16. CSS Methods

- Inline → quick but messy
- Internal → inside "<style>"
- External → best practice (clean & reusable)

---

Q17. CSS Selectors

- Element → "p {}"
- Class → ".class {}"
- ID → "#id {}"

Priority: ID > Class > Element
This is called specificity.

---

Q18. Combinators

- Descendant → "div p"
- Child → "div > p"
- Adjacent → "h1 + p"
- General → "h1 ~ p"

---

Q19. Box Model

- Content
- Padding
- Border
- Margin

"box-sizing: border-box" ensures padding and border are included in width.

---

Q20. Cascade & Inheritance

- Cascade → determines which style applies
- Inheritance → some properties pass from parent to child

---

SECTION E: CSS LAYOUT & RESPONSIVE DESIGN

Q21. Flexbox

Flexbox is used for layout.

- Flex container → parent
- Flex items → children
- Main axis depends on "flex-direction"

---

Q22. justify-content vs align-items

- justify-content → aligns on main axis
- align-items → aligns on cross axis

---

Q23. Responsive Design

Responsive design adapts layouts to screen size.

Example:

@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

---

Q24. CSS Units

- px → fixed
- % → relative
- em → relative to parent
- rem → relative to root
- vw/vh → viewport size

---

Q25. Layout Patterns

- Navbar → "display: flex; justify-content: space-between;"
- Grid layout → "flex-wrap: wrap;"
- Footer → spaced using flex

---

PRACTICAL ASSIGNMENTS

Practical 1: Profile Page

Created a personal profile page including:

- Header and navigation
- Bio section
- Skills section
- Contact form

Practical 2: Landing Page

Built a responsive landing page using:

- Flexbox
- Responsive layout
- Media queries
