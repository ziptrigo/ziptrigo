### **LLM Prompt: High-Performance Landing Page**

You are an expert Frontend Developer specializing in creating high-performance, visually stunning landing pages using modern Jamstack technologies. Your task is to generate the complete file structure, configuration, and placeholder content for a single-page marketing website.

**I. Project Goal & Audience:**
* **Goal:** Create a single-page (SPA) marketing landing page for a suite of online services targeted at **Small Businesses (SMBs)**. The page must be extremely fast, responsive, and visually appealing.
* **Audience:** Small business owners, freelancers, and startups looking for affordable, integrated, and easy-to-use business software.
* **Aesthetics:** Modern, clean, professional, and highly animated. Must convey trust and innovation.

**II. Tech Stack & Requirements:**
1.  **Meta-Framework:** **Nuxt 3** (using Vue 3).
2.  **Rendering:** Must use **Static Site Generation (SSG)** for optimal performance.
3.  **Styling:** **Tailwind CSS** (configured with JIT/PostCSS).
4.  **Animations:** Integrate **GSAP (GreenSock)** for high-quality scrolling and micro-animations.
5.  **3D/WebGL:** Include a placeholder component structure for a **Three.js** integration.
6.  **Structure:** Use component-based architecture (e.g., `components/`).

**III. Requested Output:**
* **File Structure:** Provide the complete directory structure using a tree view (`.`).
* **Key Files:** Provide the *code* for the following critical files:
    * `package.json` (Includes Nuxt 3, Tailwind, GSAP, and Three.js dependencies).
    * `nuxt.config.ts` (Configures SSG, Tailwind, and necessary modules).
    * `tailwind.config.js` (Includes basic theme colors and content paths).
    * `app.vue` (The main layout/wrapper).
    * `pages/index.vue` (The main page composition using components).
    * `components/HeroSection.vue` (The main above-the-fold component with placeholder text).
    * `components/FeaturesGrid.vue` (A grid showcasing the main products with placeholder text).
    * `components/WebGlCanvas.vue` (A simple placeholder for the Three.js canvas).

**IV. Placeholder Content & Branding:**

The company's name is **SynergySuite**. Its main services are: CRM, Invoicing, and Project Management.

| Section | Headline / Copy |
| :--- | :--- |
| **Hero Headline** | **SynergySuite: The All-in-One OS for Your Small Business.** |
| **Hero Subtext** | Stop juggling apps. Centralize your client management, billing, and projects. **Built for growth, priced for startups.** |
| **Product Feature 1 (CRM)** | **Smart Client Relations (CRM)**. Know your customer. Automated lead tracking and a unified communication timeline so you never miss a beat. |
| **Product Feature 2 (Invoicing)** | **Instant Invoicing & Payments.** Send professional, recurring invoices and get paid faster with integrated payment gateways. Zero friction billing. |
| **Product Feature 3 (Project Mgmt)** | **Seamless Project Management.** Tame the chaos. Visualize tasks, manage team workload, and hit deadlines—all in one intuitive dashboard. |
| **Call to Action (CTA)** | **Start Your Free 14-Day Trial. No Credit Card Needed.** |
| **Testimonial Placeholder** | "SynergySuite simplified our workflow and cut our admin time by 30%. The best business decision we've made this year." - *Sarah K., Founder of Momentum Design.* |

## Documentation
Update the README.md file with instructions on how to run the project locally.

----

## Clarifications 1
### Questions
I found initial_prompt.md at ziptrigo/initial_prompt.md (relative to your current repo root). It instructs me to create a Nuxt 3 + Tailwind + GSAP + Three.js-placeholder, SSG landing page (“SynergySuite”), including specific files and an updated README.md.

Before I execute it, I need a few clarifications:

1) Where should this Nuxt project live?
  * Create a new subfolder (e.g. synergysuite-landing/), or
  * Integrate into an existing Nuxt app already in this repo (if one exists)?
2) Scaffolding preference: should I run Nuxt’s initializer (nuxi init) and then modify files, or do you want me to create the file structure manually?
3) Package manager / lockfile: npm, pnpm, or yarn?
4) Deployment target for SSG: any preference (e.g. GitHub Pages vs Netlify vs Vercel)? This can affect Nuxt/Nitro preset config.
5) The prompt lists key components, but also includes a testimonial + CTA copy: do you want me to add additional sections/components (e.g. TestimonialSection.vue, CTASection.vue) beyond the three requested components, or keep it strictly minimal?
6) Brand defaults: any preferred primary/secondary colors and font, or should I pick reasonable placeholders in tailwind.config.js?

### Answers
1. There's no existing Nuxt app in this repo, so do what is most appropriate in that situation.
2. run nuxt init and then modify files.
3. Use the latest version of yarn
4. This is to be deployed in a AWS EC2 instance, in a docker image.
5. Add additional components as needed.
6. Select the pallete from the file C:\Users\joaon\code\ziptrigo\ziptrigo\ziptrigo_logo.png     This file is the logo of the brand.  Use this file and move / resize it to the appropriate location in the project.

Ask further aditional questions if necessary.

## Clarifications 2
### Questions
1) Project folder name: should I create the Nuxt app under ziptrigo/ as:
  * ziptrigo/landing/, or
  * ziptrigo/synergysuite-landing/, or
  * something else?

2) Branding mismatch: the prompt says the company name is SynergySuite, but you want colors from ziptrigo_logo.png.
  * Keep all on-page text as SynergySuite and just use Ziptrigo’s color palette/logo style, or
  * Replace “SynergySuite” with Ziptrigo everywhere?

3) Logo usage: should the logo appear in:
  * the navbar/top-left (common), or
  * the hero area, or
  * both?

4) Docker serving approach for SSG (recommended is static hosting):
  * Nginx serving static files generated by yarn generate (small, fast), or
  * Node server (yarn preview / Nitro) inside the container (not necessary for pure SSG, but possible)?

5) Port expectation inside the container: use 80 (nginx default) or 3000?

### Answers
1. ziptrigo/landing/
2. Replace “SynergySuite” with Ziptrigo everywhere.  ZipTrigo is the name of the company. SynergySuite was just a placeholder name.
3. Both.
4. Not sure which way to go. Use whatever is easiest to deploy and run.
5. Use port 8005
