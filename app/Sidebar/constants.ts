import { Menu } from ".";

export const menuWithTwoLevels: Menu = [
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

export const plainMenu: Menu = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
];
