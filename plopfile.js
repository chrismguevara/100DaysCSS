export default function(plop) {
  // CSS Challenge generator
  plop.setGenerator(
    'day',
    {
      description: "Create a new day of CSS challenge",
      prompts: [
        {
          type: "input",
          name: "day",
          message: "What's the day number?",
        },
        {
          type: "input",
          name: "challenge",
          message: "What's the challenge name?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "app/routes/day-{{ day }}/day-{{ day }}.tsx",
          templateFile: ".plop-templates/day-x.tsx.hbs",
        },
        {
          type: "add",
          path: "app/routes/day-{{ day }}/day-{{ day }}.css",
          templateFile: ".plop-templates/day-x.css.hbs",
        },
        {
          type: "modify",
          path: "app/routes/posts.ts",
          pattern: "/* __END OF IMPORTS__ */",
          template: "import Day{{ day }} from './day-{{ day }}/day-{{ day }}';\n/* __END OF IMPORTS__ */",
        },
        {
          type: "modify",
          path: "app/routes/posts.ts",
          pattern: "/* __END OF POSTS__ */",
          template: `{
    id: {{ day }},
    title: "{{ challenge }}",
    href: "/days/{{ day }}",
    description:
      \`
      Day {{ day }}: {{ challenge }}
      \`,
    imageUrl: "previews/day-{{ day }}.png",
    date: "Day {{ day }}",
    component: Day{{ day }},
  },
  /* __END OF POSTS__ */`,
        },
      ],
    }
  );
}
