'use client';

import { Breadcrumb } from 'flowbite-react';

// dodac wieksza czcionke 

export default function DefaultBreadcrumb(title) {
    const nameOfPost = title.title
  return (
    <Breadcrumb> 
      <Breadcrumb.Item href="/aktualnosci">
        Aktualności 
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {nameOfPost}
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}


