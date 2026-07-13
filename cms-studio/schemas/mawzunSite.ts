import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const mawzunSite = defineType({
  name: "mawzunSite",
  title: "Mawzun site content",
  type: "document",
  groups: [
    { name: "home", title: "Home" },
    { name: "services", title: "Services" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    defineField({
      name: "home",
      title: "Home page",
      type: "object",
      group: "home",
      fields: [
        imageField("secondImage", "Second homepage image"),
        imageField("shareefImage", "Homepage Shareef image"),
      ],
    }),
    defineField({
      name: "services",
      title: "Services page",
      type: "object",
      group: "services",
      fields: [
        imageField("mainImage", "Main services image"),
        imageField("shareefImage", "Services Shareef image"),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact page",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "introduction",
          title: "Introduction paragraphs",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 4 })],
        }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "locations", title: "Locations", type: "string" }),
        defineField({
          name: "confidentiality",
          title: "Confidentiality notes",
          type: "array",
          of: [defineArrayMember({ type: "text", rows: 3 })],
        }),
        imageField("image", "Contact image"),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Mawzun Advisory", subtitle: "Website content" }),
  },
});
