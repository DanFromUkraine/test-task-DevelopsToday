# Test assessment

## Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open Storybook admin panel
pnpm storybook
```

---

Form Text Input Component

Estimated time spent: ~1 hour

Description
This is a simple input component built with react-hook-form. It uses FormProvider to share the form context. It was one of the easier components to implement (time above does not include Storybook configuration).

It has 6 state combinations; below are 3 examples.

State 1:

1. input type: `"text"`
2. clearable: `false`

State 2

1. input type: `"password"`
2. clearable: `true`

State 3

1. input type: `"number"`
2. clearable: `false`

---

Toast Component

Estimated time spent: ~2 hours

Description
Initially this looked like a simple task, but the fade animation added complexity. I spent a lot of time discovering that a decrementing z-index can be used to hide the Toast after the animation completes. The bug where the Toast would "flinch" on page reload was tricky to fix with CSS alone.

This component supports many configurations (especially around duration); below are 3 examples.

State 1

1. toastAppearanceDuration (miliseconds): `5000`
2. clearable: `true`
3. animationType: `"slide"`

State 2

1. toastAppearanceDuration (miliseconds): `3000`
2. clearable: `false`
3. animationType: `slide`

State 3

1. toastAppearanceDuration (miliseconds): `5000`
2. clearable: `true`
3. animationType: `"fade"`

---

Sidebar Component

Estimated time spent: ~3.5 hours

Description
This component includes an animation for expanding and collapsing submenus implemented with requestAnimationFrame. I implemented a JS-based height measurement and animation because transitioning reliably from height: 0 to height: auto with pure CSS was not suitable for this use case.

Example State 1

1. visibleByDefault: `true`
2. list:

```TypeScript
[
  {
    subMenuHeading: "Sub menu 1",
    subItems: ["item 1", "item 2", "item 3"],
  },
  {
    subMenuHeading: "Sub menu 2",
    subItems: ["item 4", "item 5", "item 6"],
  },
  {
    subMenuHeading: "Sub menu 3",
    subItems: ["item 7", "item 8", "item 9"],
  },
  "item 10",
  "item 11",
]
```

Example State 2

1. visibleByDefault: `true`
2. list:

```TypeScript
[
"item 1",
"item 2",
"item 3",
"item 4",
"item 5",
"item 6",
]
```

---

I spent about 2 hours setting up Storybook (I really hate Webpack), because by default it tried to compile using the Next.js Webpack (Turbopack?) compiler. After reinstalling node_modules five times and switching the framework from "next" to "next-vite", it finally started working.

Overall, I enjoyed this test assessment — it forced me to solve problems I had previously skipped over. It really pushed me to the limits (with only 2 days, I ended up coding at least 10–11 hours in general), and it taught me how to use Storybook (which I actually learned just this morning).

I completed almost all of the requirements from the instructions, including the bonus ones.

Looking forward to your enhance feedback!


```

```
