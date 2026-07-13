import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, paragraphArray } from "./shared";

export const threeTsSite = defineType({
  name: "threeTsSite",
  title: "3Ts site content",
  type: "document",
  groups: [
    { name: "home", title: "Home" },
    { name: "about", title: "About" },
    { name: "approach", title: "Approach" },
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
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
        defineField({
          name: "introduction",
          title: "Hero introduction",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "serviceSummary",
          title: "Hero service summary",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "services",
          title: "Homepage services",
          type: "array",
          of: [
            defineArrayMember({
              name: "homeService",
              title: "Service",
              type: "object",
              fields: [
                defineField({ name: "number", title: "Number", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                paragraphArray,
              ],
              preview: { select: { title: "title", subtitle: "number" } },
            }),
          ],
        }),
        defineField({
          name: "engagements",
          title: "Selected engagements",
          type: "array",
          of: [
            defineArrayMember({
              name: "engagement",
              title: "Engagement",
              type: "object",
              fields: [
                defineField({ name: "number", title: "Number", type: "string" }),
                defineField({
                  name: "title",
                  title: "Title",
                  type: "text",
                  rows: 2,
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 5,
                }),
              ],
              preview: { select: { title: "title", subtitle: "number" } },
            }),
          ],
        }),
        imageField("testimonialImage", "Bottom homepage image"),
      ],
    }),
    defineField({
      name: "about",
      title: "About page",
      type: "object",
      group: "about",
      fields: [
        defineField({ name: "quote", title: "Closing quotation", type: "text", rows: 4 }),
        imageField("image", "About image"),
      ],
    }),
    defineField({
      name: "approach",
      title: "Approach page",
      type: "object",
      group: "approach",
      fields: [
        imageField("image", "Approach image"),
        defineField({
          name: "services",
          title: "Methodology services",
          type: "array",
          of: [
            defineArrayMember({
              name: "methodologyService",
              title: "Methodology service",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "label", title: "Audience label", type: "text", rows: 2 }),
                paragraphArray,
              ],
              preview: { select: { title: "title", subtitle: "label" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Services page",
      type: "object",
      group: "services",
      fields: [
        imageField("image", "Services page image"),
        defineField({
          name: "items",
          title: "Services",
          type: "array",
          of: [
            defineArrayMember({
              name: "servicePageItem",
              title: "Service",
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
                paragraphArray,
                defineField({ name: "cta", title: "Link label", type: "string" }),
                defineField({ name: "link", title: "Link path", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "subtitle" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact page",
      type: "object",
      group: "contact",
      fields: [
        defineField({ name: "introduction", title: "Introduction", type: "text", rows: 4 }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "locations", title: "Locations", type: "string" }),
        imageField("image", "Contact image"),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "3Ts Consulting", subtitle: "Website content" }),
  },
});
