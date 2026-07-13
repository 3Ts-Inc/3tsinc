import { defineArrayMember, defineField } from "sanity";

export function imageField(name: string, title: string) {
  return defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: "position",
        title: "Focal position",
        description: "CSS-style position, for example: 60% 45%",
        type: "string",
        initialValue: "50% 50%",
      }),
    ],
  });
}

export const paragraphArray = defineField({
  name: "description",
  title: "Paragraphs",
  type: "array",
  of: [defineArrayMember({ type: "text", rows: 4 })],
  validation: (rule) => rule.min(1),
});
