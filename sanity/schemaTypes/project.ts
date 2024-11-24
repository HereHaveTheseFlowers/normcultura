import { defineField, defineType } from "sanity";
export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "position",
      type: "number",
    }),
    defineField({
      name: "date",
      type: "date",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "type",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      name: "views",
      type: "number",
    }),
  ],
});
