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