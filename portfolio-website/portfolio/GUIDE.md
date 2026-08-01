# Portfolio Website Guide

This is a comprehensive guide explaining the structure, content, and usage of this Next.js portfolio website.

## Project Structure Overview

```
portfolio/
├── public/                     # Static assets
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   ├── data/                   # Data files (your content!)
│   └── lib/                    # Utility functions
├── content/                    # Blog/MDX content
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## File-by-File Breakdown

### `/public/` - Static Assets

| File | Purpose |
|------|---------|
| `me.jpg` | Your profile photo/avatar displayed in the hero section |
| `thdc.png` | Logo for THDC India Limited (work experience) |
| `gbpiet.png` | Logo for Govind Ballabh Pant Institute of Engineering and Technology (education) |

> **Note:** Add company/institution logos here. Use PNG, JPG, or SVG format. Reference them as `/filename.ext` in the data file.

---

### `/src/data/` - Content Data

#### `resume.tsx` - **Main Content File**

This is the most important file! It contains ALL your portfolio content, including your blog post list:

```typescript
export const DATA = {
// Personal Information
name: "Tushar Tyagi",
initials: "TT",
description: "...",          // Short bio shown in hero
summary: "...",               // Detailed about section (supports Markdown, e.g. **bold** / [links](url))
avatarUrl: "/me.jpg",         // Profile photo
location: "India",

// Skills Array
skills: ["Java", "Spring Boot", "Spring AI", ...],

// Navbar Array (in-page nav links, separate from social icons)
navbar: [
{ href: "/", icon: HomeIcon, label: "Home" },
],

// Work Experience Array
work: [
{
company: "Company Name",
title: "Your Role",
logoUrl: "/logo.png",
start: "Jul 2025",
end: "Aug 2025",
description: "What you did...",
href: "https://company.com",
location: "Remote",
badges: ""
}
],

// Education Array
education: [{...}],

// Projects Array
projects: [
{
title: "Project Name",
href: "https://github.com/...",
dates: "2024",
active: true,
description: "...",
technologies: ["Spring Boot", "PostgreSQL", ...],
links: [
{ type: "Source", href: "...", icon: <Icons.github className="size-3" /> },
{ type: "Website", href: "...", icon: <Icons.globe className="size-3" /> },
],
image: "",
video: "",
}
],

// Hackathons Array (data exists but the section is currently commented out on the homepage — see page.tsx)
hackathons: [{...}],

// Blogs Array (renders in the "My Writing" section)
blogs: [
{
title: "Post Title",
description: "...",
date: "July 2026",
href: "https://medium.com/@you/post-slug",
tags: ["WebRTC", "Real Time Communication"],
}
],

// Social Links (shown in the dock/navbar at the bottom of the screen)
contact: {
email: "you@example.com",
social: {
GitHub: { url: "...", icon: Icons.github, navbar: true },
LinkedIn: { url: "...", icon: Icons.linkedin, navbar: true },
X: { url: "...", icon: Icons.x, navbar: true },
Resume: { url: "...", icon: Icons.fileText, navbar: true },
email: { url: "mailto:...", icon: Icons.email, navbar: true },
}
}
} as const;
```

> **Note:** Unlike a typical setup with a separate `blog.ts` config file, this project keeps blog post metadata directly inside `resume.tsx` under the `blogs` array. Each entry is rendered by `BlogCard` on the homepage — there's no need to create individual MDX files for these link-out posts (e.g. Medium articles).

---

### `/src/app/` - Pages

| File | Purpose |
|------|---------|
| `page.tsx` | **Homepage** — Renders all sections: hero, about, GitHub contributions heatmap, skills, projects, blogs, work experience, education. (A hackathons section exists in the code but is currently commented out.) |
| `layout.tsx` | Root layout — sets up fonts, theme provider, tooltip provider, SEO metadata (via `DATA.url`, `DATA.name`, `DATA.description`), and renders the floating `Navbar`. Default theme is `light`. |
| `globals.css` | Global styles and CSS variables |
| `favicon.ico` | Browser tab icon |
| `blog/` | Blog page and individual post pages |

---

### `/src/components/` - UI Components

| File | Purpose |
|------|---------|
| `navbar.tsx` | Floating dock-style navigation bar (bottom of screen) with in-page links, social icons pulled from `DATA.contact.social`, and the theme toggle |
| `resume-card.tsx` | Expandable card for work/education entries — click to reveal the description |
| `project-card.tsx` | Card for project entries, with thumbnail image/video, tags, and link badges (renders `description` as Markdown) |
| `hackathon-card.tsx` | Card component for hackathon entries |
| `blog-card.tsx` | Expandable list item for blog posts — click to reveal the description, with an external-link icon to open the original post |
| `mode-toggle.tsx` | Dark/Light theme toggle button |
| `theme-provider.tsx` | Theme context provider (wraps `next-themes`) |
| `github-heatmap.tsx` | Fetches and renders a GitHub-style contribution heatmap for a given username, with light/dark-aware coloring |
| `DecryptedText.tsx` | Text "decrypt" scramble animation (used for the hero headline), configurable to trigger on hover, click, or scroll-into-view |
| `icons.tsx` | SVG icon components (GitHub, LinkedIn, X, email, file/resume, globe, etc.) |
| `mdx.tsx` | MDX renderer/components for blog posts (headings with anchors, custom links, images, tables) |
| `ui/` | Base UI components (avatar, badge, button, card, dock, tooltip, separator) |
| `magicui/` | Animation components (blur-fade, blur-fade-text, dock) |

---

### `/content/` - Blog Content

Store your long-form blog posts as `.mdx` files here if you want self-hosted posts rendered via `blog/`. Each file becomes a blog post.

Example: `hello-world.mdx`

> Note: The homepage "My Writing" section (`DATA.blogs`) is separate from this — it's meant for linking out to externally-published posts (e.g. Medium), not for `.mdx` files in `/content/`.

---

### Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `tsconfig.json` | TypeScript settings |
| `next.config.mjs` | Next.js configuration |
| `components.json` | Shadcn/UI configuration |
| `package.json` | Project dependencies |
| `.eslintrc.json` | ESLint rules |

---

## How to Run

### Prerequisites
- Node.js 18+ installed
- pnpm, npm, or yarn

### Installation

```bash
# Navigate to portfolio folder
cd portfolio

# Install dependencies (using pnpm - recommended)
pnpm install

# OR using npm
npm install

# OR using yarn
yarn install
```

### Development

```bash
# Start development server
pnpm dev

# The site will be available at http://localhost:3000
```

### Production Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

---

## How to Customize

### 1. Update Your Content

Edit `/src/data/resume.tsx`:

- **Personal Info**: Change `name`, `initials`, `description`, `summary`, `location`
- **Skills**: Modify the `skills` array
- **Navbar**: Add/edit in-page nav links in the `navbar` array
- **Work Experience**: Add/edit entries in the `work` array (uncomment or add more entries as needed)
- **Education**: Add/edit entries in the `education` array
- **Projects**: Add/edit entries in the `projects` array
- **Hackathons**: Add/edit entries in the `hackathons` array (re-enable the section in `page.tsx` by uncommenting the `<section id="hackathons">` block if you want it shown)
- **Blogs**: Add/edit entries in the `blogs` array to link out to your published posts
- **Social Links**: Update URLs in `contact.social`

### 2. Update Images

1. Add your images to `/public/`
2. Reference them in `resume.tsx` as `/imagename.ext`
3. Common images:
- Profile photo: `me.jpg`
- Company logos: `companyname.png`
- School logos: `schoolname.png`

### 3. Add Company/School Logos

For work or education entries without logos:
1. Download the company/institution logo
2. Save it to `/public/` (e.g., `companyname.png`)
3. Update the `logoUrl` in `resume.tsx` to `/companyname.png`

### 4. Customize the GitHub Heatmap

`github-heatmap.tsx` is used in `page.tsx` via:

```tsx
<GitHubHeatmap username="01tushar26" />
```

Change the `username` prop to your own GitHub handle to show your own contribution graph. It automatically adapts its colors to the current theme (light/dark).

### 5. Customize the Hero Animation

The hero headline uses `DecryptedText`:

```tsx
<DecryptedText
text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
animateOn="view"
sequential={true}
speed={50}
revealDirection="start"
/>
```

You can change `animateOn` to `"hover"`, `"click"`, or `"inViewHover"`, adjust `speed` (ms per step), or change `revealDirection` to `"end"` or `"center"`.

### 6. Customize Theme

Edit `tailwind.config.ts` to change colors, fonts, and other theme settings.

### 7. Add Blog Posts

**Linked posts (recommended for this setup):** Add an entry to the `blogs` array in `resume.tsx` with `title`, `description`, `date`, `href`, and `tags` — it will automatically appear in the "My Writing" section on the homepage.

**Self-hosted posts:** Create a new `.mdx` file in `/content/` with frontmatter and content; it will appear on the `/blog` page.

---

## Key Sections (Homepage)

| Section | Description | Data Source |
|---------|-------------|-------------|
| Hero | Name (animated decrypt effect), short bio, email link, profile photo | `name`, `description`, `avatarUrl` |
| About | Detailed summary/background (Markdown-rendered) | `summary` |
| Contributions | GitHub contribution heatmap | `github-heatmap.tsx` (username prop) |
| Skills | Technical skills badges | `skills[]` |
| Projects | Featured projects grid | `projects[]` |
| My Writing | Blog post list, expandable with external link | `blogs[]` |
| Work Experience | Professional experience timeline | `work[]` |
| Education | Academic background | `education[]` |

> **Hackathons** is implemented (`hackathons[]` data + `HackathonCard` component) but its section is currently commented out in `page.tsx`.

---

## Features

- **Dark/Light Mode** - Automatic theme switching
- **Responsive Design** - Mobile-first approach
- **Animations** - Blur fade effects on scroll + decrypt-style text reveal on the hero
- **GitHub Contributions Heatmap** - Live-fetched, theme-aware
- **SEO Optimized** - Meta tags and structured data
- **Fast Performance** - Next.js optimizations
- **Blog Support** - Linked posts on the homepage + optional MDX-powered `/blog` route
- **Easy Updates** - Single data file for all content

---

## Troubleshooting

### Images not showing?
- Ensure images are in `/public/`
- Check file names (case-sensitive)
- Use correct path format: `/imagename.ext`

### Content not updating?
- Restart the dev server after changing `resume.tsx`
- Clear browser cache

### GitHub heatmap not loading?
- The component fetches from a public contributions API using the `username` prop passed to `<GitHubHeatmap />` in `page.tsx` — make sure it matches a valid GitHub username
- If the API is unreachable, the component will show a "Could not load GitHub contributions" fallback message

### Build errors?
- Run `pnpm install` to ensure all dependencies are installed
- Check for TypeScript errors in the terminal

---

## Current Portfolio Content

### Personal Info
- **Name**: Tushar Tyagi
- **Role**: Backend Engineer
- **Focus**: Java, Spring Boot, Microservices, AWS, AI-powered application development

### Experience (1 position)
1. THDC India Limited - Intern (Jul 2025 - Aug 2025)

### Projects (5 projects)
1. Learnify - RAG-powered study assistant for PDFs/lecture videos
2. DevHive - Real-time collaborative code editor with video calling
3. BookMyStay - Hotel booking backend with dynamic pricing and payments
4. Code-Buddy - AI-powered Chrome Extension for code summarization/refactoring
5. YouTube SEO Tags Generator - SEO tag generator using YouTube Data API v3

### Blogs (1 post)
1. "Peeking Behind the Video Call: A WebRTC Deep Dive" - July 2026 (Medium)

### Education
- B.Tech in Computer Science, Govind Ballabh Pant Institute of Engineering and Technology (2022-2026)

### Skills
Java, Spring Boot, Spring AI, Spring, JavaScript, React.js, MySQL, PostgreSQL, Redis, Docker, Kubernetes, AWS, Microservices, JUnit, Mockito, Jenkins, Github Actions, Flyway, RAGs, CI/CD