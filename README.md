Setup instructions:

1. Initialize project: pnpm install
2. Open dev version of a project locally: pnpm dev
3. Open storybook admin panel: pnpm storybook

Form Text Input Component:

Description:
This is a component that uses react-hook-form. It's quite simple, but also uses FormProvider, to share FormContext. It was probably the easiest one from all of them. It took no more than an hour to complete it (I don't include time spended on configuration of Storybook)

It has 6 state combinations, but I'll show only 3

State 1:
input type = "text"
clearable = false
![alt text](image-7.png)
![alt text](image-2.png)

State 2:
input type = "password"
clearable = true
![alt text](image-8.png)
![alt text](image-4.png)

State 3:
input type = "number"
clearable = false
![alt text](image-5.png)
![alt text](image-6.png)

Toast Component:

Description:
At first it looked like a simple task, but due to fade animation, it was quite complex. Implementation may look simple, so you probably wondering, what was so difficult, but I wasted too much of time figuring out, that I can use decremental z-index to hide Toast component after animation. And it wouldn't be so difficult, if at first I didn't try to fix the bag with Toast flinching on the page after every reload only with CSS.

This component has infinite number of configurations, considering time parameter, but I show you only 3 of them:

State 1:
toastAppearenceDuration = 5 000ms
clearable = true
animationType = slide
![alt text](image-9.png)

State 2:
toastAppearenceDuration = 3 000ms
clearable = false
animatinoType = slide
![alt text](image-10.png)

State 3:

toastAppearenceDuration = 5 000ms
clearable = true
animationType = fade
![alt text](image-11.png)


Sidebar Component:

Description:
This component can be fascinating under the hood. And I don't know - either this my ingenuity, neither sillyness. But anyway, I implemented animatino of expeding and collapsing sub menus with requestAnimationFrame. It works perfectly, and as I know there were no other way to animate such thing with pure css (Considering transition from height:0 to the state of height: auto. If needed so, it's possible to take elements height via js and animate (I did so) )

States:

State 1:

visibleByDefault = true
list = [
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
];

![alt text](image-13.png)


State 2:

visibleByDefault = true
list: [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
];

![alt text](image-14.png)
![alt text](image-15.png)