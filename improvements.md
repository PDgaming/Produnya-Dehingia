# Architecture & Code Health Improvements

## 1. Extract a reusable `<Window>` wrapper

Every app window (aboutMe, projects, settings, skills, contact) duplicates the same boilerplate:

```svelte
import TitleBar from './titleBar.svelte';
import { draggable } from '@neodrag/svelte';
import './window.css';
use:draggable={{ bounds: 'body', handle: '.title-bar' }}
```

**Create `src/lib/components/Window.svelte`:**

```svelte
<script lang="ts">
  import TitleBar from './titleBar.svelte';
  import { draggable } from '@neodrag/svelte';

  let { children, class: className = '' } = $props();
</script>

<div
  class="window bg-base-100 absolute flex flex-col {className}"
  use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
  <div class="title-bar w-full"><TitleBar /></div>
  <div class="window-content grow overflow-y-scroll p-4">
    {@render children()}
  </div>
</div>

<style>
  .window {
    height: 80%;
    width: 70%;
    top: 5%;
    left: 15%;
  }
</style>
```

Then each app becomes just its content — no imports of TitleBar, draggable, or window.css.

---

## 4. Centralize localStorage effects in the store

Currently localStorage is read/written in `+layout.svelte`, `settings.svelte`, and the store. Consolidate into the store using `$effect`:

```typescript
// store.svelte.ts
export const theme = ref(localStorage.getItem('Theme') ?? 'light');

$effect(() => {
  localStorage.setItem('Theme', theme.value);
  document.documentElement.setAttribute('data-theme', theme.value);
});
```

Components only ever touch `theme.value` — no direct localStorage access.

---

## 7. Move all components to `src/lib/components/`

SvelteKit convention places reusable components in `$lib/`. Move:
- `src/components/*` → `src/lib/components/*`
- Update imports in `+layout.svelte` and cross-references.

Optionally add an alias in `vite.config.ts`:

```typescript
resolve: {
  alias: { $components: path.resolve('./src/lib/components') }
}
```

---

## 10. Add proper typing throughout

| File | Current | Fix |
|------|---------|-----|
| `projects.svelte:6` | `let repos: any[]` | Define `interface GitHubRepo { name: string; description: string; html_url: string; language: string; private: boolean }` |
| `titleBar.svelte:4` | `let icon: any` | `let icon = $derived(...)` — type inferred |
| `aboutMe.svelte` | `<script>` | Change to `<script lang="ts">` |

---

## Implementation order

| # | Task | Files affected |
|---|------|----------------|
| 1 | Create `<Window>` component | New: `src/lib/components/Window.svelte` |
| 2 | Simplify store with `ref()` helper | `src/lib/store/store.svelte.ts` |
| 3 | Centralize localStorage in store effects | `store.svelte.ts`, `+layout.svelte`, `settings.svelte` |
| 4 | Replace `{#if}` chain with registry map | `+layout.svelte` |
| 5 | Replace `$effect` with `$derived` in titleBar | `titleBar.svelte` |
| 6 | Replace DOM classList with reactive CSS | `+layout.svelte`, `app.css` |
| 7 | Refactor all app windows to use `<Window>` | aboutMe, projects, settings, skills, contact |
| 8 | Fix clock reactivity | `bar.svelte` |
| 9 | Extract SVG data to separate files | New: `src/lib/data/skills.ts`, `apps.ts` |
| 10 | Move components to `src/lib/components/` | All files |
| 11 | Add proper types | `projects.svelte`, `titleBar.svelte` |
