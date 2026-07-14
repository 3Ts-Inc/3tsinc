import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, paragraphArray } from "./shared";

const text = (name: string, title: string, rows = 3) => defineField({ name, title, type: "text", rows });
const string = (name: string, title: string) => defineField({ name, title, type: "string" });
const strings = (name: string, title: string) => defineField({ name, title, type: "array", of: [defineArrayMember({ type: "string" })] });
const link = (name: string, title: string) => defineField({ name, title, type: "object", fields: [string("label", "Label"), string("href", "URL or path")] });
const testimonialArray = (name: string, title: string) => defineField({ name, title, type: "array", of: [defineArrayMember({ name: "testimonial", title: "Testimonial", type: "object", fields: [text("quote", "Quotation", 8), string("author", "Author"), string("title", "Author title")], preview: { select: { title: "author", subtitle: "title" } } })] });

export const threeTsSite = defineType({
  name: "threeTsSite",
  title: "3Ts site content",
  type: "document",
  groups: [
    { name: "global", title: "Shared" }, { name: "home", title: "Home" },
    { name: "about", title: "About" }, { name: "approach", title: "Approach" },
    { name: "services", title: "Services" }, { name: "perspectives", title: "Perspectives" },
    { name: "testimonials", title: "Testimonials" }, { name: "contact", title: "Contact" },
  ],
  fields: [
    defineField({ name: "global", title: "Shared site content", type: "object", group: "global", fields: [
      defineField({ name: "navigation", title: "Navigation", type: "array", of: [defineArrayMember({ name: "navigationLink", title: "Navigation link", type: "object", fields: [string("label", "Label"), string("href", "Path")], preview: { select: { title: "label", subtitle: "href" } } })] }),
      string("email", "Email"), string("calendlyUrl", "Booking URL"), string("footerEyebrow", "Footer eyebrow"),
      string("footerHeading", "Footer heading"), string("locations", "Locations"), string("tagline", "Tagline"), string("legalName", "Copyright name"),
    ] }),
    defineField({ name: "home", title: "Home page", type: "object", group: "home", fields: [
      string("eyebrow", "Hero eyebrow"), string("tagline", "Hero tagline"), text("introduction", "Hero introduction", 4), text("serviceSummary", "Hero service summary"), link("primaryCta", "Primary action"), link("secondaryCta", "Secondary action"),
      defineField({ name: "audiences", title: "Who we work with", type: "object", fields: [string("eyebrow", "Eyebrow"), text("heading", "Heading"), strings("paragraphs", "Paragraphs"), strings("items", "Audience types")] }),
      defineField({ name: "servicesIntro", title: "Services introduction", type: "object", fields: [string("eyebrow", "Eyebrow"), text("heading", "Heading"), text("introduction", "Introduction"), link("cta", "Action")] }),
      defineField({ name: "services", title: "Homepage services", type: "array", of: [defineArrayMember({ name: "homeService", title: "Service", type: "object", fields: [string("number", "Number"), string("title", "Title"), paragraphArray], preview: { select: { title: "title", subtitle: "number" } } })] }),
      defineField({ name: "principles", title: "Working principles", type: "object", fields: [string("eyebrow", "Eyebrow"), string("heading", "Heading"), text("introduction", "Introduction"), defineField({ name: "items", title: "Principles", type: "array", of: [defineArrayMember({ name: "principle", title: "Principle", type: "object", fields: [string("title", "Title"), string("short", "Short summary"), text("description", "Description")], preview: { select: { title: "title", subtitle: "short" } } })] })] }),
      defineField({ name: "impact", title: "Selected impact", type: "object", fields: [string("eyebrow", "Eyebrow"), string("heading", "Heading"), defineField({ name: "statistics", title: "Statistics", type: "array", of: [defineArrayMember({ name: "statistic", title: "Statistic", type: "object", fields: [string("value", "Value"), text("text", "Description")], preview: { select: { title: "value", subtitle: "text" } } })] })] }),
      string("engagementsEyebrow", "Engagements eyebrow"), string("engagementsHeading", "Engagements heading"),
      defineField({ name: "engagements", title: "Selected engagements", type: "array", of: [defineArrayMember({ name: "engagement", title: "Engagement", type: "object", fields: [string("number", "Number"), text("title", "Title", 2), text("description", "Description", 5)], preview: { select: { title: "title", subtitle: "number" } } })] }),
      defineField({ name: "aboutSection", title: "About section", type: "object", fields: [string("eyebrow", "Eyebrow"), text("heading", "Heading"), strings("paragraphs", "Paragraphs"), link("cta", "Action"), imageField("image", "Image")] }),
      defineField({ name: "testimonials", title: "Testimonials section", type: "object", fields: [string("eyebrow", "Eyebrow"), testimonialArray("items", "Testimonials"), link("cta", "Action")] }),
      imageField("testimonialImage", "Testimonials background image"),
    ] }),
    defineField({ name: "about", title: "About page", type: "object", group: "about", fields: [
      string("eyebrow", "Eyebrow"), string("heading", "Heading"), string("subheading", "Subheading"), strings("introduction", "Introduction paragraphs"), string("profileHeading", "Profile heading"),
      defineField({ name: "profileItems", title: "Profile items", type: "array", of: [defineArrayMember({ name: "profileItem", title: "Profile item", type: "object", fields: [string("title", "Title"), text("description", "Description")], preview: { select: { title: "title", subtitle: "description" } } })] }),
      string("ethosHeading", "Ethos heading"), text("ethosDescription", "Ethos description"), link("ethosCta", "Ethos action"), string("credentialsHeading", "Credentials heading"), strings("credentials", "Credentials"), link("cta", "Page action"), text("quote", "Closing quotation", 4), imageField("image", "About image"),
    ] }),
    defineField({ name: "approach", title: "Approach page", type: "object", group: "approach", fields: [
      string("eyebrow", "Eyebrow"), text("heading", "Heading"), text("introduction", "Introduction"), imageField("image", "Approach image"), string("methodologyEyebrow", "Methodology eyebrow"), string("methodologyHeading", "Methodology heading"),
      defineField({ name: "services", title: "Methodology services", type: "array", of: [defineArrayMember({ name: "methodologyService", title: "Methodology service", type: "object", fields: [string("title", "Title"), text("label", "Audience label", 2), paragraphArray], preview: { select: { title: "title", subtitle: "label" } } })] }),
      defineField({ name: "ethos", title: "Guiding ethos", type: "object", fields: [string("eyebrow", "Eyebrow"), string("heading", "Heading"), text("lead", "Lead"), strings("paragraphs", "Body paragraphs"), strings("closing", "Closing paragraphs")] }),
      string("stakeholderHeading", "Stakeholder heading"), text("stakeholderDescription", "Stakeholder description"),
    ] }),
    defineField({ name: "services", title: "Services page", type: "object", group: "services", fields: [
      string("eyebrow", "Eyebrow"), text("heading", "Heading"), text("introduction", "Introduction"), imageField("image", "Services page image"),
      defineField({ name: "items", title: "Services", type: "array", of: [defineArrayMember({ name: "servicePageItem", title: "Service", type: "object", fields: [string("title", "Title"), text("subtitle", "Subtitle", 2), paragraphArray, string("cta", "Link label"), string("link", "Link path")], preview: { select: { title: "title", subtitle: "subtitle" } } })] }),
    ] }),
    defineField({ name: "perspectives", title: "Perspectives page", type: "object", group: "perspectives", fields: [
      string("eyebrow", "Eyebrow"), text("heading", "Heading"), text("introduction", "Introduction"), string("featuredEyebrow", "Featured eyebrow"), string("featuredTitle", "Featured title"), string("videoEmbedUrl", "Video embed URL"), string("videoTitle", "Accessible video title"), link("videoLink", "Video action"),
      defineField({ name: "cards", title: "Content cards", type: "array", of: [defineArrayMember({ name: "perspectiveCard", title: "Card", type: "object", fields: [string("label", "Label"), string("title", "Title"), text("text", "Description")], preview: { select: { title: "title", subtitle: "label" } } })] }),
    ] }),
    defineField({ name: "testimonials", title: "Testimonials page", type: "object", group: "testimonials", fields: [
      string("eyebrow", "Eyebrow"), string("heading", "Heading"), text("introduction", "Introduction"), imageField("backgroundImage", "Background image"),
      defineField({ name: "groups", title: "Testimonial groups", type: "array", of: [defineArrayMember({ name: "testimonialGroup", title: "Group", type: "object", fields: [string("heading", "Heading"), testimonialArray("testimonials", "Testimonials")], preview: { select: { title: "heading" } } })] }),
    ] }),
    defineField({ name: "contact", title: "Contact page", type: "object", group: "contact", fields: [
      string("eyebrow", "Eyebrow"), string("heading", "Heading"), text("introduction", "Introduction", 4), string("email", "Email"), string("locations", "Locations"), string("emailLabel", "Email label"), string("locationsLabel", "Locations label"), string("emailCtaLabel", "Email button label"), link("bookingCta", "Booking action"), string("imageCaption", "Image caption"), imageField("image", "Contact image"),
    ] }),
  ],
  preview: { prepare: () => ({ title: "3Ts Consulting", subtitle: "Website content" }) },
});
