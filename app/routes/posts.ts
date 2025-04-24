import Day1 from "./day-1/day-1";
import Day2 from "./day-2/day-2";
import Day3 from "./day-3/day-3";
import Day4 from "./day-4/day-4";
import Day5 from "./day-5/day-5";
import Day6 from "./day-6/day-6";

// TODO Add metadata for each post
export const posts = [
  {
    id: 1,
    title: "100 Days CSS",
    href: "/days/1",
    description:
      "The text '100 DAYS CSS CHALLENGE' styled with shadows and gradients. This was a nice introduction to Tailwind v4.",
    imageUrl: "previews/day-1.png",
    date: "Day 1",
    component: Day1,
  },
  {
    id: 2,
    title: "Menu Icon",
    href: "/days/2",
    description:
      "A hamburger menu icon that animates when you click on it. By using a hidden checkbox and Tailwind's peer class, I was able to implement this with CSS only.",
    imageUrl: "previews/day-2.png",
    date: "Day 2",
    component: Day2,
  },
  {
    id: 3,
    title: "The Pyramide",
    href: "/days/3",
    description:
      "An animation of a sun going over a pyramid. Learned how to define CSS variables using Tailwind's bracket syntax.",
    imageUrl: "previews/day-3.png",
    date: "Day 3",
    component: Day3,
  },
  {
    id: 4,
    title: "Loading",
    href: "/days/4",
    description:
      "A calming loading animation. I learned how to use CSS Grid to overlap the circles without absolute positioning and z-index setting.",
    imageUrl: "previews/day-4.png",
    date: "Day 4",
    component: Day4,
  },
  {
    id: 5,
    title: "Statistic",
    href: "/days/5",
    description:
      `A widget that displays a line graph with a legend.
      Hovering over each datapoint displays a tooltip with the value.
      The entire line graph is an SVG where each datapoint is a circle. To achieve the tooltip effect, I used the foreignObject element to embed the HTML tooltip within each datapoint.
      I also used container queries to make the widget responsive. You can drag the bottom right corner to resize
      the widget and see how it adapts to the new container size.
      `,
    imageUrl: "previews/day-5.png",
    date: "Day 5",
    component: Day5,
  },
  {
    id: 6,
    title: "Profile",
    href: "/days/6",
    description:
      `This is a user profile widget that displays various information about a user and a couple of action buttons.
      Unlike the existing solution for this challenge, I made generous use of CSS Grid and flexbox to lay out the elements and made it more accessible.
      For the profile picture, I used figure and figcaption elements to display the user's avatar and name.
      The statistics are displayed in a data list element.
      And finally, the action buttons are grouped together in a button group using the aria-label attribute and role="group", which tells screen readers that these buttons are related to each other.
      `,
    imageUrl: "previews/day-6.png",
    date: "Day 6",
    component: Day6,
  },
];
