import List from "@/components/List/List";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/sanity/types";
import React from "react";

export const revalidate = 60; // invalidate every hour

async function ListPage() {
  const projectsArray: Project[] = await client.fetch(PROJECTS_QUERY);
  return <List projects={projectsArray}></List>;
}

export default ListPage;
