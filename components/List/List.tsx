import React from "react";
import "./styles.css";
import Action from "../Action/Action";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Project } from "@/sanity/types";
export const revalidate = 60; // invalidate every hour

async function List() {
  const projects: Project[] = await client.fetch(PROJECTS_QUERY);
  return (
    <div className="list">
      <table className="list__table" border={0} cellPadding={0} cellSpacing={0}>
        <tbody>
          {projects
            .sort((a, b) => {
              return Number(b.position) - Number(a.position);
            })
            .map((project: Project) => {
              return (
                <tr className="row list__tr" key={project.position}>
                  <th className="list__position">{project.position}</th>
                  <th className="list__date col-1">
                    <span className="list__span">
                      {project.date
                        ? `${project.date.slice(5, 7)}. ${project.date.slice(0, 4)}`
                        : ""}
                    </span>
                  </th>
                  <th className="list__name col-2">
                    <span className="list__span">{project.name}</span>
                  </th>
                  <th className="list__description col-4">
                    <span className="list__span">{project.description}</span>
                  </th>
                  <th className="list__type col-2">
                    <span className="list__span">{project.type}</span>
                  </th>
                  <th className="list__location col-2">
                    <span className="list__span">{project.location}</span>
                  </th>
                  <th className="list__link col-1">
                    {project.link ? (
                      <span className="list__span">
                        <Action href={project.link} target="_blank">
                          Link
                        </Action>
                      </span>
                    ) : (
                      ""
                    )}
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
