import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[ _type == "project"] {_id, _rev, position, date, name, description, type, location, link, views }`,
);
