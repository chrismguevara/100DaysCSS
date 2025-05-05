import Day1 from "./day-1/day-1";
import Day10 from "./day-10/day-10";
import Day11 from "./day-11/day-11";
import Day12 from "./day-12/day-12";
import Day13 from "./day-13/day-13";
import Day2 from "./day-2/day-2";
import Day3 from "./day-3/day-3";
import Day4 from "./day-4/day-4";
import Day5 from "./day-5/day-5";
import Day6 from "./day-6/day-6";
import Day7 from "./day-7/day-7";
import Day8 from "./day-8/day-8";
import Day9 from "./day-9/day-9";

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
  {
    id: 7,
    title: "Notifications",
    href: "/days/7",
    description:
      `
      Here's a notifications widget that displays the most recent notifications, allows you to search for notifications, and navigate to another page.
      Unfortunately, I was unable to get the font awesome icons, so I temporarily replaced them with blocks for now.
      When you click on the menu icon on the left, the sidenav reveals itself on the left.
      When you click on the right icon, the search input is revealed in the header.
      My favorite part of this challenge was actually getting the search input to display over the header because I achieved it without using absolute positioning.
      The key is to use CSS Grid and explicitly set the search input's row to 1, which forces it to be placed over the header.
      And when it is hidden, set pointer-events to none so that it doesn't intefere with any mouse events on the other parts of the header. 
      `,
    imageUrl: "previews/day-7.png",
    date: "Day 7",
    component: Day7,
  },
  {
    id: 8,
    title: "Metaballs",
    href: "/days/8",
    description:
      `
      A bunch of metaballs that move around a larger ball and melt into each other when they touch. This one was pretty tricky. In order to get that "gooey" effect, you need to combine two CSS filters: blur and contrast. These filters need to be applied to the element that contains the metaballs, and it must have a black background or else the contrast filter won't get applied.
      `,
    imageUrl: "previews/day-8.png",
    date: "Day 8",
    component: Day8,
  },
  {
    id: 9,
    title: "Rainy Night",
    href: "/days/9",
    description:
      `
      A view of a rainy night with the weather data displayed below. In this one, I learned how to create reusable components whose style can be overriden with CSS variables or utility classes.
      This was especially helpful for generating the raindrops with varying sizes and randomly generated positions.
      I also learned that utility classes won’t necessarily override the base component’s own classes if the base component already uses the same class. To fix this, I just made sure that the base component did not use utility classes that it might receive through props.
      `,
    imageUrl: "previews/day-9.png",
    date: "Day 9",
    component: Day9,
  },
  {
    id: 10,
    title: "Watch",
    href: "/days/10",
    description:
      `
      A watch widget with a nice animation around the border and a display of the current datetime along with some health data.
      I learned a bit about how to use SVG circle to create the bezel animation.
      The official solution used a lot of divs and absolute positioning to create the tick marks, but instead I just created a single SVG circle and used stroke-dasharray.
      `,
    imageUrl: "previews/day-10.png",
    date: "Day 10",
    component: Day10,
  },
  {
    id: 11,
    title: "Walking Boots",
    href: "/days/11",
    description:
      `
      An animation of a pair of walking boots.
      I got some good practice with organizing tailwind classes into reusable React components.
      `,
    imageUrl: "previews/day-11.png",
    date: "Day 11",
    component: Day11,
  },
  {
    id: 12,
    title: "Tooltip",
    href: "/days/12",
    description:
      `
      (Note: This challenge is only supported in Chrome)
      This is a quote with a tooltip that displays the definition of a word.
      This time, I used CSS Anchor positioning to position the tooltip relative to the term.
      However, CSS Anchor positioning is an experimental feature that is only supported in Chrome.
      I also tried to make the tooltip more accessible by setting the aria-hidden attribute and using other semantic HTML elements like <dfn> and <figcaption>.
      The trickiest part of this challenge was preventing the tooltip from closing when the mouse is hovering over the tooltip itself, while following accessibility best practices.
      `,
    imageUrl: "previews/day-12.png",
    date: "Day 12",
    component: Day12,
  },
  {
    id: 13,
    title: "User Gallery",
    href: "/days/13",
    description:
      `
      A gallery of user profiles. Got more practice with CSS Grid and a lot of animations with this one.
      `,
    imageUrl: "previews/day-13.png",
    date: "Day 13",
    component: Day13,
  },
];
