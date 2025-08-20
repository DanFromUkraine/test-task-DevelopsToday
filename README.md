# Components Showcase

## Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open Storybook admin panel
pnpm storybook


---

Form Text Input Component

Estimated time spent: ~1 hour

Description
This is a simple input component built with react-hook-form. It uses FormProvider to share the form context. It was one of the easier components to implement (time above does not include Storybook configuration).

It has 6 state combinations; below are 3 examples.

State 1

input type: text

clearable: false





State 2

input type: password

clearable: true





State 3

input type: number

clearable: false






---

Toast Component

Estimated time spent: ~2 hours

Description
Initially this looked like a simple task, but the fade animation added complexity. I spent a lot of time discovering that a decrementing z-index can be used to hide the Toast after the animation completes. The bug where the Toast would "flinch" on page reload was tricky to fix with CSS alone.

This component supports many configurations (especially around duration); below are 3 examples.

State 1

toastAppearanceDuration: 5000 ms

clearable: true

animationType: slide




State 2

toastAppearanceDuration: 3000 ms

clearable: false

animationType: slide




State 3

toastAppearanceDuration: 5000 ms

clearable: true

animationType: fade





---

Sidebar Component

Estimated time spent: ~3.5 hours

Description
This component includes an animation for expanding and collapsing submenus implemented with requestAnimationFrame. I implemented a JS-based height measurement and animation because transitioning reliably from height: 0 to height: auto with pure CSS was not suitable for this use case.

Example State 1

visibleByDefault: true

list:

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




Example State 2

visibleByDefault: true

list:

[
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
]






---

Notes

Times are approximate and exclude Storybook setup time (unless specified).

Property names shown above reflect the component API used in the examples (e.g. toastAppearanceDuration, clearable, animationType).

For more examples and interactive testing, open Storybook with pnpm storybook.