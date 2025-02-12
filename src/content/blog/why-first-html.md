---
author: Alberto Caparrós
pubDate: 2025-02-12T20:24:00Z
title: Why-first HTML
href: 'why-first-html'
image:
  url: https://cdn.pixabay.com/photo/2018/02/22/17/27/programming-3173456_960_720.png
  alt: A screen with closing html tag
tags: ["why-first", "html"]
description: Why did HTML become the main language of the web? How did it evolve to optimize its efficiency and facilitate the development of modern web pages?
---


![A screen with closing html tag](https://cdn.pixabay.com/photo/2018/02/22/17/27/programming-3173456_960_720.png)

## DOCTYPE Declaration

The DOCTYPE declaration is a directive that tells the browser which version of HTML to use when rendering a page. In HTML5 the declaration is:

```
<!doctype html>
```
And serves two purposes:

- **Triggers Standards Mode**:
It instructs browsers to render the document using the latest web standards rather than falling back to “quirks mode.” Quirks mode emulates non-standard, legacy behavior from older browsers, which can lead to inconsistent layouts and unexpected styling issues.

- **Signals Modern HTML Usage**:
With HTML5, the need for verbose DTD (Document Type Definition) references was eliminated. The simplified DOCTYPE confirms that your document adheres to the modern, semantic standards of HTML5, ensuring consistency across all modern browsers.


## Metadata

- **Character encoding**

Without a specified character encoding, browsers may guess how to interpret the bytes in an HTML document. This can lead to misrendered text—especially for non-English languages, symbols, or special characters—resulting in garbled output or incorrect symbols.

The &lt;meta charset="UTF-8"&gt; tag explicitly tells the browser to use the UTF-8 encoding, which supports virtually every character and symbol used in modern languages. This ensures that text displays correctly, regardless of the language or special characters, making your web pages both robust and internationally accessible.

<!-- Document Structure and DOCTYPE Declaration
Basic Tags: <html>, <head>, <body>
Metadata: <meta> tags (charset, viewport, etc.) and <title>
Semantic Markup: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
Text-Level Semantics: Headings (<h1>–<h6>), <p>, <blockquote>, <cite>, <em>, <strong>
Lists: <ul>, <ol>, <li>
Hyperlinks: <a> and its attributes (e.g., target, download)
Images and Figures: <img>, <picture>, <source>, <figure>, <figcaption>, and the use of alt attributes
Tables: <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, <td>
Forms and Form Controls: <form>, <input>, <label>, <select>, <textarea>, <button>, <fieldset>, <legend>
Multimedia Elements: <audio> and <video>
Interactive Elements: <details>, <summary>, <dialog>
Graphics and Advanced APIs: <canvas>, integration with SVG
Global Attributes: id, class, data-*, lang
Accessibility Considerations: ARIA roles, semantic usage, proper labeling and landmarks
HTML5-Specific Enhancements: <main>, <template>, <slot>, <time>, <mark>, responsive image techniques (srcset, sizes)
Best Practices vs. Deprecated Elements: Understanding the shift from presentational tags (like <font>) to semantic, accessible markup -->