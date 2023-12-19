"use client";

import { Breadcrumb } from "flowbite-react";

// dodac wieksza czcionke

export default function DefaultBreadcrumb(props) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href={`/aktualnosci/#${props.id}`}>
          Aktualności
        </Breadcrumb.Item>
        <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
