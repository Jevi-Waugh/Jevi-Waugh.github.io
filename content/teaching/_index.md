---
title: Teaching
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: teaching-academic
    content:
      title: Academic Teaching
      filters:
        folders:
          - teaching
        tags:
          - academic
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: teaching-independent
    content:
      title: Independent Teaching
      filters:
        folders:
          - teaching
        tags:
          - independent
    design:
      view: article-grid
      columns: 2
---