export default new Map([
  [
    'src/content/blog/why-virtual-dom.mdx',
    () =>
      import(
        'astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fblog%2Fwhy-virtual-dom.mdx&astroContentModuleFlag=true'
      ),
  ],
]);
