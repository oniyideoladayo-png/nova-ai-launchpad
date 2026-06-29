# NovaAI Studio - Functionality Audit and Implementation Plan

This plan addresses the comprehensive audit and implementation of all interactive elements within the NovaAI Studio application, ensuring it functions like a real SaaS product without altering the existing design.

## Scope Summary
- Audit and fix all navigation links (Navbar, Footer, Sidebar).
- Implement CTA button actions (Get Started -> Signup, Log In -> Login).
- Connect feature cards to their respective pages.
- Implement AI prompt simulation (Text input -> Loading animation -> Mock project preview).
- Fix broken routing and missing event handlers.
- Verify no dead links or console errors.

## Auth & RLS model
**Auth in scope:** yes
**Model:** supabase_auth
**RLS strategy:** Standard `auth.uid()` checks for user-specific data (e.g., dashboard projects).
**Frontend implication:** Redirect to login for protected routes; toast notifications for unauthorized actions.

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** not_applicable (Greenfield focus on existing frontend-to-backend wiring)

## Affected Areas
- `src/App.tsx`: Routing verification.
- `src/components/layout/Navbar.tsx` & `Footer.tsx`: Link connectivity.
- `src/components/landing/Hero.tsx` & `Features.tsx`: CTA and Card actions.
- `src/pages/LandingPage.tsx`: Overall landing page orchestration.
- `src/pages/Dashboard.tsx`: AI prompt and generation logic.
- `src/components/chat/ChatWindow.tsx`: Prompt simulation.
- `src/pages/auth/`: Login/Signup flows.

## Phases

### Phase 1: Navigation & Routing Audit
- Audit `App.tsx` for missing routes.
- Update `Navbar.tsx` and `Footer.tsx` to use `react-router-dom`'s `Link` or `useNavigate`.
- Ensure all "Get Started" buttons point to `/signup` and "Log In" points to `/login`.
- **Owner:** `frontend_engineer`

### Phase 2: Landing Page Interactivity
- Wire up Feature cards in `Features.tsx` to navigate to specific feature descriptions or the dashboard.
- Ensure CTA buttons in `Hero.tsx`, `Pricing.tsx`, and `FAQ.tsx` are functional.
- **Owner:** `frontend_engineer`

### Phase 3: AI Prompt & Generation Simulation
- In the Dashboard/Landing prompt input:
    - Capture input text.
    - Implement a "Generate" click handler.
    - Show a realistic loading state/animation.
    - Transition to a mock project preview or dashboard view.
- **Owner:** `frontend_engineer`

### Phase 4: Auth Flow Integration
- Verify `Login.tsx` and `Signup.tsx` connect to Supabase Auth.
- Ensure `ProtectedRoute.tsx` correctly handles session states.
- **Owner:** `supabase_engineer`

### Phase 5: Quality Assurance & Bug Fixes
- Crawl all pages for dead links (404s).
- Fix console errors related to missing keys or invalid props.
- Ensure responsive behavior for interactive elements.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. supabase_engineer — Setup auth wiring first to ensure CTAs have destinations that work.
2. frontend_engineer — Handle bulk of UI connectivity and AI simulation.
3. quick_fix_engineer — Cleanup, console error fixes, and final link audit.

**Per-agent instructions:**

### 1. supabase_engineer
- **Phases:** Phase 4
- **Scope:** Ensure `src/pages/auth/` components are connected to Supabase Auth. Verify `ProtectedRoute.tsx` works with the current session.
- **Files:** `src/pages/auth/Login.tsx`, `src/pages/auth/Signup.tsx`, `src/components/auth/ProtectedRoute.tsx`, `src/hooks/use-database.ts`.
- **Depends on:** none
- **Acceptance criteria:** Users can sign up, log in, and are correctly redirected to the dashboard.

### 2. frontend_engineer
- **Phases:** Phase 1, 2, 3
- **Scope:** Connect all links in Navbar/Footer. Wire up CTAs and Cards. Implement the AI prompt simulation (Input -> Loading -> Mock Result).
- **Files:** `src/components/layout/Navbar.tsx`, `src/components/landing/Hero.tsx`, `src/components/landing/Features.tsx`, `src/App.tsx`, `src/pages/Dashboard.tsx`.
- **Depends on:** Phase 4 (for auth link targets)
- **Acceptance criteria:** Every button and link performs an action; AI prompt shows a loading state and then a mock project.

### 3. quick_fix_engineer
- **Phases:** Phase 5
- **Scope:** Audit all pages for dead links and console warnings. Fix minor UI glitches in interactive states.
- **Files:** All project files.
- **Depends on:** Phase 2, 3
- **Acceptance criteria:** Zero console errors and zero broken links across the app.

IS_SUPABASE_REQUIRED: true
