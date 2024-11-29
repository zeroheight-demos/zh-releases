# `zh-releases`

A Web Component for embedding design systems releases on any page.

**[Demo](https://zeroheight-demos.github.io/zh-releases/demo.html)** | **[Further reading](https://zeroheight.com/show-release-history-anywhere/)**

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/zeroheight-demos/zh-releases?file=zh-releases.js&initialPath=/demo.html)

## Examples

General usage example:

```html
<zh-releases></zh-releases>

<script>
  const zhAPI = {
    key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
    client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
    styleguide: 114183,
  };
</script>

<script type="module" src="zh-releases.js"></script>
```

Example using a custom template:

```html
<template id="custom-template">
  <ol>
    <li data-key="release">
      <a data-key="release_url"><span data-key="name"></span></a>
    </li>
  </ol>
</template>

<zh-releases template="custom-template"></zh-releases>

<script>
  const zhAPI = {
    key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
    client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
    styleguide: 114183,
  };
</script>

<script type="module" src="zh-releases.js"></script>
```

## Features

This Web Component allows you to:

- Render a full history of your design systems releases
- Link to versions of your styleguide within the release history
- Customise the look of the releases with a custom template

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@zeroheight/zh-releases): `npm install @zeroheight/zh-releases`
1. [Download the source manually from GitHub](https://github.com/zeroheight-demos/zh-releases/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

After choosing one of these options you'll need to attain an API Key, Access Token and the ID of your styleguide from your zeroheight account. For more information check out our resources guide. These credentials can be applied to the component as a global object variable like so:

```js
const zhAPI = {
  key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
  client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
  styleguide: 114183,
};
```

### Usage

Make sure you include the `<script>` in your project (choose one of these):

````html
<!-- Host yourself -->
<script>
  const zhAPI = {
    key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
    client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
    styleguide: 114183,
  };
</script>

<script type="module" src="zh-releases.js"></script>
``` ```html
<!-- 3rd party CDN, not recommended for production use -->
<script>
  const zhAPI = {
    key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
    client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
    styleguide: 114183,
  };
</script>

<script
  type="module"
  src="https://www.unpkg.com/@zeroheight/zh-releases@1.0.0/zh-releases.js"
></script>
````

```html
<!-- 3rd party CDN, not recommended for production use -->
<script>
  const zhAPI = {
    key: "zhat_6EuAaaw0lUQ-zGW-t1ehRQzIQpwZGa3X8d3DU0L7",
    client: "zhci_N2LaYV4Na37nvOzm13Q3F8N4nMWsIJe_QXhF2ToW",
    styleguide: 114183,
  };
</script>

<script
  type="module"
  src="https://esm.sh/@zeroheight/zh-releases@1.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
