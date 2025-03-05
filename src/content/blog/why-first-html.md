---
author: Alberto Caparrós
pubDate: 2025-02-12T20:24:00Z
title: Why-first HTML
href: 'why-first-html'
image:
  url: https://cdn.pixabay.com/photo/2018/02/22/17/27/programming-3173456_960_720.png
  alt: A screen with closing html tag
tags: ['why-first', 'html']
description: Why did HTML become the main language of the web? How did it evolve to optimize its efficiency and facilitate the development of modern web pages?
---

![A screen with closing html tag](https://cdn.pixabay.com/photo/2018/02/22/17/27/programming-3173456_960_720.png)

## DOCTYPE Declaration

The DOCTYPE declaration is a directive that tells the browser which version of HTML to use when rendering a page. In HTML5 the declaration is:

```
&lt;!doctype html&gt;
```

And serves two purposes:

- **Triggers Standards Mode**:
  It instructs browsers to render the document using the latest web standards rather than falling back to “quirks mode.” Quirks mode emulates non-standard, legacy behavior from older browsers, which can lead to inconsistent layouts and unexpected styling issues.

- **Signals Modern HTML Usage**:
  With HTML5, the need for verbose DTD (Document Type Definition) references was eliminated. The simplified DOCTYPE confirms that your document adheres to the modern, semantic standards of HTML5, ensuring consistency across all modern browsers.

## Metadata: Character encoding

Without a specified character encoding, browsers may guess how to interpret the bytes in an HTML document. This can lead to misrendered text—especially for non-English languages, symbols, or special characters—resulting in garbled output or incorrect symbols.

The &lt;meta charset="UTF-8"&gt; tag explicitly tells the browser to use the UTF-8 encoding, which supports virtually every character and symbol used in modern languages. This ensures that text displays correctly, regardless of the language or special characters, making your web pages both robust and internationally accessible.

## Metadata: Viewport

Mobile devices have a wide variety of screen sizes and resolutions. By default, many mobile browsers assume a page is designed for a larger desktop screen, causing them to scale down the content. This often leads to pages that appear too small and require users to zoom or scroll horizontally—resulting in a poor user experience.

The tag **&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;** instructs the browser to set the viewport width to the device’s actual width and to render the page at a 1:1 scale (i.e., no initial zoom). This allows the layout to adjust dynamically to the screen size, enabling responsive design and ensuring that content is legible and accessible on all devices.

## Semantic Markup

Semantic markup solves the problem of ambiguous, non-descriptive HTML by providing meaning to content structure. This approach addresses several key problems:

- **Accessibility**:
  Without semantic markup, assistive technologies (such as screen readers) struggle to interpret the structure and meaning of content. Using elements like &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, and &lt;footer&gt; provides clear landmarks that help users with disabilities navigate a page effectively.

- **Search Engine Optimization (SEO)**:
  Search engines rely on semantic cues to understand the hierarchy and context of content. When you use semantic elements, you improve a page's clarity, which can lead to better indexing and higher search rankings.

- **Maintainability and Readability**
  Semantic markup makes the code more self-explanatory. Developers can more easily understand and maintain a codebase when the structure reflects the actual content, reducing the risk of errors and simplifying future updates.

## ARIA

ARIA (Accessible Rich Internet Applications) is a set of attributes designed to enhance the accessibility of web content, especially for dynamic or custom UI components that aren’t natively accessible.

Modern web applications often involve interactive and dynamic components—like custom widgets, modals, tabs, and live regions—that traditional HTML alone cannot fully describe in terms of their roles, states, and relationships. Without additional context, assistive technologies (e.g., screen readers) may struggle to interpret these elements correctly.

ARIA introduces a series of attributes (such as role, aria-label, aria-labelledby, aria-describedby, aria-expanded, and aria-hidden) that you can add to HTML elements to provide explicit information about their purpose and behavior

- **Roles**: Define what an element represents (e.g., _role="dialog"_ for a modal or _role="navigation"_ for a navigation bar).
- **States and Properties**: Convey dynamic states (e.g., _aria-expanded="true"_ on an expandable menu) and relationships between elements (e.g., linking labels with _aria-labelledby_).
- **Descriptive Labels**: Provide text alternatives and descriptions for custom components that lack inherent semantic meaning.
