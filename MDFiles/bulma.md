# File Summary

## Purpose

This file is a merged representation of a subset of the codebase [Bulma], containing specifically included files, combined into a single document. This markdown document serves as a compact, self-contained reference guide for [Bulma], derived from its official documentation and repository. It is designed for users who may have no prior knowledge, partial familiarity, or limited practical experience with the technology. The primary goal is to enable efficient use of AI systems (such as LLMs) for tasks like code review, debugging, analysis, code generation, and other automated processes, without requiring users to navigate the full documentation.

When this document is provided to an AI system, it should be treated as the primary knowledge base for all related queries. As an AI, follow these guidelines unless explicitly overridden by user instructions:
Code Review and Analysis: Examine user-submitted code for correctness, best practices, and potential improvements based on the content in this document.
Debugging: Identify and suggest fixes for errors by referencing documented common issues, error messages, and solutions.
Code Writing: Generate code snippets, examples, or implementations that adhere to the technology's APIs, conventions, and best practices outlined here.
General Assistance: Provide clear explanations, tutorials, or answers to questions using only the information in this document, ensuring responses are accurate, concise, and relevant.
Scope Limitations: If a query cannot be addressed with the available content, politely inform the user and recommend consulting the official documentation for additional details.
This approach streamlines development workflows by allowing users to issue targeted prompts (e.g., "Review this code for [Bulma]" or "Debug this error") directly based on this reference, saving time and reducing the learning curve.

## Additional Info

Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces. Modern CSS framework based on Flexbox.

# Directory Structure

```
docs/documentation/columns.html
docs/documentation/columns/basics.html
docs/documentation/columns/gap.html
docs/documentation/columns/nesting.html
docs/documentation/columns/options.html
docs/documentation/columns/responsiveness.html
docs/documentation/columns/sizes.html
docs/documentation/components.html
docs/documentation/components/breadcrumb.html
docs/documentation/components/card.html
docs/documentation/components/dropdown.html
docs/documentation/components/level.html
docs/documentation/components/media-object.html
docs/documentation/components/menu.html
docs/documentation/components/message.html
docs/documentation/components/modal.html
docs/documentation/components/nav.html
docs/documentation/components/navbar.html
docs/documentation/components/pagination.html
docs/documentation/components/panel.html
docs/documentation/components/tabs.html
docs/documentation/customize.html
docs/documentation/customize/concepts.html
docs/documentation/customize/list-of-sass-variables.html
docs/documentation/customize/with-css-variables.html
docs/documentation/customize/with-modular-sass.html
docs/documentation/customize/with-sass.html
docs/documentation/customize/with-vite-js.html
docs/documentation/elements.html
docs/documentation/elements/block.html
docs/documentation/elements/box.html
docs/documentation/elements/button.html
docs/documentation/elements/content.html
docs/documentation/elements/delete.html
docs/documentation/elements/form.html
docs/documentation/elements/icon.html
docs/documentation/elements/image.html
docs/documentation/elements/notification.html
docs/documentation/elements/progress.html
docs/documentation/elements/table.html
docs/documentation/elements/tag.html
docs/documentation/elements/title.html
docs/documentation/features.html
docs/documentation/features/auto-color.html
docs/documentation/features/color-palettes.md
docs/documentation/features/css-variables.md
docs/documentation/features/dark-mode.md
docs/documentation/features/skeletons.html
docs/documentation/features/smart-columns.html
docs/documentation/features/smart-grid.html
docs/documentation/features/themes.md
docs/documentation/form.html
docs/documentation/form/checkbox.html
docs/documentation/form/file.html
docs/documentation/form/general.html
docs/documentation/form/input.html
docs/documentation/form/radio.html
docs/documentation/form/select.html
docs/documentation/form/textarea.html
docs/documentation/grid.html
docs/documentation/grid/fixed-grid.html
docs/documentation/grid/grid-cells.html
docs/documentation/grid/playground.html
docs/documentation/grid/smart-grid.html
docs/documentation/helpers.html
docs/documentation/helpers/color-helpers.html
docs/documentation/helpers/flexbox-helpers.html
docs/documentation/helpers/other-helpers.html
docs/documentation/helpers/palette-helpers.html
docs/documentation/helpers/spacing-helpers.html
docs/documentation/helpers/typography-helpers.html
docs/documentation/helpers/visibility-helpers.html
docs/documentation/layout.html
docs/documentation/layout/container.html
docs/documentation/layout/footer.html
docs/documentation/layout/hero.html
docs/documentation/layout/level.html
docs/documentation/layout/media-object.html
docs/documentation/layout/section.html
docs/documentation/sass/extends.html
docs/documentation/sass/form-control-mixins.html
docs/documentation/sass/functions.html
docs/documentation/sass/mixins.html
docs/documentation/sass/responsive-mixins.html
docs/documentation/start.html
docs/documentation/start/alternative-versions.html
docs/documentation/start/css-classes.html
docs/documentation/start/installation.html
docs/documentation/start/migrating-to-v1.html
docs/documentation/start/modular.html
docs/documentation/start/overview.html
docs/documentation/start/responsiveness.html
docs/documentation/start/syntax.html
README.md
```

# Files

## File: docs/documentation/columns.html

```html
---
title: Columns
layout: docs
theme: library
doc-tab: columns
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - columns
---

{% include docs/components/links.html category_id='columns' %}
```

## File: docs/documentation/columns/basics.html

```html
---
title: Columns powered by Flexbox
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: basics
breadcrumb:
  - home
  - documentation
  - columns
  - columns-basics
---

{% capture columns %}
<div class="columns">
  <div class="column">First column</div>
  <div class="column">Second column</div>
  <div class="column">Third column</div>
  <div class="column">Fourth column</div>
</div>
{% endcapture %}

<div class="content">
  <p>Building a <strong>columns layout</strong> with Bulma is very simple:</p>
  <ol>
    <li>Add a <code>columns</code> container</li>
    <li>Add as many <code>column</code> elements as you want</li>
  </ol>
  <p>
    Each column will have an <strong>equal width</strong>, no matter the number
    of columns.
  </p>
</div>

<div class="columns">
  <div class="column">
    <p class="bd-notification is-primary">First column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Second column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Third column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Fourth column</p>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns -}} {%- endhighlight %}
</div>
```

## File: docs/documentation/columns/gap.html

```html
---
title: Columns gap
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: gap
breadcrumb:
  - home
  - documentation
  - columns
  - columns-gap
---

{% capture columns_default_gap %}
<div class="columns">
  <div class="column">
    <p class="bd-notification is-primary">Default gap</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Default gap</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Default gap</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Default gap</p>
  </div>
</div>
{% endcapture %} {% capture columns_gapless %}
<div class="columns is-gapless">
  <div class="column">No gap</div>
  <div class="column">No gap</div>
  <div class="column">No gap</div>
  <div class="column">No gap</div>
</div>
{% endcapture %} {% capture columns_variable_gap %}
<div class="columns is-8">
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
</div>
{% endcapture %} {% capture columns_gapless_multiline %}
<div class="columns is-gapless is-multiline is-mobile">
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-half">is-half</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column">Auto</div>
</div>
{% endcapture %} {% capture columns_variable_responsive_gaps %}
<div
  class="columns is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
>
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
  <div class="column">Column</div>
</div>
{% endcapture %} {% include docs/elements/anchor.html name="Default gap" %}

<div class="content">
  <p>
    Each column has a <strong>gap</strong> equal to the
    <strong>variable</strong> <code>$column-gap</code>, which has a default
    value of <code>0.75rem</code>.
    <br />
    Since the gap is on <em>each side</em> of a column, the gap between two
    adjacent columns will be twice the value of <code>$column-gap</code>, or
    <code>1.5rem</code> by default.
  </p>
</div>

{{ columns_default_gap }} {% include docs/elements/anchor.html name="Gapless" %}

<div class="content">
  <p>
    If you want to remove the <strong>space</strong> between the columns, add
    the <code>is-gapless</code> modifier on the <code>columns</code> container:
  </p>
</div>

<div class="columns is-gapless">
  <div class="column">
    <p class="bd-notification is-primary">First column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Second column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Third column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Fourth column</p>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_gapless -}} {%- endhighlight %}
</div>

<div class="content">
  <p>You can combine it with the <code>is-multiline</code> modifier:</p>
</div>

<div class="columns is-multiline is-mobile is-gapless">
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-half">
    <p class="bd-notification is-primary"><code>is-half</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Auto</p>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_gapless_multiline -}} {%- endhighlight %}
</div>

{% include docs/elements/anchor.html name="Variable gap" %}

<div class="content">
  <p>
    You can specify a <strong>custom column gap</strong> by appending one of
    <strong>9 modifiers</strong> on the <code>.columns</code> container.
  </p>
  <ul>
    <li>
      <code>is-0</code> will remove any gap (similar to <code>is-gapless</code>)
    </li>
    <li>
      <code>is-3</code> is the <strong>default value</strong>, equivalent to the
      <code>0.75rem</code> value
    </li>
    <li><code>is-8</code> is the maximum gap of <code>2rem</code></li>
  </ul>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_variable_gap -}} {%- endhighlight %}
</div>

{% include docs/content/klmn.html %} {% assign vernum = site.data.meta.version |
downcase | remove: '.' | plus: 0 %} {% if vernum >= 72 %} {% include
docs/elements/anchor.html name="Breakpoint based column gaps" %}

<div class="content">
  <p>You can define a column gap for each viewport size:</p>

  <p>
    For example, here's how it looks with the following modifiers:
    <code
      >is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd</code
    >
  </p>
</div>

<div class="bd-highlight-full">
  {%- highlight html -%} {{- columns_variable_responsive_gaps -}} {%-
  endhighlight -%}
</div>

<div
  class="columns is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"
>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Column</p>
  </div>
</div>

<div class="message is-info">
  <p class="message-body">
    If you want to see the difference, resize your browser and see how the
    <strong>columns gap</strong> varies.
  </p>
</div>
{% endif %}
```

## File: docs/documentation/columns/nesting.html

```html
---
title: Nesting columns
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: nesting
breadcrumb:
  - home
  - documentation
  - columns
  - columns-nesting
---

<div class="content">
  <p>
    You can <strong>nest</strong> columns to have more flexibility in your
    design. You only need to follow this structure:
  </p>
  <ul>
    <li>
      <code>columns</code>: top-level columns container
      <ul>
        <li>
          <code>column</code>
          <ul>
            <li>
              <code>columns</code>: nested columns
              <ul>
                <li><code>column</code> and so on…</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>
    The difference with
    <a href="{{ site.url }}/documentation/columns/options/#multiline"
      >multiline columns</a
    >
    is the <strong>order</strong> in the HTML code: all the
    <strong class="has-text-info">blue</strong> columns appear
    <em>before</em> the <strong class="has-text-danger">red</strong> ones.
    Resize to a narrower viewport to see the result.
  </p>
</div>

{% capture columns_nested_example %}
<div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
  </div>
  <div class="column">
    <p class="bd-notification is-danger">Second column</p>
    <div class="columns is-mobile">
      <div class="column is-half">
        <p class="bd-notification is-danger">50%</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %} {{ columns_nested_example }}

<div class="content">
  <p>
    Multiline columns will also have a <strong>gap</strong> between each
    <strong>line</strong>.
  </p>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_nested_example -}} {%- endhighlight %}
</div>
```

## File: docs/documentation/columns/options.html

```html
---
title: Column options
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: options
breadcrumb:
  - home
  - documentation
  - columns
  - columns-options
---

{% capture columns_vcentered %}
<div class="columns is-vcentered">
  <div class="column is-8">
    <p class="bd-notification is-primary">First column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">
      Second column with more content. This is so you can see the vertical
      alignment.
    </p>
  </div>
</div>
{% endcapture %} {% capture columns_multiline %}
<div class="columns is-multiline is-mobile">
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-half">
    <code>is-half</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column is-one-quarter">
    <code>is-one-quarter</code>
  </div>
  <div class="column">Auto</div>
</div>
{% endcapture %} {% capture columns_mobile_centered %}
<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <code class="html">is-half</code><br />
    </p>
  </div>
</div>
{% endcapture %} {% capture columns_mobile_multiline_centered %}
<div class="columns is-mobile is-multiline is-centered">
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br />
      First Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br />
      Our Second Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br />
      Third Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br />
      The Fourth Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary">
      <code class="html">is-narrow</code><br />
      Fifth Column
    </p>
  </div>
</div>
{% endcapture %} {% include docs/elements/anchor.html name="Vertical alignment"
%}

<div class="content">
  <p>
    To align your columns vertically, add the <code>is-vcentered</code> modifier
    to the <code>columns</code> container.
  </p>
</div>

<div class="columns is-vcentered">
  <div class="column is-8">
    <p class="bd-notification is-primary">First column</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">
      Second column with more content. This is so you can see the vertical
      alignment.
    </p>
  </div>
</div>

{% highlight html -%} {{- columns_vcentered -}} {%- endhighlight %} {% include
docs/elements/anchor.html name="Multiline" %}

<div class="content">
  <p>
    Whenever you want to start a new line, you can close a
    <code>columns</code> container and start a new one. But you can also add the
    <code>is-multiline</code> modifier and add <strong>more</strong> column
    elements than would fit in a single row.
  </p>
</div>

<div class="columns is-multiline is-mobile">
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-half">
    <p class="bd-notification is-primary"><code>is-half</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary"><code>is-one-quarter</code></p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">Auto</p>
  </div>
</div>

{% highlight html -%} {{- columns_multiline -}} {%- endhighlight %} {% include
docs/elements/anchor.html name="Centering columns" %}

<div class="content">
  <p>
    While you can use <em>empty columns</em> (like
    <code>&lt;div class="column"&gt;&lt;/div&gt;</code>) to create horizontal
    space around <code>.column</code> elements, you can also use
    <code>.is-centered</code> on the parent <code>.columns</code> element:
  </p>
</div>

<div class="columns is-mobile is-centered">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <code class="html">is-half</code><br />
    </p>
  </div>
</div>

{% highlight html -%} {{- columns_mobile_centered -}} {%- endhighlight %}

<div class="content">
  <p>
    Use with <code>.is-multiline</code> to create a flexible, centered list (try
    resizing to see centering in different viewport sizes):
  </p>
</div>

<div class="columns is-mobile is-multiline is-centered">
  <div class="column is-narrow">
    <p class="bd-notification is-primary" style="padding: 1.25rem 1.5rem">
      <code class="html">is-narrow</code><br />
      First Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary" style="padding: 1.25rem 1.5rem">
      <code class="html">is-narrow</code><br />
      Our Second Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary" style="padding: 1.25rem 1.5rem">
      <code class="html">is-narrow</code><br />
      Third Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary" style="padding: 1.25rem 1.5rem">
      <code class="html">is-narrow</code><br />
      The Fourth Column
    </p>
  </div>
  <div class="column is-narrow">
    <p class="bd-notification is-primary" style="padding: 1.25rem 1.5rem">
      <code class="html">is-narrow</code><br />
      Fifth Column
    </p>
  </div>
</div>

{% highlight html -%} {{- columns_mobile_multiline_centered -}} {%- endhighlight
%}
```

## File: docs/documentation/columns/responsiveness.html

```html
---
title: Columns responsiveness
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: responsiveness
breadcrumb:
  - home
  - documentation
  - columns
  - columns-responsiveness
---

{% capture columns_mobile %}
<div class="columns is-mobile">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
</div>
{% endcapture %} {% capture columns_desktop %}
<div class="columns is-desktop">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
</div>
{% endcapture %} {% capture columns_multiple_breakpoints %}
<div class="columns is-mobile">
  <div
    class="
      column
      is-three-quarters-mobile
      is-two-thirds-tablet
      is-half-desktop
      is-one-third-widescreen
      is-one-quarter-fullhd
    "
  >
    <code>is-three-quarters-mobile</code><br />
    <code>is-two-thirds-tablet</code><br />
    <code>is-half-desktop</code><br />
    <code>is-one-third-widescreen</code><br />
    <code>is-one-quarter-fullhd</code>
  </div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
  <div class="column">5</div>
</div>
{% endcapture %} {% include docs/elements/anchor.html name="Mobile columns" %}

<div class="content">
  <p>
    By default, columns are only activated from <strong>tablet</strong> onwards.
    This means columns are stacked on top of each other on
    <strong>mobile</strong>.
    <br />
    If you want columns to work on <strong>mobile too</strong>, just add the
    <code>is-mobile</code> modifier on the <code>columns</code> container:
  </p>
</div>

<div class="columns is-mobile">
  <div class="column">
    <p class="bd-notification is-primary">1</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">2</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">3</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">4</p>
  </div>
</div>

{% highlight html -%} {{- columns_mobile -}} {%- endhighlight %}

<div class="message is-info">
  <p class="message-header">Resize</p>
  <p class="message-body">
    If you want to see the difference, resize your browser and see
    <em>when</em> the columns are stacked and when they are horizontally
    distributed.
  </p>
</div>

<div class="content">
  <p>
    If you <em>only</em> want columns on <strong>desktop</strong> upwards, just
    use the <code>is-desktop</code> modifier on the
    <code>columns</code> container:
  </p>
</div>

<div class="columns is-desktop">
  <div class="column">
    <p class="bd-notification is-primary">1</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">2</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">3</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">4</p>
  </div>
</div>

{% highlight html -%} {{- columns_desktop -}} {%- endhighlight %} {% include
docs/elements/anchor.html name="Different column sizes per breakpoint" %}

<div class="content">
  <p>
    You can define a <strong>column size</strong> for <em>each</em> viewport
    size: mobile, tablet, and desktop.
  </p>
</div>

<div class="columns is-mobile">
  <div
    class="
      column
      is-three-quarters-mobile
      is-two-thirds-tablet
      is-half-desktop
      is-one-third-widescreen
      is-one-quarter-fullhd
    "
  >
    <p class="bd-notification is-primary">
      <code>is-three-quarters-mobile</code><br />
      <code>is-two-thirds-tablet</code><br />
      <code>is-half-desktop</code><br />
      <code>is-one-third-widescreen</code><br />
      <code>is-one-quarter-fullhd</code><br />
    </p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">2</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">3</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">4</p>
  </div>
  <div class="column">
    <p class="bd-notification is-primary">5</p>
  </div>
</div>

<div class="message is-info">
  <p class="message-header">Resize</p>
  <p class="message-body">
    If you want to see these classes in action, resize your browser window and
    see how the same column varies in width at each breakpoint.
  </p>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_multiple_breakpoints -}} {%- endhighlight %}
</div>
```

## File: docs/documentation/columns/sizes.html

```html
---
title: Column sizes
layout: docs
theme: library
doc-library: true
doc-tab: columns
doc-subtab: sizes
breadcrumb:
  - home
  - documentation
  - columns
  - columns-sizes
---

{% capture columns_sizes %}
<div class="columns">
  <div class="column is-four-fifths">is-four-fifths</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-three-quarters">is-three-quarters</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-two-thirds">is-two-thirds</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-three-fifths">is-three-fifths</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-half">is-half</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-two-fifths">is-two-fifths</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-one-third">is-one-third</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-one-quarter">is-one-quarter</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>

<div class="columns">
  <div class="column is-one-fifth">is-one-fifth</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div>
{% endcapture %} {% capture columns_offset %}
<div class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter"></div>
</div>

<div class="columns is-mobile">
  <div class="column is-three-fifths is-offset-one-fifth"></div>
</div>

<div class="columns is-mobile">
  <div class="column is-4 is-offset-8"></div>
</div>

<div class="columns is-mobile">
  <div class="column is-11 is-offset-1"></div>
</div>
{% endcapture %} {% capture columns_narrow %}
<div class="columns">
  <div class="column is-narrow">
    <div class="box" style="width: 200px">
      <p class="title is-5">Narrow column</p>
      <p class="subtitle">This column is only 200px wide.</p>
    </div>
  </div>
  <div class="column">
    <div class="box">
      <p class="title is-5">Flexible column</p>
      <p class="subtitle">
        This column will take up the remaining space available.
      </p>
    </div>
  </div>
</div>
{% endcapture %}

<div class="content">
  <p>
    If you want to change the <strong>size</strong> of a single column, you can
    use one of the following classes:
  </p>
  <ul>
    <li>
      <code>is-three-quarters</code>
    </li>
    <li>
      <code>is-two-thirds</code>
    </li>
    <li>
      <code>is-half</code>
    </li>
    <li>
      <code>is-one-third</code>
    </li>
    <li>
      <code>is-one-quarter</code>
    </li>
    <li>
      <code>is-full</code>
    </li>
  </ul>
  <p>
    The <em>other</em> columns will fill up the <strong>remaining</strong> space
    automatically.
  </p>
</div>

<div class="content">
  <p>You can now use the following multiples of <code>20%</code> as well:</p>
  <ul>
    <li>
      <code>is-four-fifths</code>
    </li>
    <li>
      <code>is-three-fifths</code>
    </li>
    <li>
      <code>is-two-fifths</code>
    </li>
    <li>
      <code>is-one-fifth</code>
    </li>
  </ul>
</div>

<div class="columns">
  <div class="column is-full">
    <p class="bd-notification is-primary">
      <code class="html">is-full</code>
    </p>
  </div>
</div>

<div class="columns">
  <div class="column is-four-fifths">
    <p class="bd-notification is-primary">
      <code class="html">is-four-fifths</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-three-quarters">
    <p class="bd-notification is-primary">
      <code class="html">is-three-quarters</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-two-thirds">
    <p class="bd-notification is-primary">
      <code class="html">is-two-thirds</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-three-fifths">
    <p class="bd-notification is-primary">
      <code class="html">is-three-fifths</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-half">
    <p class="bd-notification is-primary">
      <code class="html">is-half</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-two-fifths">
    <p class="bd-notification is-primary">
      <code class="html">is-two-fifths</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-one-third">
    <p class="bd-notification is-primary">
      <code class="html">is-one-third</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-one-quarter">
    <p class="bd-notification is-primary">
      <code class="html">is-one-quarter</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="columns">
  <div class="column is-one-fifth">
    <p class="bd-notification is-primary">
      <code class="html">is-one-fifth</code>
    </p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
  <div class="column">
    <p class="bd-notification">Auto</p>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_sizes -}} {%- endhighlight %}
</div>

{% include docs/elements/anchor.html name="12 columns system" %}

<div class="content">
  <p>
    As the grid can be divided into <strong>12</strong> columns, there are size
    classes for each division:
  </p>
  <ul>
    <li><code>is-1</code></li>
    <li><code>is-2</code></li>
    <li><code>is-3</code></li>
    <li><code>is-4</code></li>
    <li><code>is-5</code></li>
    <li><code>is-6</code></li>
    <li><code>is-7</code></li>
    <li><code>is-8</code></li>
    <li><code>is-9</code></li>
    <li><code>is-10</code></li>
    <li><code>is-11</code></li>
    <li><code>is-12</code></li>
  </ul>
</div>

<div class="message is-info">
  <p class="message-header">Naming convention</p>
  <p class="message-body">
    Each modifier class is named after
    <strong>how many columns you want out of 12</strong>. So if you want 7
    columns out of 12, use <code>is-7</code>.
  </p>
</div>
<div class="columns">
  <div class="column is-1">
    <p class="bd-notification is-primary"><code>is-1</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-2">
    <p class="bd-notification is-primary"><code>is-2</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-3">
    <p class="bd-notification is-primary"><code>is-3</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-4">
    <p class="bd-notification is-primary"><code>is-4</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-5">
    <p class="bd-notification is-primary"><code>is-5</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-6">
    <p class="bd-notification is-primary"><code>is-6</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-7">
    <p class="bd-notification is-primary"><code>is-7</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-8">
    <p class="bd-notification is-primary"><code>is-8</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-9">
    <p class="bd-notification is-primary"><code>is-9</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-10">
    <p class="bd-notification is-primary"><code>is-10</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-11">
    <p class="bd-notification is-primary"><code>is-11</code></p>
  </div>
  <div class="column">
    <p class="bd-notification has-text-centered">1</p>
  </div>
</div>
<div class="columns">
  <div class="column is-12">
    <p class="bd-notification is-primary"><code>is-12</code></p>
  </div>
</div>

{% include docs/elements/anchor.html name="Offset" %}

<div class="content">
  <p>
    While you can use <em>empty columns</em> (like
    <code>&lt;div class="column"&gt;&lt;/div&gt;</code>) to create horizontal
    space around <code>.column</code> elements, you can also use
    <strong>offset</strong> modifiers like <code>.is-offset-x</code>:
  </p>
</div>

<div class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter">
    <p class="bd-notification is-primary">
      <code class="html">is-half</code><br />
      <code class="html">is-offset-one-quarter</code>
    </p>
  </div>
</div>

<div class="columns is-mobile">
  <div class="column is-three-fifths is-offset-one-fifth">
    <p class="bd-notification is-primary">
      <code class="html">is-three-fifths</code><br />
      <code class="html">is-offset-one-fifth</code>
    </p>
  </div>
</div>

<div class="columns is-mobile">
  <div class="column is-4 is-offset-8">
    <p class="bd-notification is-primary">
      <code class="html">is-4</code><br />
      <code class="html">is-offset-8</code>
    </p>
  </div>
</div>

<div class="columns is-mobile">
  <div class="column is-11 is-offset-1">
    <p class="bd-notification is-primary">
      <code class="html">is-11</code><br />
      <code class="html">is-offset-1</code>
    </p>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_offset -}} {%- endhighlight %}
</div>

{% include docs/elements/anchor.html name="Narrow column" %}

<div class="content">
  <p>
    If you want a column to only take the <strong>space it needs</strong>, use
    the <code>is-narrow</code> modifier. The other column(s) will fill up the
    remaining space.
  </p>
</div>

<div class="columns">
  <div class="column is-narrow">
    <div class="box" style="width: 200px">
      <p class="title is-5">Narrow column</p>
      <p class="subtitle">This column is only 200px wide.</p>
    </div>
  </div>
  <div class="column">
    <div class="box">
      <p class="title is-5">Flexible column</p>
      <p class="subtitle">
        This column will take up the remaining space available.
      </p>
    </div>
  </div>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- columns_narrow -}} {%- endhighlight %}
</div>

<div class="content">
  <p>
    As for the size modifiers, you can have narrow columns for different
    <strong>breakpoints</strong>:
  </p>
  <ul>
    <li>
      <code>.is-narrow-mobile</code>
    </li>
    <li>
      <code>.is-narrow-tablet</code>
    </li>
    <li>
      <code>.is-narrow-touch</code>
    </li>
    <li>
      <code>.is-narrow-desktop</code>
    </li>
    <li>
      <code>.is-narrow-widescreen</code>
    </li>
    <li>
      <code>.is-narrow-fullhd</code>
    </li>
  </ul>
</div>
```

## File: docs/documentation/components.html

```html
---
title: Components
layout: docs
theme: library
doc-tab: components
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - components
---

{% include docs/components/links.html category_id='components' %}
```

## File: docs/documentation/components/breadcrumb.html

```html
---
title: Breadcrumb
layout: docs
theme: library
doc-tab: components
doc-subtab: breadcrumb
breadcrumb:
  - home
  - documentation
  - components
  - components-breadcrumb
meta:
  variables: true
  colors: false
  sizes: true
---

{% capture breadcrumb_example %}
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_centered_example %}
<nav class="breadcrumb is-centered" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_right_example %}
<nav class="breadcrumb is-right" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_icons_example %}
<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-home" aria-hidden="true"></i>
        </span>
        <span>Bulma</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
        <span>Documentation</span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>Components</span>
      </a>
    </li>
    <li class="is-active">
      <a href="#">
        <span class="icon is-small">
          <i class="fas fa-thumbs-up" aria-hidden="true"></i>
        </span>
        <span>Breadcrumb</span>
      </a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_small_example %}
<nav class="breadcrumb is-small" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_medium_example %}
<nav class="breadcrumb is-medium" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_large_example %}
<nav class="breadcrumb is-large" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_arrow_example %}
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_bullet_example %}
<nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_dot_example %}
<nav class="breadcrumb has-dot-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %} {% capture breadcrumb_succeeds_example %}
<nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Bulma</a></li>
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
  </ul>
</nav>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <strong>breadcrumb</strong> is a simple navigation component that
    only requires a <code>breadcrumb</code> container and a
    <code>ul</code> list. The dividers are automatically created in the content
    of the <code>::before</code> pseudo-element of <code>li</code> tags.
  </p>
  <p>
    You can inform the current page using the <code>is-active</code> modifier in
    a <code>li</code> tag. It will disable the navigation of inner links.
  </p>
</div>

<hr />

{% include docs/elements/snippet.html content=breadcrumb_example horizontal=true
clipped=true %} {% include docs/elements/anchor.html name="Alignment" %}

<div class="content">
  <p>
    For alternative alignments, use the <code>is-centered</code> and
    <code>is-right</code> modifiers on the <code>breadcrumb</code> container.
  </p>
</div>

{% include docs/elements/snippet.html content=breadcrumb_centered_example
horizontal=true clipped=true %} {% include docs/elements/snippet.html
content=breadcrumb_right_example horizontal=true clipped=true %} {% include
docs/elements/anchor.html name="Icons" %}

<div class="content">
  <p>
    You can use any of the
    <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
    <strong>icons</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=breadcrumb_icons_example
horizontal=true clipped=true %} {% include docs/elements/anchor.html
name="Alternative separators" %}

<div class="content">
  <p>
    You can choose between <strong>4 additional separators</strong>:
    <code>has-arrow-separator</code> <code>has-bullet-separator</code>
    <code>has-dot-separator</code> and <code>has-succeeds-separator</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=breadcrumb_arrow_example
horizontal=true clipped=true %} {% include docs/elements/snippet.html
content=breadcrumb_bullet_example horizontal=true clipped=true %} {% include
docs/elements/snippet.html content=breadcrumb_dot_example horizontal=true
clipped=true %} {% include docs/elements/snippet.html
content=breadcrumb_succeeds_example horizontal=true clipped=true %} {% include
docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    You can choose between <strong>3 additional sizes</strong>:
    <code>is-small</code> <code>is-medium</code> and <code>is-large</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=breadcrumb_small_example
horizontal=true clipped=true %} {% include docs/elements/snippet.html
content=breadcrumb_medium_example horizontal=true clipped=true %} {% include
docs/elements/snippet.html content=breadcrumb_large_example horizontal=true
clipped=true %}
```

## File: docs/documentation/components/card.html

```html
---
title: Card
layout: docs
theme: library
doc-tab: components
doc-subtab: card
breadcrumb:
  - home
  - documentation
  - components
  - components-card
meta:
  variables: true
  colors: false
  sizes: false
---

{% capture card_example %}
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="{{site.url}}/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="{{site.url}}/assets/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
      <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
{% endcapture %} {% capture card_header_example %}
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Component</p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
{% endcapture %} {% capture card_title_example %}
<div class="card">
  <div class="card-content">
    <p class="title">
      “There are two hard things in computer science: cache invalidation, naming
      things, and off-by-one errors.”
    </p>
    <p class="subtitle">Jeff Atwood</p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View on
        <a href="https://twitter.com/codinghorror/status/506010907021828096"
          >Twitter</a
        >
      </span>
    </p>
    <p class="card-footer-item">
      <span> Share on <a href="#">Facebook</a> </span>
    </p>
  </footer>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <strong>card</strong> component comprises several elements that you can
    mix and match:
  </p>
  <ul>
    <li>
      <code>card</code>: the main container
      <ul>
        <li>
          <code>card-header</code>: a horizontal bar with a shadow
          <ul>
            <li><code>card-header-title</code>: a left-aligned bold text</li>
            <li><code>card-header-icon</code>: a placeholder for an icon</li>
          </ul>
        </li>
        <li>
          <code>card-image</code>: a fullwidth container for a responsive image
        </li>
        <li>
          <code>card-content</code>: a multi-purpose container for
          <em>any</em> other element
        </li>
        <li>
          <code>card-footer</code>: a horizontal list of controls
          <ul>
            <li><code>card-footer-item</code>: a repeatable list item</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

<div class="content">
  <p>
    You can center the <code>card-header-title</code> by appending the
    <code>is-centered</code> modifier.
  </p>
</div>

{% include docs/elements/snippet.html content=card_example size="1-2" %}

<!--  -->
{% include docs/elements/anchor.html name="Card parts" %}

<div class="content">
  <p>
    The <code>card-header</code> can have a <strong>title</strong> and a Bulma
    <code>icon</code>:
  </p>
</div>

{% capture card_image %}
<div class="card">
  <header class="card-header">
    <p class="card-header-title">Card header</p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=card_image
size="1-2" %}

<div class="content">
  <p>
    The <code>card-image</code> is a container for a Bulma
    <code>image</code> element:
  </p>
</div>

{% capture card_image %}
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img
        src="{{site.url}}/assets/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
    </figure>
  </div>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=card_image
size="1-2" %}

<div class="content">
  <p>
    The <code>card-content</code> is the main part, ideal for
    <strong>text content</strong>, thanks to its padding:
  </p>
</div>

{% capture card_image %}
<div class="card">
  <div class="card-content">
    <div class="content">
      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
      id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
      consectetur purus sit amet fermentum.
    </div>
  </div>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=card_image
size="1-2" %}

<div class="content">
  <p>
    The <code>card-footer</code> acts as a list of for several
    <code>card-footer-item</code> elements:
  </p>
</div>

{% capture card_footer %}
<div class="card">
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=card_footer
size="1-2" %} {% include docs/elements/anchor.html name="Examples" %} {% include
docs/elements/snippet.html content=card_header_example size="1-2" %} {% include
docs/elements/snippet.html content=card_title_example size="1-2" %}
```

## File: docs/documentation/components/dropdown.html

```html
---
title: Dropdown
layout: docs
theme: library
doc-tab: components
doc-subtab: dropdown
breadcrumb:
  - home
  - documentation
  - components
  - components-dropdown
meta:
  colors: false
  sizes: false
  variables: true
---

{% capture dropdown_example %}
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item"> Dropdown item </a>
      <a class="dropdown-item"> Other dropdown item </a>
      <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> With a divider </a>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_content_example %}
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>Content</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <p>
          You can insert <strong>any type of content</strong> within the
          dropdown menu.
        </p>
      </div>
      <hr class="dropdown-divider" />
      <div class="dropdown-item">
        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
      </div>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> This is a link </a>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_click_example %}
<div class="dropdown">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>Click me</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item"> Overview </a>
      <a href="#" class="dropdown-item"> Modifiers </a>
      <a href="#" class="dropdown-item"> Grid </a>
      <a href="#" class="dropdown-item"> Form </a>
      <a href="#" class="dropdown-item"> Elements </a>
      <a href="#" class="dropdown-item"> Components </a>
      <a href="#" class="dropdown-item"> Layout </a>
      <hr class="dropdown-divider" />
      <a href="#" class="dropdown-item"> More </a>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_info_example %}
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      <span>Hover me</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu4" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <p>
          You can insert <strong>any type of content</strong> within the
          dropdown menu.
        </p>
      </div>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_left_example %}
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu5">
      <span>Left aligned</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu5" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <p>The dropdown is <strong>left-aligned</strong> by default.</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_right_example %}
<div class="dropdown is-right is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu6">
      <span>Right aligned</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu6" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <p>
          Add the <code>is-right</code> modifier for a
          <strong>right-aligned</strong> dropdown.
        </p>
      </div>
    </div>
  </div>
</div>
{% endcapture %} {% capture dropdown_up_example %}
<div class="dropdown is-up">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu7">
      <span>Dropup button</span>
      <span class="icon is-small">
        <i class="fas fa-angle-up" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu7" role="menu">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <p>
          You can add the <code>is-up</code> modifier to have a dropdown menu
          that appears above the dropdown button.
        </p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <code>dropdown</code> component is a container for a dropdown button and
    a dropdown menu.
  </p>
  <ul>
    <li>
      <code>dropdown</code> the <strong>main</strong> container
      <ul>
        <li>
          <code>dropdown-trigger</code> the container for a <code>button</code>
        </li>
        <li>
          <code>dropdown-menu</code> the toggable menu,
          <strong>hidden</strong> by default
          <ul>
            <li>
              <code>dropdown-content</code> the dropdown <strong>box</strong>,
              with a white background and a shadow
              <ul>
                <li>
                  <code>dropdown-item</code> each
                  <strong>single item</strong> of the dropdown, which can either
                  be a <code>a</code> or a <code>div</code>
                </li>
                <li>
                  <code>dropdown-divider</code> a
                  <strong>horizontal line</strong> to separate dropdown items
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=dropdown_example %} {% include
docs/elements/anchor.html name="Dropdown content" %}

<div class="content">
  <p>
    While the <code>dropdown-item</code> can be used as an anchor link
    <code>&lt;a&gt;</code>, you can also use a <code>&lt;div&gt;</code> and
    insert almost <strong>any type of content</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=dropdown_content_example %} {%
include docs/elements/anchor.html name="Hoverable or Toggable" %}

<div class="content">
  <p>
    The <code>dropdown</code> component has
    <strong>2 additional modifiers</strong>
  </p>
  <ul>
    <li>
      <code>is-hoverable</code>: the dropdown will show up when
      <strong>hovering</strong> the <code>dropdown-trigger</code>
    </li>
    <li>
      <code>is-active</code>: the dropdown will show up
      <strong>all the time</strong>
    </li>
  </ul>
</div>

<div class="message is-success">
  <p class="message-body">
    While the CSS <code>:hover</code> implementation works perfectly, the
    <code>is-active</code> class is available for users who want to control the
    display of the dropdown with <strong>JavaScript</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=dropdown_click_example more=true
%} {% include docs/elements/snippet.html content=dropdown_info_example more=true
%} {% include docs/elements/anchor.html name="Right aligned" %}

<div class="content">
  <p>
    You can add the <code>is-right</code> modifier to have a
    <strong>right-aligned</strong> dropdown.
  </p>
</div>

{% include docs/elements/snippet.html content=dropdown_left_example more=true %}
{% include docs/elements/snippet.html content=dropdown_right_example more=true
%} {% include docs/elements/anchor.html name="Dropup" %}

<div class="content">
  <p>
    You can add the <code>is-up</code> modifier to have a dropdown menu that
    appears above the dropdown button.
  </p>
</div>

{% include docs/elements/snippet.html content=dropdown_up_example more=true %}
```

## File: docs/documentation/components/level.html

```html
---
layout: docs
theme: library
doc-tab: components
doc-subtab: level
---

<meta
  http-equiv="refresh"
  content="0; url={{ site.url }}/documentation/layout/level/"
/>
```

## File: docs/documentation/components/media-object.html

```html
---
layout: docs
theme: library
doc-tab: components
doc-subtab: media-object
---

<meta
  http-equiv="refresh"
  content="0; url={{ site.url }}/documentation/layout/media-object/"
/>
```

## File: docs/documentation/components/menu.html

```html
---
title: Menu
layout: docs
theme: library
doc-tab: components
doc-subtab: menu
breadcrumb:
  - home
  - documentation
  - components
  - components-menu
meta:
  colors: false
  sizes: false
  variables: true
---

{% capture menu_example %}
<aside class="menu">
  <p class="menu-label">General</p>
  <ul class="menu-list">
    <li><a>Dashboard</a></li>
    <li><a>Customers</a></li>
  </ul>
  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li><a>Team Settings</a></li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li><a>Members</a></li>
        <li><a>Plugins</a></li>
        <li><a>Add a member</a></li>
      </ul>
    </li>
    <li><a>Invitations</a></li>
    <li><a>Cloud Storage Environment Settings</a></li>
    <li><a>Authentication</a></li>
  </ul>
  <p class="menu-label">Transactions</p>
  <ul class="menu-list">
    <li><a>Payments</a></li>
    <li><a>Transfers</a></li>
    <li><a>Balance</a></li>
  </ul>
</aside>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <code>menu</code> is a vertical navigation component that
    comprises:
  </p>
  <ul>
    <li>the <code>menu</code> container</li>
    <li>informative <code>menu-label</code> labels</li>
    <li>
      interactive <code>menu-list</code> lists that can be nested up to 2 levels
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=menu_example size="one-third" %}
```

## File: docs/documentation/components/message.html

```html
---
title: Message
layout: docs
theme: library
doc-tab: components
doc-subtab: message
breadcrumb:
  - home
  - documentation
  - components
  - components-message
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture message_example %}
<article class="message">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %} {% capture message_dark_example %}
<article class="message is-dark">
  <div class="message-header">
    <p>Dark</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %} {% capture message_small %}
<article class="message is-small">
  <div class="message-header">
    <p>Small message</p>
    <button class="delete is-small" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    Aenean ac <em>eleifend lacus</em>, in mollis lectus.
  </div>
</article>
{% endcapture %} {% capture message_normal %}
<article class="message">
  <div class="message-header">
    <p>Normal message</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    Aenean ac <em>eleifend lacus</em>, in mollis lectus.
  </div>
</article>
{% endcapture %} {% capture message_medium %}
<article class="message is-medium">
  <div class="message-header">
    <p>Medium message</p>
    <button class="delete is-medium" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    Aenean ac <em>eleifend lacus</em>, in mollis lectus.
  </div>
</article>
{% endcapture %} {% capture message_large %}
<article class="message is-large">
  <div class="message-header">
    <p>Large message</p>
    <button class="delete is-large" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla.Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
    Aenean ac <em>eleifend lacus</em>, in mollis lectus.
  </div>
</article>
{% endcapture %} {% capture message_body_example %}
<article class="message">
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %} {% capture message_body_dark_example %}
<article class="message is-dark">
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %}

<div class="content">
  <p>The Bulma <code>message</code> is a multi-part component:</p>
  <ul>
    <li>the <code>message</code> container</li>
    <li>
      the optional <code>message-header</code> that can hold a title and a
      <code>delete</code> element
    </li>
    <li>the <code>message-body</code> for the longer body of the message</li>
  </ul>
</div>

{% include docs/elements/snippet.html content=message_example %} {% include
docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    The message component is available in all the
    <strong>different colors</strong> defined by the
    <a href="{{ site.data.links.by_id.customize-variables.path }}"
      ><code>$colors</code> Sass map</a
    >.
  </p>
</div>

{% include docs/elements/snippet.html content=message_dark_example more=true %}
{% for color in site.data.colors.justColors %} {% capture foobar %}
<article class="message is-{{ color }}">
  <div class="message-header">
    <p>{{ color | capitalize }}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %} {% include docs/elements/snippet.html content=foobar more=true
%} {% endfor %} {% include docs/elements/anchor.html name="Message body only" %}

<div class="content">
  <p>
    You can remove the <code>message-header</code> if you don't need it, which
    will add a left border to the <code>message-body</code>:
  </p>
</div>

{% include docs/elements/snippet.html content=message_body_example %} {% include
docs/elements/snippet.html content=message_body_dark_example %} {% for color in
site.data.colors.justColors %} {% capture foobar %}
<article class="message is-{{ color }}">
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
    <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
    neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    You can add one of <strong>3 size modifiers</strong> to the
    <code>message</code> component:
  </p>
</div>

{% include docs/elements/snippet.html content=message_small %} {% include
docs/elements/snippet.html content=message_normal %} {% include
docs/elements/snippet.html content=message_medium %} {% include
docs/elements/snippet.html content=message_large %} {% include
docs/components/variables.html type='component' %}
```

## File: docs/documentation/components/modal.html

```html
---
title: Modal
layout: docs
theme: library
doc-tab: components
doc-subtab: modal
breadcrumb:
  - home
  - documentation
  - components
  - components-modal
meta:
  colors: false
  sizes: false
  variables: true
modals:
  - docs/modals/example-modal.html
  - docs/modals/example-modal-bis.html
  - docs/modals/example-modal-ter.html
  - docs/modals/example-js-modal.html
---

{% capture modal %}
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
{% endcapture %} {% capture image_modal %}
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <p class="image is-4by3">
      <img src="{{site.url}}/assets/images/placeholders/1280x960.png" alt="" />
    </p>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
{% endcapture %} {% capture modal_card %}
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <div class="buttons">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </div>
    </footer>
  </div>
</div>
{% endcapture %} {% capture modal_js_html %}
<div id="modal-js-example" class="modal">
  <div class="modal-background"></div>

  <div class="modal-content">
    <div class="box">
      <p>Modal JS example</p>
      <!-- Your content -->
    </div>
  </div>

  <button class="modal-close is-large" aria-label="close"></button>
</div>
{% endcapture %} {% capture modal_js_trigger %}
<button class="js-modal-trigger" data-target="modal-js-example">
  Open JS example modal
</button>
{% endcapture %} {% capture modal_js_trigger_bulma %}
<button
  class="js-modal-trigger button is-primary"
  data-target="modal-js-example"
>
  Open JS example modal
</button>
{% endcapture %} {% capture modal_js_code %}
document.addEventListener('DOMContentLoaded', () => { // Functions to open and
close a modal function openModal($el) { $el.classList.add('is-active'); }
function closeModal($el) { $el.classList.remove('is-active'); } function
closeAllModals() { (document.querySelectorAll('.modal') || []).forEach(($modal)
=> { closeModal($modal); }); } // Add a click event on buttons to open a
specific modal (document.querySelectorAll('.js-modal-trigger') ||
[]).forEach(($trigger) => { const modal = $trigger.dataset.target; const $target
= document.getElementById(modal); $trigger.addEventListener('click', () => {
openModal($target); }); }); // Add a click event on various child elements to
close the parent modal (document.querySelectorAll('.modal-background,
.modal-close, .modal-card-head .delete, .modal-card-foot .button') ||
[]).forEach(($close) => { const $target = $close.closest('.modal');
$close.addEventListener('click', () => { closeModal($target); }); }); // Add a
keyboard event to close all modals document.addEventListener('keydown', (event)
=> { if(event.key === "Escape") { closeAllModals(); } }); }); {% endcapture %}

<!--  -->

<div class="content">
  <p>The modal structure is very simple:</p>
  <ul>
    <li>
      <code>modal</code>: the main container
      <ul>
        <li>
          <code>modal-background</code>: a transparent overlay that can act as a
          click target to close the modal
        </li>
        <li>
          <code>modal-content</code>: a horizontally and vertically centered
          container, with a maximum width of 640px, in which you can include
          <em>any</em> content
        </li>
        <li>
          <code>modal-close</code>: a simple cross located in the top right
          corner
        </li>
      </ul>
    </li>
  </ul>
  <p>
    <button
      class="button is-primary is-large modal-button js-modal-trigger"
      data-target="modal"
      aria-haspopup="true"
    >
      Launch example modal
    </button>
  </p>
</div>

{% highlight html -%} {{- modal -}} {%- endhighlight %}

<div class="content">
  <p>
    To <strong>activate</strong> the modal, just add the
    <code>is-active</code> modifier on the <code>.modal</code> container. You
    may also want to add <code>is-clipped</code> modifier to a containing
    element (usually <code>html</code>) to stop scroll overflow.
  </p>
</div>

<div class="message is-info">
  <div class="message-header">JavaScript implementation example</div>
  <div class="message-body">
    Bulma does not include any JavaScript. However, this documentation provides
    a
    <a href="#javascript-implementation-example">JS implementation example</a>
    that you are free to use.
  </div>
</div>

{% include docs/elements/anchor.html name="Image modal" %}

<div class="content">
  <p>
    Because a modal can contain <strong>anything you want</strong>, you can very
    simply use it to build an image gallery for example:
  </p>
  <p>
    <a
      class="button is-primary is-large modal-button js-modal-trigger"
      data-target="modal-bis"
      >Launch image modal</a
    >
  </p>
</div>

{% highlight html -%} {{- image_modal -}} {%- endhighlight %} {% include
docs/elements/anchor.html name="Modal card" %}

<div class="content">
  <p>
    If you want a more classic modal, with a <strong>head</strong>, a
    <strong>body</strong> and a <strong>foot</strong>, use the
    <code>modal-card</code>.
  </p>
  <p>
    <button
      class="button is-primary is-large modal-button js-modal-trigger"
      data-target="modal-ter"
      aria-haspopup="true"
    >
      Launch card modal
    </button>
  </p>
</div>

<div class="bd-highlight-full">
  {% highlight html -%} {{- modal_card -}} {%- endhighlight %}
</div>

{% include docs/elements/anchor.html name="JavaScript implementation example" %}

<div class="content">
  <p>
    The Bulma package <strong>does not come with any JavaScript</strong>. Here
    is however an implementation example, which sets the
    <code>click</code> handlers for custom elements, in vanilla JavaScript.
  </p>

  <p>There are 3 parts to this implementation:</p>

  <ul>
    <li>
      add the HTML for the <strong>modal</strong> (this modal is hidden by
      default)
    </li>
    <li>
      add the HTML for a button to <strong>trigger</strong> the modal (you can
      style this button however you want)
    </li>
    <li>
      add the JS code to add the <code>click</code> event on the
      <strong>trigger</strong> to open the
      <strong>modal</strong>
    </li>
  </ul>
</div>

<div class="content">
  <h4>1. Add the HTML for the modal</h4>

  <p>
    At the end of your page, before the closing <code>&lt;/body&gt;</code> tag,
    at the following HTML snippet:
  </p>
</div>

{% highlight html -%} {{- modal_js_html -}} {%- endhighlight %}

<div class="content">
  <p>The <code>id</code> attribute's value must be <strong>unique</strong>.</p>
</div>

<div class="content">
  <h4>2. Add the HTML for the trigger</h4>

  <p>Somewhere on your page, add the following HTML button:</p>
</div>

<div class="block">{{ modal_js_trigger }}</div>

{% highlight html -%} {{- modal_js_trigger -}} {%- endhighlight %}

<div class="content">
  <p>
    You can style it however you want, as long as it has the
    <code>js-modal-trigger</code> CSS class and the appropriate
    <code>data-target</code> value. For example, you can add the
    <code>button is-primary</code> Bulma classes:
  </p>
</div>

<div class="block">{{ modal_js_trigger_bulma }}</div>

<div class="content">
  <h4>3. Add the JS for the trigger</h4>

  <p>
    In a <code>script</code> element (or in a separate <code>.js</code> file),
    add the following JS code:
  </p>
</div>

{% highlight javascript -%} {{- modal_js_code -}} {%- endhighlight %}

<div class="content">
  <p>
    As long as you can toggle the <code>is-active</code> modifier class on the
    <code>modal</code> element, you can choose how you want to implement it.
  </p>
</div>

<script type="text/javascript">
  {
    {
      modal_js_code;
    }
  }
</script>
```

## File: docs/documentation/components/nav.html

```html
---
layout: docs
theme: library
doc-tab: components
doc-subtab: nav
---

{% include docs/subnav/subnav-components.html %}

<section class="section">
  <div class="container">
    <div class="message is-danger">
      <div class="message-body">
        <p>This component has been <strong>deprecated</strong>.</p>
      </div>
    </div>

    <div class="message is-info">
      <div class="message-body">
        <p>
          While both <code>.nav</code> and <code>.navbar</code> currently
          co-exist to ensure backwards compatibility, the <code>.nav</code> will
          probably be deleted in an upcoming update, so you should start using
          <a href="{{ site.url }}/documentation/components/navbar/"
            >the new navbar</a
          >
          instead.
        </p>
      </div>
    </div>

    <h1 class="title">Nav</h1>
    <h2 class="subtitle">
      A responsive horizontal <strong>nav bar</strong> that can contain links,
      tabs, buttons, icons, and a logo
    </h2>

    <hr />

    <div class="content">
      <p>The <code>nav</code> container can have <strong>3 parts</strong>:</p>
      <ul>
        <li><code>nav-left</code></li>
        <li><code>nav-center</code></li>
        <li><code>nav-right</code></li>
      </ul>
      <p>
        Each nav item needs to be wrapped in a <code>nav-item</code> element.
      </p>
      <p>
        For responsiveness, <strong>2 additional</strong> classes are available:
      </p>
      <ul>
        <li><code>nav-toggle</code> for the hamburger menu on mobile</li>
        <li>
          <code>nav-menu</code> for menu that is collapsable on mobile (you can
          combine it with <code>nav-right</code>)
        </li>
        <li>
          toggle <code>is-active</code> on <code>nav-toggle</code> and
          <code>nav-menu</code> when <code>nav-toggle</code> was clicked
        </li>
      </ul>
    </div>

    {% capture nav_example %}
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img
            src="{{ site.url }}/assets/images/bulma-logo.png"
            alt="Bulma logo"
          />
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <a class="nav-item"> Home </a>
        <a class="nav-item"> Documentation </a>
        <a class="nav-item"> Blog </a>

        <div class="nav-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    {% endcapture %}

    <div class="bd-example is-paddingless">{{ nav_example }}</div>

    {% highlight html %} {{ nav_example }} {% endhighlight %}

    <hr />

    <h3 class="title">Modifiers</h3>

    <div class="content">
      <ul>
        <li>
          the <code>nav</code> container can have a <strong>shadow</strong> by
          adding the <code>has-shadow</code> modifier
        </li>
        <li>
          the <code>nav-item</code> can become <strong>active</strong> by adding
          the <code>is-active</code> modifier
        </li>
        <li>
          the <code>nav-item</code> can become a <strong>tab</strong> by adding
          the <code>is-tab</code> modifier
        </li>
      </ul>
      <p>
        To optimise the space on desktop, but also allow the mobile view to be
        usable, you can
        <strong>duplicate</strong> nav items in both <code>nav-left</code> and
        <code>nav-right</code>, and show/hide them with
        <a href="{{site.url}}/documentation/modifiers/responsive-helpers/"
          >responsive helpers</a
        >.
      </p>
    </div>
  </div>

  {% capture nav_tabs_example %}
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item">
          <img
            src="{{ site.url }}/assets/images/bulma-logo.png"
            alt="Bulma logo"
          />
        </a>
        <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
        <a class="nav-item is-tab is-hidden-mobile">Features</a>
        <a class="nav-item is-tab is-hidden-mobile">Pricing</a>
        <a class="nav-item is-tab is-hidden-mobile">About</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
        <a class="nav-item is-tab is-hidden-tablet">Features</a>
        <a class="nav-item is-tab is-hidden-tablet">Pricing</a>
        <a class="nav-item is-tab is-hidden-tablet">About</a>
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px">
            <img src="{{site.url}}/assets/images/jgthms.png" />
          </figure>
          Profile
        </a>
        <a class="nav-item is-tab">Log out</a>
      </div>
    </div>
  </nav>
  {% endcapture %}

  <div class="bd-example is-paddingless">{{ nav_tabs_example }}</div>

  {% highlight html %} {{ nav_tabs_example }} {% endhighlight %}
</section>
```

## File: docs/documentation/components/navbar.html

```html
---
title: Navbar
layout: docs
theme: library
fullwidth: true
doc-tab: components
doc-subtab: navbar
breadcrumb:
- home
- documentation
- components
- components-navbar
meta:
  colors: true
  sizes: false
  variables: true
modals:
- docs/examples/navbar-bottom.html
---

{% capture navbar_basic_example %}
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="{{ site.url }}">
      {% include svg/bulma-logo.html %}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% capture navbar_example %}
{% include docs/examples/navbar.html id="Default" %}
{% endcapture %}

{% capture navbar_brand_example %}
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- navbar items, navbar burger... -->
  </div>
</nav>
{% endcapture %}

{% capture navbar_burger_example %}
<a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
{% endcapture %}

{% capture navbar_burger_active_example %}
<a class="navbar-burger is-active" role="button" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
{% endcapture %}

{% capture navbar_brand_items_example %}
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="{{ site.url }}">
      {% include svg/bulma-logo.html %}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
{% endcapture %}

{% capture navbar_menu_example %}
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- navbar items, navbar burger... -->
  </div>
  <div class="navbar-menu">
    <!-- navbar start, navbar end -->
  </div>
</nav>
{% endcapture %}

{% capture navbar_menu_active_example %}
<div class="navbar-menu">
  <!-- hidden on mobile -->
</div>

<div class="navbar-menu is-active">
  <!-- shown on mobile -->
</div>
{% endcapture %}

{% capture navbar_start_end_example %}
<div class="navbar-menu">
  <div class="navbar-start">
    <!-- navbar items -->
  </div>

  <div class="navbar-end">
    <!-- navbar items -->
  </div>
</div>
{% endcapture %}

{% capture navbar_item_link_example %}
<a class="navbar-item">
  Home
</a>
{% endcapture %}

{% capture navbar_item_brand_example %}
<a class="navbar-item">
  {% include svg/bulma-logo.html %}
</a>
{% endcapture %}

{% capture navbar_item_dropdown_example %}
<div class="navbar-item has-dropdown">
  <a class="navbar-link">
    Docs
  </a>

  <div class="navbar-dropdown">
    <!-- Other navbar items -->
  </div>
</div>
{% endcapture %}

{% capture navbar_item_dropdown_bis_example %}
<div class="navbar-dropdown">
  <a class="navbar-item">
    Overview
  </a>
</div>
{% endcapture %}

{% capture navbar_item_other_example %}
<div class="navbar-item">
  <div class="field is-grouped">
    <p class="control">
      <a class="button">
        <span class="icon">
          <i class="fas fa-twitter" aria-hidden="true"></i>
        </span>
        <span>Tweet</span>
      </a>
    </p>
    <p class="control">
      <a class="button is-primary">
        <span class="icon">
          <i class="fas fa-download" aria-hidden="true"></i>
        </span>
        <span>Download</span>
      </a>
    </p>
  </div>
</div>
{% endcapture %}

{% capture navbar_transparent_example %}
{% include docs/examples/navbar.html transparent=true boxed=true id="TransparentExample" %}
{% endcapture %}

{% capture navbar_dropdown_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% capture navbar_dropdown_hover_snippet %}
<div class="navbar-item has-dropdown is-hoverable">
  <!-- navbar-link, navbar-dropdown etc. -->
</div>
{% endcapture %}

{% capture navbar_dropdown_hover_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% capture navbar_dropdown_active_snippet %}
<div class="navbar-item has-dropdown is-active">
  <!-- navbar-link, navbar-dropdown etc. -->
</div>
{% endcapture %}

{% capture navbar_dropdown_active_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% capture navbar_dropdown_right_snippet %}
<div class="navbar-dropdown is-right">
  <!-- navbar-item, navbar-divider etc. -->
</div>
{% endcapture %}

{% capture navbar_dropdown_right_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-active">
        <a class="navbar-link">
          Left
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version {{ site.data.meta.version }}
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-active">
        <a class="navbar-link">
          Right
        </a>

        <div class="navbar-dropdown is-right">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version {{ site.data.meta.version }}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
{% endcapture %}

{% capture navbar_dropup_snippet %}
<div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
  <a class="navbar-link" href="{{ site.url }}/documentation/overview/start/">
    Docs
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item" href="{{ site.url }}/documentation/overview/start/">
      Overview
    </a>
  </div>
</div>
{% endcapture %}

{% capture navbar_dropup_example %}
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>

<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown has-dropdown-up is-active">
        <a class="navbar-link">
          Dropup
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Overview
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version {{ site.data.meta.version }}
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
{% endcapture %}

{% capture navbar_dropdown_default_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    {% include svg/bulma-logo.html %}
  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
{% endcapture %}

{% capture navbar_dropdown_boxed_example %}
<nav class="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    {% include svg/bulma-logo.html %}
  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown is-boxed">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>

<section class="hero">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
{% endcapture %}

{% capture navbar_dropdown_item_active_example %}
<nav class="navbar" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    {% include svg/bulma-logo.html %}
  </a>

  <div class="navbar-item has-dropdown is-active">
    <a class="navbar-link">
      Docs
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item">
        Overview
      </a>
      <a class="navbar-item is-selected">
        Elements
      </a>
      <a class="navbar-item">
        Components
      </a>
      <hr class="navbar-divider">
      <div class="navbar-item">
        Version {{ site.data.meta.version }}
      </div>
    </div>
  </div>
</nav>

<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Documentation
    </p>
    <p class="subtitle">
      Everything you need to <strong>create a website</strong> with Bulma
    </p>
  </div>
</section>
{% endcapture %}

{% capture navbar_divider_example %}
<hr class="navbar-divider">
{% endcapture %}

{% capture navbar_js_html %}
<a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>

<div class="navbar-menu" id="navMenu">
  <!-- navbar-start, navbar-end... -->
</div>
{% endcapture %}

{% capture navbar_js_code %}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
{% endcapture %}

{% capture navbar_jquery_code %}
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
{% endcapture %}

{% capture navbar_color_markup %}
<nav class="navbar is-primary">
  <!-- navbar brand, navbar menu... -->
</nav>
{% endcapture %}

<div class="content">
  <p>
    The <code>navbar</code> component is a responsive and versatile horizontal navigation bar with the following structure:
  </p>
  <ul>
    <li>
      <code>navbar</code> the <strong>main</strong> container
      <ul>
        <li>
          <code>navbar-brand</code> the <strong>left side</strong>, <strong class="has-text-success">always visible</strong>, which usually contains the <strong>logo</strong> and optionally some links or icons
          <ul>
            <li>
              <code>navbar-burger</code> the <strong>hamburger</strong> icon, which toggles the navbar menu on touch devices
            </li>
          </ul>
        </li>
        <li>
          <code>navbar-menu</code> the <strong>right side</strong>, hidden on touch devices, visible on desktop
          <ul>
            <li>
              <code>navbar-start</code> the <strong>left part</strong> of the menu, which appears next to the navbar brand on desktop
            </li>
            <li>
              <code>navbar-end</code> the <strong>right part</strong> of the menu, which appears at the end of the navbar
              <ul>
                <li>
                  <code>navbar-item</code> each <strong>single item</strong> of the navbar, which can either be an <code>a</code> or a <code>div</code>
                  <ul>
                    <li>
                      <code>navbar-link</code> a <strong>link</strong> as the sibling of a dropdown, with an arrow
                    </li>
                    <li>
                      <code>navbar-dropdown</code> the <strong>dropdown menu</strong>, which can include navbar items and dividers
                      <ul>
                        <li>
                          <code>navbar-divider</code> a <strong>horizontal line</strong> to separate navbar items
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

{% include docs/elements/anchor.html name="Basic Navbar" %}

<div class="content">
  <p>
    To <strong>get started quickly</strong>, here is what a complete basic navbar looks like:
  </p>
</div>

<div class="bd-example is-paddingless">
  {{ navbar_basic_example }}
</div>

{% highlight html %}{{ navbar_basic_example }}{% endhighlight %}

{% include docs/elements/anchor.html name="Navbar brand" %}

<div class="content">
  <p>
    The <code>navbar-brand</code> is the left side of the navbar. It can contain:
  </p>
  <ul>
    <li>
      a number of <code>navbar-item</code>
    </li>
    <li>
      the <code>navbar-burger</code> as last child
    </li>
  </ul>
</div>

{% highlight html %}{{navbar_brand_example}}{% endhighlight %}

<div class="content">
  <p>
    The navbar brand is <strong>always visible</strong>: on both touch devices {% include docs/bp/touch.html %} and desktop {% include docs/bp/desktop.html %}. As a result, it is recommended to only use a few navbar items to avoid <strong>overflowing</strong> horizontally on small devices.
  </p>
</div>

<div class="bd-example is-paddingless">
  {{navbar_brand_items_example}}
</div>

{% highlight html %}{{navbar_brand_items_example}}{% endhighlight %}

<div class="content">
  <p>
    On desktop {% include docs/bp/desktop.html %}, the navbar brand will only take up the space it needs.
  </p>
</div>

{% include docs/elements/anchor.html name="Navbar burger" %}

<div class="content">
  <p>
    The <code>navbar-burger</code> is a hamburger menu that only appears on <strong>touch devices</strong>. It has to appear as the last child of <code>navbar-brand</code>. It has to contain four empty <code>span</code> tags in order to visualize the hamburger lines or the cross (when active).
  </p>
</div>

<div class="columns">
  <div class="column is-one-quarter">
    <div class="example is-paddingless" style="margin-bottom: 1.5rem; width: 2.5rem;">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" style="display: flex;">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_burger_example }}{% endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    You can add the modifier class <code>is-active</code> to turn it into a cross.
  </p>
</div>

<div class="columns">
  <div class="column is-one-quarter">
    <div class="example is-paddingless" style="width: 2.5rem;">
      <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false" style="display: flex;">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_burger_active_example }}{% endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Navbar menu" %}

<div class="content">
  <p>
    The <code>navbar-menu</code> is the <strong>counterpart</strong> of the navbar brand. As such, it must appear as a direct child of <code>navbar</code>, as a sibling of <code>navbar-brand</code>.
  </p>
</div>

{% highlight html %}{{navbar_menu_example}}{% endhighlight %}

<div class="content">
  <p>
    The <code>navbar-menu</code> is <strong>hidden on touch devices</strong> {% include docs/bp/touch.html %}. You need to add the modifier class <code>is-active</code> to display it.
  </p>
</div>

{% highlight html %}{{navbar_menu_active_example}}{% endhighlight %}

<div class="content">
  <p>
    On desktop {% include docs/bp/desktop.html %}, the <code>navbar-menu</code> will <strong>fill up the space</strong> available in the navbar, leaving the navbar brand just the space it needs. It needs, however, two elements as direct children:
  </p>
  <ul>
    <li>
      <code>navbar-start</code>
    </li>
    <li>
      <code>navbar-end</code>
    </li>
  </ul>
</div>

<hr>

<div id="navbarJsExample" class="message is-info">
  <h4 class="message-header">Javascript toggle</h4>
  <div class="message-body">
    <div class="content">
      <p>
        The Bulma package <strong>does not come with any JavaScript</strong>.
        <br>
        Here is however an implementation example, which toggles the class <code>is-active</code> on both the <code>navbar-burger</code> and the targeted <code>navbar-menu</code>, in Vanilla Javascript.
      </p>

      {% highlight html %}{{ navbar_js_html }}{% endhighlight %}

      {% highlight javascript %}{{ navbar_js_code }}{% endhighlight %}

      <p>
        And here is another implementation example, which again toggles the class <code>is-active</code> on both the <code>navbar-burger</code> and the targeted <code>navbar-menu</code>, but this time in jQuery.
      </p>

      {% highlight javascript %}{{ navbar_jquery_code }}{% endhighlight %}

      <p>
        Remember, these are just implementation examples. The Bulma package <strong>does not come with any JavaScript</strong>.
      </p>
    </div>
  </div>
</div>

{% include docs/elements/anchor.html name="Navbar start and navbar end" %}

<div class="content">
  <p>
    The <code>navbar-start</code> and <code>navbar-end</code> are the two direct and only children of the <code>navbar-menu</code>.
  </p>
  <p>
    On desktop {% include docs/bp/desktop.html %}:
  </p>
  <ul>
    <li>
      <code>navbar-start</code> will appear on the <strong>left</strong>
    </li>
    <li>
      <code>navbar-end</code> will appear on the <strong>right</strong>
    </li>
  </ul>
  <p>
    Each of them can contain any number of <code>navbar-item</code>.
  </p>
</div>

{% highlight html %}{{navbar_start_end_example}}{% endhighlight %}

{% include docs/elements/anchor.html name="Navbar item" %}

<div class="content">
  <p>
    A <code>navbar-item</code> is a repeatable element that can be:
  </p>
  <ul class="bd-spaced">
    <li>
      a navigation <strong>link</strong>
      {% highlight html %}{{ navbar_item_link_example }}{% endhighlight %}
    </li>
    <li>
      a container for the <strong>brand logo</strong>
      {% highlight html %}{{ navbar_item_brand_example }}{% endhighlight %}
    </li>
    <li>
      the <strong>parent</strong> of a dropdown menu
      {% highlight html %}{{ navbar_item_dropdown_example }}{% endhighlight %}
    </li>
    <li>
      a child of a <strong>navbar dropdown</strong>
      {% highlight html %}{{ navbar_item_dropdown_bis_example }}{% endhighlight %}
    </li>
    <li>
      a container for almost <strong>anything</strong> you want, like a <code>field</code>
      <div class="bd-highlight-full">
        {% highlight html %}{{ navbar_item_other_example }}{% endhighlight %}
      </div>
    </li>
  </ul>
  <p>
    It can either be an anchor tag <code>&lt;a&gt;</code> or a <code>&lt;div&gt;</code>, as a <strong>direct child</strong> of either:
  </p>
  <ul>
    <li>
      <code>navbar</code>
    </li>
    <li>
      <code>navbar-brand</code>
    </li>
    <li>
      <code>navbar-start</code>
    </li>
    <li>
      <code>navbar-end</code>
    </li>
    <li>
      <code>navbar-dropdown</code>
    </li>
  </ul>
  <p>
    You can add the following <strong>modifier</strong> classes:
  </p>
  <ul>
    <li>
      <code>is-expanded</code> to turn it into a full-width element
    </li>
    <li>
      <code>is-tab</code> to add a bottom border on hover and show the bottom border using <code>is-active</code>
    </li>
  </ul>
</div>

{% include docs/elements/anchor.html name="Transparent navbar" %}

<div class="content">
  <p>
    To seamlessly integrate the navbar in any visual context, you can add the <code>is-transparent</code> modifier on the <code>navbar</code> component. This will remove any hover or active background from the navbar items.
  </p>
</div>

{% include docs/elements/snippet.html content=navbar_transparent_example paddingless=true horizontal=true more=true %}

{% include docs/elements/anchor.html name="Fixed navbar" %}

<div class="content">
  <p>
    You can now <strong>fix</strong> the navbar to either the <strong>top</strong> or <strong>bottom</strong> of the page. This is a 2-step process:
  </p>
  <ul class="bd-spaced">
    <li>
      Add either <code>is-fixed-top</code> or <code>is-fixed-bottom</code> to the <code>navbar</code> component
      {% highlight html %}<nav class="navbar is-fixed-top">{% endhighlight %}
    </li>
    <li>
      Add the corresponding <code>has-navbar-fixed-top</code> or <code>has-navbar-fixed-bottom</code> modifier to either <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code> element to provide the appropriate padding to the page
      {% highlight html %}<html class="has-navbar-fixed-top">{% endhighlight %}
    </li>
  </ul>
</div>

<h4 class="title is-5">Try it out!</h4>

<div id="navbarToggles" class="buttons">
  <a id="navbarFixBottom" class="button is-link">
    <span><span id="navbarFixBottomText">Show</span> <strong>bottom</strong> navbar</span>
  </a>
</div>

<script type="text/javascript">
  document.addEventListener('DOMContentLoaded', () => {

    const rootEl = document.documentElement;
    const navbarBottomEl = document.getElementById('navbarBottom');
    const fixBottomEl = document.getElementById('navbarFixBottom');
    const fixBottomElText = document.getElementById('navbarFixBottomText');
    let fixedBottom = false;

    fixBottomEl.addEventListener('click', event => {
      fixedBottom = !fixedBottom;

      if (fixedBottom) {
        fixBottomEl.className = 'button is-success';
        fixBottomElText.innerHTML = 'Hide';
        rootEl.classList.add('has-navbar-fixed-bottom');
        navbarBottomEl.classList.remove('is-hidden');
      } else {
        fixBottomEl.className = 'button is-link';
        fixBottomElText.innerHTML = 'Show';
        rootEl.classList.remove('has-navbar-fixed-bottom');
        navbarBottomEl.classList.add('is-hidden');
      }
    });

  });
</script>

{% include docs/elements/anchor.html name="Dropdown menu" %}

<div class="content">
  <p>
    To create a <strong>dropdown menu</strong>, you will need <strong>4</strong> elements:
  </p>
  <ul>
    <li>
      <code>navbar-item</code> with the <code>has-dropdown</code> modifier
    </li>
    <li>
      <code>navbar-link</code> which contains the dropdown arrow
    </li>
    <li>
      <code>navbar-dropdown</code> which can contain instances of <code>navbar-item</code> and <code>navbar-divider</code>
    </li>
  </ul>
</div>

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_example }}{% endhighlight %}
  </div>
</div>

<h4 class="title is-4">
  Show/hide the dropdown with either <strong>CSS</strong> or <strong>JavaScript</strong>
</h4>

<div class="content">
  <p>
    The <code>navbar-dropdown</code> is visible on touch devices {% include docs/bp/touch.html %} but hidden on desktop {% include docs/bp/desktop.html %}. <em>How</em> the dropdown is displayed on desktop depends on the parent's class.
  </p>
  <p>
    The <code>navbar-item</code> with the <code>has-dropdown</code> modifier, has <strong>2 additional modifiers</strong>
  </p>
  <ul>
    <li>
      <code>is-hoverable</code>: the dropdown will show up when <strong>hovering</strong> the parent <code>navbar-item</code>
    </li>
    <li>
      <code>is-active</code>: the dropdown will show up <strong>all the time</strong>
    </li>
  </ul>
</div>

<div class="message is-success">
  <p class="message-body">
    While the CSS <code>:hover</code> implementation works perfectly, the <code>is-active</code> class is available for users who want to control the display of the dropdown with <strong>JavaScript</strong>.
  </p>
</div>

{% highlight html %}{{ navbar_dropdown_hover_snippet }}{% endhighlight %}

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_hover_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_hover_example }}{% endhighlight %}
  </div>
</div>

{% highlight html %}{{ navbar_dropdown_active_snippet }}{% endhighlight %}

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_active_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_active_example }}{% endhighlight %}
  </div>
</div>

<h4 class="title is-4">
  Right dropdown
</h4>

<div class="content">
  <p>
    If your parent <code>navbar-item</code> is on the right side, you can position the dropdown to start from the <strong>right</strong> with the <code>is-right</code> modifier.
  </p>
</div>

{% highlight html %}{{ navbar_dropdown_right_snippet }}{% endhighlight %}

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_right_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_right_example }}{% endhighlight %}
  </div>
</div>

<h4 class="title is-4">
  Dropup
</h4>

<div class="content">
  <p>
    If you're using a navbar at the bottom, like the <a href="#fixed-navbar">fixed bottom navbar</a>, you might want to use a <strong>dropup menu</strong>. Simply add the <code>has-dropdown</code> and <code>has-dropdown-up</code> modifiers to the parent <code>navbar-item</code>.
  </p>
</div>

{% highlight html %}{{ navbar_dropup_snippet }}{% endhighlight %}

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropup_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropup_example }}{% endhighlight %}
  </div>
</div>


{% assign vernum = site.data.meta.version | downcase | remove: "." | plus: 0 %}

{% if vernum >= 72 %}

<h4 class="title is-4">
  Dropdown without arrow
</h4>

<div class="content">
  <p>
    You can remove the arrow in the items of the navbar by adding the <code>is-arrowless</code> modifier to them.
  </p>
</div>

{% highlight html %}
<div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link is-arrowless">
    Docs
  </a>
  <!-- navbar-dropdowns -->
</div>
{% endhighlight %}

{% capture navbar_dropup_without_arrow_example %}
<div class="navbar-item has-dropdown is-hoverable">
  <a class="navbar-link is-arrowless">
    Link without arrow
  </a>
  <div class="navbar-dropdown">
    <a class="navbar-item">
      Overview
    </a>
    <a class="navbar-item">
      Elements
    </a>
    <a class="navbar-item">
      Components
    </a>
    <hr class="navbar-divider">
    <div class="navbar-item">
      Version {{ site.data.meta.version }}
    </div>
  </div>
</div>
{% endcapture %}

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropup_without_arrow_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropup_without_arrow_example }}{% endhighlight %}
  </div>
</div>

{% endif %}


<h4 class="title is-4">
  Styles for the dropdown menu
</h4>

<div class="content">
  <p>
    By default, the <code>navbar-dropdown</code> has:
  </p>
  <ul>
    <li>
      a grey <code>border-top</code>
    </li>
    <li>
      a <code>border-radius</code> at both bottom corners
    </li>
  </ul>
</div>

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_default_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_default_example }}{% endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    When having a <a href="#transparent-navbar">transparent navbar</a>, it is preferable to use the boxed version of the dropdown, by using the <code>is-boxed</code> modifier.
  </p>
  <ul>
    <li>
      the grey border is <strong>removed</strong>
    </li>
    <li>
      a slight <strong>inner shadow</strong> is added
    </li>
    <li>
      all corners are <strong>rounded</strong>
    </li>
    <li>
      the hover/active state is <strong>animated</strong>
    </li>
  </ul>
</div>

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_boxed_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_boxed_example }}{% endhighlight %}
  </div>
</div>

<h4 class="title is-4">
  Active dropdown navbar item
</h4>

<div class="columns">
  <div class="column">
    <div class="bd-example is-paddingless">
      {{ navbar_dropdown_item_active_example }}
    </div>
  </div>

  <div class="column">
    {% highlight html %}{{ navbar_dropdown_item_active_example }}{% endhighlight %}
  </div>
</div>

<h4 class="title is-4">
  Dropdown divider
</h4>

<div class="content">
  <p>
    You can add a <code>navbar-divider</code> to display a <strong>horizontal rule</strong> in a <code>navbar-dropdown</code>.
  </p>
</div>

{% highlight html %}{{ navbar_divider_example }}{% endhighlight %}

{% include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    You can change the background color of the <code>navbar</code> by using one of the <strong>9 color modifiers:</strong>
  </p>
  <ul>
    <li><code>is-primary</code></li>
    <li><code>is-link</code></li>
    <li><code>is-info</code></li>
    <li><code>is-success</code></li>
    <li><code>is-warning</code></li>
    <li><code>is-danger</code></li>
    <li><code>is-black</code></li>
    <li><code>is-dark</code></li>
    <li><code>is-light</code></li>
    <li><code>is-white</code></li>
  </ul>
</div>

{% highlight html %}{{ navbar_color_markup }}{% endhighlight %}

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar.html %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="primary" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="link" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="info" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="success" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="warning" light=true %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="danger" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="black" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="dark" %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="light" light=true %}
</div>

<div class="bd-example is-paddingless" style="height: 30rem;">
  {% include docs/examples/navbar-color.html color="white" light=true %}
</div>

{% include docs/elements/anchor.html name="Navbar Helper Classes" %}

<table class="table is-bordered">
  <tbody>
    <tr>
      <th>Type</th>
      <th>Name</th>
      <th>Description</th>
    </tr>
    <tr>
      <th rowspan="1">Spacing</th>
      <td><code>is-spaced</code></td>
      <td>Sets <strong>Top</strong> and <strong>Bottom</strong> paddings with <strong>1rem</strong>,
          <br> <strong>Left</strong> and <strong>Right</strong> paddings with <strong>2rem</strong>
      </td>
    </tr>
    <tr>
      <th rowspan="1">Shading</th>
      <td><code>has-shadow</code></td>
      <td>Adds a small amount of box-shadow around the navbar</td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/components/pagination.html

```html
---
title: Pagination
layout: docs
theme: library
doc-tab: components
doc-subtab: pagination
breadcrumb:
  - home
  - documentation
  - components
  - components-pagination
meta:
  colors: false
  sizes: true
  variables: true
---

{% capture pagination_example %}
<nav class="pagination" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_options_example %}
<nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous is-disabled" title="This is the first page"
    >Previous</a
  >
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 1"
        aria-current="page"
        >1</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_centered_example %}
<nav class="pagination is-centered" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_right_example %}
<nav class="pagination is-right" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_rounded_example %}
<nav class="pagination is-rounded" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_small_example %}
<nav class="pagination is-small" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_medium_example %}
<nav class="pagination is-medium" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %} {% capture pagination_large_example %}
<nav class="pagination is-large" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li><a href="#" class="pagination-link" aria-label="Goto page 1">1</a></li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li><span class="pagination-ellipsis">&hellip;</span></li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
{% endcapture %}

<div class="content">
  <p>The pagination component consists of several elements:</p>
  <ul>
    <li>
      <code>pagination-previous</code> and <code>pagination-next</code> for
      incremental navigation
    </li>
    <li>
      <code>pagination-list</code> which displays page items:
      <ul>
        <li><code>pagination-link</code> for the page numbers</li>
        <li><code>pagination-ellipsis</code> for range separators</li>
      </ul>
    </li>
  </ul>
  <p>
    All elements are optional so you can compose your pagination as you wish.
  </p>
</div>

{% include docs/elements/snippet.html content=pagination_example horizontal=true
more=true %}

<div class="content">
  <p>
    You can disable some links if they are not active, or change the amount of
    page numbers available.
  </p>
</div>

{% include docs/elements/snippet.html content=pagination_options_example
horizontal=true more=true %}

<div class="content">
  <p>
    By default on <strong>tablet</strong>, the list is located on the left, and
    the previous/next buttons on the right. But you can change the
    <strong>order</strong> of these elements by using the
    <code>is-centered</code> and <code>is-right</code> modifiers.
  </p>
</div>

{% include docs/elements/snippet.html content=pagination_centered_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=pagination_right_example horizontal=true more=true %} {% include
docs/elements/anchor.html name="Styles" %}

<p class="content">
  Add the <code>is-rounded</code> modifier to have rounded pagination items.
</p>

{% include docs/elements/snippet.html content=pagination_rounded_example
horizontal=true more=true %} {% include docs/elements/anchor.html name="Sizes"
%}

<p class="content">
  The pagination comes in <strong>3 additional sizes</strong>.<br />
  You only need to append the <strong>modifier</strong> <code>is-small</code>,
  <code>is-medium</code>, or <code>is-large</code> to the
  <code>pagination</code> component.
</p>

{% include docs/elements/snippet.html content=pagination_small_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=pagination_medium_example horizontal=true more=true %} {% include
docs/elements/snippet.html content=pagination_large_example horizontal=true
more=true %}
```

## File: docs/documentation/components/panel.html

```html
---
title: Panel
layout: docs
theme: library
doc-tab: components
doc-subtab: panel
breadcrumb:
  - home
  - documentation
  - components
  - components-panel
meta:
  colors: true
  sizes: false
  variables: true
---

{% capture panel_example %}
<nav class="panel">
  <p class="panel-heading">Repositories</p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search" />
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    daniellowtw/infboard
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    mojs
  </a>
  <label class="panel-block">
    <input type="checkbox" />
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset all filters
    </button>
  </div>
</nav>
{% endcapture %}

<div class="content">
  <p>The <code>panel</code> is a container for several types:</p>
  <ul>
    <li><code>panel-heading</code> as the first child</li>
    <li><code>panel-tabs</code> for navigation</li>
    <li>
      <code>panel-block</code> which can contain other elements, like:
      <ul>
        <li><code>control</code></li>
        <li><code>input</code></li>
        <li><code>button</code></li>
        <li><code>panel-icon</code></li>
      </ul>
    </li>
  </ul>
  <p>
    The <code>panel-block</code> can be an anchor tag <code>&lt;a&gt;</code> or
    a label <code>&lt;label&gt;</code> with a checkbox inside.
  </p>
</div>

{% include docs/elements/snippet.html content=panel_example more=true %} {%
include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    The panel component is available in all the
    <strong>different colors</strong> defined by the
    <a href="{{ site.data.links.by_id.customize-variables.path }}"
      ><code>$colors</code> Sass map</a
    >. Simply append one of the color modifiers.
  </p>
  <p>
    For example, to use your primary color, use
    <code>"panel is-primary"</code> as a class.
  </p>
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %}
<article class="panel is-{{ color }}">
  <p class="panel-heading">{{ color | capitalize }}</p>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-{{ color }}" type="text" placeholder="Search" />
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
</article>
{% endcapture %} {% include docs/elements/snippet.html content=foobar more=true
%} {% endfor %}
```

## File: docs/documentation/components/tabs.html

```html
---
title: Tabs
layout: docs
theme: library
doc-tab: components
doc-subtab: tabs
breadcrumb:
  - home
  - documentation
  - components
  - components-tabs
meta:
  colors: false
  sizes: true
  variables: true
---

{% capture tabs_example %}
<div class="tabs">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_centered_example %}
<div class="tabs is-centered">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_right_example %}
<div class="tabs is-right">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_icons_example %}
<div class="tabs is-centered">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_small_example %}
<div class="tabs is-small">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_medium_example %}
<div class="tabs is-medium">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_large_example %}
<div class="tabs is-large">
  <ul>
    <li class="is-active"><a>Pictures</a></li>
    <li><a>Music</a></li>
    <li><a>Videos</a></li>
    <li><a>Documents</a></li>
  </ul>
</div>
{% endcapture %} {% capture tabs_boxed_example %}
<div class="tabs is-boxed">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_toggle_example %}
<div class="tabs is-toggle">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_toggle_rounded_example %}
<div class="tabs is-toggle is-toggle-rounded">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-file-alt"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_fullwidth_example %}
<div class="tabs is-fullwidth">
  <ul>
    <li>
      <a>
        <span class="icon"
          ><i class="fas fa-angle-left" aria-hidden="true"></i
        ></span>
        <span>Left</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"
          ><i class="fas fa-angle-up" aria-hidden="true"></i
        ></span>
        <span>Up</span>
      </a>
    </li>
    <li>
      <a>
        <span>Right</span>
        <span class="icon"
          ><i class="fas fa-angle-right" aria-hidden="true"></i
        ></span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_centered_boxed_example %}
<div class="tabs is-centered is-boxed">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_toggle_fullwidth_example %}
<div class="tabs is-toggle is-fullwidth">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_centered_boxed_medium_example %}
<div class="tabs is-centered is-boxed is-medium">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="fas fa-film" aria-hidden="true"></i
        ></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %} {% capture tabs_toggle_fullwidth_large_example %}
<div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon"
          ><i class="fas fa-image" aria-hidden="true"></i
        ></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"
          ><i class="fas fa-music" aria-hidden="true"></i
        ></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon"
          ><i class="far fa-file-alt" aria-hidden="true"></i
        ></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <code>tabs</code> are a straightforward navigation component that
    come in a variety of versions. They only require the following structure:
  </p>
  <ul>
    <li>a <code>tabs</code> container</li>
    <li>a <code>&lt;ul&gt;</code> HTML element</li>
    <li>a list of <code>&lt;li&gt;</code> HTML element</li>
    <li><code>&lt;a&gt;</code> HTML anchor elements for each link</li>
  </ul>
  <p>
    The <strong>default</strong> tabs style has a single border at the bottom.
  </p>
</div>

{% include docs/elements/snippet.html content=tabs_example horizontal=true %} {%
include docs/elements/anchor.html name="Alignment" %}

<div class="content">
  <p>
    To align the tabs list, use the <code>is-centered</code> or
    <code>is-right</code> modifier on the <code>.tabs</code> container:
  </p>
</div>

{% include docs/elements/snippet.html content=tabs_centered_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=tabs_right_example horizontal=true more=true %} {% include
docs/elements/anchor.html name="Icons" %}

<div class="content">
  <p>
    You can use any of the <a href="https://fontawesome.com/">Font Awesome</a>
    <strong>icons</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=tabs_icons_example horizontal=true
more=true %} {% include docs/elements/anchor.html name="Sizes" %}
<div class="content">
  <p>
    You can choose between <strong>3 additional sizes</strong>:
    <code>is-small</code> <code>is-medium</code> and <code>is-large</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=tabs_small_example horizontal=true
more=true %} {% include docs/elements/snippet.html content=tabs_medium_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=tabs_large_example horizontal=true more=true %} {% include
docs/elements/anchor.html name="Styles" %}

<div class="content">
  If you want a more classic style with <strong>borders</strong>, just append
  the <code>is-boxed</code> modifier.
</div>

{% include docs/elements/snippet.html content=tabs_boxed_example horizontal=true
more=true %}

<p class="content">
  If you want <strong>mutually exclusive</strong> tabs (like radio buttons where
  clicking one deselects all other ones), use the
  <code>is-toggle</code> modifier.
</p>

{% include docs/elements/snippet.html content=tabs_toggle_example
horizontal=true more=true %}

<p class="content">
  If you use both <code>is-toggle</code> and <code>is-toggle-rounded</code>, the
  first and last items will be <strong>rounded</strong>.
</p>

{% include docs/elements/snippet.html content=tabs_toggle_rounded_example
horizontal=true more=true %}

<p class="content">
  If you want the tabs to take up the <strong>whole width</strong> available,
  use <code>is-fullwidth</code>.
</p>

{% include docs/elements/snippet.html content=tabs_fullwidth_example
horizontal=true more=true %} {% include docs/elements/anchor.html
name="Combining" %}

<div class="content">
  <p>
    You can <strong>combine</strong> different modifiers. For example, you can
    have <strong>centered boxed</strong> tabs, or
    <strong>fullwidth toggle</strong> ones.
  </p>
</div>

{% include docs/elements/snippet.html content=tabs_centered_boxed_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=tabs_toggle_fullwidth_example horizontal=true more=true %} {% include
docs/elements/snippet.html content=tabs_centered_boxed_medium_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=tabs_toggle_fullwidth_large_example horizontal=true more=true %}
```

## File: docs/documentation/customize.html

```html
---
title: Customize
layout: docs
theme: customize
doc-tab: customize
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - customize
---

{% include docs/components/links.html category_id='customize' %}
```

## File: docs/documentation/customize/concepts.html

```html
---
title: Bulma Customization Concepts
layout: docs
theme: customize
doc-tab: customize
doc-subtab: concepts
breadcrumb:
  - home
  - documentation
  - customize
  - customize-concepts
---

{% capture markdown %} Bulma is a **highly customizable CSS framework**. From
colors to typography, spacing and sizes, forms and layouts, all parts of Bulma
can be customized by the user. Bulma's styles and variables are defined at
several levels: * Global Sass variables * Component Sass variables * Global CSS
variables * Component CSS variables * Helper classes All Bulma components are
styled using **Sass variables** and **CSS Variables** (which are also called CSS
custom properties). Read more about them: * [on the Sass
website](https://sass-lang.com/documentation/variables/) * [on the MDN
Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
{% endcapture %} {% include markdown.html content=markdown %} {% include
docs/elements/anchor.html name="Global Sass Variables" %} {% capture markdown %}
Bulma uses Sass variables globally defined in 2 files located in the `utilities`
folder: * `initial-variables.scss` where you define variables by literal value *
**colors** like `$blue: hsl(229, 53%, 53%)` * **font sizes** like `$size-1:
3rem` * **dimensions** like `$block-spacing: 1.5rem` * **breakpoints** like
`$tablet: 769px` * **other values** like `$easing: ease-out` or `$radius-large:
0.75rem` * `derived-variables.scss` where variables are calculated from the
values set in the previous file * **primary colors**: * `$primary` * `$link` *
`$success` * `$info` * `$warning` * `$dark` * **utility colors**: *
`$background` * `$border` * `$code` and `$pre` * `$shadow-color` *
**typography**: * `$family-primary` * `$family-secondary` * `$family-code` *
`$size-small` * `$size-normal` * `$size-medium` * `$size-large` * color maps: *
`$colors` * `$shades` * `$sizes` {% endcapture %} {% include markdown.html
content=markdown %} {% include docs/elements/anchor.html name="Component Sass
variables" %} {% capture markdown %} All Bulma components define its own Sass
variables. For example, `components/breadcrumb.scss` define the following: {%
endcapture %} {% include markdown.html content=markdown %} {% include
docs/components/variables.html tab="components" subtab="breadcrumb"
hide_css_vars=true %} {% include docs/elements/anchor.html name="Global CSS
Variables" %} {% capture markdown %} Bulma uses global CSS variables defined at
the `:root` level. They are all prefixed with `bulma-`: {% endcapture %} {%
include markdown.html content=markdown %} {% highlight css %} :root { /* Colors
and Lightness values */ --bulma-scheme-h: 221; --bulma-scheme-s: 14%;
--bulma-light-l: 90%; --bulma-light-invert-l: 20%; --bulma-dark-l: 20%;
--bulma-dark-invert-l: 90%; --bulma-soft-l: 90%; --bulma-bold-l: 20%;
--bulma-soft-invert-l: 20%; --bulma-bold-invert-l: 90%; /* etc. */ /* Color
Palettes */ --bulma-primary: hsla(var(--bulma-primary-h),
var(--bulma-primary-s), var(--bulma-primary-l), 1); --bulma-primary-base:
hsla(var(--bulma-primary-h), var(--bulma-primary-s), var(--bulma-primary-l), 1);
--bulma-primary-rgb: 0, 209, 178; --bulma-primary-h: 171deg; --bulma-primary-s:
100%; --bulma-primary-l: 41%; --bulma-primary-00-l: 1%; --bulma-primary-05-l:
6%; --bulma-primary-10-l: 11%; --bulma-primary-15-l: 16%; --bulma-primary-20-l:
21%; /* etc. */ /* Typography */ --bulma-family-primary: Inter, SF Pro, Segoe
UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;
--bulma-family-secondary: Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu,
Helvetica Neue, Helvetica, Arial, sans-serif; --bulma-family-code: Inconsolata,
Hack, SF Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, monospace;
--bulma-size-small: 0.75rem; --bulma-size-normal: 1rem; --bulma-size-medium:
1.25rem; --bulma-size-large: 1.5rem; /* etc. */ } {% endhighlight %} {% capture
markdown %} You can **overwrite** them simply by setting a new value at the same
scope (or even a more specific one): {% endcapture %} {% include markdown.html
content=markdown %} {% highlight css %} :root { /* Set new values */
--bulma-scheme-h: 35; --bulma-scheme-s: 20%; } {% endhighlight %} {% include
docs/elements/anchor.html name="Components CSS Variables" %} {% capture markdown
%} Bulma is also styled at the **component** level. For example, here is how the
`.title` element is styled: {% endcapture %} {% include markdown.html
content=markdown %} {% highlight css %} .title { --bulma-title-color:
var(--bulma-text-strong); --bulma-title-family: false; --bulma-title-size:
var(--bulma-size-3); --bulma-title-weight: var(--bulma-weight-extrabold);
--bulma-title-line-height: 1.125; --bulma-title-strong-color: inherit;
--bulma-title-strong-weight: inherit; --bulma-title-sub-size: 0.75em;
--bulma-title-sup-size: 0.75em; } .title { color: var(--bulma-title-color);
font-size: var(--bulma-title-size); font-weight: var(--bulma-title-weight);
line-height: var(--bulma-title-line-height); } {% endhighlight %} {% capture
markdown %} You can overwrite this simply by setting new values under the same
scope: {% endcapture %} {% include markdown.html content=markdown %} {%
highlight css %} .title { --bulma-title-color: #fff; --bulma-title-line-height:
1.6; } {% endhighlight %}
```

## File: docs/documentation/customize/list-of-sass-variables.html

```html
---
title: List of Bulma Sass variables
layout: docs
theme: customize
doc-tab: customize
doc-subtab: sass-list
breadcrumb:
  - home
  - documentation
  - customize
  - customize-sass-list
---

{% include docs/elements/anchor.html name="Initial variables" %}

<div class="content">
  Defined at <code>utilities/initial-variables.scss</code>.
</div>

{% include docs/components/variables.html tab="utilities"
subtab="initial-variables" hide_css_vars=true %} {% include
docs/elements/anchor.html name="Derived variables" %}

<div class="content">
  Defined at <code>utilities/derived-variables.scss</code>.
</div>

{% include docs/components/variables.html tab="utilities"
subtab="derived-variables" hide_css_vars=true %} {% include
docs/elements/anchor.html name="Component variables" %}

<div class="content">
  For each Bulma component, the list of Sass variables is listed at the bottom
  of its page.
</div>
```

## File: docs/documentation/customize/with-css-variables.html

```html
---
title: Customize with CSS Variables
layout: docs
theme: customize
doc-tab: customize
doc-subtab: with-css-variables
breadcrumb:
  - home
  - documentation
  - customize
  - customize-with-css-variables
---

{% capture markdown %} Bulma makes wide use of **CSS Variables** (also called
CSS custom properties). Read more about them on the [dedicated page]({{
site.data.links.by_id['features-css-variables'].path }}). {% endcapture %} {%
include markdown.html content=markdown %} {% capture markdown %} You can change
the current Bulma simply by **opening your developer console** and changing a
CSS variable's value. If you set your CSS variables under the `:root` scope, you
are **overwriting** Bulma's default theme. This can be done by with Sass or CSS.
To test out this CSS method, simply follow these steps:

<table class="table is-bordered">
  {% include docs/elements/step.html image="images/themes/step-1-inspect.png"
  content="Open your browser inspector" width=496 height=748 %} {% include
  docs/elements/step.html image="images/themes/step-2-html.png" content="Select
  the `html` element" width=528 height=232 %} {% include docs/elements/step.html
  image="images/themes/step-3-var.png" content="Insert a new value for the
  `--bulma-link-h` variable (the hue of the link color)" width=376 height=120 %}
  {% include docs/elements/step.html image="images/themes/step-4-menu.png"
  content="Notice how the CSS Helpers section in the side menu changes color"
  width=480 height=256 %}
</table>
{% endcapture %} {% include docs/elements/anchor.html name="Customizing in the
browser" %} {% include markdown.html content=markdown %}
```

## File: docs/documentation/customize/with-modular-sass.html

```html
---
title: Customize with Modular Sass
layout: docs
theme: customize
doc-tab: customize
doc-subtab: with-modular-sass
breadcrumb:
  - home
  - documentation
  - customize
  - customize-with-modular-sass
---

{% capture markdown %} You can import only **what you need** from Bulma, and
**customize** it with your own Sass values. To achieve this: * set your own Sass
variables * import `bulma/sass/utilities` * override Bulma's variables by
providing the `with` keyword with your own Sass map * if you need to, do the
same for the `bulma/sass/form` folder * import the Bulma components you need
with either `@use` or `@forward` * finally, import the Bulma themes from
`bulma/sass/themes` {% endcapture %} {% include markdown.html content=markdown
%} {% highlight sass %} // Set your brand colors $purple: #8a4d76; $pink:
#fa7c91; $brown: #757763; $beige-light: #d0d1cd; $beige-lighter: #eff0eb; //
Override global Sass variables from the /utilities folder @use
"bulma/sass/utilities" with ( $family-primary: '"Nunito", sans-serif',
$grey-dark: $brown, $grey-light: $beige-light, $primary: $purple, $link: $pink,
$control-border-width: 2px ); // Override Sass variables from the /form folder
@use "bulma/sass/form" with ( $input-shadow: none ); // Import the components
you need @forward "bulma/sass/base"; @forward "bulma/sass/components/card";
@forward "bulma/sass/components/modal"; @forward "bulma/sass/components/navbar";
@forward "bulma/sass/elements/button"; @forward "bulma/sass/elements/icon";
@forward "bulma/sass/elements/content"; @forward
"bulma/sass/elements/notification"; @forward "bulma/sass/elements/progress";
@forward "bulma/sass/elements/tag"; @forward "bulma/sass/layout/footer"; //
Import the themes so that all CSS variables have a value @forward
"bulma/sass/themes"; // Import the Google Font @import
url("https://fonts.googleapis.com/css?family=Nunito:400,700"); {% endhighlight
%} {% capture markdown %} This allows you to override Bulma's: * global
variables from the `utilities` folder * form variables from the `form` folder If
you wanted to import a component **and** customize it, do the same when
importing it: {% endcapture %} {% include markdown.html content=markdown %} {%
highlight sass %} @use "bulma/sass/elements/image" with ( $dimensions: 20 40 80
160, ); {% endhighlight %}
```

## File: docs/documentation/customize/with-sass.html

```html
---
title: Customize with Sass
layout: docs
theme: customize
doc-tab: customize
doc-subtab: with-sass
breadcrumb:
  - home
  - documentation
  - customize
  - customize-with-sass
---

{% capture content %} Bulma is built using [Sass](https://sass-lang.com/). It
uses **Sass variables** to define colors, sizes, spacing, and other aspects of
the framework. {% endcapture %} {% include markdown.html content=content %} {%
include docs/elements/anchor.html name="Install the dependencies" %} {% capture
content %} To customize Bulma with Sass, you first need to [install
Sass](https://sass-lang.com/install/). The recommended approach is to use the
`sass` npm package. {% endcapture %} {% include markdown.html content=content %}
{% capture content %} {% highlight bash %} npm install sass npm install bulma {%
endhighlight %} In your `package.json`, add one script to build Bulma, one to
build and watch for changes: {% highlight json %} "build-bulma": "sass
--load-path=node_modules my-bulma-project.scss my-bulma-project.css", "start":
"npm run build-bulma -- --watch" {% endhighlight %} Your whole `package.json`
should look like this: {% highlight json %} { "dependencies": { "bulma":
"^1.0.0", "sass": "^1.72.0" }, "scripts": { "build-bulma": "sass
--load-path=node_modules my-bulma-project.scss my-bulma-project.css", "start":
"npm run build-bulma -- --watch" } } {% endhighlight %} {% endcapture %} {%
include markdown.html content=content %} {% include docs/elements/anchor.html
name="Create your Sass file" %} {% capture content %} Next to your
`package.json`, create a `my-bulma-project.scss` file. To overwrite Bulma's Sass
variables with your own value, write `@use` and the `with` keyword, which takes
a Sass map: {% highlight sass %} // Set your brand colors $purple: #8a4d76;
$pink: #fa7c91; $brown: #757763; $beige-light: #d0d1cd; $beige-lighter: #eff0eb;
// Path to Bulma's sass folder @use "bulma/sass" with ( $family-primary:
'"Nunito", sans-serif', $grey-dark: $brown, $grey-light: $beige-light, $primary:
$purple, $link: $pink, $control-border-width: 2px, $input-shadow: none ); //
Import the Google Font @import
url("https://fonts.googleapis.com/css?family=Nunito:400,700"); {% endhighlight
%} {% endcapture %} {% include markdown.html content=content %} {% capture
content %} Test out your setup by running the following command: {% highlight
bash %} npm run build-bulma {% endhighlight %} You should see **2 files**
appearing next to the other ones: * `my-bulma-project.css`, your CSS output file
* `my-bulma-project.css.map`, an optional source map {% endcapture %} {% include
markdown.html content=content %} {% include docs/elements/anchor.html name="Add
an HTML page" %} {% capture content %} To view your Bulma project come to life,
create an `index.html` page with the following content: {% endcapture %} {%
include markdown.html content=content %}

<div class="bd-example bd-highlight-full">
  {% highlight html -%} {%- include docs/snippets/custom-page.html -%} {%-
  endhighlight %}
</div>

{% include docs/elements/anchor.html name="Final result" %} {% capture content
%} Your project folder should look like this: {% endcapture %} {% include
markdown.html content=content %}

<table class="table is-bordered">
  <tr>
    <td>
      <div class="icon-text has-text-html">
        <span class="icon">
          <i class="fab fa-html5"></i>
        </span>
      </div>
    </td>
    <td><code>index.html</code></td>
  </tr>

  <tr>
    <td>
      <div class="icon-text has-text-css">
        <span class="icon">
          <i class="fab fa-css3"></i>
        </span>
      </div>
    </td>
    <td><code>my-bulma-project.css</code></td>
  </tr>

  <tr>
    <td>
      <div class="icon-text has-text-success">
        <span class="icon">
          <i class="fas fa-code"></i>
        </span>
      </div>
    </td>
    <td><code>my-bulma-project.css.map</code></td>
  </tr>

  <tr>
    <td>
      <div class="icon-text has-text-sass">
        <span class="icon">
          <i class="fab fa-sass"></i>
        </span>
      </div>
    </td>
    <td><code>my-bulma-project.scss</code></td>
  </tr>

  <tr>
    <td>
      <div class="icon-text has-text-js">
        <span class="icon">
          <i class="fab fa-js"></i>
        </span>
      </div>
    </td>
    <td><code>package.json</code></td>
  </tr>
</table>

<div class="content">
  <p>And your final page will look like this:</p>
</div>

{% include screenshot.html path="screenshots/custom-page.png" width=640
height=330 caption="Your final Bulma page" %}
```

## File: docs/documentation/customize/with-vite-js.html

```html
---
title: Customize with ViteJS
layout: docs
theme: customize
doc-tab: customize
doc-subtab: with-vitejs
breadcrumb:
  - home
  - documentation
  - customize
  - customize-with-vitejs
---
```

## File: docs/documentation/elements.html

```html
---
title: Elements
layout: docs
theme: library
doc-tab: elements
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - elements
---

{% include docs/components/links.html category_id='elements' %}
```

## File: docs/documentation/elements/block.html

```html
---
title: Block
layout: docs
theme: library
doc-tab: elements
doc-subtab: block
breadcrumb:
  - home
  - documentation
  - elements
  - elements-block
meta:
  colors: false
  sizes: false
  variables: true
---

{% capture block_example %}
<div class="block">This text is within a <strong>block</strong>.</div>
<div class="block">
  This text is within a <strong>second block</strong>. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla
  egestas. Nullam condimentum luctus turpis.
</div>
<div class="block">
  This text is within a <strong>third block</strong>. This block has no margin
  at the bottom.
</div>
{% endcapture %} {% capture no_block_example %}
<div>This text is <em>not</em> within a <strong>block</strong>.</div>
<div>
  This text <em>isn't</em> within a <strong>block</strong> either. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
  fringilla egestas. Nullam condimentum luctus turpis.
</div>
<div>This text is also <em>not</em> within a <strong>block</strong>.</div>
{% endcapture %} {% capture block_css %} .block:not(:last-child) {
margin-bottom: 1.5rem; } {% endcapture %} {% capture no_block %}
<p class="title mb-0">Without block</p>
<div class="block mb-0">
  <div class="field is-grouped">
    <div class="control is-expanded">
      <input class="input" type="text" placeholder="Text input" />
    </div>
    <div class="control">
      <button class="button is-primary">Button</button>
    </div>
  </div>
</div>
<nav class="pagination mb-0" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" disabled
    >Previous</a
  >
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 1"
        aria-current="page"
        >1</a
      >
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 2">2</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 3">3</a>
    </li>
  </ul>
</nav>
<progress class="progress is-success mb-0" value="30" max="100">30%</progress>
<div class="notification is-warning mb-0">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
  dolor.
</div>
<article class="message is-danger mb-0">
  <div class="message-header">
    <p>Error</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur.
  </div>
</article>
{% endcapture %} {% capture with_block %}
<p class="title">With block</p>
<div class="block">
  <div class="field is-grouped">
    <div class="control is-expanded">
      <input class="input" type="text" placeholder="Text input" />
    </div>
    <div class="control">
      <button class="button is-primary">Button</button>
    </div>
  </div>
</div>
<nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" disabled
    >Previous</a
  >
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 1"
        aria-current="page"
        >1</a
      >
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 2">2</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 3">3</a>
    </li>
  </ul>
</nav>
<progress class="progress is-success" value="30" max="100">30%</progress>
<div class="notification is-warning">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
  dolor.
</div>
<article class="message is-danger">
  <div class="message-header">
    <p>Error</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
    diam, et dictum <a>felis venenatis</a> efficitur.
  </div>
</article>
{% endcapture %}

<!--  -->

<div class="content">
  <p>
    The <code>block</code> element is a simple <strong>spacer tool</strong>. It
    allows <strong>sibling</strong> HTML elements to have a consistent margin
    between them:
  </p>
</div>

{% include docs/elements/snippet.html content=block_example %}

<div class="content">
  <p>
    As you can see, the first two blocks have a
    <code>margin-bottom</code> applied, but <strong>not the third .</strong>.
    That is because Bulma applies a space on all blocks,
    <strong>except the last one</strong>. This means you can use as many blocks
    as you want, the spacing will only appear <strong>between them</strong>.
  </p>
  <p>
    Without using <code>block</code>, the HTML elements would have no space
    between them:
  </p>
</div>

{% include docs/elements/snippet.html content=no_block_example %}

<!--  -->

{% include docs/elements/anchor.html name="You're already using it" %}

<div class="content">
  <p>
    As a matter of fact, you're <strong>already using</strong> the
    <code>block</code> without knowing it. Its CSS properties are
    <strong>shared</strong> across several Bulma elements and components:
  </p>

  <ul>
    <li><code>breadcrumb</code></li>
    <li><code>level</code></li>
    <li><code>message</code></li>
    <li><code>pagination</code></li>
    <li><code>tabs</code></li>
    <li><code>box</code></li>
    <li><code>content</code></li>
    <li><code>notification</code></li>
    <li><code>other</code></li>
    <li><code>progress</code></li>
    <li><code>table</code></li>
    <li><code>title</code></li>
  </ul>

  <p>
    This is thanks to the <code>@extend %block</code> Sass placeholder feature.
  </p>

  <p>Here's how it would look like in comparison:</p>
</div>

<div class="columns is-size-6">
  <div class="column">{{ no_block }}</div>
  <div class="column">{{ with_block }}</div>
</div>

<div class="content">
  <p>
    No matter which Bulma elements and components you are using, and no matter
    their order, they will have a
    <strong>consistent space</strong> between them.
  </p>
</div>

<!--  -->

{% include docs/elements/anchor.html name="One line of CSS" %}

<div class="content">
  <p>
    As you can see, the CSS of the <code>block</code> is very simple: it applies
    a <code>margin-bottom</code> on all siblings,
    <strong>except the last one</strong>.
  </p>
</div>

{% highlight css %} {{ block_css }} {% endhighlight %}

<div class="content">
  <p>
    This prevents the last sibling from adding unnecessary space at the bottom.
  </p>
</div>
```

## File: docs/documentation/elements/box.html

```html
---
title: Box
layout: docs
theme: library
doc-tab: elements
doc-subtab: box
breadcrumb:
  - home
  - documentation
  - elements
  - elements-box
meta:
  colors: false
  sizes: false
  variables: true
---

{% capture box_example %}
<div class="box">I'm in a box.</div>
{% endcapture %} {% capture box_form_example %}
<form class="box">
  <div class="field">
    <label class="label">Email</label>
    <div class="control">
      <input class="input" type="email" placeholder="e.g. alex@example.com" />
    </div>
  </div>

  <div class="field">
    <label class="label">Password</label>
    <div class="control">
      <input class="input" type="password" placeholder="********" />
    </div>
  </div>

  <button class="button is-primary">Sign in</button>
</form>
{% endcapture %} {% capture box_card_example %}
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img
          src="{{site.url}}/assets/images/placeholders/128x128.png"
          alt="Image"
        />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small>
          <small>31m</small>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
          turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <code>box</code> element is a simple container with a white background,
    some padding, and a box shadow.
  </p>
</div>

{% include docs/elements/snippet.html content=box_example %}

<div class="content">
  <p>
    Because it acts as a container, you can easily include other components,
    like <strong>form elements</strong>:
  </p>
</div>

{% include docs/elements/snippet.html content=box_form_example more=true %}

<div class="content">
  <p>Or a <code>media</code> object:</p>
</div>

{% include docs/elements/snippet.html content=box_card_example more=true %}
```

## File: docs/documentation/elements/button.html

```html
---
title: Button
layout: docs
theme: library
doc-tab: elements
doc-subtab: button
breadcrumb:
  - home
  - documentation
  - elements
  - elements-button
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture button_example %}
<button class="button">Button</button>
{% endcapture %} {% capture button_tags_example %}
<a class="button">Anchor</a>
<button class="button">Button</button>
<input class="button" type="submit" value="Submit input" />
<input class="button" type="reset" value="Reset input" />
{% endcapture %} {% capture button_colors_a_example %}
<button class="button is-white">White</button>
<button class="button is-light">Light</button>
<button class="button is-dark">Dark</button>
<button class="button is-black">Black</button>
<button class="button is-text">Text</button>
<button class="button is-ghost">Ghost</button>
{% endcapture %} {% capture button_colors_b_example %}
<div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
</div>

<div class="buttons">
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>
{% endcapture %} {% capture button_light_colors_b_example %}
<div class="buttons">
  <button class="button is-primary is-light">Primary</button>
  <button class="button is-link is-light">Link</button>
</div>

<div class="buttons">
  <button class="button is-info is-light">Info</button>
  <button class="button is-success is-light">Success</button>
  <button class="button is-warning is-light">Warning</button>
  <button class="button is-danger is-light">Danger</button>
</div>
{% endcapture %} {% capture button_dark_colors_b_example %}
<div class="buttons">
  <button class="button is-primary is-dark">Primary</button>
  <button class="button is-link is-dark">Link</button>
</div>

<div class="buttons">
  <button class="button is-info is-dark">Info</button>
  <button class="button is-success is-dark">Success</button>
  <button class="button is-warning is-dark">Warning</button>
  <button class="button is-danger is-dark">Danger</button>
</div>
{% endcapture %} {% capture button_sizes_example %}
<button class="button is-small">Small</button>
<button class="button">Default</button>
<button class="button is-normal">Normal</button>
<button class="button is-medium">Medium</button>
<button class="button is-large">Large</button>
{% endcapture %} {% capture buttons_medium_sizes_example %}
<div class="buttons are-medium">
  <button class="button">All</button>
  <button class="button">Medium</button>
  <button class="button">Size</button>
</div>
{% endcapture %} {% capture buttons_small_normal_sizes_example %}
<div class="buttons are-small">
  <button class="button">Small</button>
  <button class="button">Small</button>
  <button class="button">Small</button>
  <button class="button is-normal">Normal</button>
  <button class="button">Small</button>
</div>
{% endcapture %} {% capture button_displays_example %}
<button class="button is-small is-fullwidth">Small</button>
<button class="button is-fullwidth">Normal</button>
<button class="button is-medium is-fullwidth">Medium</button>
<button class="button is-large is-fullwidth">Large</button>
{% endcapture %} {% capture button_outlined_example %}
<button class="button is-link is-outlined">Outlined</button>
<button class="button is-primary is-outlined">Outlined</button>
<button class="button is-info is-outlined">Outlined</button>
<button class="button is-success is-outlined">Outlined</button>
<button class="button is-danger is-outlined">Outlined</button>
{% endcapture %} {% capture button_inverted_example %}
<button class="button is-link is-inverted">Inverted</button>
<button class="button is-primary is-inverted">Inverted</button>
<button class="button is-info is-inverted">Inverted</button>
<button class="button is-success is-inverted">Inverted</button>
<button class="button is-danger is-inverted">Inverted</button>
{% endcapture %} {% capture button_rounded_example %}
<button class="button is-rounded">Rounded</button>
<button class="button is-link is-rounded">Rounded</button>
<button class="button is-primary is-rounded">Rounded</button>
<button class="button is-info is-rounded">Rounded</button>
<button class="button is-success is-rounded">Rounded</button>
<button class="button is-danger is-rounded">Rounded</button>
{% endcapture %} {% capture button_normal_example %}
<button class="button">Normal</button>
<button class="button is-link">Normal</button>
<button class="button is-primary">Normal</button>
<button class="button is-info">Normal</button>
<button class="button is-success">Normal</button>
<button class="button is-warning">Normal</button>
<button class="button is-danger">Normal</button>
{% endcapture %} {% capture button_hover_example %}
<button class="button is-hovered">Hover</button>
<button class="button is-link is-hovered">Hover</button>
<button class="button is-primary is-hovered">Hover</button>
<button class="button is-info is-hovered">Hover</button>
<button class="button is-success is-hovered">Hover</button>
<button class="button is-warning is-hovered">Hover</button>
<button class="button is-danger is-hovered">Hover</button>
{% endcapture %} {% capture button_focus_example %}
<button class="button is-focused">Focus</button>
<button class="button is-link is-focused">Focus</button>
<button class="button is-primary is-focused">Focus</button>
<button class="button is-info is-focused">Focus</button>
<button class="button is-success is-focused">Focus</button>
<button class="button is-warning is-focused">Focus</button>
<button class="button is-danger is-focused">Focus</button>
{% endcapture %} {% capture button_active_example %}
<button class="button is-active">Active</button>
<button class="button is-link is-active">Active</button>
<button class="button is-primary is-active">Active</button>
<button class="button is-info is-active">Active</button>
<button class="button is-success is-active">Active</button>
<button class="button is-warning is-active">Active</button>
<button class="button is-danger is-active">Active</button>
{% endcapture %} {% capture button_loading_example %}
<button class="button is-loading">Loading</button>
<button class="button is-link is-loading">Loading</button>
<button class="button is-primary is-loading">Loading</button>
<button class="button is-info is-loading">Loading</button>
<button class="button is-success is-loading">Loading</button>
<button class="button is-warning is-loading">Loading</button>
<button class="button is-danger is-loading">Loading</button>
{% endcapture %} {% capture button_static_example %}
<span class="button is-static">Static</span>
{% endcapture %} {% capture button_disabled_example %}
<button class="button" title="Disabled button" disabled>Disabled</button>
<button class="button is-link" title="Disabled button" disabled>
  Disabled
</button>
<button class="button is-primary" title="Disabled button" disabled>
  Disabled
</button>
<button class="button is-info" title="Disabled button" disabled>
  Disabled
</button>
<button class="button is-success" title="Disabled button" disabled>
  Disabled
</button>
<button class="button is-warning" title="Disabled button" disabled>
  Disabled
</button>
<button class="button is-danger" title="Disabled button" disabled>
  Disabled
</button>
{% endcapture %} {% capture button_fa_example %}
<p class="buttons">
  <button class="button">
    <span class="icon is-small">
      <i class="fas fa-bold"></i>
    </span>
  </button>
  <button class="button">
    <span class="icon is-small">
      <i class="fas fa-italic"></i>
    </span>
  </button>
  <button class="button">
    <span class="icon is-small">
      <i class="fas fa-underline"></i>
    </span>
  </button>
</p>
<p class="buttons">
  <button class="button">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
  <button class="button is-primary">
    <span class="icon">
      <i class="fab fa-twitter"></i>
    </span>
    <span>@jgthms</span>
  </button>
  <button class="button is-success">
    <span class="icon is-small">
      <i class="fas fa-check"></i>
    </span>
    <span>Save</span>
  </button>
  <button class="button is-danger is-outlined">
    <span>Delete</span>
    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
  </button>
</p>
<p class="buttons">
  <button class="button is-small">
    <span class="icon is-small">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
  <button class="button">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
  <button class="button is-medium">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
  <button class="button is-large">
    <span class="icon is-medium">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
</p>
{% endcapture %} {% capture button_only_icon_example %}
<p class="buttons">
  <button class="button is-small">
    <span class="icon is-small">
      <i class="fas fa-heading"></i>
    </span>
  </button>
</p>
<p class="buttons">
  <button class="button">
    <span class="icon is-small">
      <i class="fas fa-heading"></i>
    </span>
  </button>
  <button class="button">
    <span class="icon">
      <i class="fas fa-heading fa-lg"></i>
    </span>
  </button>
</p>
<p class="buttons">
  <button class="button is-medium">
    <span class="icon is-small">
      <i class="fas fa-heading"></i>
    </span>
  </button>
  <button class="button is-medium">
    <span class="icon">
      <i class="fas fa-heading fa-lg"></i>
    </span>
  </button>
  <button class="button is-medium">
    <span class="icon is-medium">
      <i class="fas fa-heading fa-2x"></i>
    </span>
  </button>
</p>
<p class="buttons">
  <button class="button is-large">
    <span class="icon is-small">
      <i class="fas fa-heading"></i>
    </span>
  </button>
  <button class="button is-large">
    <span class="icon">
      <i class="fas fa-heading fa-lg"></i>
    </span>
  </button>
  <button class="button is-large">
    <span class="icon is-medium">
      <i class="fas fa-heading fa-2x"></i>
    </span>
  </button>
</p>
{% endcapture %} {% capture button_group_example %}
<div class="field is-grouped">
  <p class="control">
    <button class="button is-link">Save changes</button>
  </p>
  <p class="control">
    <button class="button">Cancel</button>
  </p>
  <p class="control">
    <button class="button is-danger">Delete post</button>
  </p>
</div>
{% endcapture %} {% capture button_addons_example %}
<div class="field has-addons">
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-left"></i>
      </span>
      <span>Left</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-center"></i>
      </span>
      <span>Center</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-right"></i>
      </span>
      <span>Right</span>
    </button>
  </p>
</div>
{% endcapture %} {% capture button_group_addons_example %}
<div class="field has-addons">
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-bold"></i>
      </span>
      <span>Bold</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-italic"></i>
      </span>
      <span>Italic</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-underline"></i>
      </span>
      <span>Underline</span>
    </button>
  </p>
</div>

<div class="field has-addons">
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-left"></i>
      </span>
      <span>Left</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-center"></i>
      </span>
      <span>Center</span>
    </button>
  </p>
  <p class="control">
    <button class="button">
      <span class="icon is-small">
        <i class="fas fa-align-right"></i>
      </span>
      <span>Right</span>
    </button>
  </p>
</div>
{% endcapture %} {% capture buttons_list %}
<div class="buttons">
  <button class="button is-success">Save changes</button>
  <button class="button is-info">Save and continue</button>
  <button class="button is-danger">Cancel</button>
</div>
{% endcapture %} {% capture buttons_multiple %}
<div class="buttons">
  <button class="button">One</button>
  <button class="button">Two</button>
  <button class="button">Three</button>
  <button class="button">Four</button>
  <button class="button">Five</button>
  <button class="button">Six</button>
  <button class="button">Seven</button>
  <button class="button">Eight</button>
  <button class="button">Nine</button>
  <button class="button">Ten</button>
  <button class="button">Eleven</button>
  <button class="button">Twelve</button>
  <button class="button">Thirteen</button>
  <button class="button">Fourteen</button>
  <button class="button">Fifteen</button>
  <button class="button">Sixteen</button>
  <button class="button">Seventeen</button>
  <button class="button">Eighteen</button>
  <button class="button">Nineteen</button>
  <button class="button">Twenty</button>
</div>
{% endcapture %} {% capture buttons_addons %}
<div class="buttons has-addons">
  <button class="button">Yes</button>
  <button class="button">Maybe</button>
  <button class="button">No</button>
</div>
{% endcapture %} {% capture buttons_addons_centered %}
<div class="buttons has-addons is-centered">
  <button class="button">Yes</button>
  <button class="button">Maybe</button>
  <button class="button">No</button>
</div>
{% endcapture %} {% capture buttons_addons_right %}
<div class="buttons has-addons is-right">
  <button class="button">Yes</button>
  <button class="button">Maybe</button>
  <button class="button">No</button>
</div>
{% endcapture %} {% capture buttons_addons_selected %}
<div class="buttons has-addons">
  <button class="button is-success is-selected">Yes</button>
  <button class="button">Maybe</button>
  <button class="button">No</button>
</div>

<div class="buttons has-addons">
  <button class="button">Yes</button>
  <button class="button is-info is-selected">Maybe</button>
  <button class="button">No</button>
</div>

<div class="buttons has-addons">
  <button class="button">Yes</button>
  <button class="button">Maybe</button>
  <button class="button is-danger is-selected">No</button>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <strong>button</strong> is an essential element of any design. It's
    meant to look and behave as an <strong>interactive</strong> element of your
    page.
  </p>
</div>

{% include docs/elements/snippet.html wrapper="buttons" content=button_example
%}

<div class="content">
  <p>The <code>button</code> class can be used on:</p>
  <ul>
    <li><code>&lt;a&gt;</code> anchor links</li>
    <li><code>&lt;button&gt;</code> form buttons</li>
    <li><code>&lt;input type="submit"&gt;</code> submit inputs</li>
    <li><code>&lt;input type="reset"&gt;</code> reset inputs</li>
  </ul>
</div>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_tags_example %} {% include docs/elements/anchor.html
name="Colors" %}

<div class="content">
  <p>
    The button is available in all the <strong>different colors</strong> defined
    by the
    <a href="{{ site.data.links.by_id.customize-variables.path }}"
      ><code>$colors</code> Sass map</a
    >.
  </p>
</div>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_colors_a_example %} {% include docs/elements/snippet.html
content=button_colors_b_example %}

<div class="content">
  <p>
    Each color also comes in its <strong>light version</strong>. Simply append
    the modifier <code>is-light</code> to the color modifier to apply the light
    version of the button.
  </p>
</div>

{% include docs/elements/snippet.html content=button_light_colors_b_example %}

<div class="content">
  <p>
    A <strong>dark version</strong> also exists. Simply append the modifier
    <code>is-dark</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=button_dark_colors_b_example %} {%
include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>The button comes in <strong>4 different sizes:</strong></p>
  <ul>
    <li>small</li>
    <li>normal</li>
    <li>medium</li>
    <li>large</li>
  </ul>
  <p>
    While the default size is the <strong>normal</strong> one, the
    <code>is-normal</code> modifier exists in case you need to reset the button
    to its normal size.
  </p>
</div>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_sizes_example %}

<div class="content">
  <p>
    You can change the size of <strong>multiple buttons</strong> at once by
    wrapping them in a <code>buttons</code> parent, and applying one of 3
    modifiers:
  </p>
  <ul>
    <li>
      <code>buttons are-small</code>
    </li>
    <li>
      <code>buttons are-medium</code>
    </li>
    <li>
      <code>buttons are-large</code>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=buttons_medium_sizes_example %}

<div class="content">
  <p>
    You can change the size of only a <strong>subset of buttons</strong> by
    simply applying a modifier class to them.
    <br />
    For example, if you want all buttons to be <strong>small</strong> but still
    have one in its <strong>normal</strong> size, simply do the following:
  </p>
</div>

{% include docs/elements/snippet.html content=buttons_small_normal_sizes_example
%} {% include docs/elements/anchor.html name="Responsive sizes" %}

<div class="content">
  <p>
    If you want different button sizes for each breakpoint, you can use Bulma's
    <strong>responsive</strong> buttons. Simply append the
    <code>is-responsive</code> modifier:
  </p>
</div>

{% include docs/snippets/responsive-buttons.html %}

<div class="content">
  <p>
    You can customise the sizes by overwriting the
    <code>$button-responsive-sizes</code> Sass variable.
  </p>
</div>

{% include docs/elements/anchor.html name="Displays" %} {% include
docs/elements/snippet.html wrapper="buttons" content=button_displays_example %}
{% include docs/elements/anchor.html name="Styles" %}

<h4 class="subtitle">Outlined</h4>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_outlined_example %}

<h4 class="subtitle">
  Inverted (the text color becomes the background color, and vice-versa)
</h4>

<div class="columns">
  <div class="column">
    <div class="bd-callout is-primary">
      <div class="buttons">{{ button_inverted_example }}</div>
    </div>
  </div>
  <div class="column">
    {% highlight html -%} {{- button_inverted_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Rounded buttons</h4>

<div class="columns">
  <div class="column">
    <div class="buttons">{{ button_rounded_example }}</div>
  </div>
  <div class="column">
    {% highlight html -%} {{- button_rounded_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="States" %}

<div class="content">
  <p>
    Bulma styles the different <strong>states</strong> of its buttons. Each
    state is available as a pseudo-class and a CSS class:
  </p>
  <ul>
    <li><code>:hover</code> and <code>is-hovered</code></li>
    <li><code>:focus</code> and <code>is-focused</code></li>
    <li><code>:active</code> and <code>is-active</code></li>
  </ul>
  <p>
    This allows you to obtain the style of a certain state without having to
    trigger it.
  </p>
</div>

<h4 class="subtitle">Normal</h4>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_normal_example %}

<h4 class="subtitle">Hover</h4>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_hover_example %}

<h4 class="subtitle">Focus</h4>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_focus_example %}

<h4 class="subtitle">Active</h4>

{% include docs/elements/snippet.html wrapper="buttons"
content=button_active_example %}

<h4 class="subtitle">Loading</h4>

<div class="content">
  <p>
    You can very easily turn a button into its <strong>loading</strong> version
    by appending the <code>is-loading</code> modifier. You don't even need to
    remove the inner text, which allows the button to maintain its
    <strong>original size</strong> between its default and loading states.
  </p>
</div>

<div class="columns">
  <div class="column">
    <div class="buttons">{{ button_loading_example }}</div>
    <div class="message is-info">
      <div class="message-body">
        <p>
          Since the loading spinner is implemented using the
          <code>::after</code> pseudo-element, it is not supported by the
          <code>&lt;input&nbsp;type="submit"&gt;</code> element. Consider using
          <code>&lt;button&nbsp;type="submit"&gt;</code> instead.
        </p>
      </div>
    </div>
  </div>
  <div class="column">
    {% highlight html -%} {{- button_loading_example -}} {%- endhighlight %}
  </div>
</div>

<h4 id="static-button" class="subtitle">Static</h4>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can create a <strong>non-interactive button</strong> by using the
        <code>is-static</code> modifier. This is useful to align a text label
        with an input, for example when using
        <a href="{{site.url}}/documentation/form/general#form-addons"
          >form addons</a
        >.
      </p>
    </div>
    {{ button_static_example }}
  </div>
  <div class="column">
    {% highlight html -%} {{- button_static_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Disabled</h4>

<div class="content">
  <p>
    Bulma supports the use of the <code>disabled</code>
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"
      target="_blank"
      >Boolean HTML attribute</a
    >, which prevents the user from interacting with the button.
  </p>
</div>

<div class="columns">
  <div class="column">
    <div class="buttons">{{ button_disabled_example }}</div>
    <div class="message is-danger">
      <div class="message-body">
        <p>
          The <code>is-disabled</code> CSS class has been deprecated in favor of
          the <code>disabled</code> HTML attribute.
          <a href="https://github.com/jgthms/bulma/issues/276">Learn more</a>
        </p>
      </div>
    </div>
  </div>
  <div class="column">
    {% highlight html -%} {{- button_disabled_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">With Font Awesome icons</h4>

<div class="content">
  <p>
    Bulma buttons can easily be enhanced by adding a
    <strong>Font Awesome icon</strong>. For the best results, wrap the inner
    text in a separate <code>&lt;span&gt;</code> element.
  </p>
</div>

{% include docs/elements/snippet.html content=button_fa_example clipped=true %}

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        If the button only contains an icon, Bulma will make sure the button
        remains <strong>square</strong>, no matter the size of the button
        <em>or</em> of the icon.
      </p>
    </div>
    {{ button_only_icon_example }}
  </div>
  <div class="column">
    {% highlight html -%} {{- button_only_icon_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Button group" %}

<div class="content">
  <p>
    If you want to <strong>group</strong> buttons together on a
    <strong>single line</strong>, use the <code>is-grouped</code> modifier on
    the <code>field</code> container:
  </p>
</div>

{% include docs/elements/snippet.html content=button_group_example %} {% include
docs/elements/anchor.html name="Button addons" %}

<div class="content">
  <p>
    If you want to use buttons as <strong>addons</strong>, use the
    <code>has-addons</code> modifier on the <code>field</code> container:
  </p>
</div>

{% include docs/elements/snippet.html content=button_addons_example %} {%
include docs/elements/anchor.html name="Button group with addons" %}

<div class="content">
  <p>You can group together addons as well:</p>
</div>

{% include docs/elements/snippet.html content=button_group_addons_example %} {%
include docs/elements/anchor.html name="List of buttons" %}

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can create a <strong>list of buttons</strong> by using the
        <code>buttons</code> container.
      </p>
    </div>
    <div class="bd-example">{{ buttons_list }}</div>
  </div>
  <div class="column">
    {% highlight html -%} {{- buttons_list -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        If the list is <strong>very long</strong>, it will automatically wrap on
        <strong>multiple lines</strong>, while keeping all buttons
        <strong>evenly spaced</strong>.
      </p>
    </div>
    <div class="bd-example">{{ buttons_multiple }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- buttons_multiple -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can <strong>attach buttons together</strong> with the
        <code>has-addons</code> modifier.
      </p>
    </div>
    <div class="bd-example">{{ buttons_addons }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- buttons_addons -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        Use the <code>is-centered</code> or the <code>is-right</code> modifiers
        to alter the <strong>alignment</strong>.
      </p>
    </div>
    <div class="bd-example">
      {{ buttons_addons_centered }} {{ buttons_addons_right }}
    </div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- buttons_addons_centered -}} {{-
    buttons_addons_right -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can use any <strong>modifier</strong> class on each button to
        differentiate them. Make sure to add the
        <code>is-selected</code> modifier as well to make sure the selected
        button is <em>above</em> its siblings.
      </p>
    </div>
    <div class="bd-example">{{ buttons_addons_selected }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- buttons_addons_selected -}} {%- endhighlight %}
  </div>
</div>

<div class="message is-info">
  <div class="message-header">
    <p>
      Difference between
      <a href="{{ site.url }}/documentation/form/general/#form-group"
        >form groups</a
      >
      and <strong>list of buttons</strong>
    </p>
  </div>
  <div class="message-body">
    <div class="content">
      <p>
        While this list of buttons style can be achieved with either
        <code>field is-grouped</code> or the new <code>buttons</code> class,
        there are a few differences:
      </p>
      <ul>
        <li><code>buttons</code> has a <strong>simpler markup</strong></li>
        <li>
          <code>buttons</code> can only contain <code>button</code> elements
        </li>
        <li>
          <code>field is-grouped</code> can contain <em>any</em> type of
          <code>control</code> inputs
        </li>
        <li>
          <code>field is-grouped</code> can be forced to fit all controls on a
          <strong>single line</strong>
        </li>
        <li>
          with <code>field is-grouped</code> you can <strong>expand</strong> one
          of the controls
        </li>
      </ul>
      <p>
        Basically, if you only want a list of <em>buttons</em>, using
        <code>buttons</code> is recommended. If you need more control on the
        styling and the elements, use a
        <a href="{{ site.url }}/documentation/form/general/#form-group"
          >form group</a
        >.
      </p>
    </div>
  </div>
</div>
```

## File: docs/documentation/elements/content.html

```html
---
title: Content
layout: docs
theme: library
doc-tab: elements
doc-subtab: content
breadcrumb:
  - home
  - documentation
  - elements
  - elements-content
meta:
  colors: false
  sizes: true
  variables: true
---

{% capture content_pre %} &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;
&lt;title&gt;Hello World&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae
mollis.&lt;/p&gt; &lt;/body&gt; &lt;/html&gt; {% endcapture %} {% capture
content_example %}
<div class="content">
  <h1>Hello World</h1>
  <p>
    Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing
    elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
    odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub>
    works as well!
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
  <h3>Third level</h3>
  <p>
    Quisque ante lacus, malesuada ac auctor vitae, congue
    <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec,
    fringilla condimentum orci. Fusce eu rutrum tellus.
  </p>
  <ol>
    <li>Donec blandit a lorem id convallis.</li>
    <li>Cras gravida arcu at diam gravida gravida.</li>
    <li>Integer in volutpat libero.</li>
    <li>Donec a diam tellus.</li>
    <li>Aenean nec tortor orci.</li>
    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
    <li>Vivamus maximus ultricies pulvinar.</li>
  </ol>
  <blockquote>
    Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit
    ipsum, ut blandit est tellus sit amet turpis.
  </blockquote>
  <p>
    Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
    <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque
    consectetur, et lobortis nisi molestie.
  </p>
  <p>
    Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis
    vulputate risus in luctus. Maecenas vestibulum interdum commodo.
  </p>
  <dl>
    <dt>Web</dt>
    <dd>The part of the Internet that contains websites and web pages</dd>
    <dt>HTML</dt>
    <dd>A markup language for creating web pages</dd>
    <dt>CSS</dt>
    <dd>A technology to make HTML look better</dd>
  </dl>
  <p>
    Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl,
    suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac
    erat ante.
  </p>
  <h4>Fourth level</h4>
  <p>
    Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris
    euismod metus a tellus laoreet, at elementum ex efficitur.
  </p>
  <pre>{{ content_pre }}</pre>
  <p>
    Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non.
    Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta
    condimentum in eu justo. Nulla id iaculis sapien.
  </p>
  <table>
    <thead>
      <tr>
        <th>One</th>
        <th>Two</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Three</td>
        <td>Four</td>
      </tr>
      <tr>
        <td>Five</td>
        <td>Six</td>
      </tr>
      <tr>
        <td>Seven</td>
        <td>Eight</td>
      </tr>
      <tr>
        <td>Nine</td>
        <td>Ten</td>
      </tr>
      <tr>
        <td>Eleven</td>
        <td>Twelve</td>
      </tr>
    </tbody>
  </table>
  <p>
    Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit
    sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum
    rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam
    tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo
    est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae
    ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar.
    Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor
    cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
  </p>
  <h5>Fifth level</h5>
  <p>
    Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt
    ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit
    volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue
    laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.
  </p>
  <figure>
    <img src="{{site.url}}/assets/images/placeholders/256x256.png" />
    <img src="{{site.url}}/assets/images/placeholders/256x256.png" />
    <figcaption>Figure 1: Some beautiful placeholders</figcaption>
  </figure>
  <h6>Sixth level</h6>
  <p>
    Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus
    sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut
    sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada
    ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse
    euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius
    sapien odio vitae est. Etiam at cursus metus.
  </p>
</div>
{% endcapture %} {% capture content_ol_html_example %}
<div class="content">
  <ol type="1">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol type="A">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol type="a">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol type="I">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol type="i">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
</div>
{% endcapture %} {% capture content_ol_css_example %}
<div class="content">
  <ol class="is-lower-alpha">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol class="is-lower-roman">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol class="is-upper-alpha">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  <ol class="is-upper-roman">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
</div>
{% endcapture %}

<div class="content">
  <p>
    When you can't use the CSS classes you want, or when you just want to
    directly use HTML tags, use
    <code>content</code> as container. It can handle almost any HTML tag:
  </p>
  <ul>
    <li><code>&lt;p&gt;</code> paragraphs</li>
    <li>
      <code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code>
      <code>&lt;dl&gt;</code> lists
    </li>
    <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings</li>
    <li><code>&lt;blockquote&gt;</code> quotes</li>
    <li><code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code></li>
    <li>
      <code>&lt;table&gt;</code> <code>&lt;tr&gt;</code>
      <code>&lt;th&gt;</code> <code>&lt;td&gt;</code> tables
    </li>
  </ul>
  <p>
    This <code>content</code> class can be used in <em>any</em> context where
    you just want to (or can only) write some <strong>text</strong>. For
    example, it's used for the paragraph you're currently reading.
  </p>
</div>

{% include docs/elements/anchor.html name="Full example" %}

<div class="content">
  Here is an example of the <code>content</code> Bulma element with all the
  supported HTML tags:
</div>

{% include docs/elements/snippet.html content=content_example %} {% include
docs/elements/anchor.html name="Ordered lists alternatives" %}

<div class="content">
  <p>
    <strong>Ordered lists</strong> <code>&lt;ol&gt;</code> support different
    <strong>types</strong> of items markers. To modify them, use either:
  </p>
  <ul>
    <li>the corresponding HTML attribute value</li>
    <li>
      one of the following CSS modifier classes: <code>is-lower-alpha</code>,
      <code>is-lower-roman</code>, <code>is-upper-alpha</code> or
      <code>is-upper-roman</code>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=content_ol_html_example %} {%
include docs/elements/snippet.html content=content_ol_css_example %} {% include
docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    You can use the <code>is-small</code>, <code>is-medium</code> and
    <code>is-large</code> modifiers to change the font size.
  </p>
</div>

{% capture small_example %}
<div class="content is-small">
  <h1>Hello World</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
    erat vel, interdum mattis neque.
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
</div>
{% endcapture %} {% capture normal_example %}
<div class="content is-normal">
  <h1>Hello World</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
    erat vel, interdum mattis neque.
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
</div>
{% endcapture %} {% capture medium_example %}
<div class="content is-medium">
  <h1>Hello World</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
    erat vel, interdum mattis neque.
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
</div>
{% endcapture %} {% capture large_example %}
<div class="content is-large">
  <h1>Hello World</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
    metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
    nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
    erat vel, interdum mattis neque.
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
    Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
    pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
    rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
    <li>Ut non enim metus.</li>
  </ul>
</div>
{% endcapture %}

<div class="content">
  <h4>Small size <code>content</code></h4>
</div>

{% include docs/elements/snippet.html content=small_example %}

<div class="content">
  <h4>Normal size <code>content</code> <em>(default)</em></h4>
</div>

{% include docs/elements/snippet.html content=normal_example %}

<div class="content">
  <h4>Medium size <code>content</code></h4>
</div>

{% include docs/elements/snippet.html content=medium_example %}

<div class="content">
  <h4>Large size <code>content</code></h4>
</div>

{% include docs/elements/snippet.html content=large_example %}
```

## File: docs/documentation/elements/delete.html

```html
---
title: Delete
layout: docs
theme: library
doc-tab: elements
doc-subtab: delete
breadcrumb:
  - home
  - documentation
  - elements
  - elements-delete
meta:
  colors: false
  sizes: true
  variables: false
---

{% capture cross_example %}
<button class="delete"></button>
{% endcapture %} {% capture cross_sizes_example %}
<button class="delete is-small"></button>
<button class="delete"></button>
<button class="delete is-medium"></button>
<button class="delete is-large"></button>
{% endcapture %} {% capture cross_elements_example %}
<div class="block">
  <span class="tag is-success">
    Hello World
    <button class="delete is-small"></button>
  </span>
</div>

<div class="notification is-danger">
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit
  amet, consectetur adipiscing elit
</div>

<article class="message is-info">
  <div class="message-header">
    Info
    <button class="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus
    mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
    amet fringilla. Nullam gravida purus diam, et dictum felis venenatis
    efficitur. Aenean ac eleifend lacus, in mollis lectus. Donec sodales, arcu
    et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
    a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
{% endcapture %}

<div class="content">
  <p>
    The <code>delete</code> element is a stand-alone element that can be used in
    different contexts.
  </p>
  <p>On its own, it's a simple circle with a cross:</p>
</div>

{% include docs/elements/snippet.html content=cross_example %} {% include
docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>It comes in <strong>4 sizes</strong>:</p>
</div>

{% include docs/elements/snippet.html content=cross_sizes_example %} {% include
docs/elements/anchor.html name="Combinations" %}

<div class="content">
  <p>
    Bulma uses it for the
    <a href="{{ site.url }}/documentation/elements/tag/">tags</a>, the
    <a href="{{ site.url }}/documentation/elements/notification/"
      >notifications</a
    >, and the
    <a href="{{ site.url }}/documentation/components/message/">messages</a>:
  </p>
</div>

{% include docs/elements/snippet.html content=cross_elements_example %} {%
include docs/components/variables.html %}
```

## File: docs/documentation/elements/form.html

```html
---
title: Form
layout: docs
theme: library
doc-tab: elements
doc-subtab: form
---

<meta
  http-equiv="refresh"
  content="0; url={{ site.url }}/documentation/form/general/"
/>
```

## File: docs/documentation/elements/icon.html

```html
---
title: Icon
subtitle: 'Bulma is compatible with <strong>all icon font libraries</strong>: <a href="https://fontawesome.com/">Font Awesome 5</a>, <a href="http://fontawesome.io/">Font Awesome 4</a>, <a href="https://materialdesignicons.com">Material Design Icons</a>, <a href="http://ionicons.com/">Ionicons</a>, etc.'
fontawesome4: true
ionicons: true
mdi: true
layout: docs
theme: library
doc-tab: elements
doc-subtab: icon
breadcrumb:
  - home
  - documentation
  - elements
  - elements-icon
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture icon_example %}
<span class="icon">
  <i class="fas fa-home"></i>
</span>
{% endcapture %} {% capture icon_text_example %}
<span class="icon-text">
  <span class="icon">
    <i class="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
{% endcapture %} {% capture icon_text_train_example %}
<span class="icon-text">
  <span class="icon">
    <i class="fas fa-train"></i>
  </span>
  <span>Paris</span>
  <span class="icon">
    <i class="fas fa-arrow-right"></i>
  </span>
  <span>Budapest</span>
  <span class="icon">
    <i class="fas fa-arrow-right"></i>
  </span>
  <span>Bucharest</span>
  <span class="icon">
    <i class="fas fa-arrow-right"></i>
  </span>
  <span>Istanbul</span>
  <span class="icon">
    <i class="fas fa-flag-checkered"></i>
  </span>
</span>
{% endcapture %} {% capture icon_text_in_content_example %}
<div class="content">
  <p>
    An invitation to
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-utensils"></i>
      </span>
      <span>dinner</span>
    </span>
    was soon afterwards dispatched; and already had Mrs. Bennet planned the
    courses that were to do credit to her housekeeping, when an answer arrived
    which deferred it all. Mr. Bingley was obliged to be in
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-city"></i>
      </span>
      <span>town</span>
    </span>
    the following day, and, consequently, unable to accept the honour of their
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-envelope-open-text"></i>
      </span>
      <span>invitation</span> </span
    >, etc.
  </p>

  <p>
    Mrs. Bennet was quite disconcerted. She could not imagine what business he
    could have in town so soon after his
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-flag-checkered"></i>
      </span>
      <span>arrival</span>
    </span>
    in Hertfordshire; and she began to fear that he might be always
    <span class="icon-text">
      <span class="icon">
        <i class="fas fa-plane-departure"></i>
      </span>
      <span>flying</span>
    </span>
    about from one place to another, and never settled at Netherfield as he
    ought to be.
  </p>
</div>
{% endcapture %} {% capture icon_text_div_example %}
<div class="icon-text">
  <span class="icon has-text-info">
    <i class="fas fa-info-circle"></i>
  </span>
  <span>Information</span>
</div>

<p class="block">
  Your package will be delivered on <strong>Tuesday at 08:00</strong>.
</p>

<div class="icon-text">
  <span class="icon has-text-success">
    <i class="fas fa-check-square"></i>
  </span>
  <span>Success</span>
</div>

<p class="block">Your image has been successfully uploaded.</p>

<div class="icon-text">
  <span class="icon has-text-warning">
    <i class="fas fa-exclamation-triangle"></i>
  </span>
  <span>Warning</span>
</div>

<p class="block">
  Some information is missing from your <a href="#">profile</a> details.
</p>

<div class="icon-text">
  <span class="icon has-text-danger">
    <i class="fas fa-ban"></i>
  </span>
  <span>Danger</span>
</div>

<p class="block">
  There was an error in your submission. <a href="#">Please try again</a>.
</p>

{% endcapture %} {% capture icon_color_example %}
<span class="icon has-text-info">
  <i class="fas fa-info-circle"></i>
</span>
<span class="icon has-text-success">
  <i class="fas fa-check-square"></i>
</span>
<span class="icon has-text-warning">
  <i class="fas fa-exclamation-triangle"></i>
</span>
<span class="icon has-text-danger">
  <i class="fas fa-ban"></i>
</span>
{% endcapture %} {% capture icon_text_color_example %}
<span class="icon-text has-text-info">
  <span class="icon">
    <i class="fas fa-info-circle"></i>
  </span>
  <span>Info</span>
</span>

<span class="icon-text has-text-success">
  <span class="icon">
    <i class="fas fa-check-square"></i>
  </span>
  <span>Success</span>
</span>

<span class="icon-text has-text-warning">
  <span class="icon">
    <i class="fas fa-exclamation-triangle"></i>
  </span>
  <span>Warning</span>
</span>

<span class="icon-text has-text-danger">
  <span class="icon">
    <i class="fas fa-ban"></i>
  </span>
  <span>Danger</span>
</span>
{% endcapture %} {% capture icon_sizes_example %}
<span class="icon">
  <i class="fas fa-camera-retro fa-lg"></i>
</span>
<span class="icon">
  <i class="fas fa-camera-retro fa-2x"></i>
</span>
<span class="icon">
  <i class="fas fa-camera-retro fa-3x"></i>
</span>
<span class="icon">
  <i class="fas fa-camera-retro fa-4x"></i>
</span>
<span class="icon">
  <i class="fas fa-camera-retro fa-5x"></i>
</span>
{% endcapture %} {% capture stacked_medium %}
<span class="icon is-medium">
  <span class="fa-stack fa-sm">
    <i class="fas fa-circle fa-stack-2x"></i>
    <i class="fas fa-flag fa-stack-1x fa-inverse"></i>
  </span>
</span>
{% endcapture %} {% capture stacked_large %}
<span class="icon is-large">
  <span class="fa-stack fa-lg">
    <i class="fas fa-camera fa-stack-1x"></i>
    <i class="fas fa-ban fa-stack-2x has-text-danger"></i>
  </span>
</span>
{% endcapture %}

<div class="content">
  <p>
    The <code>icon</code> element is a <strong>container</strong> for any type
    of <strong>icon font</strong>. Because the icons can take a few seconds to
    load, and because you want control over the <strong>space</strong> the icons
    will take, you can use the <code>icon</code> class as a reliable square
    container that will prevent the page to "jump" on page load.
  </p>
</div>

<div class="block bd-icon-size">
  {% include docs/elements/snippet.html content=icon_example %}
</div>

<div class="message is-info">
  <div class="message-body">
    The <strong>yellow background</strong> is only here for demonstration
    purposes, to highlight the icon container's area.
  </div>
</div>

<div class="content">
  <p>
    By default, the <code>icon</code> container will take up <em>exactly</em>
    <code>1.5rem x 1.5rem</code>. The icon itself is sized accordingly to the
    icon library you're using. For example, Font Awesome 5 icons will
    <strong>inherit</strong> the font size.
  </p>
</div>

<!--  -->
{% include docs/elements/anchor.html name="Icon text" %}

<div class="content">
  <p>
    You can combine an <code>icon</code> with <strong>text</strong>, using the
    <code>icon-text</code> wrapper, as long as all text <em>inside</em> is
    wrapped in its own <code>span</code> element:
  </p>
</div>

{% include docs/elements/snippet.html content=icon_text_example %}

<div class="content">
  <p>
    You can combine <strong>as many</strong> <code>icon</code> elements and text
    elements as you want:
  </p>
</div>

{% include docs/elements/snippet.html content=icon_text_train_example %}

<div class="content">
  <p>
    Since <code>icon-text</code> is an <code>inline-flex</code> element, it can
    easily be inserted within any paragraph of <strong>text</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=icon_text_in_content_example %}

<div class="content">
  <p>
    You can also turn the <code>icon-text</code> into a
    <code>flex</code> element simply by using a <code>&lt;div&gt;</code> tag
    instead:
  </p>
</div>

{% include docs/elements/snippet.html content=icon_text_div_example %}

<!--  -->
{% include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    Since icon fonts are simply <strong>text</strong>, you can use the
    <a href="{{ site.url }}/documentation/helpers/color-helpers/"
      >color helpers</a
    >
    to change the icon's color.
  </p>
</div>

{% include docs/elements/snippet.html content=icon_color_example %}

<div class="content">
  <p>The same applies to the <code>icon-text</code>:</p>
</div>

{% include docs/elements/snippet.html content=icon_text_color_example %}

<!--  -->
{% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    The Bulma <code>icon</code> container comes in <strong>4 sizes</strong>. It
    should always be <em>slightly bigger</em> than the icon it contains. For
    example, Font Awesome 5 icons use a font-size of <code>1em</code> by default
    (since it inherits the font size), but provides
    <a
      href="https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons"
      target="_blank"
      >additional sizes</a
    >.
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Container class</th>
      <th>Container size</th>
      <th>Font Awesome 5 class</th>
      <th>Icon size</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>icon is-small</code>
      </td>
      <td>
        <code>1rem x 1rem</code>
      </td>
      <td>
        <code>fas</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-small">
          <i class="fas fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        <code>icon</code>
      </td>
      <td rowspan="2">
        <code>1.5rem x 1.5rem</code>
      </td>
      <td>
        <code>fas</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>fas fa-lg</code>
      </td>
      <td>
        <code>1.33em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="fas fa-lg fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code>icon is-medium</code>
      </td>
      <td rowspan="3">
        <code>2rem x 2rem</code>
      </td>
      <td>
        <code>fas</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="fas fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>fas fa-lg</code>
      </td>
      <td>
        <code>1.33em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="fas fa-lg fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>fas fa-2x</code>
      </td>
      <td>
        <code>2em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="fas fa-2x fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="3">
        <code>icon is-large</code>
      </td>
      <td rowspan="4">
        <code>3rem x 3rem</code>
      </td>
      <td>
        <code>fas</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="fas fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>fas fa-lg</code>
      </td>
      <td>
        <code>1.33em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="fas fa-lg fa-home"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>fas fa-2x</code>
      </td>
      <td>
        <code>2em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="fas fa-2x fa-home"></i>
        </span>
      </td>
    </tr>
  </tbody>
</table>

<!--  -->
{% include docs/elements/anchor.html name="Font Awesome variations" %}

<div class="content">
  <p>Font Awesome also provides modifier classes for:</p>
  <ul>
    <li>fixed width icons</li>
    <li>bordered icons</li>
    <li>animated icons</li>
    <li>stacked icons</li>
  </ul>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Type</th>
      <th>Font Awesome class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fixed width</td>
      <td>
        <code>fas fa-fw</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="fas fa-home fa-fw"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Bordered</td>
      <td>
        <code>fas fa-border</code>
      </td>
      <td>
        <span class="icon">
          <i class="fas fa-home fa-border"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Animated</td>
      <td>
        <code>fas fa-spinner fa-pulse</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="2">Stacked</td>
      <td>{% highlight html -%} {{- stacked_medium -}} {%- endhighlight %}</td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <span class="fa-stack fa-sm">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fas fa-flag fa-stack-1x fa-inverse"></i>
          </span>
        </span>
      </td>
    </tr>
    <tr>
      <td>{% highlight html -%} {{- stacked_large -}} {%- endhighlight %}</td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <span class="fa-stack fa-lg">
            <i class="fas fa-camera fa-stack-1x"></i>
            <i class="fas fa-ban fa-stack-2x has-text-danger"></i>
          </span>
        </span>
      </td>
    </tr>
  </tbody>
</table>

<!--  -->
{% include docs/elements/anchor.html name="Material Design Icons" %}

<div class="content">
  <p>
    Here is how the <code>icon</code> container can be used with
    <a href="https://materialdesignicons.com">Material Design Icons</a>.
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Container class</th>
      <th>Container size</th>
      <th>MDI class</th>
      <th>Icon size</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>icon is-small</code>
      </td>
      <td>
        <code>1rem x 1rem</code>
      </td>
      <td>
        <code>mdi</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-small">
          <i class="mdi mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        <code>icon</code>
      </td>
      <td rowspan="2">
        <code>1.5rem x 1.5rem</code>
      </td>
      <td>
        <code>mdi mdi-18px</code>
      </td>
      <td>
        <code>18px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-18px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-24px</code>
      </td>
      <td>
        <code>24px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-24px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        <code>icon is-medium</code>
      </td>
      <td rowspan="4">
        <code>2rem x 2rem</code>
      </td>
      <td>
        <code>mdi</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="mdi mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-18px</code>
      </td>
      <td>
        <code>18px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="mdi mdi-18px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-24px</code>
      </td>
      <td>
        <code>24px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="mdi mdi-24px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-36px</code>
      </td>
      <td>
        <code>36px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <i class="mdi mdi-36px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <code>icon is-large</code>
      </td>
      <td rowspan="5">
        <code>3rem x 3rem</code>
      </td>
      <td>
        <code>mdi</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="mdi mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-18px</code>
      </td>
      <td>
        <code>18px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="mdi mdi-18px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-24px</code>
      </td>
      <td>
        <code>24px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="mdi mdi-24px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-36px</code>
      </td>
      <td>
        <code>36px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="mdi mdi-36px mdi-bell"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>mdi mdi-48px</code>
      </td>
      <td>
        <code>48px</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <i class="mdi mdi-48px mdi-bell"></i>
        </span>
      </td>
    </tr>
  </tbody>
</table>

<div class="content">
  <p>MDI also provides modifier classes for:</p>
  <ul>
    <li>light and dark icons</li>
    <li>rotated &amp; flipped icons</li>
  </ul>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Type</th>
      <th>Material Design Icon class</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Light color</td>
      <td>
        <code>mdi mdi-light</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-light"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Dark color</td>
      <td>
        <code>mdi mdi-dark</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-dark"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Light inactive color</td>
      <td>
        <code>mdi mdi-light mdi-inactive</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-light mdi-inactive"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Dark inactive color</td>
      <td>
        <code>mdi mdi-dark mdi-inactive</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-dark mdi-inactive"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Flipped</td>
      <td>
        <code>mdi mdi-flip-h</code>
        <br />
        <code>mdi mdi-flip-v</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-flip-h"></i>
        </span>
        <br />
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-flip-v"></i>
        </span>
      </td>
    </tr>
    <tr>
      <td>Rotated</td>
      <td>
        <code>mdi mdi-rotate-45</code>
        <br />
        <code>mdi mdi-rotate-90</code>
        <br />
        <code>mdi mdi-rotate-180</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-rotate-45"></i>
        </span>
        <br />
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-rotate-90"></i>
        </span>
        <br />
        <span class="icon">
          <i class="mdi mdi-signal-4g mdi-rotate-180"></i>
        </span>
      </td>
    </tr>
  </tbody>
</table>

<!--  -->
{% include docs/elements/anchor.html name="Ionicons" %}

<div class="content">
  <p>
    Here is how the <code>icon</code> container can be used with
    <a href="http://ionicons.com">Ionicons</a>.
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Container class</th>
      <th>Container size</th>
      <th>Ionicon class</th>
      <th>Icon size</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>icon is-small</code>
      </td>
      <td>
        <code>1rem x 1rem</code>
      </td>
      <td>
        <code>ion-ionic</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-small">
          <span class="ion-ionic"></span>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>icon</code>
      </td>
      <td>
        <code>1.5rem x 1.5rem</code>
      </td>
      <td>
        <code>ion-ionic</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon">
          <span class="ion-ionic"></span>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>icon is-medium</code>
      </td>
      <td>
        <code>2rem x 2rem</code>
      </td>
      <td>
        <code>ion-ionic</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-medium">
          <span class="ion-ionic"></span>
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <code>icon is-large</code>
      </td>
      <td>
        <code>3rem x 3rem</code>
      </td>
      <td>
        <code>ion-ionic</code>
      </td>
      <td>
        <code>1em</code>
      </td>
      <td class="bd-icon-size">
        <span class="icon is-large">
          <span class="ion-ionic"></span>
        </span>
      </td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/elements/image.html

```html
---
title: Image
layout: docs
theme: library
doc-tab: elements
doc-subtab: image
dimensions:
  - 16
  - 24
  - 32
  - 48
  - 64
  - 96
  - 128
breadcrumb:
  - home
  - documentation
  - elements
  - elements-image
meta:
  colors: false
  sizes: false
  variables: true
  hide_css_vars: true
---

{% capture image %}
<figure class="image is-128x128">
  <img src="{{site.url}}/assets/images/placeholders/128x128.png" />
</figure>
{% endcapture %} {% capture rounded_image %}
<figure class="image is-128x128">
  <img
    class="is-rounded"
    src="{{site.url}}/assets/images/placeholders/128x128.png"
  />
</figure>
{% endcapture %} {% capture retina_image %}
<figure class="image is-128x128">
  <img src="{{site.url}}/assets/images/placeholders/256x256.png" />
</figure>
{% endcapture %} {% capture iframe_ratio %}
<figure class="image is-16by9">
  <iframe
    class="has-ratio"
    width="640"
    height="360"
    src="https://www.youtube.com/embed/YE7VzlLtp-4"
    frameborder="0"
    allowfullscreen
  ></iframe>
</figure>
{% endcapture %}

<div class="content">
  <p>
    Because images can take a few seconds to load (or not at all), use the
    <code>image</code> container to specify a
    <strong>precisely sized</strong> container so that your layout isn't broken
    because of image loading or image errors.
  </p>
</div>

{% include docs/elements/snippet.html content=image %} {% include
docs/elements/anchor.html name="Fixed square images" %}

<div class="content">
  <p>
    There are <strong>7</strong> dimensions to choose from, useful for
    <strong>avatars</strong>:
  </p>
</div>

<table class="table is-bordered">
  <tbody>
    {% for dimension in page.dimensions %}
    <tr>
      <td>
        <code>image is-{{ dimension }}x{{ dimension }}</code>
      </td>
      <td>
        <figure class="image is-{{ dimension }}x{{ dimension }}">
          <img
            src="{{site.url}}/assets/images/placeholders/{{ dimension }}x{{ dimension }}.png"
          />
        </figure>
      </td>
      <td>{{ dimension }}x{{ dimension }}px</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% include docs/elements/anchor.html name="Rounded images" %}

<div class="content">
  <p>You can also make rounded images, using <code>is-rounded</code> class:</p>
</div>

{% include docs/elements/snippet.html content=rounded_image %} {% include
docs/elements/anchor.html name="Retina images" %}

<div class="content">
  <p>
    Because the image is fixed in size, you can use an image that is
    <strong>four times as big</strong>. So for example, in a
    <code>128x128</code> container, you can use a <code>256x256</code> image,
    but resized to <strong>128x128</strong> pixels.
  </p>
</div>

{% include docs/elements/snippet.html content=retina_image %} {% include
docs/elements/anchor.html name="Responsive images with ratios" %}

<div class="content">
  <p>
    If you don't know the exact dimensions but know the
    <strong>ratio</strong> instead, you can use one of the
    <strong>16 ratio modifiers</strong>, which include
    <a
      href="https://en.wikipedia.org/wiki/Aspect_ratio_%28image%29#Still_photography"
      >common aspect ratios in still photography</a
    >:
  </p>
</div>

<table id="images" class="table is-bordered">
  <tbody>
    <tr>
      <td><code>image is-square</code></td>
      <td style="width: 10rem">
        <figure class="image is-square">
          <img src="{{site.url}}/assets/images/placeholders/480x480.png" />
        </figure>
      </td>
      <td>Square (or 1 by 1)</td>
    </tr>
    <tr>
      <td><code>image is-1by1</code></td>
      <td style="width: 10rem">
        <figure class="image is-1by1">
          <img src="{{site.url}}/assets/images/placeholders/480x480.png" />
        </figure>
      </td>
      <td>1 by 1</td>
    </tr>
    <tr>
      <td><code>image is-5by4</code></td>
      <td style="width: 10rem">
        <figure class="image is-5by4">
          <img src="{{site.url}}/assets/images/placeholders/600x480.png" />
        </figure>
      </td>
      <td>5 by 4</td>
    </tr>
    <tr>
      <td><code>image is-4by3</code></td>
      <td style="width: 10rem">
        <figure class="image is-4by3">
          <img src="{{site.url}}/assets/images/placeholders/640x480.png" />
        </figure>
      </td>
      <td>4 by 3</td>
    </tr>
    <tr>
      <td><code>image is-3by2</code></td>
      <td style="width: 10rem">
        <figure class="image is-3by2">
          <img src="{{site.url}}/assets/images/placeholders/480x320.png" />
        </figure>
      </td>
      <td>3 by 2</td>
    </tr>
    <tr>
      <td><code>image is-5by3</code></td>
      <td style="width: 10rem">
        <figure class="image is-5by3">
          <img src="{{site.url}}/assets/images/placeholders/800x480.png" />
        </figure>
      </td>
      <td>5 by 3</td>
    </tr>
    <tr>
      <td><code>image is-16by9</code></td>
      <td style="width: 10rem">
        <figure class="image is-16by9">
          <img src="{{site.url}}/assets/images/placeholders/640x360.png" />
        </figure>
      </td>
      <td>16 by 9</td>
    </tr>
    <tr>
      <td><code>image is-2by1</code></td>
      <td style="width: 10rem">
        <figure class="image is-2by1">
          <img src="{{site.url}}/assets/images/placeholders/640x320.png" />
        </figure>
      </td>
      <td>2 by 1</td>
    </tr>
    <tr>
      <td><code>image is-3by1</code></td>
      <td style="width: 10rem">
        <figure class="image is-3by1">
          <img src="{{site.url}}/assets/images/placeholders/720x240.png" />
        </figure>
      </td>
      <td>3 by 1</td>
    </tr>
    <tr>
      <td><code>image is-4by5</code></td>
      <td style="width: 10rem">
        <figure class="image is-4by5">
          <img src="{{site.url}}/assets/images/placeholders/480x600.png" />
        </figure>
      </td>
      <td>4 by 5</td>
    </tr>
    <tr>
      <td><code>image is-3by4</code></td>
      <td style="width: 10rem">
        <figure class="image is-3by4">
          <img src="{{site.url}}/assets/images/placeholders/480x640.png" />
        </figure>
      </td>
      <td>3 by 4</td>
    </tr>
    <tr>
      <td><code>image is-2by3</code></td>
      <td style="width: 10rem">
        <figure class="image is-2by3">
          <img src="{{site.url}}/assets/images/placeholders/320x480.png" />
        </figure>
      </td>
      <td>2 by 3</td>
    </tr>
    <tr>
      <td><code>image is-3by5</code></td>
      <td style="width: 10rem">
        <figure class="image is-3by5">
          <img src="{{site.url}}/assets/images/placeholders/480x800.png" />
        </figure>
      </td>
      <td>3 by 5</td>
    </tr>
    <tr>
      <td><code>image is-9by16</code></td>
      <td style="width: 10rem">
        <figure class="image is-9by16">
          <img src="{{site.url}}/assets/images/placeholders/360x640.png" />
        </figure>
      </td>
      <td>9 by 16</td>
    </tr>
    <tr>
      <td><code>image is-1by2</code></td>
      <td style="width: 10rem">
        <figure class="image is-1by2">
          <img src="{{site.url}}/assets/images/placeholders/320x640.png" />
        </figure>
      </td>
      <td>1 by 2</td>
    </tr>
    <tr>
      <td><code>image is-1by3</code></td>
      <td style="width: 10rem">
        <figure class="image is-1by3">
          <img src="{{site.url}}/assets/images/placeholders/240x720.png" />
        </figure>
      </td>
      <td>1 by 3</td>
    </tr>
  </tbody>
</table>

<div class="content">
  <p>
    The only <strong>requirement</strong> is for the parent element to already
    have a specific <strong>width</strong>.
  </p>
</div>

<div class="content">
  <p>
    The <code>image</code> container will usually take up the
    <strong>whole width</strong> while maintaining the perfect ratio. <br />
    If it doesn't, you can force it by appending the
    <code>is-fullwidth</code> modifier.
  </p>
</div>

{% include docs/elements/anchor.html name="Arbitrary ratios with any element" %}

<div class="content">
  <p>
    You can apply a specific <strong>ratio</strong> on
    <strong>any element</strong> other than an <code>img</code>, simply by
    applying the <code>has-ratio</code> modifier to a resizable element.
  </p>
  <p>
    For example, you can apply a <code>16by9</code> ratio on an
    <code>iframe</code>. Resize the browser, and you'll see how the ratio is
    maintained.
  </p>
</div>

{% include docs/elements/snippet.html content=iframe_ratio horizontal=true %}
```

## File: docs/documentation/elements/notification.html

```html
---
title: Notification
layout: docs
theme: library
doc-tab: elements
doc-subtab: notification
breadcrumb:
  - home
  - documentation
  - elements
  - elements-notification
meta:
  colors: true
  sizes: false
  variables: true
---

{% capture notification %}
<div class="notification">
  <button class="delete"></button>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.
  <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam,
  et dictum <a>felis venenatis</a> efficitur.
</div>
{% endcapture %} {% capture notification_js_html %}
<div class="notification">
  <button class="delete"></button>
  Lorem ipsum
</div>
{% endcapture %} {% capture notification_js_code %}
document.addEventListener('DOMContentLoaded', () => {
(document.querySelectorAll('.notification .delete') || []).forEach(($delete) =>
{ const $notification = $delete.parentNode; $delete.addEventListener('click', ()
=> { $notification.parentNode.removeChild($notification); }); }); }); {%
endcapture %}

<div class="content">
  <p>
    The notification is a simple colored block meant to draw the attention to
    the user about something. As such, it can be used as a pinned notification
    in the corner of the viewport. That's why it supports the use of the
    <code>delete</code> element.
  </p>
</div>

{% include docs/elements/snippet.html content=notification %} {% include
docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    The notification element is available in all the
    <strong>different colors</strong> defined by the
    <a href="{{ site.data.links.by_id.customize-variables.path }}"
      ><code>$colors</code> Sass map</a
    >.
  </p>
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %}
<div class="notification is-{{ color }}">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
  dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
  diam, et dictum <a>felis venenatis</a> efficitur.
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Light colors" %}

<div class="content">
  Each color also comes in its <strong>light</strong> version. Simply append the
  <code>is-light</code> modifier to obtain the light version of the
  notification.
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %}
<div class="notification is-{{ color }} is-light">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
  dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
  nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
  diam, et dictum <a>felis venenatis</a> efficitur.
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="JavaScript example" %}

<div class="content">
  <p>
    The Bulma package <strong>does not come with any JavaScript</strong>. Here
    is however an implementation example, which sets the
    <code>click</code> handler for Bulma <code>delete</code> elements, anywhere
    on the page, in vanilla JavaScript.
  </p>

  {% highlight html -%} {{- notification_js_html -}} {%- endhighlight %} {%
  highlight javascript -%} {{- notification_js_code -}} {%- endhighlight %}
</div>
```

## File: docs/documentation/elements/progress.html

```html
---
title: Progress Bar
layout: docs
theme: library
doc-tab: elements
doc-subtab: progress
breadcrumb:
  - home
  - documentation
  - elements
  - elements-progress
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture progress %}
<progress class="progress" value="15" max="100">15%</progress>
{% endcapture %} {% capture progress_indeterminate %}
<progress class="progress is-small is-primary" max="100">15%</progress>
<progress class="progress is-danger" max="100">30%</progress>
<progress class="progress is-medium is-dark" max="100">45%</progress>
<progress class="progress is-large is-info" max="100">60%</progress>
{% endcapture %}

<div class="content">
  <p>
    The Bulma progress bar is a simple CSS class that styles the native
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"
      target="_blank"
      ><code>&lt;progress&gt;</code> HTML element</a
    >.
  </p>
</div>

{% include docs/elements/snippet.html content=progress %} {% include
docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    The progress bar element is available in all the
    <strong>different colors</strong> defined by the
    <a href="{{ site.data.links.by_id.customize-variables.path }}"
      ><code>$colors</code> Sass map</a
    >.
  </p>
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %} {% assign n
= forloop.index | times: 15 %}
<progress class="progress is-{{ color }}" value="{{ n }}" max="100">
  {{ n }}%
</progress>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Sizes" %} {% for size in
site.data.sizes %} {% capture foobar %} {% assign n = forloop.index | times: 20
%}
<progress class="progress is-{{ size }}" value="{{ n }}" max="100">
  {{ n }}%
</progress>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Indeterminate" %}

<div class="content">
  <p>
    If you don't set the HTML <code>value</code> attribute, you can display an
    <strong>indeterminate</strong> progress bar. It's used to show that some
    progress is going on, but the total duration is not yet determined.
  </p>
</div>

{% include docs/elements/snippet.html content=progress_indeterminate %}
```

## File: docs/documentation/elements/table.html

```html
---
title: Table
layout: docs
theme: library
doc-tab: elements
doc-subtab: table
breadcrumb:
  - home
  - documentation
  - elements
  - elements-table
meta:
  colors: false
  sizes: false
  variables: true
---

{% capture table_example %}
<table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Team</th>
      <th><abbr title="Played">Pld</abbr></th>
      <th><abbr title="Won">W</abbr></th>
      <th><abbr title="Drawn">D</abbr></th>
      <th><abbr title="Lost">L</abbr></th>
      <th><abbr title="Goals for">GF</abbr></th>
      <th><abbr title="Goals against">GA</abbr></th>
      <th><abbr title="Goal difference">GD</abbr></th>
      <th><abbr title="Points">Pts</abbr></th>
      <th>Qualification or relegation</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Team</th>
      <th><abbr title="Played">Pld</abbr></th>
      <th><abbr title="Won">W</abbr></th>
      <th><abbr title="Drawn">D</abbr></th>
      <th><abbr title="Lost">L</abbr></th>
      <th><abbr title="Goals for">GF</abbr></th>
      <th><abbr title="Goals against">GA</abbr></th>
      <th><abbr title="Goal difference">GD</abbr></th>
      <th><abbr title="Points">Pts</abbr></th>
      <th>Qualification or relegation</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <th>1</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
          title="Leicester City F.C."
          >Leicester City</a
        >
        <strong>(C)</strong>
      </td>
      <td>38</td>
      <td>23</td>
      <td>12</td>
      <td>3</td>
      <td>68</td>
      <td>36</td>
      <td>+32</td>
      <td>81</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
          title="2016–17 UEFA Champions League"
          >Champions League group stage</a
        >
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Arsenal_F.C."
          title="Arsenal F.C."
          >Arsenal</a
        >
      </td>
      <td>38</td>
      <td>20</td>
      <td>11</td>
      <td>7</td>
      <td>65</td>
      <td>36</td>
      <td>+29</td>
      <td>71</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
          title="2016–17 UEFA Champions League"
          >Champions League group stage</a
        >
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
          title="Tottenham Hotspur F.C."
          >Tottenham Hotspur</a
        >
      </td>
      <td>38</td>
      <td>19</td>
      <td>13</td>
      <td>6</td>
      <td>69</td>
      <td>35</td>
      <td>+34</td>
      <td>70</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
          title="2016–17 UEFA Champions League"
          >Champions League group stage</a
        >
      </td>
    </tr>
    <tr class="is-selected">
      <th>4</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
          title="Manchester City F.C."
          >Manchester City</a
        >
      </td>
      <td>38</td>
      <td>19</td>
      <td>9</td>
      <td>10</td>
      <td>71</td>
      <td>41</td>
      <td>+30</td>
      <td>66</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
          title="2016–17 UEFA Champions League"
          >Champions League play-off round</a
        >
      </td>
    </tr>
    <tr>
      <th>5</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
          title="Manchester United F.C."
          >Manchester United</a
        >
      </td>
      <td>38</td>
      <td>19</td>
      <td>9</td>
      <td>10</td>
      <td>49</td>
      <td>35</td>
      <td>+14</td>
      <td>66</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
          title="2016–17 UEFA Europa League"
          >Europa League group stage</a
        >
      </td>
    </tr>
    <tr>
      <th>6</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Southampton_F.C."
          title="Southampton F.C."
          >Southampton</a
        >
      </td>
      <td>38</td>
      <td>18</td>
      <td>9</td>
      <td>11</td>
      <td>59</td>
      <td>41</td>
      <td>+18</td>
      <td>63</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
          title="2016–17 UEFA Europa League"
          >Europa League group stage</a
        >
      </td>
    </tr>
    <tr>
      <th>7</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
          title="West Ham United F.C."
          >West Ham United</a
        >
      </td>
      <td>38</td>
      <td>16</td>
      <td>14</td>
      <td>8</td>
      <td>65</td>
      <td>51</td>
      <td>+14</td>
      <td>62</td>
      <td>
        Qualification for the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
          title="2016–17 UEFA Europa League"
          >Europa League third qualifying round</a
        >
      </td>
    </tr>
    <tr>
      <th>8</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Liverpool_F.C."
          title="Liverpool F.C."
          >Liverpool</a
        >
      </td>
      <td>38</td>
      <td>16</td>
      <td>12</td>
      <td>10</td>
      <td>63</td>
      <td>50</td>
      <td>+13</td>
      <td>60</td>
      <td></td>
    </tr>
    <tr>
      <th>9</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
          title="Stoke City F.C."
          >Stoke City</a
        >
      </td>
      <td>38</td>
      <td>14</td>
      <td>9</td>
      <td>15</td>
      <td>41</td>
      <td>55</td>
      <td>−14</td>
      <td>51</td>
      <td></td>
    </tr>
    <tr>
      <th>10</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Chelsea_F.C."
          title="Chelsea F.C."
          >Chelsea</a
        >
      </td>
      <td>38</td>
      <td>12</td>
      <td>14</td>
      <td>12</td>
      <td>59</td>
      <td>53</td>
      <td>+6</td>
      <td>50</td>
      <td></td>
    </tr>
    <tr>
      <th>11</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Everton_F.C."
          title="Everton F.C."
          >Everton</a
        >
      </td>
      <td>38</td>
      <td>11</td>
      <td>14</td>
      <td>13</td>
      <td>59</td>
      <td>55</td>
      <td>+4</td>
      <td>47</td>
      <td></td>
    </tr>
    <tr>
      <th>12</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
          title="Swansea City A.F.C."
          >Swansea City</a
        >
      </td>
      <td>38</td>
      <td>12</td>
      <td>11</td>
      <td>15</td>
      <td>42</td>
      <td>52</td>
      <td>−10</td>
      <td>47</td>
      <td></td>
    </tr>
    <tr>
      <th>13</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Watford_F.C."
          title="Watford F.C."
          >Watford</a
        >
      </td>
      <td>38</td>
      <td>12</td>
      <td>9</td>
      <td>17</td>
      <td>40</td>
      <td>50</td>
      <td>−10</td>
      <td>45</td>
      <td></td>
    </tr>
    <tr>
      <th>14</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
          title="West Bromwich Albion F.C."
          >West Bromwich Albion</a
        >
      </td>
      <td>38</td>
      <td>10</td>
      <td>13</td>
      <td>15</td>
      <td>34</td>
      <td>48</td>
      <td>−14</td>
      <td>43</td>
      <td></td>
    </tr>
    <tr>
      <th>15</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
          title="Crystal Palace F.C."
          >Crystal Palace</a
        >
      </td>
      <td>38</td>
      <td>11</td>
      <td>9</td>
      <td>18</td>
      <td>39</td>
      <td>51</td>
      <td>−12</td>
      <td>42</td>
      <td></td>
    </tr>
    <tr>
      <th>16</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
          title="A.F.C. Bournemouth"
          >AFC Bournemouth</a
        >
      </td>
      <td>38</td>
      <td>11</td>
      <td>9</td>
      <td>18</td>
      <td>45</td>
      <td>67</td>
      <td>−22</td>
      <td>42</td>
      <td></td>
    </tr>
    <tr>
      <th>17</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
          title="Sunderland A.F.C."
          >Sunderland</a
        >
      </td>
      <td>38</td>
      <td>9</td>
      <td>12</td>
      <td>17</td>
      <td>48</td>
      <td>62</td>
      <td>−14</td>
      <td>39</td>
      <td></td>
    </tr>
    <tr>
      <th>18</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
          title="Newcastle United F.C."
          >Newcastle United</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>9</td>
      <td>10</td>
      <td>19</td>
      <td>44</td>
      <td>65</td>
      <td>−21</td>
      <td>37</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
          title="2016–17 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
    <tr>
      <th>19</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
          title="Norwich City F.C."
          >Norwich City</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>9</td>
      <td>7</td>
      <td>22</td>
      <td>39</td>
      <td>67</td>
      <td>−28</td>
      <td>34</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
          title="2016–17 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
    <tr>
      <th>20</th>
      <td>
        <a
          href="https://en.wikipedia.org/wiki/Aston_Villa_F.C."
          title="Aston Villa F.C."
          >Aston Villa</a
        >
        <strong>(R)</strong>
      </td>
      <td>38</td>
      <td>3</td>
      <td>8</td>
      <td>27</td>
      <td>27</td>
      <td>76</td>
      <td>−49</td>
      <td>17</td>
      <td>
        Relegation to the
        <a
          href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
          title="2016–17 Football League Championship"
          >Football League Championship</a
        >
      </td>
    </tr>
  </tbody>
</table>
{% endcapture %} {% capture table_colors %}
<table class="table is-bordered">
  <tbody>
    {% for color in site.data.colors.justColors %}
    <tr>
      <th class="is-{{ color }}">{{ color | capitalize }} th cell</th>
      <td>Two</td>
      <td class="is-{{ color }}">{{ color | capitalize }} td cell</td>
      <td>Four</td>
      <td>Five</td>
    </tr>
    <tr class="is-{{ color }}">
      <th>{{ color | capitalize }} row</th>
      <td>Two</td>
      <td>Three</td>
      <td>Four</td>
      <td>Five</td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% endcapture %}

<div class="content">
  <p>
    You can create a <strong>Bulma table</strong> simply by attaching a single
    <code>table</code> CSS class on a <code>&lt;table&gt;</code> HTML element
    with the following structure:
  </p>

  <ul>
    <li>
      <code>&lt;table class="table"&gt;</code> as the main
      <strong>container</strong>
      <ul>
        <li>
          <code>thead</code> the optional <strong>top</strong> part of the table
        </li>
        <li>
          <code>tfoot</code> the optional <strong>bottom</strong> part of the
          table
        </li>
        <li>
          <code>tbody</code> the main <strong>content</strong> of the table
          <ul>
            <li>
              <code>tr</code> each table <strong>row</strong>
              <ul>
                <li><code>th</code> a table cell <strong>heading</strong></li>
                <li><code>td</code> a table <strong>cell</strong></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>
    You can set a table row as <strong>selected</strong> by appending the
    <code>is-selected</code> modifier on a
    <code>&lt;tr&gt;</code>
  </p>
</div>

{% include docs/elements/snippet.html content=table_example horizontal=true
more=true %} {% include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    You can change the color of a single <code>&lt;td&gt;</code> or
    <code>&lt;th&gt;</code> cell, or a whole <code>&lt;tr&gt;</code> row, by
    adding one of the color modifiers:
  </p>
  <ul>
    <li><code>is-primary</code></li>
    <li><code>is-link</code></li>
    <li><code>is-info</code></li>
    <li><code>is-success</code></li>
    <li><code>is-warning</code></li>
    <li><code>is-danger</code></li>
    <li><code>is-black</code></li>
    <li><code>is-dark</code></li>
    <li><code>is-light</code></li>
    <li><code>is-white</code></li>
  </ul>
</div>

{% include docs/elements/snippet.html content=table_colors horizontal=true
more=true %} {% include docs/elements/anchor.html name="Modifiers" %} {% capture
scrollable_table %}
<div class="table-container">
  <table class="table">
    <!-- Your table content -->
  </table>
</div>
{% endcapture %} {% capture simple_scrollable_table_example %}
<div class="table-container">
  <table class="table is-bordered is-striped">
    <tbody>
      {% for i in (1..5) %}
      <tr>
        {% for j in (1..100) %}
        <td>{{ j | times: i }}</td>
        {% endfor %}
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
{% endcapture %}

<div class="columns">
  <div class="column">
    <p>Add <strong>borders</strong> to all the cells.</p>
  </div>
  <div class="column">
    <code>table is-bordered</code>
  </div>
  <div class="column is-half">
    <table class="table is-bordered">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="columns">
  <div class="column">
    <p>Add <strong>stripes</strong> to the table.</p>
  </div>
  <div class="column">
    <code>table is-striped</code>
  </div>
  <div class="column is-half">
    <table class="table is-striped">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
        <tr>
          <td>Eleven</td>
          <td>Twelve</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="columns">
  <div class="column">
    <p>Make the cells <strong>narrower</strong>.</p>
  </div>
  <div class="column">
    <code>table is-narrow</code>
  </div>
  <div class="column is-half">
    <table class="table is-narrow">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
        <tr>
          <td>Eleven</td>
          <td>Twelve</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="columns">
  <div class="column">
    <p>You can add a <strong>hover effect</strong> on each row</p>
  </div>
  <div class="column">
    <code>table is-hoverable</code>
  </div>
  <div class="column is-half">
    <table class="table is-hoverable">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
        <tr>
          <td>Eleven</td>
          <td>Twelve</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="columns">
  <div class="column">
    <p>You can have a <strong>fullwidth</strong> table.</p>
  </div>
  <div class="column">
    <code>table is-fullwidth</code>
  </div>
  <div class="column is-half">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
        <tr>
          <td>Eleven</td>
          <td>Twelve</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="columns">
  <div class="column">
    <p>You can <strong>combine</strong> all five modifiers.</p>
  </div>
  <div class="column">
    <code
      >table is-bordered is-striped is-narrow is-hoverable is-fullwidth</code
    >
  </div>
  <div class="column is-half">
    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
        <tr>
          <td>Eleven</td>
          <td>Twelve</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{% include docs/elements/anchor.html name="Table container" %}

<p class="content">
  You can create a <strong>scrollable table</strong> by wrapping a
  <code>table</code> in a <code>table-container</code> element:
</p>

{% highlight html -%} {{- scrollable_table -}} {%- endhighlight %} {{
simple_scrollable_table_example }}
```

## File: docs/documentation/elements/tag.html

```html
---
title: Tags
layout: docs
theme: library
doc-tab: elements
doc-subtab: tag
breadcrumb:
  - home
  - documentation
  - elements
  - elements-tag
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture tag %}
<span class="tag"> Tag label </span>
{% endcapture %} {% capture tags_colors %}
<span class="tag is-black">Black</span>
<span class="tag is-dark">Dark</span>
<span class="tag is-light">Light</span>
<span class="tag is-white">White</span>
<span class="tag is-primary">Primary</span>
<span class="tag is-link">Link</span>
<span class="tag is-info">Info</span>
<span class="tag is-success">Success</span>
<span class="tag is-warning">Warning</span>
<span class="tag is-danger">Danger</span>
{% endcapture %} {% capture tags_light_colors %}
<span class="tag is-primary is-light">Primary</span>
<span class="tag is-link is-light">Link</span>
<span class="tag is-info is-light">Info</span>
<span class="tag is-success is-light">Success</span>
<span class="tag is-warning is-light">Warning</span>
<span class="tag is-danger is-light">Danger</span>
{% endcapture %} {% capture sizes %}
<span class="tag is-link is-normal">Normal</span>
<span class="tag is-primary is-medium">Medium</span>
<span class="tag is-info is-large">Large</span>
{% endcapture %} {% capture are_medium %}
<div class="tags are-medium">
  <span class="tag">All</span>
  <span class="tag">Medium</span>
  <span class="tag">Size</span>
</div>
{% endcapture %} {% capture are_large %}
<div class="tags are-large">
  <span class="tag">All</span>
  <span class="tag">Large</span>
  <span class="tag">Size</span>
</div>
{% endcapture %} {% capture are_medium_one_large %}
<div class="tags are-medium">
  <span class="tag">Medium</span>
  <span class="tag is-normal">Normal</span>
  <span class="tag">Medium</span>
  <span class="tag is-large">Large</span>
  <span class="tag">Medium</span>
</div>
{% endcapture %} {% capture hoverable_tags %}
<a class="tag">Hover me</a>
<button class="tag">Hover me</button>
<div class="tag is-hoverable">Hover me</div>
{% endcapture %} {% capture hoverable_colored_tags %}
<a class="tag is-link">Hover me</a>
<button class="tag is-primary">Hover me</button>
<div class="tag is-hoverable is-success">Hover me</div>
<a class="tag is-info">Hover me</a>
<button class="tag is-warning">Hover me</button>
<div class="tag is-hoverable is-danger">Hover me</div>
{% endcapture %} {% capture rounded %}
<span class="tag is-rounded">Rounded</span>
{% endcapture %} {% capture delete %}
<span class="tag is-success">
  Bar
  <button class="delete is-small"></button>
</span>
<span class="tag is-warning is-medium">
  Hello
  <button class="delete is-small"></button>
</span>
<span class="tag is-danger is-large">
  World
  <button class="delete"></button>
</span>
{% endcapture %} {% capture is_delete %}
<a class="tag is-delete"></a>
{% endcapture %} {% capture tags %}
<div class="tags">
  <span class="tag">One</span>
  <span class="tag">Two</span>
  <span class="tag">Three</span>
</div>
{% endcapture %} {% capture tags_multiple %}
<div class="tags">
  <span class="tag">One</span>
  <span class="tag">Two</span>
  <span class="tag">Three</span>
  <span class="tag">Four</span>
  <span class="tag">Five</span>
  <span class="tag">Six</span>
  <span class="tag">Seven</span>
  <span class="tag">Eight</span>
  <span class="tag">Nine</span>
  <span class="tag">Ten</span>
  <span class="tag">Eleven</span>
  <span class="tag">Twelve</span>
  <span class="tag">Thirteen</span>
  <span class="tag">Fourteen</span>
  <span class="tag">Fifteen</span>
  <span class="tag">Sixteen</span>
  <span class="tag">Seventeen</span>
  <span class="tag">Eighteen</span>
  <span class="tag">Nineteen</span>
  <span class="tag">Twenty</span>
</div>
{% endcapture %} {% capture tags_addons %}
<div class="tags has-addons">
  <span class="tag">Package</span>
  <span class="tag is-primary">Bulma</span>
</div>
{% endcapture %} {% capture tags_field_addons %}
<div class="field is-grouped is-grouped-multiline">
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">npm</span>
      <span class="tag is-info">{{ site.data.meta.version }}</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">build</span>
      <span class="tag is-success">passing</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">chat</span>
      <span class="tag is-primary">on gitter</span>
    </div>
  </div>
</div>
{% endcapture %} {% capture tags_delete_addons %}
<div class="tags has-addons">
  <span class="tag is-danger">Alex Smith</span>
  <a class="tag is-delete"></a>
</div>
{% endcapture %} {% capture tags_blog_addons %}
<div class="field is-grouped is-grouped-multiline">
  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Technology</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">CSS</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Flexbox</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Web Design</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Open Source</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Community</a>
      <a class="tag is-delete"></a>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <a class="tag is-link">Documentation</a>
      <a class="tag is-delete"></a>
    </div>
  </div>
</div>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <strong>tag</strong> is a small but versatile element. It's very
    useful as a way to attach information to a block or other component. Its
    size makes it also easy to display in numbers, making it appropriate for
    long lists of items.
  </p>
</div>

<div class="columns">
  <div class="column is-4">
    By default, a <strong>tag</strong> is a 1.5rem high label.
  </div>
  <div class="column is-2">
    <span class="tag"> Tag label </span>
  </div>
  <div class="column is-6">
    {% highlight html -%} {{- tag -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Colors" %}

<div class="columns">
  <div class="column is-4">
    Like with buttons, there are <strong>10 different colors</strong> available.
  </div>
  <div class="column is-2">
    <p class="field">
      <span class="tag is-black"> Black </span>
    </p>
    <p class="field">
      <span class="tag is-dark"> Dark </span>
    </p>
    <p class="field">
      <span class="tag is-light"> Light </span>
    </p>
    <p class="field">
      <span class="tag is-white"> White </span>
    </p>
    <p class="field">
      <span class="tag is-primary"> Primary </span>
    </p>
    <p class="field">
      <span class="tag is-link"> Link </span>
    </p>
    <p class="field">
      <span class="tag is-info"> Info </span>
    </p>
    <p class="field">
      <span class="tag is-success"> Success </span>
    </p>
    <p class="field">
      <span class="tag is-warning"> Warning </span>
    </p>
    <span class="tag is-danger"> Danger </span>
  </div>
  <div class="column is-6">
    {% highlight html -%} {{- tags_colors -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <p>You can now choose the <strong>light version</strong> of a color.</p>
  </div>
  <div class="column is-2">
    <p class="field">
      <span class="tag is-primary is-light"> Primary </span>
    </p>
    <p class="field">
      <span class="tag is-link is-light"> Link </span>
    </p>
    <p class="field">
      <span class="tag is-info is-light"> Info </span>
    </p>
    <p class="field">
      <span class="tag is-success is-light"> Success </span>
    </p>
    <p class="field">
      <span class="tag is-warning is-light"> Warning </span>
    </p>
    <span class="tag is-danger is-light"> Danger </span>
  </div>
  <div class="column is-6">
    {% highlight html -%} {{- tags_light_colors -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Sizes" %}

<div class="columns">
  <div class="column is-4">
    <div class="content">
      <p>The tag comes in <strong>3 different</strong> sizes.</p>
      <p>
        While the default size is the <strong>normal</strong> one, the
        <code>is-normal</code> modifier exists in case you need to reset the tag
        to its normal size.
      </p>
    </div>
  </div>
  <div class="column is-2">
    <p class="field">
      <span class="tag is-link is-normal"> Normal </span>
    </p>
    <p class="field">
      <span class="tag is-primary is-medium"> Medium </span>
    </p>
    <p class="field">
      <span class="tag is-info is-large"> Large </span>
    </p>
  </div>
  <div class="column is-6">
    {% highlight html -%} {{- sizes -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>You can change the size of <strong>all</strong> tags at once:</p>
</div>

{% include docs/elements/snippet.html content=are_medium %} {% include
docs/elements/snippet.html content=are_large %}

<div class="content">
  <p>
    You can however keep the original size of a <strong>subset</strong> of tags,
    simply by applying one of its modifier class:
  </p>
</div>

{% include docs/elements/snippet.html content=are_medium_one_large %} {% include
docs/elements/anchor.html name="Hover/Active state" %}

<div class="content">
  <p>
    A tag element will react to the <code>:hover</code> and
    <code>:active</code> states if:
  </p>
  <ul>
    <li>it's an anchor element <code>&lt;a class="tag"&gt;</code></li>
    <li>it's a button element <code>&lt;button class="tag"&gt;</code></li>
    <li>
      it has the <code>is-hoverable</code> modifier class
      <code>&lt;div class="tag is-hoverable"&gt;</code>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=hoverable_tags %} {% include
docs/elements/anchor.html name="Modifiers" %}

<div class="columns">
  <div class="column is-4">
    You can add the <code>is-rounded</code> modifier to make a
    <strong>rounded</strong> tag.
  </div>
  <div class="column is-2">{{ rounded }}</div>
  <div class="column is-6">
    {% highlight html -%} {{- rounded -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    You can add the <code>is-delete</code> modifier to turn the tag into a
    <strong>delete button</strong>.
  </div>
  <div class="column is-2">{{ is_delete }}</div>
  <div class="column is-6">
    {% highlight html -%} {{- is_delete -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Combinations" %}

<div class="columns">
  <div class="column is-4">
    You can create <strong>hoverable colored</strong> tags.
  </div>
  <div class="column is-2">{{ hoverable_colored_tags }}</div>
  <div class="column is-6">
    {% highlight html -%} {{- hoverable_colored_tags -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    You can append a <strong>delete button</strong>.
  </div>
  <div class="column is-2">
    <p class="field">
      <span class="tag is-success">
        Bar
        <button class="delete is-small"></button>
      </span>
    </p>
    <p class="field">
      <span class="tag is-warning is-medium">
        Hello
        <button class="delete is-small"></button>
      </span>
    </p>
    <p class="field">
      <span class="tag is-danger is-large">
        World
        <button class="delete"></button>
      </span>
    </p>
  </div>
  <div class="column is-6">
    {% highlight html -%} {{- delete -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="List of tags" %}

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can now create a <strong>list of tags</strong> with the
        <code>tags</code> container.
      </p>
    </div>
    <div class="bd-example">{{ tags }}</div>
  </div>
  <div class="column">
    {% highlight html -%} {{- tags -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        If the list is <strong>very long</strong>, it will automatically wrap on
        <strong>multiple lines</strong>, while keeping all tags
        <strong>evenly spaced</strong>.
      </p>
    </div>
    <div class="bd-example">{{ tags_multiple }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- tags_multiple -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Tag addons" %}

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can <strong>attach tags together</strong> with the
        <code>has-addons</code> modifier.
      </p>
    </div>
    <div class="bd-example">{{ tags_addons }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- tags_addons -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        You can attach a <strong>text</strong> tag with a
        <strong>delete</strong> tag together.
      </p>
    </div>
    <div class="bd-example">{{ tags_delete_addons }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- tags_delete_addons -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>
        If you want to attach <code>tags</code> containers
        <strong>together</strong>, simply use the <code>field</code> element
        with the <code>is-grouped</code> and
        <code>is-grouped-multiline</code> modifiers.
      </p>
    </div>
    <div class="bd-example">{{ tags_field_addons }}</div>
  </div>
  <div class="column bd-highlight-full">
    {% highlight html -%} {{- tags_field_addons -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>This can be useful for a long list of <strong>blog tags</strong>.</p>
    </div>
    <div class="bd-example">{{ tags_blog_addons }}</div>
  </div>
  <div class="column">
    {% highlight html -%} {{- tags_blog_addons -}} {%- endhighlight %}
  </div>
</div>
```

## File: docs/documentation/elements/title.html

```html
---
title: Title and Subtitle
layout: docs
theme: library
doc-tab: elements
doc-subtab: title
breadcrumb:
  - home
  - documentation
  - elements
  - elements-title
meta:
  colors: false
  sizes: true
  variables: true
---

{% capture default %}
<h1 class="title">Title</h1>
<h2 class="subtitle">Subtitle</h2>
{% endcapture %} {% capture title_sizes %}
<h1 class="title is-1">Title 1</h1>
<h2 class="title is-2">Title 2</h2>
<h3 class="title is-3">Title 3</h3>
<h4 class="title is-4">Title 4</h4>
<h5 class="title is-5">Title 5</h5>
<h6 class="title is-6">Title 6</h6>
{% endcapture %} {% capture subtitle_sizes %}
<h1 class="subtitle is-1">Subtitle 1</h1>
<h2 class="subtitle is-2">Subtitle 2</h2>
<h3 class="subtitle is-3">Subtitle 3</h3>
<h4 class="subtitle is-4">Subtitle 4</h4>
<h5 class="subtitle is-5">Subtitle 5</h5>
<h6 class="subtitle is-6">Subtitle 6</h6>
{% endcapture %} {% capture combine %}
<p class="title is-1">Title 1</p>
<p class="subtitle is-3">Subtitle 3</p>

<p class="title is-2">Title 2</p>
<p class="subtitle is-4">Subtitle 4</p>

<p class="title is-3">Title 3</p>
<p class="subtitle is-5">Subtitle 5</p>
{% endcapture %} {% capture spaced %}
<p class="title is-1 is-spaced">Title 1</p>
<p class="subtitle is-3">Subtitle 3</p>

<p class="title is-2 is-spaced">Title 2</p>
<p class="subtitle is-4">Subtitle 4</p>

<p class="title is-3 is-spaced">Title 3</p>
<p class="subtitle is-5">Subtitle 5</p>
{% endcapture %}

<div class="columns">
  <div class="column is-3">
    <div class="content">
      <p>There are <strong>2 types</strong> of heading:</p>
      <ul>
        <li>
          <code>title</code>
        </li>
        <li>
          <code>subtitle</code>
        </li>
      </ul>
    </div>
  </div>
  <div class="column is-4">
    <p class="title">Title</p>
    <p class="subtitle">Subtitle</p>
  </div>
  <div class="column is-5">
    {% highlight html -%} {{- default -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Sizes" %}

<div class="columns">
  <div class="column is-3">
    <p>There are <strong>6 sizes</strong> available:</p>
  </div>
  <div class="column is-4">
    <p class="title is-1">Title 1</p>
    <p class="title is-2">Title 2</p>
    <p class="title is-3">Title 3 (default size)</p>
    <p class="title is-4">Title 4</p>
    <p class="title is-5">Title 5</p>
    <p class="title is-6">Title 6</p>
  </div>
  <div class="column is-5">
    {% highlight html -%} {{- title_sizes -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-3"></div>
  <div class="column is-4">
    <p class="subtitle is-1">Subtitle 1</p>
    <p class="subtitle is-2">Subtitle 2</p>
    <p class="subtitle is-3">Subtitle 3</p>
    <p class="subtitle is-4">Subtitle 4</p>
    <p class="subtitle is-5">Subtitle 5 (default size)</p>
    <p class="subtitle is-6">Subtitle 6</p>
  </div>
  <div class="column is-5">
    {% highlight html -%} {{- subtitle_sizes -}} {%- endhighlight %}
  </div>
</div>

<hr />

<div class="columns">
  <div class="column is-3">
    <div class="content">
      <p>
        When you <strong>combine</strong> a title and a subtitle, they move
        closer together.
      </p>
      <p>
        As a rule of thumb, it is recommended to use a size difference of
        <strong>two</strong>. So if you use a <code>title is-1</code>, combine
        it with a <code>subtitle is-3</code>.
      </p>
    </div>
  </div>
  <div class="column is-4">
    <div class="block">
      <p class="title is-1">Title 1</p>
      <p class="subtitle is-3">Subtitle 3</p>
    </div>
    <div class="block">
      <p class="title is-2">Title 2</p>
      <p class="subtitle is-4">Subtitle 4</p>
    </div>
    <div class="block">
      <p class="title is-3">Title 3</p>
      <p class="subtitle is-5">Subtitle 5</p>
    </div>
  </div>
  <div class="column is-5">
    {% highlight html -%} {{- combine -}} {%- endhighlight %}
  </div>
</div>

<hr />

<div class="columns">
  <div class="column is-3">
    <div class="content">
      <p>
        You can maintain the normal spacing between titles and subtitles if you
        use the <code>is-spaced</code> modifier on the first element.
      </p>
    </div>
  </div>
  <div class="column is-4">
    <div class="block">
      <p class="title is-1 is-spaced">Title 1</p>
      <p class="subtitle is-3">Subtitle 3</p>
    </div>
    <div class="block">
      <p class="title is-2 is-spaced">Title 2</p>
      <p class="subtitle is-4">Subtitle 4</p>
    </div>
    <div class="block">
      <p class="title is-3 is-spaced">Title 3</p>
      <p class="subtitle is-5">Subtitle 5</p>
    </div>
  </div>
  <div class="column is-5">
    {% highlight html -%} {{- spaced -}} {%- endhighlight %}
  </div>
</div>
```

## File: docs/documentation/features.html

```html
---
title: Features
layout: docs
theme: features
doc-tab: features
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - features
---

{% include docs/components/links.html category_id='features' %}
```

## File: docs/documentation/features/auto-color.html

```html
---
title: Auto Color in Bulma
layout: docs
theme: features
doc-tab: features
doc-subtab: auto-color
breadcrumb:
  - home
  - documentation
  - features
  - features-auto-color
---
```

## File: docs/documentation/features/color-palettes.md

````markdown
---
title: Color Palettes in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: color-palettes
breadcrumb:
  - home
  - documentation
  - features
  - features-color-palettes
---

Bulma comes with 7 primary colors:

<table class="table is-bordered">
<tr><td><code>text</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-text);"></span></td></tr>
<tr><td><code>link</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-link);"></span></td></tr>
<tr><td><code>primary</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-primary);"></span></td></tr>
<tr><td><code>info</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-info);"></span></td></tr>
<tr><td><code>success</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-success);"></span></td></tr>
<tr><td><code>warning</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-warning);"></span></td></tr>
<tr><td><code>danger</code></td><td><span class="bd-color-swatch" style="--background: var(--bulma-danger);"></span></td></tr>
</table>

Bulma will automatically **generate a collection of CSS variables** for each of those colors. These sets of variables act as a **color palette** you can use to play with different _shades_ of a same color.

For example, by setting the primary color with `$primary: hsl(171, 100%, 41%)`, Bulma will generate the following CSS variables:

- `--bulma-primary`
- `--bulma-primary-rgb` if you want to create your own RGBA shade: `rgba(var(--bulma-primary-rgb), 0.5)`
- `--bulma-primary-h` equal to the primary **hue**
- `--bulma-primary-s` equal to the primary **saturation**
- `--bulma-primary-l` equal to the primary **lightness**
- `--bulma-primary-base` (equal to `--bulma-primary`)
- `--bulma-primary-invert` which is a color that will look decent on the primary color (in a foreground/background combination)
- `--bulma-primary-light` which is the primary color at `90%` lightness
- `--bulma-primary-light-invert` which is a color that looks good on the `-light` version
- `--bulma-primary-dark` which is the primary color at `20%` lightness
- `--bulma-primary-dark-invert` which is a color that looks good on the `-dark` version
- `--bulma-primary-soft` which is a `light` color in light mode, and a `dark` color in dark mode
- `--bulma-primary-bold` which is a `dark` color in light mode, and a `light` color in dark mode
- `--bulma-primary-soft-invert` which is the same as the `bold` version
- `--bulma-primary-bold-invert` which is the same as the `soft` version
- `--bulma-primary-on-scheme` which is a color that looks good on the `scheme-main` color (which by default is white, and is used as the page's background color)

Here is what they look like:

<table class="table is-bordered">
  <tr>
    <td><code>--bulma-primary</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary);"></span></td>
    <td><span class="color-primary">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-invert);"></span></td>
    <td><span class="color-primary-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-light</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-light);"></span></td>
    <td><span class="color-primary-light">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-light-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-light-invert);"></span></td>
    <td><span class="color-primary-light-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-dark</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-dark);"></span></td>
    <td><span class="color-primary-dark">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-dark-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-dark-invert);"></span></td>
    <td><span class="color-primary-dark-invert">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-soft</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-soft);"></span></td>
    <td><span class="has-text-primary-soft">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-bold</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-bold);"></span></td>
    <td><span class="has-text-primary-bold">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
  <tr>
    <td><code>--bulma-primary-on-scheme</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-on-scheme);"></span></td>
    <td><span class="color-primary-on-scheme">The quick brown fox jumps over the lazy dog</span></td>
  </tr>
</table>

## Soft and Bold colors

Because Bulma now has a Dark Mode, it comes with a new color concept: **soft** and **bold** colors.

A **soft** color is a shade of a color that has little contrast with the background. It's a muted, faint shade of that color.

In light mode, this means that a soft color will be light as well. It's ideal of **backgrounds**:

<table class="table is-bordered">
  <tr>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-soft);"></span></td>
    <td><code>--bulma-primary-soft</code> as <strong>background</strong></td>
    <td class="has-background-primary-soft">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>

On the other hand, the **bold** color has a stark contrast with the background. It's a strong, distinct shade of that color.

In light mode, this means that a bold color will be dark. It's ideal of **text colors**:

{% include docs/components/single-color-row.html color="primary-bold" label="text color" classname="has-text-primary-bold" %}

The best use of these colors is to **combine them**: the soft color as background, the bold color as foreground:

<table class="table is-bordered">
  <tr>
    <td>
      <code>--bulma-primary-soft</code> as <strong>background</strong><br>
      <code>--bulma-primary-bold</code> as <strong>foreground</strong>
    </td>
    <td class="has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>

### Automatic switching when going into Dark Mode

If you use switch to between light mode and dark mode, you will notice that the soft and bold colors will **swap**. That way, you don't need to update your CSS classes to keep a decent design.

<table class="table is-bordered">
  <tr>
    <th>System</th>
    <th>Light Mode</th>
    <th>Dark Mode</th>
  </tr>
  <tr>
    <td class="has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
    <td class="theme-light has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
    <td class="theme-dark has-text-primary-bold has-background-primary-soft" style="vertical-align: middle;">The quick brown fox jumps over the lazy dog</td>
  </tr>
</table>

## Invert colors

The purpose of `-invert` colors is to combine them with their base counterparts. For example, if you use `primary-light` as the background color, you can use `primary-light-invert` as the foreground color:

<table class="table is-bordered">
  {% include docs/elements/background-foreground-row.html %}
  {% include docs/elements/background-foreground-row.html color="light" %}
  {% include docs/elements/background-foreground-row.html color="dark" %}
</table>

## 21 shades for each color

Bulma will automatically generate 21 shades of each color, one for each amount of **lightness**, starting from _around_ `0%` and going up in `5%` increments, until `100%` is reached.

> I am saying _around_ `0%` because the last digit is determined by the base color. If the base color's lightness is `42%`, then `--bulma-primary-00` will be `2%`, not `0%`.

<table class="table is-bordered">
  {% for i in (0..19) %}
    {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
    <tr>
      <td><code>--bulma-primary-{{ color }}</code></td>
      <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-{{ color }});"></span></td>
      <td><code>--bulma-primary-{{ color }}-invert</code></td>
      <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-{{ color }}-invert);"></span></td>
    </tr>
  {% endfor %}

  <tr>
    <td><code>--bulma-primary-100</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-100);"></span></td>
    <td><code>--bulma-primary-100-invert</code></td>
    <td><span class="bd-color-swatch" style="--background: var(--bulma-primary-100-invert);"></span></td>
  </tr>
</table>

Each of these shades has an `-invert` counterpart that can be used as a foreground color:

<table class="table is-bordered">
  {% for i in (0..19) %}
    {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
    {% include docs/elements/background-foreground-row.html color=color %}
  {% endfor %}

{% include docs/elements/background-foreground-row.html color="100" %}

</table>

### Lightness CSS variables

If you write your own CSS and want to use one these shades yourself, you can access the **lightness** value via its dedicated CSS variable that has a `-l` suffix.

For example, the `bulma-primary-75` color is defined like this:

```css
:root {
  --bulma-primary-75: hsla(
    var(--bulma-primary-h),
    var(--bulma-primary-s),
    var(--bulma-primary-75-l),
    1
  );
}
```

In this case, `--bulma-primary-75-l` is equal to `76%`, and you can access its value with the `var(--bulma-primary-75-l)` CSS variable.

## CSS helper classes

While you can access all a color's CSS variables directly by writing `color: var(--bulma-primary)` for example, Bulma also provides **CSS helper classes** for each color.

Those helper classes exist for to set either the `color` or the `background`.

<div class="table-container">
<table class="table is-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Color</th>
      <th colspan="2"><code>color</code> class</th>
      <th colspan="2"><code>background</code> class</th>
    </tr>
  </thead>
  <tbody>
    {% include docs/elements/palette-class-row.html color="primary" %}
    {% include docs/elements/palette-class-row.html color="primary-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-light" %}
    {% include docs/elements/palette-class-row.html color="primary-light-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-dark" %}
    {% include docs/elements/palette-class-row.html color="primary-dark-invert" %}
    {% include docs/elements/palette-class-row.html color="primary-on-scheme" %}
    {% for i in (0..19) %}
      {% assign color = i | times: 5 | prepend: '00' | slice: -2, 2 %}
      {% assign name = color | prepend: 'primary-' %}
      {% include docs/elements/palette-class-row.html color=name %}
    {% endfor %}
    {% include docs/elements/palette-class-row.html color="primary-100" %}
  </tbody>
</table>
</div>
````

## File: docs/documentation/features/css-variables.md

````markdown
---
title: CSS Variables in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: css-variables
breadcrumb:
  - home
  - documentation
  - features
  - features-css-variables
---

All Bulma components are styled using **CSS Variables** (which are also called CSS custom properties). [Read more about them on the MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).

For example, here is how the `.title` element is styled:

```css
.title {
  color: var(--bulma-title-color);
  font-size: var(--bulma-title-size);
  font-weight: var(--bulma-title-weight);
  line-height: var(--bulma-title-line-height);
}
```

## Scope

Bulma CSS variables are either defined:

- at the **global** scope `:root`
- at the **component** scope, like `.button`

CSS Variables defined at a more specific scope (like `.button`) will override the ones defined at a more global scope.

```css
:root {
  /* Default global value */
  --bulma-size-medium: 1.25rem;
}

.button {
  /* Overrides the global value */
  --bulma-size-medium: 1.5rem;
}
```

## Prefix

All Bulma CSS variables are prefixed with `bulma-` (including the dash). You will notice theme when inspecting a webpage:

<img src="/assets/images/content-inspect.png" alt="Inspect CSS variables" width="640" height="340">

This prefix can be changed by setting the `$cssvars-prefix` Sass variable:

```scss
@use "bulma/sass" with (
  $cssvars-prefix: "my-prefix-"
);
```

## Themes

The global CSS variables defined at the `:root` level are what defines a **Bulma theme**. Think of a theme as simply a collection of CSS variables.

<p>
  <a href="{{ site.url }}/documentation/features/themes/">
    Read more about Themes
  </a>
</p>
````

## File: docs/documentation/features/dark-mode.md

````markdown
---
title: Dark Mode in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: dark-mode
breadcrumb:
  - home
  - documentation
  - features
  - features-dark-mode
---

Modern browsers come with a way to detect if a user has set their theme preference to `light` or `dark` by using the [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) keyword.

This value can be used in a media query to change a website's styles accordingly:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Update CSS variables */
  }
}
```

However, it's not possible for a website to alter this preference. That's why it's preferable to **also** add a `data-theme` HTML attribute or a `theme-dark` CSS class.

This is how Bulma defines its dark theme:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Update CSS variables */
  }
}

[data-theme="dark"],
.theme-dark {
  /* Update CSS variables */
}
```

With these rules:

- the website will be **light by default**, if no user preference is set
- it will also be **light** if the user has set their preference to `light`
- the website will be **dark** if the user has set their preference to `dark`

{% include docs/elements/anchor.html name="Force Dark Mode within a page" %}

You can **enable** Dark Mode in part of your HTML by simply using the HTML attribute or the CSS class:

```html
<div>
  This is in Light Mode if the user hasn't set a preference, or if their
  preference is set to <code>light</code>.
</div>

<div data-theme="dark">This is in Dark Mode</div>

<div class="theme-dark">This is also in Dark Mode</div>
```

{% include docs/elements/anchor.html name="Force Dark Mode for a whole webpage" %}

If you want to enable Dark Mode for a whole webpage, simply set the attribute or the class on the `<html>` element:

```html
<html data-theme="dark">
  <!-- Or -->
  <html class="theme-dark"></html>
</html>
```

{% include docs/elements/anchor.html name="How the Dark theme is created" %}

This is the content of the `sass/themes/dark.scss` file:

```scss
@use "sass/utilities/initial-variables" as iv;
@use "sass/utilities/css-variables" as cv;
@use "sass/utilities/derived-variables" as dv;
@use "sass/themes/setup";

// The main lightness of this theme
$scheme-main-l: 11%;
$background-l: 14%;
$text-l: 71%;

// The main scheme color, used to make calculations
$scheme-main: hsl(iv.$scheme-h, iv.$scheme-s, $scheme-main-l);
$background: hsl(iv.$scheme-h, iv.$scheme-s, $background-l);
$text: hsl(iv.$scheme-h, iv.$scheme-s, $text-l);

@mixin dark-theme {
  // Required: update the lightness colors and hover/active states
  @include cv.register-vars(
    (
      "scheme-brightness": "dark",
      "scheme-main-l": $scheme-main-l,
      "scheme-main-bis-l": $scheme-main-l + 2%,
      "scheme-main-ter-l": $scheme-main-l + 4%,
      "background-l": $background-l,
      "border-weak-l": 21%,
      "border-l": 24%,
      "text-weak-l": 53%,
      "text-l": $text-l,
      "text-strong-l": 93%,
      "text-title-l": 100%,
      "hover-background-l-delta": 5%,
      "active-background-l-delta": 10%,
      "hover-border-l-delta": 10%,
      "active-border-l-delta": 20%,
      "hover-color-l-delta": 5%,
      "active-color-l-delta": 10%,
    )
  );

  // Required: update the "on scheme" colors since the main scheme color is changed
  // from white (100% lightness)
  // to black (11% lightness in this case)
  @each $name, $color in dv.$colors {
    @include cv.generate-on-scheme-colors($name, $color, $scheme-main);
  }

  // Optional: update the shadow color
  @include cv.register-hsl("shadow", white);
}
```

This mixin outputs a list of CSS variables and their new value.

To use this theme with the `prefer-color-scheme` media query, write the following:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/themes/dark";

@include cv.system-theme($name: "dark") {
  @include dark.dark-theme;
}
```

To use this theme with the `[data-theme=dark]` and `.theme-dark` selectors, write the following:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/themes/dark";
@use "sass/themes/setup";

@include cv.bulma-theme($name: "dark") {
  @include dark.dark-theme;
  @include setup.setup-theme;
}
```

### The `bulma-theme()` mixin

This mixin will allow you to generate a CSS rule-set with both an appropriate HTML attribute selector and a CSS class selector, which names are defined by the `$name` parameter.

```scss
@use "sass/utilities/css-variables" as cv;

@include cv.bulma-theme($name: "my-theme") {
  // Your code
}
```

This will output the following:

```css
[data-theme="my-theme"],
.theme-my-theme {
  /* Your code */
}
```

### The `system-theme()` mixin

This mixin will generate a `@media (prefers-color-scheme: $name)` media query.

```scss
@use "sass/utilities/css-variables" as cv;

@include cv.system-theme($name: "dark") {
  // Your code
}
```

This will output the following:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Your code */
  }
}
```

### The `register-vars()` function

All Bulma CSS variables are prefixed with `bulma-`. This prefix is defined with the `$cssvars-prefix: "bulma-";` Sass variable.

Because writing all CSS variables with this prefix can be cumbersome, Bulma provides a Sass function to register new variables: `register-vars()`.

This function accepts a Sass map of `name: value` pairs.

```scss
@use "sass/utilities/css-variables" as cv;

$scheme-main-l: 11%;
$background-l: 14%;
$text-l: 71%;

@include cv.bulma-theme($name: "my-theme") {
  @include cv.register-vars(
    (
      "scheme-brightness": "dark",
      "scheme-main-l": $scheme-main-l,
      "scheme-main-bis-l": $scheme-main-l + 2%,
      "scheme-main-ter-l": $scheme-main-l + 4%,
      "background-l": $background-l,
      "border-weak-l": 21%,
      "border-l": 24%,
      "text-weak-l": 53%,
      "text-l": $text-l,
      "text-strong-l": 93%,
      "text-title-l": 100%,
      "hover-background-l-delta": 5%,
      "active-background-l-delta": 10%,
      "hover-border-l-delta": 10%,
      "active-border-l-delta": 20%,
      "hover-color-l-delta": 5%,
      "active-color-l-delta": 10%,
    )
  );
}
```

### Updating the lightness

For Dark Mode, Bulma will keep the same hue and saturation of the main scheme color. It will however **invert the lightness** of background, borders, text colors, and hover/active states.

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Lightness Name</th>
      <th colspan="2">Light Mode (default)</th>
      <th colspan="2">Dark Mode (default)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>--bulma-scheme-main-l</code></th>
      <td><code>100%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));"></span></td>
      <td><code>11%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-scheme-main-bis-l</code></th>
      <td><code>98%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));"></span></td>
      <td><code>13%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-bis-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-scheme-main-ter-l</code></th>
      <td><code>98%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));"></span></td>
      <td><code>15%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-scheme-main-ter-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-background-l</code></th>
      <td><code>96%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));"></span></td>
      <td><code>14%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-background-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-border-weak-l</code></th>
      <td><code>93%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));"></span></td>
      <td><code>21%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-weak-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-border-l</code></th>
      <td><code>86%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));"></span></td>
      <td><code>24%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-border-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-weak-l</code></th>
      <td><code>48%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-weak-l));"></span></td>
      <td><code>53%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-weak-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-l</code></th>
      <td><code>29%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-l));"></span></td>
      <td><code>71%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-strong-l</code></th>
      <td><code>21%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-strong-l));"></span></td>
      <td><code>93%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-strong-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-text-title-l</code></th>
      <td><code>14%</code></td>
      <td class="theme-light"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-title-l));"></span></td>
      <td><code>100%</code></td>
      <td class="theme-dark"><span class="bd-color-swatch" style="--background: hsl(var(--bulma-scheme-h), var(--bulma-scheme-s), var(--bulma-text-title-l));"></span></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-background-l-delta</code></th>
      <td colspan="2"><code>5%</code></td>
      <td colspan="2"><code>5%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-background-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-border-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-border-l-delta</code></th>
      <td colspan="2"><code>20%</code></td>
      <td colspan="2"><code>20%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-hover-color-l-delta</code></th>
      <td colspan="2"><code>5%</code></td>
      <td colspan="2"><code>5%</code></td>
    </tr>
    <tr>
      <th><code>--bulma-active-color-l-delta</code></th>
      <td colspan="2"><code>10%</code></td>
      <td colspan="2"><code>10%</code></td>
    </tr>
  </tbody>
</table>

### The `generate-on-scheme-colors()` function

The **scheme** color is the one used for:

- {% include docs/elements/color-swatch.html background="var(--bulma-background)" %} backgrounds
- {% include docs/elements/color-swatch.html background="var(--bulma-border)" %} borders
- text shades
  - {% include docs/elements/color-swatch.html background="var(--bulma-text-strong)" %} strong text
  - {% include docs/elements/color-swatch.html background="var(--bulma-text-weak)" %} weak text
  - {% include docs/elements/color-swatch.html background="var(--bulma-title-color)" %} title text
  - {% include docs/elements/color-swatch.html background="var(--bulma-text)" %} and normal text

For each of the 7 primary colors {% include docs/elements/primary-colors.html %}, the default Bulma theme generates **on scheme** shades, meaning shades of each color that will look decent on the main scheme color.

In Light Mode, they look like this:

<table class="table is-bordered">
  <tbody>
    {% for color in site.data.colors.justColors %}
      {% assign foreground = color | prepend: 'var(--bulma-' | append: '-on-scheme)' %}
      <tr>
        <th><code>{{ color }}</code></th>
        <td>{% include docs/elements/color-swatch.html background="var(--bulma-scheme-main)" color=foreground text=foreground %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

Because in Dark Mode we are inverting the lightness of these colors, the page background will go from white {% include docs/elements/color-swatch.html background="#fff" %} to black {% include docs/elements/color-swatch.html background="#141414" %}. We thus need to update the `-on-scheme` colors of all 7 primary colors.

In Dark Mode, they look like this:

<table class="table is-bordered">
  <tbody>
    {% for color in site.data.colors.justColors %}
      {% assign foreground = color | prepend: 'var(--bulma-' | append: '-on-scheme)' %}
      <tr>
        <th><code>{{ color }}</code></th>
        <td class="theme-dark">{% include docs/elements/color-swatch.html background="var(--bulma-scheme-main)" color=foreground text=foreground %}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

If you are creating your own theme, you can automatically generate new `-on-scheme` colors by using the `generate-on-scheme-colors()` for **each** color. It takes 3 parameters:

- `$name` which is a string. E.g. `"primary"`
- `$color` which is the color value. E.g.
- `$scheme-main` which is the theme's main scheme color (the one used as the page background). E.g. `#fff`

The full code looks like this:

```scss
@use "sass/utilities/css-variables" as cv;
@use "sass/utilities/derived-variables" as dv;

$scheme-main-l: 11%;
$scheme-main: hsl(iv.$scheme-h, iv.$scheme-s, $scheme-main-l);

@include cv.bulma-theme($name: "my-theme") {
  @each $name, $color in dv.$colors {
    @include cv.generate-on-scheme-colors($name, $color, $scheme-main);
  }
}
```

### The `setup-theme()` function

In Bulma, some CSS variables reference other CSS variables. For example, `--bulma-scheme-main` is defined like this:

```css
:root {
  --bulma-scheme-main: hsl(
    var(--bulma-scheme-h) var(--bulma-scheme-s) var(--bulma-scheme-main-l)
  );
}
```

Because of how CSS variables work, if you update the value of `--bulma-scheme-main-l`, you need to define `--bulma-scheme-main` again. That is what `setup-theme()` does.

```css
[data-theme="my-theme"],
.theme-my-theme {
  --bulma-scheme-main-l: 7%;
  --bulma-scheme-main: hsl(
    var(--bulma-scheme-h) var(--bulma-scheme-s) var(--bulma-scheme-main-l)
  );
}
```

If you create your own theme, simply call this function _after_ having set your own CSS variables:

```scss
@use "sass/themes/setup";

@include cv.bulma-theme($name: "my-theme") {
  // Set your own CSS variables,
  // either manually:
  --bulma-scheme-main-l: 7%;
  // or using Bulma's register-vars() function:
  @include register-vars(
    (
      "bulma-scheme-main-l": 7%,
    )
  );

  // Then, setup the new theme.
  @include setup.setup-theme();
}
```
````

## File: docs/documentation/features/skeletons.html

````html
---
title: Skeletons in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: skeletons
breadcrumb:
  - home
  - documentation
  - features
  - features-skeletons
---

{% capture title_is_skeleton %}
<h1 class="title is-skeleton">Title</h1>
{% endcapture %} {% capture title_has_skeleton %}
<h1 class="title has-skeleton">Title</h1>
{% endcapture %} {% capture subtitle_is_skeleton %}
<h2 class="subtitle is-skeleton">Subtitle</h2>
{% endcapture %} {% capture subtitle_has_skeleton %}
<h2 class="subtitle has-skeleton">Subtitle</h2>
{% endcapture %} {% capture title_and_subtitle_is_skeleton %}
<h1 class="title is-skeleton">Title</h1>
<h2 class="subtitle is-skeleton">Subtitle</h2>
{% endcapture %} {% capture title_and_subtitle_has_skeleton %}
<h1 class="title has-skeleton">Title</h1>
<h2 class="subtitle has-skeleton">Subtitle</h2>
{% endcapture %} {% capture skeleton_block %}
<div class="skeleton-block"></div>
{% endcapture %} {% capture skeleton_block_with_text %}
<div class="skeleton-block">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce
  dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
  fermentum massa justo sit amet risus. Donec sed odio dui. Nullam quis risus
  eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
  parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
  vehicula ut id elit.
</div>
{% endcapture %} {% capture skeleton_lines %}
<div class="skeleton-lines">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
{% endcapture %} {% capture markdown %} A skeleton loader is a loading state
that acts as a **placeholder** for content in an interface. Bulma v1 ships with
2 skeleton elements, and skeleton variants for most Bulma components. All
skeleton loaders share these CSS variables: ```css :root {
--bulma-skeleton-background: var(--bulma-border); --bulma-skeleton-radius:
var(--bulma-radius-small); --bulma-skeleton-block-min-height: 4.5em;
--bulma-skeleton-lines-gap: 0.75em; --bulma-skeleton-line-height: 0.75em; } ```
{% endcapture %} {% include markdown.html content=markdown %} {% include
docs/elements/anchor.html name="Skeleton Block" %} {% capture markdown %} The
skeleton block is a simple block element with a pulsating background. It has a
minimum height of `4.5em`. {% endcapture %} {% include markdown.html
content=markdown %} {% include docs/elements/snippet.html content=skeleton_block
%} {% capture markdown %} If you insert text inside this block, you can make its
height responsive: {% endcapture %} {% include markdown.html content=markdown %}
{% include docs/elements/snippet.html content=skeleton_block_with_text %} {%
include docs/elements/anchor.html name="Skeleton Lines" %} {% capture markdown
%} The skeleton lines element is a loading element which resembles a
**paragraph**. Each `
<div></div>
` will render as a separate loading line. {% endcapture %} {% include
markdown.html content=markdown %} {% include docs/elements/snippet.html
content=skeleton_lines %} {% include docs/elements/anchor.html name="Bulma
components with skeletons" %} {% capture markdown %} Most Bulma elements and
components have a skeleton variant, which can be enabled by adding either the
`is-skeleton` or `has-skeleton` modifier. {% endcapture %} {% include
markdown.html content=markdown %} {% include docs/elements/anchor-bis.html
name="Button" %} {% capture button_skeleton %}
<div class="buttons">
  <button class="button is-skeleton">Button</button>
  <button class="button is-link is-skeleton">Link</button>
  <button class="button is-primary is-skeleton">Primary</button>
  <button class="button is-success is-skeleton">Success</button>
  <button class="button is-info is-skeleton">Info</button>
  <button class="button is-warning is-skeleton">Warning</button>
  <button class="button is-danger is-skeleton">Danger</button>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=button_skeleton
%} {% include docs/elements/anchor-bis.html name="Icon" %} {% capture
icon_skeleton %}
<span class="icon is-skeleton">
  <i class="fas fa-reply"></i>
</span>
{% endcapture %} {% include docs/elements/snippet.html content=icon_skeleton %}
{% include docs/elements/anchor-bis.html name="Image" %} {% capture
image_skeleton %}
<figure class="image is-16x16 is-skeleton">
  <img alt="Placeholder" src="https://placehold.co/16x16" />
</figure>

<figure class="image is-32x32 is-skeleton">
  <img alt="Placeholder" src="https://placehold.co/32x32" />
</figure>

<figure class="image is-64x64 is-skeleton">
  <img alt="Placeholder" src="https://placehold.co/64x64" />
</figure>

<figure class="image is-128x128 is-skeleton">
  <img alt="Placeholder" src="https://placehold.co/128x128" />
</figure>
{% endcapture %} {% include docs/elements/snippet.html content=image_skeleton %}
{% include docs/elements/anchor-bis.html name="Media Object" %} {% capture
media_skeleton %}

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-skeleton">
      <img src="https://placehold.co/128x128" alt="Placeholder image" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content is-skeleton">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit vestibulum
        ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item"
          ><span class="icon is-small is-skeleton"
            ><i class="fas fa-reply"></i></span
        ></a>
        <a class="level-item"
          ><span class="icon is-small is-skeleton"
            ><i class="fas fa-retweet"></i></span
        ></a>
        <a class="level-item"
          ><span class="icon is-small is-skeleton"
            ><i class="fas fa-heart"></i></span
        ></a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button aria-label="delete" class="delete is-skeleton"></button>
  </div>
</article>
{% endcapture %} {% capture media_skeleton_bis %}

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-skeleton">
      <img src="https://placehold.co/128x128" alt="Placeholder image" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea
          class="textarea is-skeleton"
          placeholder="Add a comment..."
        ></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info is-skeleton">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox is-skeleton">
            <input type="checkbox" /> Press enter to submit
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>
{% endcapture %} {% include docs/elements/snippet.html content=media_skeleton %}
{% include docs/elements/snippet.html content=media_skeleton_bis %} {% include
docs/elements/anchor-bis.html name="Notification" %} {% capture
notification_skeleton %}
<div class="notification is-skeleton">
  Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis
  euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
</div>
{% endcapture %} {% include docs/elements/snippet.html
content=notification_skeleton %} {% include docs/elements/anchor-bis.html
name="Tag" %} {% capture tag_skeleton %}
<span class="tag is-skeleton">Tag</span>{% for color in
site.data.colors.justColors %}
<span class="tag is-{{ color }} is-skeleton">{{ color | capitalize }}</span>{%
endfor %} {% endcapture %} {% include docs/elements/snippet.html
content=tag_skeleton %} {% include docs/elements/anchor-bis.html name="Title and
Subtitle" %} The `.title` and `.subtitle` elements have both an `is-skeleton`
and `has-skeleton` variant: * `is-skeleton` will turn the whole block into a
loading skeleton * `has-skeleton` will turn only a small part of its content
into a loading skeleton, to simulate loading only the inner text rather than the
whole block {% include docs/elements/snippet.html content=title_is_skeleton %}
{% include docs/elements/snippet.html content=title_has_skeleton %} {% include
docs/elements/snippet.html content=subtitle_is_skeleton %} {% include
docs/elements/snippet.html content=subtitle_has_skeleton %} {% include
docs/elements/snippet.html content=title_and_subtitle_is_skeleton %} {% include
docs/elements/snippet.html content=title_and_subtitle_has_skeleton %} {% include
docs/elements/anchor-bis.html name="Form Controls" %} {% capture input_skeleton
%}
<input class="input is-skeleton" />
{% endcapture %} {% capture textarea_skeleton %}
<textarea class="textarea is-skeleton"></textarea>
{% endcapture %} {% include docs/elements/snippet.html content=input_skeleton %}
{% include docs/elements/snippet.html content=textarea_skeleton %}

<div class="skeleton-toggler display-flex align-items-center gap-2">
  <button id="js-toggle-skeleton" class="button">
    <div id="js-timer" class="timer is-active">
      <div class="timer-mask"></div>
    </div>
    <span class="mr-2">Toggle Skeleton Animations</span>
    <span class="tag is-success" style="margin-right: -0.5rem;">Active</span>
  </button>
</div>

<style type="text/css">
  .timer {
    --duration: 2;
    --size: 1.5;
    --background: var(--bulma-border-weak);
    --foreground: var(--bulma-danger);
    animation-duration: calc(var(--duration) * 1s);
    animation-iteration-count: infinite;
    animation-timing-function: steps(1000, start);
    background: linear-gradient(
      90deg,
      var(--foreground) 50%,
      var(--background) 50%
    );
    border-radius: 100%;
    height: calc(var(--size) * 1em);
    margin: 0 0.5rem 0 -0.5rem;
    mask: radial-gradient(transparent 0%, transparent 29%, #000 30%, #000 100%);
    position: relative;
    width: calc(var(--size) * 1em);
  }

  .timer.is-active {
    --foreground: var(--bulma-success);
    animation-name: anim-timer;
  }

  .timer.is-active .timer-mask {
    animation-name: anim-timer-mask;
  }

  .timer-mask {
    animation-duration: calc(var(--duration) * 1s);
    animation-iteration-count: infinite;
    animation-timing-function: steps(500, start);
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: 100% 50%;
    width: 50%;
  }

  @keyframes anim-timer {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes anim-timer-mask {
    0% {
      background: var(--background);
      transform: rotate(0deg);
    }
    50% {
      background: var(--background);
      transform: rotate(-180deg);
    }
    50.01% {
      background: var(--foreground);
      transform: rotate(0deg);
    }
    100% {
      background: var(--foreground);
      transform: rotate(-180deg);
    }
  }
</style>

<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", () => {
    const hasSkeletons = document.querySelectorAll(".has-skeleton");
    const isSkeletons = document.querySelectorAll(".is-skeleton");
    const timer = document.getElementById("js-timer");
    const toggleSkeleton = document.getElementById("js-toggle-skeleton");
    const toggleSkeletonTag = toggleSkeleton.querySelector(".tag");

    let skeletonInterval = setInterval(toggleSkeletons, 2000);

    function toggleSkeletonInterval() {
      if (skeletonInterval) {
        clearInterval(skeletonInterval);
        skeletonInterval = null;
        toggleSkeletonTag.className = "tag is-danger is-light";
        toggleSkeletonTag.textContent = "Inactive";
        timer.classList.remove("is-active");
        return;
      } else {
        skeletonInterval = setInterval(toggleSkeletons, 2000);
        toggleSkeletonTag.className = "tag is-success";
        toggleSkeletonTag.textContent = "Active";
        timer.classList.add("is-active");
      }
    }

    function toggleSkeletons() {
      hasSkeletons.forEach((el) => {
        el.classList.toggle("has-skeleton");
      });

      isSkeletons.forEach((el) => {
        el.classList.toggle("is-skeleton");
      });
    }

    toggleSkeleton.addEventListener("click", () => {
      toggleSkeletonInterval();
    });
  });
</script>
````

## File: docs/documentation/features/smart-columns.html

```html
---
title: Smart Columns in Bulma
layout: docs
theme: features
doc-tab: features
doc-subtab: smart-columns
breadcrumb:
  - home
  - documentation
  - features
  - features-smart-columns
---
```

## File: docs/documentation/features/smart-grid.html

```html
---
title: Smart Grid in Bulma
layout: docs
theme: features
doc-tab: features
doc-subtab: smart-grid
breadcrumb:
  - home
  - documentation
  - features
  - features-smart-grid
---
```

## File: docs/documentation/features/themes.md

````markdown
---
title: Themes in Bulma
layout: docs
markdown: true
theme: features
doc-tab: features
doc-subtab: themes
breadcrumb:
  - home
  - documentation
  - features
  - features-themes
---

In Bulma, a **theme** is a **collection** of CSS variables.

Bulma comes with 2 themes:

- `light.scss` (required)
- `dark.scss` (optional)

## The default themes

Because Bulma requires a default value for all CSS variables, it comes with a **default light theme** located at `/sass/themes/light.scss`.

It also comes with a **dark theme** located at `/sass/themes/dark.scss`.

The file `/sass/themes/_index.scss` takes care of including both themes, each in two ways:

- with the `@media (prefers-color-scheme: $name)` media query
- with an HTML attribute `[data-theme=$name]` and CSS class `.theme-$name` selector

The only difference is that the light theme is also defined at the top-level: `:root` (equivalent to the `html` element, the ancestor of all HTML elements on a webpage). This ensures that a **default** value is set for all CSS variables.

The CSS output of that theme resembles the following:

```css
:root {
  /* CSS Variables */
}

@media (prefers-color-scheme: light) {
  :root {
    /* CSS Variables */
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    /* CSS Variables */
  }
}

[data-theme="light"],
.theme-light {
  /* CSS Variables */
}

[data-theme="dark"],
.theme-dark {
  /* CSS Variables */
}
```

## Creating a custom theme

Creating a theme is essentially **setting your own CSS variables**. A custom theme requires:

- a name like `sunrise`
- a scope like `:root`, `[data-theme=sunrise]`, `.theme-sunrise` or all three
- a set of CSS variables and their new value

### Customizing in the browser

If you set your CSS variables under the `:root` scope, you are **overwriting** Bulma's default theme. This can be done by with Sass or CSS.

To test out the CSS method, simply follow these steps:

{% include docs/elements/step.html image="images/themes/step-1-inspect.png" content="Open your browser inspector" width=496 height=748 %}
{% include docs/elements/step.html image="images/themes/step-2-html.png" content="Select the `html` element" width=528 height=232 %}
{% include docs/elements/step.html image="images/themes/step-3-var.png" content="Insert a new value for the `--bulma-link-h` variable (the hue of the link color)" width=376 height=120 %}
{% include docs/elements/step.html image="images/themes/step-4-menu.png" content="Notice how the CSS Helpers section in the side menu changes color" width=480 height=256 %}
````

## File: docs/documentation/form.html

```html
---
title: Form
layout: docs
theme: library
doc-tab: form
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - form
---

{% include docs/components/links.html category_id='form' %}
```

## File: docs/documentation/form/checkbox.html

```html
---
title: Checkbox
layout: docs
theme: library
doc-tab: form
doc-subtab: checkbox
breadcrumb:
  - home
  - documentation
  - form
  - form-checkbox
meta:
  colors: false
  sizes: false
  variables: false
---

{% capture checkbox_example %}
<label class="checkbox">
  <input type="checkbox" />
  Remember me
</label>
{% endcapture %} {% capture checkbox_link_example %}
<label class="checkbox">
  <input type="checkbox" />
  I agree to the <a href="#">terms and conditions</a>
</label>
{% endcapture %} {% capture checkbox_disabled_example %}
<label class="checkbox" disabled>
  <input type="checkbox" disabled />
  Save my preferences
</label>
{% endcapture %} {% capture list_of_checkboxes %}
<div class="checkboxes">
  <label class="checkbox">
    <input type="checkbox" />
    Monday
  </label>

  <label class="checkbox">
    <input type="checkbox" />
    Tuesday
  </label>

  <label class="checkbox">
    <input type="checkbox" />
    Wednesday
  </label>

  <label class="checkbox">
    <input type="checkbox" />
    Thursday
  </label>

  <label class="checkbox">
    <input type="checkbox" />
    Friday
  </label>

  <label class="checkbox">
    <input type="checkbox" checked />
    Saturday
  </label>

  <label class="checkbox">
    <input type="checkbox" checked />
    Sunday
  </label>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <code>checkbox</code> class is a simple wrapper around the
    <code>&lt;input type="checkbox"&gt;</code> HTML element. It is intentionally
    not styled, to preserve cross-browser compatibility and the user experience.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ checkbox_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- checkbox_example -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    You can add <strong>links</strong> to your checkbox, or even
    <strong>disable</strong> it.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ checkbox_link_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- checkbox_link_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ checkbox_disabled_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- checkbox_disabled_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="List of Checkboxes" %}

<div class="content">
  <p>
    If you want to list several checkbox elements, wrap them in a
    <code>&lt;div class="checkboxes"&gt;</code> element:
  </p>
</div>

<div class="block">{{- list_of_checkboxes -}}</div>

{% highlight html -%} {{- list_of_checkboxes -}} {%- endhighlight %}
```

## File: docs/documentation/form/file.html

```html
---
title: File upload
layout: docs
theme: library
doc-tab: form
doc-subtab: file
breadcrumb:
  - home
  - documentation
  - form
  - form-file
file_name: "Screen Shot 2017-07-29 at 15.54.25.png"
variables_keys:
  - $file-border-color
  - $file-radius
  - $file-cta-background-color
  - $file-cta-color
  - $file-cta-hover-color
  - $file-cta-active-color
  - $file-name-border-color
  - $file-name-border-style
  - $file-name-border-width
  - $file-name-max-width
meta:
  experimental: true
  colors: true
  sizes: true
  variables: true
---

{% capture file %}
<div class="file">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% capture file_name %}
<div class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_name_right %}
<div class="file has-name is-right">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_name_fullwidth %}
<div class="file has-name is-fullwidth">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_boxed %}
<div class="file is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% capture file_boxed_name %}
<div class="file has-name is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_colors_a %}
<div class="file is-primary">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Primary file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% capture file_colors_b %}
<div class="file is-info has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Info file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_colors_c %}
<div class="file is-warning is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </span>
      <span class="file-label"> Warning file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% capture file_colors_d %}
<div class="file is-danger has-name is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-cloud-upload-alt"></i>
      </span>
      <span class="file-label"> Danger file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_centered %}
<div class="file is-centered is-boxed is-success has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Centered file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_right %}
<div class="file is-right is-info">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Right file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% capture file_javascript %}
<div id="file-js-example" class="file has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> Choose a file… </span>
    </span>
    <span class="file-name"> No file uploaded </span>
  </label>
</div>

<script>
  const fileInput = document.querySelector("#file-js-example input[type=file]");
  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector("#file-js-example .file-name");
      fileName.textContent = fileInput.files[0].name;
    }
  };
</script>
{% endcapture %}

<!--  -->

<div class="content">
  <p>
    The <code>file</code> element is a simple
    <strong>interactive label</strong> that wraps an
    <code>&lt;input type="file"&gt;</code>. It comprises several sub-elements:
  </p>
  <ul>
    <li>
      <code>file</code> the main <strong>container</strong>
      <ul>
        <li>
          <code>file-label</code> the actual <strong>interactive</strong> and
          clickable part of the element
          <ul>
            <li>
              <code>file-input</code> the <strong>native</strong> file input,
              hidden for styling purposes
            </li>
            <li>
              <code>file-cta</code> the upload <strong>call-to-action</strong>
              <ul>
                <li>
                  <code>file-icon</code> an optional
                  <strong>upload</strong> icon
                </li>
                <li><code>file-label</code> the "Choose a file…" text</li>
              </ul>
            </li>
            <li>
              <code>file-name</code> a container for the
              <strong>chosen file</strong> name
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=file %} {% include
docs/elements/anchor.html name="Modifiers" %}

<div class="columns">
  <div class="column is-6">
    <div class="content">
      <p>
        With the <code>has-name</code> modifier combined with the
        <code>file-name</code> element, you can add a
        <strong>placeholder</strong> for the selected file name.
      </p>
    </div>
    <div class="bd-example">{{ file_name }}</div>
  </div>
  <div class="column is-6 bd-highlight-full">
    {% highlight html -%} {{- file_name -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-6">
    <div class="content">
      <p>
        You can move the CTA to the <strong>right side</strong> with the
        <code>is-right</code> modifier.
      </p>
    </div>
    <div class="bd-example">{{ file_name_right }}</div>
  </div>
  <div class="column is-6 bd-highlight-full">
    {% highlight html -%} {{- file_name_right -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-6">
    <div class="content">
      <p>
        You can also <strong>expand</strong> the name to fill up the space with
        the <code>is-fullwidth</code> modifier.
      </p>
    </div>
    <div class="bd-example">{{ file_name_fullwidth }}</div>
  </div>
  <div class="column is-6 bd-highlight-full">
    {% highlight html -%} {{- file_name_fullwidth -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-6">
    <div class="content">
      <p>
        You can have a <strong>boxed block</strong> with the
        <code>is-boxed</code> modifier.
      </p>
    </div>
    <div class="bd-example">{{ file_boxed }}</div>
  </div>
  <div class="column is-6 bd-highlight-full">
    {% highlight html -%} {{- file_boxed -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-6">
    <div class="content">
      <p>
        You can <strong>combine</strong> <code>has-name</code> and
        <code>is-boxed</code>.
      </p>
    </div>
    <div class="bd-example">{{ file_boxed_name }}</div>
  </div>
  <div class="column is-6 bd-highlight-full">
    {% highlight html -%} {{- file_boxed_name -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>
    You can style the file element by appending one of the
    <strong>{{ site.data.colors.derived | size }} color modifiers</strong>:
  </p>
  <ul>
    {% for color in site.data.colors.derived %}
    <li>
      <code>is-{{ color.id }}</code>
    </li>
    {% endfor %}
  </ul>
</div>

{% include docs/elements/snippet.html content=file_colors_a %} {% include
docs/elements/snippet.html content=file_colors_b %} {% include
docs/elements/snippet.html content=file_colors_c %} {% include
docs/elements/snippet.html content=file_colors_d %} {% include
docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>You can append one of the <strong>4 available sizes</strong>:</p>
  <ul>
    <li>
      <code>is-small</code>
    </li>
    <li><code>is-normal</code> (default)</li>
    <li>
      <code>is-medium</code>
    </li>
    <li>
      <code>is-large</code>
    </li>
  </ul>
</div>

{% for size in site.data.sizes %} {% capture foobar %}
<div class="file is-{{ size }}">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> {{ size | capitalize }} file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% for size in site.data.sizes %} {% capture foobar %}
<div class="file is-{{ size }} has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> {{ size | capitalize }} file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% for size in site.data.sizes %} {% capture foobar %}
<div class="file is-{{ size }} is-boxed">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> {{ size | capitalize }} file… </span>
    </span>
  </label>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% for size in site.data.sizes %} {% capture foobar %}
<div class="file is-{{ size }} is-boxed has-name">
  <label class="file-label">
    <input class="file-input" type="file" name="resume" />
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label"> {{ size | capitalize }} file… </span>
    </span>
    <span class="file-name"> {{ page.file_name }} </span>
  </label>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Alignment" %}

<div class="content">
  <p>You can <strong>align</strong> the file input:</p>
  <ul>
    <li>
      to the <strong>center</strong> with the <code>is-centered</code> modifier
    </li>
    <li>
      to the <strong>right</strong> with the <code>is-right</code> modifier
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=file_centered %} {% include
docs/elements/snippet.html content=file_right %} {% include
docs/elements/anchor.html name="JavaScript" %}

<div class="content">
  <p>
    A file upload input requires JavaScript to <strong>retrieve</strong> the
    <strong>selected file name</strong>. Here is an example of how this could be
    done:
  </p>
</div>

{% include docs/elements/snippet.html horizontal=true content=file_javascript %}
```

## File: docs/documentation/form/general.html

```html
---
title: Form controls
layout: docs
theme: library
doc-tab: form
doc-subtab: general
breadcrumb:
  - home
  - documentation
  - form
  - form-general
variables_control_keys:
  - $control-radius
  - $control-radius-small
  - $control-padding-vertical
  - $control-padding-horizontal
variables_keys:
  - $label-color
  - $label-weight
  - $help-size
---

{% capture example %}
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" />
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input
      class="input is-success"
      type="text"
      placeholder="Text input"
      value="bulma"
    />
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input
      class="input is-danger"
      type="email"
      placeholder="Email input"
      value="hello@"
    />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" />
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question" />
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question" />
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
{% endcapture %} {% capture control_example %}
<div class="control">
  <input class="input" type="text" placeholder="Text input" />
</div>
{% endcapture %} {% capture field_example %}
<div class="field">
  <label class="label">Label</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" />
  </div>
  <p class="help">This is a help text</p>
</div>
{% endcapture %} {% capture fields_example %}
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith" />
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
  </div>
</div>
{% endcapture %} {% capture control_input_example %}
<div class="control">
  <input class="input" type="text" placeholder="Text input" />
</div>
{% endcapture %} {% capture control_select_example %}
<div class="control">
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
{% endcapture %} {% capture control_button_example %}
<div class="control">
  <button class="button is-primary">Submit</button>
</div>
{% endcapture %} {% capture icons_example %}
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" />
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">Login</button>
  </p>
</div>
{% endcapture %} {% capture select_icons_example %}
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
{% endcapture %} {% capture has_icons_small_example %}
<div class="field">
  <label class="label is-small">Small input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Normal" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
{% endcapture %} {% capture has_icons_normal_example %}
<div class="field">
  <label class="label">Normal input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Extra small" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Normal" />
    <span class="icon is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
{% endcapture %} {% capture has_icons_medium_example %}
<div class="field">
  <label class="label is-medium">Medium input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Extra small" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Small" />
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Normal" />
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
{% endcapture %} {% capture has_icons_large_example %}
<div class="field">
  <label class="label is-large">Large input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Extra small" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Small" />
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Normal" />
    <span class="icon is-large is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-large is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Large" />
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope fa-lg"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check fa-lg"></i>
    </span>
  </div>
</div>
{% endcapture %} {% capture addons_example %}
<div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a repository" />
  </div>
  <div class="control">
    <button class="button is-info">Search</button>
  </div>
</div>
{% endcapture %} {% capture addons_static_example %}
<div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="Your email" />
  </p>
  <p class="control">
    <a class="button is-static"> @gmail.com </a>
  </p>
</div>
{% endcapture %} {% capture addons_expanded_example %}
<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money" />
  </p>
  <p class="control">
    <button class="button">Transfer</button>
  </p>
</div>

<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money" />
  </p>
  <p class="control">
    <button class="button">Transfer</button>
  </p>
</div>
{% endcapture %} {% capture addons_expanded_fullwidth_example %}
<div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="country">
        <option value="Argentina">Argentina</option>
        <option value="Bolivia">Bolivia</option>
        <option value="Brazil">Brazil</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Guyana">Guyana</option>
        <option value="Paraguay">Paraguay</option>
        <option value="Peru">Peru</option>
        <option value="Suriname">Suriname</option>
        <option value="Uruguay">Uruguay</option>
        <option value="Venezuela">Venezuela</option>
      </select>
    </div>
  </div>
  <div class="control">
    <button type="submit" class="button is-primary">Choose</button>
  </div>
</div>
{% endcapture %} {% capture addons_center_example %}
<div class="field has-addons has-addons-centered">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money" />
  </p>
  <p class="control">
    <button class="button is-primary">Transfer</button>
  </p>
</div>
{% endcapture %} {% capture addons_right_example %}
<div class="field has-addons has-addons-right">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money" />
  </p>
  <p class="control">
    <button class="button is-primary">Transfer</button>
  </p>
</div>
{% endcapture %} {% capture group_example %}
<div class="field is-grouped">
  <p class="control">
    <button class="button is-primary">Submit</button>
  </p>
  <p class="control">
    <a class="button is-light"> Cancel </a>
  </p>
</div>
{% endcapture %} {% capture group_centered_example %}
<div class="field is-grouped is-grouped-centered">
  <p class="control">
    <button class="button is-primary">Submit</button>
  </p>
  <p class="control">
    <a class="button is-light"> Cancel </a>
  </p>
</div>
{% endcapture %} {% capture group_right_example %}
<div class="field is-grouped is-grouped-right">
  <p class="control">
    <button class="button is-primary">Submit</button>
  </p>
  <p class="control">
    <a class="button is-light"> Cancel </a>
  </p>
</div>
{% endcapture %} {% capture group_expanded_example %}
<div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository" />
  </p>
  <p class="control">
    <button class="button is-info">Search</button>
  </p>
</div>
{% endcapture %} {% capture group_multiline_example %}
<div class="field is-grouped is-grouped-multiline">
  <p class="control">
    <button class="button">One</button>
  </p>
  <p class="control">
    <button class="button">Two</button>
  </p>
  <p class="control">
    <button class="button">Three</button>
  </p>
  <p class="control">
    <button class="button">Four</button>
  </p>
  <p class="control">
    <button class="button">Five</button>
  </p>
  <p class="control">
    <button class="button">Six</button>
  </p>
  <p class="control">
    <button class="button">Seven</button>
  </p>
  <p class="control">
    <button class="button">Eight</button>
  </p>
  <p class="control">
    <button class="button">Nine</button>
  </p>
  <p class="control">
    <button class="button">Ten</button>
  </p>
  <p class="control">
    <button class="button">Eleven</button>
  </p>
  <p class="control">
    <button class="button">Twelve</button>
  </p>
  <p class="control">
    <button class="button">Thirteen</button>
  </p>
</div>
{% endcapture %} {% capture horizontal_form_example %}
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input
          class="input is-success"
          type="email"
          placeholder="Email"
          value="alex@smith.com"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static"> +44 </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number" />
        </p>
      </div>
      <p class="help">Do not enter the first zero</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Already a member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member" />
          No
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input
          class="input is-danger"
          type="text"
          placeholder="e.g. Partnership opportunity"
        />
      </div>
      <p class="help is-danger">This field is required</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          placeholder="Explain how we can help you"
        ></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %} {% capture field_label_example %}
<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">No padding</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          Checkbox
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-small">
    <label class="label">Small padding</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input
          class="input is-small"
          type="text"
          placeholder="Small sized input"
        />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Normal label</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Normal sized input" />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-medium">
    <label class="label">Medium label</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input
          class="input is-medium"
          type="text"
          placeholder="Medium sized input"
        />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-large">
    <label class="label">Large label</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input
          class="input is-large"
          type="text"
          placeholder="Large sized input"
        />
      </div>
    </div>
  </div>
</div>
{% endcapture %} {% capture disabled_fields_example %}
<fieldset disabled>{{ fields_example }}</fieldset>
{% endcapture %}

<div class="content">
  <p>
    Bulma supports the following native <strong>HTML form elements</strong>:
    <code>&lt;form&gt;</code> <code>&lt;button&gt;</code>
    <code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code> and
    <code>&lt;label&gt;</code>.
  </p>
  <p>The following CSS <strong>classes</strong> are supported:</p>
  <ul>
    <li><code>label</code></li>
    <li><code>input</code></li>
    <li><code>textarea</code></li>
    <li><code>select</code></li>
    <li><code>checkbox</code></li>
    <li><code>radio</code></li>
    <li><code>button</code></li>
    <li><code>help</code></li>
  </ul>
</div>

<div class="content">
  <p>
    To maintain an evenly balanced design, Bulma provides a very useful
    <code>control</code> container with which you can <strong>wrap</strong> the
    form controls.
    <br />
    When combining several controls in a <strong>form</strong>, use the
    <code>field</code> class as a <strong>container</strong>, to keep the
    spacing consistent.
  </p>
</div>

{% include docs/elements/anchor.html name="Complete form example" %} {% include
docs/elements/snippet.html content=example more=true %}

<div class="content">
  <p>
    For the best results using Bulma, it's recommended to use the
    <code>control</code> element as often as possible.
  </p>
</div>

{% include docs/elements/anchor.html name="Form field" %}

<div class="content">
  <p>The <code>field</code> container is a simple container for:</p>
  <ul>
    <li>a text <code>label</code></li>
    <li>a form <code>control</code></li>
    <li>an optional <code>help</code>text</li>
  </ul>
</div>

{% include docs/elements/snippet.html content=field_example %}

<div class="content">
  <p>
    This container allows form fields to be
    <strong>spaced consistently</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=fields_example %} {% include
docs/elements/anchor.html name="Form control" %}

<div class="content">
  <p>
    The Bulma <code>control</code> is a versatile
    <strong>block</strong> container meant to
    <strong>enhance single form controls</strong>. Because it has the same
    height as the element that it wraps, it can
    <strong class="has-text-danger">only contain</strong> the following Bulma
    elements:
  </p>

  <ul>
    <li><code>input</code></li>
    <li><code>select</code></li>
    <li><code>button</code></li>
    <li><code>icon</code></li>
  </ul>
  <p>This container gives the ability to:</p>
  <ul>
    <li>keep the <strong>spacing</strong> consistent</li>
    <li>combine form controls into a <strong>group</strong></li>
    <li>combine form controls into a <strong>list</strong></li>
    <li>append and prepend <strong>icons</strong> to a form control</li>
  </ul>
</div>

{% include docs/elements/snippet.html content=control_input_example %} {%
include docs/elements/snippet.html content=control_select_example %} {% include
docs/elements/snippet.html content=control_button_example %}

<!-- Font Awesome Icons -->
{% include docs/elements/anchor.html name="With icons" %}

<div class="content">
  <p>You can append one of 2 <strong>modifiers</strong> on a control:</p>
  <ul>
    <li>
      <code>has-icons-left</code>
    </li>
    <li>and/or <code>has-icons-right</code></li>
  </ul>
  <p>You also need to add a modifier on the <strong>icon</strong>:</p>
  <ul>
    <li><code>icon is-left</code> if <code>has-icons-left</code> is used</li>
    <li><code>icon is-right</code> if <code>has-icons-right</code> is used</li>
  </ul>
  <p>
    Make sure the input is the control's first child, otherwise the icon may
    disappear when selected. The size of the <strong>input</strong> will define
    the size of the icon container.
  </p>
</div>

{% include docs/elements/snippet.html content=icons_example clipped=true %}

<div class="content">
  <p>You can append icons to <strong>select dropdowns</strong> as well.</p>
</div>

{% include docs/elements/snippet.html content=select_icons_example %}

<div class="content">
  <p>
    If the control contains an icon, Bulma will make sure the icon remains
    <strong>centered</strong>, no matter the size of the input <em>or</em> of
    the icon.
  </p>
</div>

{% include docs/elements/snippet.html content=has_icons_small_example %} {%
include docs/elements/snippet.html content=has_icons_normal_example clipped=true
%} {% include docs/elements/snippet.html content=has_icons_medium_example
clipped=true %} {% include docs/elements/snippet.html
content=has_icons_large_example clipped=true %} {% include
docs/elements/anchor.html name="Form addons" %}

<div class="content">
  <p>
    If you want to <strong>attach controls</strong> together, use the
    <code>has-addons</code> modifier on the <code>field</code> container:
  </p>
</div>

{% include docs/elements/snippet.html content=addons_example %}

<div class="content">
  <p>You can attach inputs, buttons, and dropdowns <strong>only</strong>.</p>
</div>

<div class="content">
  <p>
    It can be useful to append a
    <a href="{{site.url}}/documentation/elements/button#static-button"
      >static button</a
    >.
  </p>
</div>

{% include docs/elements/snippet.html content=addons_static_example %}

<div class="content">
  <p>
    Use the <code>is-expanded</code> modifier on the element you want to fill up
    the remaining space (in this case, the input):
  </p>
</div>

{% include docs/elements/snippet.html content=addons_expanded_example
horizontal=true more=true %}

<div class="content">
  <p>
    If you want a full width select dropdown, pair
    <code>control is-expanded</code> with <code>select is-fullwidth</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=addons_expanded_fullwidth_example
%}

<div class="content">
  <p>
    Use the <code>has-addons-centered</code> or the
    <code>has-addons-right</code> modifiers to alter the
    <strong>alignment</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=addons_center_example %} {%
include docs/elements/snippet.html content=addons_right_example %} {% include
docs/elements/anchor.html name="Form group" %}

<div class="content">
  <p>
    If you want to <strong>group</strong> controls together, use the
    <code>is-grouped</code> modifier on the <code>field</code> container.
  </p>
</div>

{% include docs/elements/snippet.html content=group_example %}

<div class="content">
  <p>
    Use the <code>is-grouped-centered</code> or the
    <code>is-grouped-right</code> modifiers to alter the
    <strong>alignment</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=group_centered_example %} {%
include docs/elements/snippet.html content=group_right_example %}

<div class="content">
  <p>
    Add the <code>is-expanded</code> modifier on the control element you want to
    <strong>fill up the remaining space</strong> with.
  </p>
</div>

{% include docs/elements/snippet.html content=group_expanded_example %}

<div id="form-group-multiline" class="content">
  <p>
    Add the <code>is-grouped-multiline</code> modifier to allow controls to fill
    up <strong>multiple lines</strong>. This is ideal for a long list of
    controls.
  </p>
</div>

{% include docs/elements/snippet.html content=group_multiline_example
clipped=true %}

<div class="message is-info">
  <div class="message-header">
    <p>List of buttons</p>
  </div>
  <div class="message-body">
    <div class="content">
      <p>
        If you only need a list of <em>buttons</em>, try out the new
        <code>buttons</code> class with which you can create a
        <a href="{{ site.url }}/documentation/elements/button/#list-of-buttons"
          >multiline list of buttons</a
        >.
      </p>
    </div>
  </div>
</div>

{% include docs/elements/anchor.html name="Horizontal form" %}

<div class="content">
  <p>
    If you want a <strong>horizontal</strong> form control, use the
    <code>is-horizontal</code> modifier on the <code>field</code> container, in
    which you include:
  </p>
  <ul>
    <li><code>field-label</code> for the side label</li>
    <li><code>field-body</code> for the input/select/textarea container</li>
  </ul>
  <p>
    You can use <code>is-grouped</code> or <code>has-addons</code> for the child
    elements.
  </p>
</div>

{% include docs/elements/snippet.html content=horizontal_form_example
horizontal=true more=true %}

<div class="content">
  <p>
    To preserve the <strong>vertical alignment</strong> of labels with each type
    and size of control, the <code>field-label</code> comes with
    <strong>4 size modifiers</strong>:
  </p>
  <ul>
    <li>
      <code>is-small</code>
    </li>
    <li>
      <code>is-normal</code> for any <code>input</code> or <code>button</code>
    </li>
    <li>
      <code>is-medium</code>
    </li>
    <li>
      <code>is-large</code>
    </li>
  </ul>
</div>

{% include docs/elements/snippet.html content=field_label_example
horizontal=true more=true %} {% capture custom_message %} Form elements can be
<strong>customized</strong> using the following generic variables. Simply set
one or multiple of these variables <em>before</em> importing Bulma.
<a href="{{ site.url }}/documentation/overview/customize/">Learn how</a>. {%
endcapture %} {% include docs/elements/anchor.html name="Disabled form" %}

<div class="content">
  <p>
    You can disable part or a whole form by wrapping a set of controls in a
    <strong>fieldset</strong> with a <code>disabled</code> HTML attribute.
  </p>
</div>

{% include docs/elements/snippet.html content=disabled_fields_example %} {%
include docs/components/variables.html anchor_name='Control variables'
type='element' variables_keys=page.variables_control_keys
custom_message=custom_message folder='utilities' file='controls' %}
```

## File: docs/documentation/form/input.html

```html
---
title: Input
layout: docs
theme: library
doc-tab: form
doc-subtab: input
breadcrumb:
  - home
  - documentation
  - form
  - form-input
variables_keys:
  - $input-color
  - $input-background-color
  - $input-border-color
  - $input-shadow
  - $input-hover-color
  - $input-hover-border-color
  - $input-focus-color
  - $input-focus-border-color
  - $input-focus-box-shadow-size
  - $input-focus-box-shadow-color
  - $input-disabled-color
  - $input-disabled-background-color
  - $input-disabled-border-color
  - $input-arrow
  - $input-icon-color
  - $input-icon-active-color
  - $input-radius
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture input_example %}
<input class="input" type="text" placeholder="Text input" />
{% endcapture %} {% capture rounded_example %}
<input class="input is-rounded" type="text" placeholder="Rounded input" />
{% endcapture %} {% capture normal_example %}
<div class="control">
  <input class="input" type="text" placeholder="Normal input" />
</div>
{% endcapture %} {% capture hover_example %}
<div class="control">
  <input class="input is-hovered" type="text" placeholder="Hovered input" />
</div>
{% endcapture %} {% capture focus_example %}
<div class="control">
  <input class="input is-focused" type="text" placeholder="Focused input" />
</div>
{% endcapture %} {% capture loading_example %}
<div class="control is-loading">
  <input class="input" type="text" placeholder="Loading input" />
</div>
{% endcapture %} {% capture loading_sizes_example %}
<div class="field">
  <div class="control is-small is-loading">
    <input
      class="input is-small"
      type="text"
      placeholder="Small loading input"
    />
  </div>
</div>
<div class="field">
  <div class="control is-loading">
    <input class="input" type="text" placeholder="Normal loading input" />
  </div>
</div>
<div class="field">
  <div class="control is-medium is-loading">
    <input
      class="input is-medium"
      type="text"
      placeholder="Medium loading input"
    />
  </div>
</div>
<div class="field">
  <div class="control is-large is-loading">
    <input
      class="input is-large"
      type="text"
      placeholder="Large loading input"
    />
  </div>
</div>
{% endcapture %} {% capture disabled_example %}
<div class="control">
  <input class="input" type="text" placeholder="Disabled input" disabled />
</div>
{% endcapture %} {% capture readonly_example %}
<div class="control">
  <input class="input" type="text" value="This text is readonly" readonly />
</div>
{% endcapture %} {% capture static_example %}
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input
          class="input is-static"
          type="email"
          value="me@example.com"
          readonly
        />
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">To</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input" type="email" placeholder="Recipient email" />
      </p>
    </div>
  </div>
</div>
{% endcapture %} {% capture icons_example %}
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" />
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password" />
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
{% endcapture %} {% capture has_icons_small_example %}
<div class="control has-icons-left has-icons-right">
  <input class="input is-small" type="email" placeholder="Email" />
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_normal_example %}
<div class="control has-icons-left has-icons-right">
  <input class="input" type="email" placeholder="Email" />
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_medium_example %}
<div class="control has-icons-left has-icons-right">
  <input class="input is-medium" type="email" placeholder="Email" />
  <span class="icon is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_large_example %}
<div class="control has-icons-left has-icons-right">
  <input class="input is-large" type="email" placeholder="Email" />
  <span class="icon is-medium is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-medium is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <code>input</code> CSS class is meant for
    <code>&lt;input&gt;</code> HTML elements. The following
    <a href="http://htmlreference.io/element/input/" target="_blank"
      >type attributes</a
    >
    are supported:
  </p>
  <ul>
    <li><code>type="text"</code></li>
    <li><code>type="password"</code></li>
    <li><code>type="email"</code></li>
    <li><code>type="tel"</code></li>
  </ul>
  <p>Several <strong>modifiers</strong> are supported which affect:</p>
  <ul>
    <li>
      the <strong><a href="#colors">color</a></strong>
    </li>
    <li>
      the <strong><a href="#sizes">size</a></strong>
    </li>
    <li>
      the <strong><a href="#states">state</a></strong>
    </li>
  </ul>
</div>

<div class="columns">
  <div class="column is-half">{{ input_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- input_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Colors" %} {% for color in
site.data.colors.justColors %} {% capture foobar %}
<input
  class="input is-{{ color }}"
  type="text"
  placeholder="{{ color | capitalize }} input"
/>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Sizes" %} {% for size in
site.data.sizes %} {% capture foobar %}
<input
  class="input is-{{ size }}"
  type="text"
  placeholder="{{ size | capitalize }} input"
/>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Styles" %}

<div class="columns">
  <div class="column is-half">{{ rounded_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- rounded_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="States" %}

<h4 class="title is-5">Normal</h4>

<div class="columns">
  <div class="column is-half">{{ normal_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- normal_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="title is-5">Hover</h4>

<div class="columns">
  <div class="column is-half">{{ hover_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- hover_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="title is-5">Focus</h4>

<div class="columns">
  <div class="column is-half">{{ focus_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- focus_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="title is-5">Loading</h4>

<div class="columns">
  <div class="column is-half">{{ loading_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- loading_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">
    <div class="content">
      <p>
        You can resize the loading spinner by appending <code>is-small</code>,
        <code>is-medium</code> or <code>is-large</code> to the
        <code>control</code> container.
      </p>
    </div>
    {{ loading_sizes_example }}
  </div>
  <div class="column is-half">
    {% highlight html -%} {{- loading_sizes_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="title is-5">Disabled</h4>

<div class="columns">
  <div class="column is-half">{{ disabled_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- disabled_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="title is-5">Readonly and static inputs</h4>

<div class="content">
  <p>
    If you use the <code>readonly</code> HTML attribute, the input will look
    similar to a normal one, but is not editable and has no shadow.
  </p>
</div>
<div class="columns">
  <div class="column is-half">{{ readonly_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- readonly_example -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    If you <em>also</em> append the <code>is-static</code> modifier, it removes
    the background, border, shadow, and horizontal padding, while maintaining
    the <strong>vertical spacing</strong> so you can easily align the input in
    any context, like a horizontal form.
  </p>
</div>

<div class="bd-example">{{ static_example }}</div>
{% highlight html -%} {{- static_example -}} {%- endhighlight %}

<!-- Font Awesome Icons -->
{% include docs/elements/anchor.html name="With Font Awesome icons" %}

<div class="content">
  <p>You can append one of 2 <strong>modifiers</strong> on a control:</p>
  <ul>
    <li>
      <code>has-icons-left</code>
    </li>
    <li>and/or <code>has-icons-right</code></li>
  </ul>
  <p>You also need to add a modifier on the <strong>icon</strong>:</p>
  <ul>
    <li><code>icon is-left</code> if <code>has-icons-left</code> is used</li>
    <li><code>icon is-right</code> if <code>has-icons-right</code> is used</li>
  </ul>
  <p>
    The size of the <strong>input</strong> will define the size of the icon
    container.
  </p>
</div>
<div class="columns">
  <div class="column is-half">{{ icons_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- icons_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">
    <div class="content">
      <p>
        If the control contains an icon, Bulma will make sure the icon remains
        <strong>centered</strong>, no matter the size of the input
        <em>or</em> of the icon.
      </p>
    </div>
    {{ has_icons_small_example }}
  </div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_small_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_normal_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_normal_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_medium_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_medium_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_large_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_large_example -}} {%- endhighlight %}
  </div>
</div>
```

## File: docs/documentation/form/radio.html

```html
---
title: Radio button
layout: docs
theme: library
doc-tab: form
doc-subtab: radio
breadcrumb:
  - home
  - documentation
  - form
  - form-radio
meta:
  colors: false
  sizes: false
  variables: false
---

{% capture radio_example %}
<div class="control">
  <label class="radio">
    <input type="radio" name="answer" />
    Yes
  </label>
  <label class="radio">
    <input type="radio" name="answer" />
    No
  </label>
</div>
{% endcapture %} {% capture radio_default_example %}
<div class="control">
  <label class="radio">
    <input type="radio" name="foobar" />
    Foo
  </label>
  <label class="radio">
    <input type="radio" name="foobar" checked />
    Bar
  </label>
</div>
{% endcapture %} {% capture radio_disabled_example %}
<div class="control">
  <label class="radio">
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label class="radio">
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label class="radio" disabled>
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</div>
{% endcapture %} {% capture list_of_radios %}
<div class="radios">
  <label class="radio">
    <input type="radio" name="rsvp" />
    Going
  </label>
  <label class="radio">
    <input type="radio" name="rsvp" />
    Not going
  </label>
  <label class="radio" disabled>
    <input type="radio" name="rsvp" disabled />
    Maybe
  </label>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <code>radio</code> class is a simple wrapper around the
    <code>&lt;input type="radio"&gt;</code> HTML elements. It is intentionally
    not styled, to preserve cross-browser compatibility and the user experience.
  </p>
  <p>
    Make sure the linked radio buttons have the <strong>same value</strong> for
    their <code>name</code> HTML attribute.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ radio_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- radio_example -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    You can check a radio button by <strong>default</strong> by adding the
    <code>checked</code> HTML attribute to the
    <code>&lt;input&gt;</code> element.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ radio_default_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- radio_default_example -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>
    You can <strong>disable</strong> a radio button by adding the
    <code>disabled</code> HTML attribute to both the
    <code>&lt;label&gt;</code> and the <code>&lt;input&gt;</code>.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ radio_disabled_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- radio_disabled_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="List of Radio Buttons" %}

<div class="content">
  <p>
    If you want to list several radio buttons, wrap them in a
    <code>&lt;div class="radios"&gt;</code> element:
  </p>
</div>

<div class="block">{{- list_of_radios -}}</div>

{% highlight html -%} {{- list_of_radios -}} {%- endhighlight %}
```

## File: docs/documentation/form/select.html

```html
---
title: Select
layout: docs
theme: library
doc-tab: form
doc-subtab: select
breadcrumb:
  - home
  - documentation
  - form
  - form-select
meta:
  colors: true
  sizes: true
  variables: false
---

{% capture select_example %}
<div class="select">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture select_multiple_example %}
<div class="select is-multiple">
  <select multiple size="8">
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
  </select>
</div>
{% endcapture %} {% capture rounded_example %}
<div class="select is-rounded">
  <select>
    <option>Rounded dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture normal_example %}
<div class="select">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture hover_example %}
<div class="select">
  <select class="is-hovered">
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture focus_example %}
<div class="select">
  <select class="is-focused">
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture loading_example %}
<div class="select is-loading">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture disabled_example %}
<div class="select is-disabled">
  <select disabled>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% capture icons_example %}
<div class="control has-icons-left">
  <div class="select">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <div class="icon is-small is-left">
    <i class="fas fa-globe"></i>
  </div>
</div>
{% endcapture %} {% capture has_icons_small_example %}
<div class="control has-icons-left">
  <div class="select is-small">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <span class="icon is-small is-left">
    <i class="fas fa-globe"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_normal_example %}
<div class="control has-icons-left">
  <div class="select">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <span class="icon is-left">
    <i class="fas fa-globe"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_medium_example %}
<div class="control has-icons-left">
  <div class="select is-medium">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <span class="icon is-medium is-left">
    <i class="fas fa-globe"></i>
  </span>
</div>
{% endcapture %} {% capture has_icons_large_example %}
<div class="control has-icons-left">
  <div class="select is-large">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <span class="icon is-large is-left">
    <i class="fas fa-globe"></i>
  </span>
</div>
{% endcapture %}

<div class="content">
  <p>
    The <code>select</code> class is a simple wrapper around the
    <code>&lt;select&gt;</code> HTML element, which gives the styling more
    flexibility and support for icons.
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ select_example }}</div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- select_example -}} {%- endhighlight %}
  </div>
</div>

<div class="content">
  <p>Several <strong>modifiers</strong> are supported which affect:</p>
  <ul>
    <li>
      the <strong><a href="#colors">color</a></strong>
    </li>
    <li>
      the <strong><a href="#sizes">size</a></strong>
    </li>
    <li>
      the <strong><a href="#states">state</a></strong>
    </li>
  </ul>
</div>

{% include docs/elements/anchor.html name="Multiple select" %}

<div class="columns">
  <div class="column is-half">
    <div class="content">
      <p>
        You can style a <strong>multiple select</strong> dropdown, by using the
        <code>is-multiple</code> modifier, and by using the
        <code>multiple</code> HTML attribute.
      </p>
    </div>
    {{ select_multiple_example }}
  </div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- select_multiple_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Colors" %} {% for color in
site.data.colors.justColors %} {% capture foobar %}
<div class="select is-{{ color }}">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Styles" %}

<div class="content">
  <p>
    You can create a <strong>rounded dropdown</strong> by appending the
    <code>is-rounded</code> modifier:
  </p>
</div>

<div class="columns">
  <div class="column is-half">{{ rounded_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- rounded_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    The <code>select</code> element comes in <strong>4</strong> different sizes:
  </p>
</div>

{% for size in site.data.sizes %} {% capture foobar %}
<div class="select is-{{ size }}">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="States" %}

<div class="content">
  <p>
    Bulma styles the different <strong>states</strong> of the
    <code>select</code> element. Each state is available as a pseudo-class and a
    CSS class:
  </p>
  <ul>
    <li><code>:hover</code> and <code>is-hovered</code></li>
    <li><code>:focus</code> and <code>is-focused</code></li>
    <li><code>:active</code> and <code>is-active</code></li>
  </ul>
  <p>
    This allows you to obtain the style of a certain state without having to
    trigger it.
  </p>
</div>

<h4 class="subtitle">Normal</h4>

<div class="columns">
  <div class="column is-half">{{ normal_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- normal_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Hover</h4>
<div class="columns">
  <div class="column is-half">{{ hover_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- hover_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Focus</h4>
<div class="columns">
  <div class="column is-half">{{ focus_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- focus_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Loading</h4>
<div class="columns">
  <div class="column is-half">{{ loading_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- loading_example -}} {%- endhighlight %}
  </div>
</div>

{% include docs/elements/anchor.html name="With icons" %}

<div class="content">
  <p>You can append the <strong>modifier</strong> on a control:</p>
  <ul>
    <li>
      <code>has-icons-left</code>
    </li>
  </ul>
  <p>You also need to add a modifier on the <strong>icon</strong>:</p>
  <ul>
    <li><code>icon is-left</code> since <code>has-icons-left</code> is used</li>
  </ul>
  <p>
    The size of the <strong>select</strong> will define the size of the icon
    container.
  </p>
</div>
<div class="columns">
  <div class="column is-half">{{ icons_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- icons_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">
    <div class="content">
      <p>
        If the control contains an icon, Bulma will make sure the icon remains
        <strong>centered</strong>, no matter the size of the input
        <em>or</em> of the icon.
      </p>
    </div>
    {{ has_icons_small_example }}
  </div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_small_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_normal_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_normal_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_medium_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_medium_example -}} {%- endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column is-half">{{ has_icons_large_example }}</div>
  <div class="column is-half">
    {% highlight html -%} {{- has_icons_large_example -}} {%- endhighlight %}
  </div>
</div>
```

## File: docs/documentation/form/textarea.html

```html
---
title: Textarea
layout: docs
theme: library
doc-tab: form
doc-subtab: textarea
breadcrumb:
  - home
  - documentation
  - form
  - form-textarea
meta:
  colors: true
  sizes: true
  variables: true
---

{% capture textarea_example %}
<textarea class="textarea" placeholder="e.g. Hello world"></textarea>
{% endcapture %} {% capture textarea_rows_example %}
<textarea
  class="textarea"
  placeholder="10 lines of textarea"
  rows="10"
></textarea>
{% endcapture %} {% capture colors_example %}
<div class="field">
  <div class="control">
    <textarea
      class="textarea is-primary"
      placeholder="Primary textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-info" placeholder="Info textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea
      class="textarea is-success"
      placeholder="Success textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea
      class="textarea is-warning"
      placeholder="Warning textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea
      class="textarea is-danger"
      placeholder="Danger textarea"
    ></textarea>
  </div>
</div>
{% endcapture %} {% capture sizes_example %}
<div class="field">
  <div class="control">
    <textarea class="textarea is-small" placeholder="Small textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea" placeholder="Normal textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea
      class="textarea is-medium"
      placeholder="Medium textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-large" placeholder="Large textarea"></textarea>
  </div>
</div>
{% endcapture %} {% capture normal_example %}
<div class="control">
  <textarea class="textarea" placeholder="Normal textarea"></textarea>
</div>
{% endcapture %} {% capture hover_example %}
<div class="control">
  <textarea
    class="textarea is-hovered"
    placeholder="Hovered textarea"
  ></textarea>
</div>
{% endcapture %} {% capture focus_example %}
<div class="control">
  <textarea
    class="textarea is-focused"
    placeholder="Focused textarea"
  ></textarea>
</div>
{% endcapture %} {% capture loading_example %}
<div class="control is-loading">
  <textarea class="textarea" placeholder="Loading textarea"></textarea>
</div>
{% endcapture %} {% capture loading_sizes_example %}
<div class="field">
  <div class="control is-small is-loading">
    <textarea
      class="textarea is-small"
      placeholder="Small loading textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-loading">
    <textarea class="textarea" placeholder="Normal loading textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-medium is-loading">
    <textarea
      class="textarea is-medium"
      placeholder="Medium loading textarea"
    ></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-large is-loading">
    <textarea
      class="textarea is-large"
      placeholder="Large loading textarea"
    ></textarea>
  </div>
</div>
{% endcapture %} {% capture disabled_example %}
<div class="control">
  <textarea
    class="textarea"
    placeholder="Disabled textarea"
    disabled
  ></textarea>
</div>
{% endcapture %} {% capture readonly_example %}
<div class="control">
  <textarea class="textarea" readonly>This content is readonly</textarea>
</div>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <code>textarea</code> CSS class is the multiline version of the
    <a href="{{ site.data.links.by_id.form-input.path }}"
      ><code>input</code> element</a
    >:
  </p>
</div>

{% include docs/elements/snippet.html content=textarea_example %} {% capture
fixedsize_example %}
<div class="control">
  <textarea
    class="textarea has-fixed-size"
    placeholder="Fixed size textarea"
  ></textarea>
</div>
{% endcapture %}

<div class="content">
  <p>
    You can set the height of the textarea using the <code>rows</code> HTML
    attribute.
  </p>
</div>

{% include docs/elements/snippet.html content=textarea_rows_example %} {%
include docs/elements/anchor.html name="Colors" %}

<div class="content">
  <p>The <code>textarea</code> element is available in several colors:</p>
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %}
<textarea
  class="textarea is-{{ color }}"
  placeholder="{{ color | capitalize }} textarea"
></textarea>
{% endcapture %} {% include docs/elements/snippet.html content=foobar %} {%
endfor %} {% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    The <code>textarea</code> element comes in
    <strong>4 different sizes:</strong>
  </p>
</div>

{% include docs/elements/snippet.html content=sizes_example %} {% include
docs/elements/anchor.html name="States" %}

<div class="content">
  <p>
    Bulma styles the different <strong>states</strong> of the
    <code>textarea</code> element. Each state is available as a pseudo-class and
    a CSS class:
  </p>
  <ul>
    <li><code>:hover</code> and <code>is-hovered</code></li>
    <li><code>:focus</code> and <code>is-focused</code></li>
    <li><code>:active</code> and <code>is-active</code></li>
  </ul>
  <p>
    This allows you to obtain the style of a certain state without having to
    trigger it.
  </p>
</div>

<h4 class="subtitle">Normal</h4>

{% include docs/elements/snippet.html content=normal_example %}

<h4 class="subtitle">Hover</h4>

{% include docs/elements/snippet.html content=hover_example %}

<h4 class="subtitle">Focus</h4>

{% include docs/elements/snippet.html content=focus_example %}

<h4 class="subtitle">Loading</h4>

{% include docs/elements/snippet.html content=loading_example %}

<div class="columns">
  <div class="column is-half">
    <div class="content">
      <p>
        You can resize the loading spinner by appending <code>is-small</code>,
        <code>is-medium</code> or <code>is-large</code> to the
        <code>control</code> container.
      </p>
    </div>
    {{ loading_sizes_example }}
  </div>
  <div class="column is-half bd-highlight-full">
    {% highlight html -%} {{- loading_sizes_example -}} {%- endhighlight %}
  </div>
</div>

<h4 class="subtitle">Disabled</h4>

{% include docs/elements/snippet.html content=disabled_example %}

<h4 class="subtitle">Readonly</h4>

<div class="content">
  <p>
    If you use the <code>readonly</code> HTML attribute, the textarea will look
    similar to a normal one, but is not editable and has no shadow.
  </p>
</div>

{% include docs/elements/snippet.html content=readonly_example %}

<h4 class="subtitle">Fixed Size</h4>

<div class="content">
  <p>
    You can disable a <code>textarea</code> resizing by appending the
    <code>has-fixed-size</code> modifier:
  </p>
</div>

{% include docs/elements/snippet.html content=fixedsize_example %}
```

## File: docs/documentation/grid.html

```html
---
title: Grid
layout: docs
theme: library
doc-tab: grid
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - grid
---

{% include docs/components/links.html category_id='grid' %}
```

## File: docs/documentation/grid/fixed-grid.html

```html
---
title: Fixed Grid
layout: docs
theme: library
doc-library: true
doc-tab: grid
breakpoints:
  - mobile
  - tablet
  - desktop
  - widescreen
  - fullhd
breadcrumb:
  - home
  - documentation
  - grid
  - grid-fixed
---

{% capture markdown %} If instead of having a minimum column width you want a
**fixed** number of columns, wrap your grid in a `fixed-grid` container. By
default, this fixed grid has **2 columns**: {% endcapture %} {% include
markdown.html content=markdown %} {% capture fixed_count_code %}
<div class="fixed-grid">
  <div class="grid">
    {% for i in (1..11) %}
    <div class="cell">Cell {{ i }}</div>
    {% endfor %}
    <div class="cell">Cell 12</div>
  </div>
</div>
{% endcapture %} {% capture fixed_count %}
<div class="fixed-grid">
  <div class="grid">
    {% for i in (1..12) %}
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
    >
      Cell {{ i }}
    </div>
    {% endfor %}
  </div>
</div>
{% endcapture %} {{ fixed_count }} {% include docs/elements/snippet.html
content=fixed_count_code no_example=true more=true fullwidth=true
horizontal=true %} {% include docs/elements/anchor.html name="Applying fixed
grid modifiers" %} {% capture markdown %} You can change the **column count** by
adding the `has-$n-cols` modifier class with a value ranging from `1` to `12`:
{% endcapture %} {% include markdown.html content=markdown %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Column Count</th>
    </tr>
  </thead>
  <tbody>
    {% for i in (0..12) %}
    <tr>
      <td><code>has-{{ i }}-cols</code></td>
      <td><code>{{ i }}</code></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% include docs/elements/anchor.html name="Container breakpoints" %} {% capture
markdown %} You can specify a different column count **per breakpoint**: {%
endcapture %} {% include markdown.html content=markdown %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th rowspan="2">Column Count</th>
      <th>Mobile</th>
      <th>Tablet</th>
      <th>Desktop</th>
      <th>Widescreen</th>
      <th>Full HD</th>
    </tr>
    <tr>
      <td>Until <code>{{ site.data.breakpoints.mobile.to }}px</code></td>
      <td>From <code>{{ site.data.breakpoints.tablet.from }}px</code></td>
      <td>From <code>{{ site.data.breakpoints.desktop.from }}px</code></td>
      <td>From <code>{{ site.data.breakpoints.widescreen.from }}px</code></td>
      <td>From <code>{{ site.data.breakpoints.fullhd.from }}px</code></td>
    </tr>
  </thead>
  <tbody>
    {% for i in (1..12) %}
    <tr>
      <th>{{ i }}</th>
      {% for bp in page.breakpoints %}
      <td><code>has-{{ i }}-cols-{{ bp }}</code></td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
</table>

{% include docs/elements/anchor.html name="Auto Count Fixed Grid" %} {% capture
markdown %} By adding the `has-auto-count` modifier, the fixed grid will
**automatically** change its count for each **breakpoint**: * 2 on mobile * 4 on
tablet * 8 on desktop * 12 on widescreen * 16 on fullhd {% endcapture %} {%
include markdown.html content=markdown %} {% capture auto_count %}
<div class="fixed-grid has-auto-count">
  <div class="grid">
    {% for i in (1..16) %}
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
    >
      Cell {{ i }}
    </div>
    {% endfor %}
  </div>
</div>
{% endcapture %} {% capture auto_count_code %}
<div class="fixed-grid has-auto-count">
  <div class="grid">
    {% for i in (1..15) %}
    <div class="cell">Cell {{ i }}</div>
    {% endfor %}
    <div class="cell">Cell 16</div>
  </div>
</div>
{% endcapture %} {{ auto_count }} {% include docs/elements/snippet.html
content=auto_count_code no_example=true more=true fullwidth=true horizontal=true
%}
```

## File: docs/documentation/grid/grid-cells.html

```html
---
title: Grid Cells
layout: docs
theme: library
doc-library: true
doc-tab: grid
breadcrumb:
  - home
  - documentation
  - grid
  - grid-cells
---

{% capture markdown %} Each Bulma grid is comprised of several **cells**. You
can adjust the width and height of each of these cells individually, and for
each separate breakpoint. {% endcapture %} {% include markdown.html
content=markdown %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Description</th>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Which column the cell <strong>starts</strong> at</td>
      <td><code>is-col-start</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-col-start-2"></div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>
        Which column the cell <strong>ends</strong> at, counting
        <em>from the end</em>
      </td>
      <td><code>is-col-from-end</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-col-from-end-1"></div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td><strong>How many columns</strong> the cell will span</td>
      <td><code>is-col-span</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-col-span-3"></div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>Which row the cell <strong>starts</strong> at</td>
      <td><code>is-row-start</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-row-start-2"></div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>
        Which row the cell <strong>ends</strong> at, counting
        <em>from the end</em>
      </td>
      <td><code>is-row-from-end</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-row-from-end-1"></div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td><strong>How many rows</strong> the cell will span</td>
      <td><code>is-row-span</code></td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <div class="is-row-span-3"></div>
        {% endhighlight %}
      </td>
    </tr>
  </tbody>
</table>

{% comment %} -- {% endcomment %} {% include docs/elements/anchor.html
name="Column Start" %} {% capture col_start_code %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-col-start-3">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture col_start %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-col-start-3"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change which column a cell starts at. {%
endcapture %} {% include markdown.html content=markdown %} {{ col_start }} {%
include docs/elements/snippet.html content=col_start_code no_example=true
more=true fullwidth=true horizontal=true %} {% comment %} -- {% endcomment %} {%
include docs/elements/anchor.html name="Column From End" %} {% capture
col_end_code %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-col-from-end-2">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture col_end %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-col-from-end-2"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change which column a cell ends at,
counting from the end. {% endcapture %} {% include markdown.html
content=markdown %} {{ col_end }} {% include docs/elements/snippet.html
content=col_end_code no_example=true more=true fullwidth=true horizontal=true %}
{% comment %} -- {% endcomment %} {% include docs/elements/anchor.html
name="Column Span" %} {% capture col_span_code %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-col-span-2">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture col_span %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-col-span-2"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change how many columns a cell spans. {%
endcapture %} {% include markdown.html content=markdown %} {{ col_span }} {%
include docs/elements/snippet.html content=col_span_code no_example=true
more=true fullwidth=true horizontal=true %} {% comment %} -- {% endcomment %} {%
include docs/elements/anchor.html name="Row Start" %} {% capture row_start_code
%}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-row-start-3">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture row_start %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-row-start-3"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change which row a cell starts at. {%
endcapture %} {% include markdown.html content=markdown %} {{ row_start }} {%
include docs/elements/snippet.html content=row_start_code no_example=true
more=true fullwidth=true horizontal=true %} {% comment %} -- {% endcomment %} {%
include docs/elements/anchor.html name="Row From End" %} {% capture row_end_code
%}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-row-from-end-1">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture row_end %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-row-from-end-1"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change which row a cell ends at,
counting from the end. {% endcapture %} {% include markdown.html
content=markdown %} {{ row_end }} {% include docs/elements/snippet.html
content=row_end_code no_example=true more=true fullwidth=true horizontal=true %}
{% comment %} -- {% endcomment %} {% include docs/elements/anchor.html name="Row
Span" %} {% capture row_span_code %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div class="cell">Cell 1</div>
    <div class="cell is-row-span-2">Cell 2</div>
    <div class="cell">Cell 3</div>
    <div class="cell">Cell 4</div>
    <div class="cell">Cell 5</div>
    <div class="cell">Cell 6</div>
  </div>
</div>
{% endcapture %} {% capture row_span %}
<div class="fixed-grid has-4-cols">
  <div class="grid">
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 1
    </div>
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal is-row-span-2"
    >
      Cell 2
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 3
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 4
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 5
    </div>
    <div
      class="cell py-3 px-4 has-background-primary-light has-text-primary-light-invert has-radius-normal"
    >
      Cell 6
    </div>
  </div>
</div>
{% endcapture %} {% capture markdown %} Change how many rows a cell spans. {%
endcapture %} {% include markdown.html content=markdown %} {{ row_span }} {%
include docs/elements/snippet.html content=row_span_code no_example=true
more=true fullwidth=true horizontal=true %}
```

## File: docs/documentation/grid/playground.html

```html
---
title: Bulma Grid Playground
layout: docs
theme: library
doc-library: true
doc-tab: grid
breadcrumb:
  - home
  - documentation
  - grid
  - grid-playground
---

{% include docs/elements/anchor.html name="Smart Grid" %}

<div class="content">
  You can use this example to try out the Smart Grid with different column
  widths and different gap values.
</div>

<div
  class="block js-modifier"
  data-target="js-grid"
  data-output="js-output-grid"
  data-property="is-col-min"
>
  <div class="buttons are-small has-addons">
    <span class="button is-static"> Minimum Column Width </span>
    <button class="js-modifier-property dn" data-property="is-col-min"></button>
    <button class="button js-modifier-value is-link">Default</button>
    {% for i in (1..32) %}
    <button class="button js-modifier-value" data-value="{{ i }}">
      {{ i }}
    </button>
    {% endfor %}
  </div>
</div>

<div
  class="block js-modifier"
  data-target="js-grid"
  data-output="js-output-grid"
>
  <div class="buttons are-small has-addons">
    <span class="button is-static"> Property </span>
    <button class="button is-link js-modifier-property" data-property="is-gap">
      Gap
    </button>
    <button class="button js-modifier-property" data-property="is-column-gap">
      Column Gap
    </button>
    <button class="button js-modifier-property" data-property="is-row-gap">
      Row Gap
    </button>
    <span class="button is-static"> Value </span>
    <button class="button js-modifier-value is-link">Default</button>
    {% for i in (0..7) %}
    <button class="button js-modifier-value" data-value="{{ i }}">
      {{ i }}
    </button>
    <button class="button js-modifier-value" data-value="{{ i }}.5">
      {{ i }}.5
    </button>
    {% endfor %}
    <button class="button js-modifier-value" data-value="8">8</button>
  </div>
</div>

<div class="block flex has-text-small">
  <strong> HTML </strong>
  <code>&lt;div class="<span id="js-output-grid">grid</span>"&gt;</code>
</div>

{% capture auto_grid %}
<div id="js-grid" class="grid">
  {% for i in (1..24) %}
  <div
    class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
  >
    Cell {{ i }}
  </div>
  {% endfor %}
</div>
{% endcapture %} {{ auto_grid }} {% include docs/elements/anchor.html
name="Fixed Grid" %}

<div class="content">
  You can use these controls to try out the Fixed Grid with different columns
  counts.
</div>

<div
  class="block js-modifier"
  data-target="js-fixed-grid"
  data-output="js-output-fixed-grid"
  data-property-start="has"
  data-property-end="cols"
>
  <div class="buttons are-small has-addons">
    <span class="button is-static"> Column Count </span>
    <button
      class="js-modifier-property dn"
      data-property-start="has"
      data-property-end="cols"
    ></button>
    <button class="button js-modifier-value is-link">Default</button>
    {% for i in (1..12) %}
    <button class="button js-modifier-value" data-value="{{ i }}">
      {{ i }}
    </button>
    {% endfor %}
  </div>
</div>

<div class="block flex has-text-small">
  <strong> HTML </strong>
  <code
    >&lt;div class="<span id="js-output-fixed-grid">fixed-grid</span>"&gt;</code
  >
</div>

{% capture fixed_grid_playground %}
<div
  id="js-fixed-grid"
  class="fixed-grid js-resizable"
  data-target="js-resize-value"
>
  <button class="js-resizable-handle">
    <div></div>
    <div></div>
  </button>
  <div class="grid">
    {% for i in (1..24) %}
    <div
      class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
    >
      Cell {{ i }}
    </div>
    {% endfor %}
  </div>
</div>
{% endcapture %}

<div class="content">
  Use the <strong>handle</strong> on the right side to change the container's
  width: <code id="js-resize-value">1200</code>
</div>

{{ fixed_grid_playground }}

<div style="padding-top: 50vh;">
  <em>Space intentionally left blank to prevent layout jumps</em>
</div>
```

## File: docs/documentation/grid/smart-grid.html

```html
---
title: Smart Grid
layout: docs
theme: library
doc-library: true
doc-tab: grid
breadcrumb:
  - home
  - documentation
  - grid
  - grid-smart
---

{% capture markdown %} Bulma v1 comes with a new **Smart Grid**. This grid is a
2 dimensional layout component that features **flexible columns**: Bulma will
_fit_ as many columns as possible, given a minimum column width and a column and
row gap. By default, the Smart Grid has: * a minimum column width of `9rem` * a
gap of `0.75rem` {% endcapture %} {% include markdown.html content=markdown %}
{% capture basic_grid_code %}
<div class="grid">
  {% for i in (1..23) %}
  <div class="cell">Cell {{ i }}</div>
  {% endfor %}
  <div class="cell">Cell 24</div>
</div>
{% endcapture %} {% capture basic_grid %}
<div class="grid">
  {% for i in (1..24) %}
  <div
    class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
  >
    Cell {{ i }}
  </div>
  {% endfor %}
</div>
{% endcapture %} {{ basic_grid }} {% include docs/elements/snippet.html
content=basic_grid_code no_example=true more=true fullwidth=true horizontal=true
%} {% include docs/elements/anchor.html name="Smart Grid modifiers" %} {%
capture markdown %} You can change the minimum column width by increments of
`1.5rem`, by adding the `is-col-min` modifier class with a value ranging from
`0` to `32`: {% endcapture %} {% include markdown.html content=markdown %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {% for i in (1..32) %}
    <tr>
      <td><code>is-col-min-{{ i }}</code></td>
      <td><code>{{ i | times: 1.5 }}rem</code></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% capture markdown %} You can also change the `gap`, `column-gap` and/or
`row-gap` by increments of `0.5rem`: {% endcapture %} {% include markdown.html
content=markdown %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Gap Class</th>
      <th>Column Gap</th>
      <th>Row Gap</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {% for i in (0..8) %}
    <tr>
      <td><code>is-gap-{{ i }}</code></td>
      <td><code>is-column-gap-{{ i }}</code></td>
      <td><code>is-row-gap-{{ i }}</code></td>
      <td><code>{{ i | times: 0.5 }}rem</code></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% capture auto_grid_code %}
<div class="grid">
  {% for i in (1..23) %}
  <div class="cell">Cell {{ i }}</div>
  {% endfor %}
  <div class="cell">Cell 24</div>
</div>
{% endcapture %} {% capture auto_grid %}
<div id="js-grid" class="grid">
  {% for i in (1..24) %}
  <div
    class="cell py-3 px-4 has-background-primary has-text-primary-invert has-radius-normal"
  >
    Cell {{ i }}
  </div>
  {% endfor %}
</div>
{% endcapture %}
```

## File: docs/documentation/helpers.html

```html
---
title: CSS Helpers
layout: docs
theme: helpers
doc-tab: helpers
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - helpers
---

{% include docs/components/links.html category_id='helpers' %}
```

## File: docs/documentation/helpers/color-helpers.html

```html
---
title: Color helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-color
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-color
---

{% include docs/elements/anchor.html name="Text color" %}

<div class="content">
  <p>
    You can set any element to one of the <strong>10 colors</strong> or
    <strong>9 shades of grey</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Color</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-white</code></td>
      <td>{% include docs/color/white.html %}</td>
      <td class="has-text-white has-background-black">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-black</code></td>
      <td>{% include docs/color/black.html %}</td>
      <td class="has-text-black">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-light</code></td>
      <td>{% include docs/color/white-ter.html %}</td>
      <td class="has-text-light has-background-grey">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-dark</code></td>
      <td>{% include docs/color/grey-darker.html %}</td>
      <td class="has-text-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-primary</code></td>
      <td>{% include docs/color/turquoise.html %}</td>
      <td class="has-text-primary">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-link</code></td>
      <td>{% include docs/color/blue.html %}</td>
      <td class="has-text-link">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-info</code></td>
      <td>{% include docs/color/cyan.html %}</td>
      <td class="has-text-info">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-success</code></td>
      <td>{% include docs/color/green.html %}</td>
      <td class="has-text-success">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-warning</code></td>
      <td>{% include docs/color/yellow.html %}</td>
      <td class="has-text-warning">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-danger</code></td>
      <td>{% include docs/color/red.html %}</td>
      <td class="has-text-danger">Hello Bulma</td>
    </tr>
  </tbody>
</table>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Shade</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-black-bis</code></td>
      <td>{% include docs/color/black-bis.html %}</td>
      <td class="has-text-black-bis">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-black-ter</code></td>
      <td>{% include docs/color/black-ter.html %}</td>
      <td class="has-text-black-ter">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-grey-darker</code></td>
      <td>{% include docs/color/grey-darker.html %}</td>
      <td class="has-text-grey-darker">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-grey-dark</code></td>
      <td>{% include docs/color/grey-dark.html %}</td>
      <td class="has-text-grey-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-grey</code></td>
      <td>{% include docs/color/grey.html %}</td>
      <td class="has-text-grey">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-grey-light</code></td>
      <td>{% include docs/color/grey-light.html %}</td>
      <td class="has-text-grey-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-grey-lighter</code></td>
      <td>{% include docs/color/grey-lighter.html %}</td>
      <td class="has-text-grey-lighter">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-white-ter</code></td>
      <td>{% include docs/color/white-ter.html %}</td>
      <td class="has-background-black-ter has-text-white-ter">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-white-bis</code></td>
      <td>{% include docs/color/white-bis.html %}</td>
      <td class="has-background-black-bis has-text-white-bis">Hello Bulma</td>
    </tr>
  </tbody>
</table>

<p class="block">
  You can use each color in their <strong>light</strong> and
  <strong>dark versions</strong>. Simply append <code>*-light</code> or
  <code>*-dark</code>.
</p>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Light/Dark color</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-primary-light</code></td>
      <td>{% include docs/color/turquoise-light.html %}</td>
      <td class="has-background-dark has-text-primary-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-link-light</code></td>
      <td>{% include docs/color/blue-light.html %}</td>
      <td class="has-background-dark has-text-link-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-info-light</code></td>
      <td>{% include docs/color/cyan-light.html %}</td>
      <td class="has-background-dark has-text-info-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-success-light</code></td>
      <td>{% include docs/color/green-light.html %}</td>
      <td class="has-background-dark has-text-success-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-warning-light</code></td>
      <td>{% include docs/color/yellow-light.html %}</td>
      <td class="has-background-dark has-text-warning-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-danger-light</code></td>
      <td>{% include docs/color/red-light.html %}</td>
      <td class="has-background-dark has-text-danger-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-primary-dark</code></td>
      <td>{% include docs/color/turquoise-dark.html %}</td>
      <td class="has-text-primary-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-link-dark</code></td>
      <td>{% include docs/color/blue-dark.html %}</td>
      <td class="has-text-link-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-info-dark</code></td>
      <td>{% include docs/color/cyan-dark.html %}</td>
      <td class="has-text-info-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-success-dark</code></td>
      <td>{% include docs/color/green-dark.html %}</td>
      <td class="has-text-success-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-warning-dark</code></td>
      <td>{% include docs/color/yellow-dark.html %}</td>
      <td class="has-text-warning-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-danger-dark</code></td>
      <td>{% include docs/color/red-dark.html %}</td>
      <td class="has-text-danger-dark">Hello Bulma</td>
    </tr>
  </tbody>
</table>

<p class="block">
  You can also <strong>inherit</strong> the color, or use the
  <strong>current</strong> one:
</p>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Value</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-current</code></td>
      <td>{% include docs/color/current.html %}</td>
      <td class="has-text-current">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-text-inherit</code></td>
      <td>{% include docs/color/inherit.html %}</td>
      <td class="has-text-inherit">Hello Bulma</td>
    </tr>
  </tbody>
</table>

{% assign vernum = site.data.meta.version | downcase | remove: '.' | plus: 0 %}
{% include docs/elements/anchor.html name="Background color" %}

<div class="content">
  <p>
    You can set any element to one of the <strong>10 colors</strong> or
    <strong>9 shades of grey</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th colspan="2">Background color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-background-white</code></td>
      <td>{% include docs/color/white.html %}</td>
      <td class="has-background-white" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-black</code></td>
      <td>{% include docs/color/black.html %}</td>
      <td class="has-background-black" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-light</code></td>
      <td>{% include docs/color/white-ter.html %}</td>
      <td class="has-background-light" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-dark</code></td>
      <td>{% include docs/color/grey-darker.html %}</td>
      <td class="has-background-dark" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-primary</code></td>
      <td>{% include docs/color/turquoise.html %}</td>
      <td class="has-background-primary" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-link</code></td>
      <td>{% include docs/color/blue.html %}</td>
      <td class="has-background-link" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-info</code></td>
      <td>{% include docs/color/cyan.html %}</td>
      <td class="has-background-info" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-success</code></td>
      <td>{% include docs/color/green.html %}</td>
      <td class="has-background-success" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-warning</code></td>
      <td>{% include docs/color/yellow.html %}</td>
      <td class="has-background-warning" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-danger</code></td>
      <td>{% include docs/color/red.html %}</td>
      <td class="has-background-danger" style="width: 3rem"></td>
    </tr>
  </tbody>
</table>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th colspan="2">Background shade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-background-black-bis</code></td>
      <td>{% include docs/color/black-bis.html %}</td>
      <td class="has-background-black-bis" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-black-ter</code></td>
      <td>{% include docs/color/black-ter.html %}</td>
      <td class="has-background-black-ter" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-grey-darker</code></td>
      <td>{% include docs/color/grey-darker.html %}</td>
      <td class="has-background-grey-darker" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-grey-dark</code></td>
      <td>{% include docs/color/grey-dark.html %}</td>
      <td class="has-background-grey-dark" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-grey</code></td>
      <td>{% include docs/color/grey.html %}</td>
      <td class="has-background-grey" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-grey-light</code></td>
      <td>{% include docs/color/grey-light.html %}</td>
      <td class="has-background-grey-light" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-grey-lighter</code></td>
      <td>{% include docs/color/grey-lighter.html %}</td>
      <td class="has-background-grey-lighter" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-white-ter</code></td>
      <td>{% include docs/color/white-ter.html %}</td>
      <td class="has-background-white-ter" style="width: 3rem"></td>
    </tr>
    <tr>
      <td><code>has-background-white-bis</code></td>
      <td>{% include docs/color/white-bis.html %}</td>
      <td class="has-background-white-bis" style="width: 3rem"></td>
    </tr>
  </tbody>
</table>

<p class="block">
  You can use each color in their <strong>light</strong> and
  <strong>dark versions</strong>. Simply append <code>*-light</code> or
  <code>*-dark</code>.
</p>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Light/Dark background</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-background-primary-light</code></td>
      <td>{% include docs/color/turquoise-light.html %}</td>
      <td class="has-text-primary has-background-primary-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-link-light</code></td>
      <td>{% include docs/color/blue-light.html %}</td>
      <td class="has-text-link has-background-link-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-info-light</code></td>
      <td>{% include docs/color/cyan-light.html %}</td>
      <td class="has-text-info has-background-info-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-success-light</code></td>
      <td>{% include docs/color/green-light.html %}</td>
      <td class="has-text-success has-background-success-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-warning-light</code></td>
      <td>{% include docs/color/yellow-light.html %}</td>
      <td class="has-text-warning has-background-warning-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-danger-light</code></td>
      <td>{% include docs/color/red-light.html %}</td>
      <td class="has-text-danger has-background-danger-light">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-primary-dark</code></td>
      <td>{% include docs/color/turquoise-dark.html %}</td>
      <td class="has-text-white has-background-primary-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-link-dark</code></td>
      <td>{% include docs/color/blue-dark.html %}</td>
      <td class="has-text-white has-background-link-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-info-dark</code></td>
      <td>{% include docs/color/cyan-dark.html %}</td>
      <td class="has-text-white has-background-info-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-success-dark</code></td>
      <td>{% include docs/color/green-dark.html %}</td>
      <td class="has-text-white has-background-success-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-warning-dark</code></td>
      <td>{% include docs/color/yellow-dark.html %}</td>
      <td class="has-text-white has-background-warning-dark">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-danger-dark</code></td>
      <td>{% include docs/color/red-dark.html %}</td>
      <td class="has-text-white has-background-danger-dark">Hello Bulma</td>
    </tr>
  </tbody>
</table>

<p class="block">
  You can also <strong>inherit</strong> the background color, or use the
  <strong>current color</strong> as background one:
</p>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Value</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-background-current</code></td>
      <td>{% include docs/color/current.html %}</td>
      <td class="has-background-current">Hello Bulma</td>
    </tr>
    <tr>
      <td><code>has-background-inherit</code></td>
      <td>{% include docs/color/inherit.html %}</td>
      <td class="has-background-inherit">Hello Bulma</td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/helpers/flexbox-helpers.html

```html
---
title: Flexbox helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-flexbox
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-flexbox
flex-direction-values:
  - row
  - row-reverse
  - column
  - column-reverse
flex-wrap-values:
  - nowrap
  - wrap
  - wrap-reverse
justify-content-values:
  - flex-start
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly
  - start
  - end
  - left
  - right
align-content-values:
  - flex-start
  - flex-end
  - center
  - space-between
  - space-around
  - space-evenly
  - stretch
  - start
  - end
  - baseline
align-items-values:
  - stretch
  - flex-start
  - flex-end
  - center
  - baseline
  - start
  - end
  - self-start
  - self-end
align-self-values:
  - auto
  - flex-start
  - flex-end
  - center
  - baseline
  - stretch
---

<div class="content">
  <p>
    Combined with <code>is-flex</code>, all of the
    <strong>Flexbox CSS properties</strong> are available as Bulma helpers:
  </p>
  <ul>
    <li><code>flex-direction</code></li>
    <li><code>flex-wrap</code></li>
    <li><code>justify-content</code></li>
    <li><code>align-content</code></li>
    <li><code>align-items</code></li>
    <li><code>align-self</code></li>
    <li><code>flex-grow</code></li>
    <li><code>flex-shrink</code></li>
  </ul>
</div>

{% include docs/elements/anchor.html name="Flex direction" %} {% include
docs/elements/flexbox-helper-table.html property="flex-direction"
values=page.flex-direction-values %} {% include docs/elements/anchor.html
name="Flex wrap" %} {% include docs/elements/flexbox-helper-table.html
property="flex-wrap" values=page.flex-wrap-values %} {% include
docs/elements/anchor.html name="Justify content" %} {% include
docs/elements/flexbox-helper-table.html property="justify-content"
values=page.justify-content-values %} {% include docs/elements/anchor.html
name="Align content" %} {% include docs/elements/flexbox-helper-table.html
property="align-content" values=page.align-content-values %} {% include
docs/elements/anchor.html name="Align items" %} {% include
docs/elements/flexbox-helper-table.html property="align-items"
values=page.align-items-values %} {% include docs/elements/anchor.html
name="Align self" %} {% include docs/elements/flexbox-helper-table.html
property="align-self" values=page.align-self-values %} {% include
docs/elements/anchor.html name="Flex grow and flex shrink" %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Property: Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Grow</th>
    </tr>
    {% for i in (0..5) %}
    <tr>
      <td>
        <code>is-flex-grow-{{ i }}</code>
      </td>
      <td>
        <code>flex-grow: {{ i }}</code>
      </td>
    </tr>
    {% endfor %}
    <tr>
      <th colspan="2">Shrink</th>
    </tr>
    {% for i in (0..5) %}
    <tr>
      <td>
        <code>is-flex-shrink-{{ i }}</code>
      </td>
      <td>
        <code>flex-shrink: {{ i }}</code>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
```

## File: docs/documentation/helpers/other-helpers.html

```html
---
title: Other helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-other
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-other
---

<p class="block">Here are some other helpers shipped with Bulma:</p>

<table class="table is-bordered">
  <tbody>
    <tr>
      <td><code>is-clearfix</code></td>
      <td>Fixes an element's floating children</td>
    </tr>
    <tr>
      <td><code>is-pulled-left</code></td>
      <td>Moves an element to the <strong>left</strong></td>
    </tr>
    <tr>
      <td><code>is-pulled-right</code></td>
      <td>Moves an element to the <strong>right</strong></td>
    </tr>
    <tr>
      <td><code>is-overlay</code></td>
      <td>Completely <strong>covers</strong> the first positioned parent</td>
    </tr>
    <tr>
      <td><code>is-clipped</code></td>
      <td>Adds overflow <strong>hidden</strong></td>
    </tr>
    <tr>
      <td><code>is-radiusless</code></td>
      <td>Removes any <strong>radius</strong></td>
    </tr>
    <tr>
      <td><code>is-shadowless</code></td>
      <td>Removes any <strong>shadow</strong></td>
    </tr>
    <tr>
      <td><code>is-unselectable</code></td>
      <td>Prevents the text from being <strong>selectable</strong></td>
    </tr>
    <tr>
      <td><code>is-clickable</code></td>
      <td>Applies <code>cursor: pointer !important</code> to the element.</td>
    </tr>
    <tr>
      <td><code>is-relative</code></td>
      <td>Applies <code>position: relative</code> to the element.</td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/helpers/palette-helpers.html

```html
---
title: Color Palette helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-palette
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-palette
---

<p class="block">Bulma comes with 7 primary colors:</p>

<table class="table is-bordered">
  <tr>
    <td><code>text</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-text);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>link</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-link);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>primary</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-primary);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>info</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-info);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>success</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-success);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>warning</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-warning);"
      ></span>
    </td>
  </tr>
  <tr>
    <td><code>danger</code></td>
    <td>
      <span
        class="bd-color-swatch"
        style="--background: var(--bulma-danger);"
      ></span>
    </td>
  </tr>
</table>

<p class="block">
  Bulma will automatically <strong>generate a collection of shades</strong> for
  each of those colors. These act as a <strong>color palette</strong> you can
  use to play with different variants of a same color.
</p>

{% include docs/elements/anchor.html name="Text color" %}

<div class="content">
  Bulma comes with CSS classes for <strong>27 shades</strong> of each color.
  Each shade also comes with an <strong>invert</strong> equivalent, that is
  useful to combine in a foreground/background combination.
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Code</th>
      <th colspan="2">Example</th>
      <th colspan="2">Invert</th>
    </tr>
  </thead>
  <tbody>
    {% for shade in site.data.palette %} {% assign background =
    "var(--bulma-primary" | append: shade | append: ")" %} {% assign invert =
    "var(--bulma-primary" | append: shade | append: "-invert)" %}
    <tr>
      <td style="vertical-align: middle;">
        <code>has-text-primary{{ shade }}</code>
      </td>
      <td class="p-0" style="--hl-radius: 0;">
        {% highlight html %}
        <p class="has-text-primary{{ shade }}">Hello Bulma</p>
        {% endhighlight %}
      </td>
      <td style="vertical-align: middle;">
        <span class="has-text-primary{{ shade }}">Hello&nbsp;Bulma</span>
      </td>
      <td class="has-text-centered" style="vertical-align: middle;">
        {% include docs/elements/color-swatch.html background=background %}
      </td>
      <td style="vertical-align: middle;">
        <span class="has-text-primary{{ shade }}-invert">Hello&nbsp;Bulma</span>
      </td>
      <td class="has-text-centered" style="vertical-align: middle;">
        {% include docs/elements/color-swatch.html background=invert %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% include docs/elements/anchor.html name="Background color" %}

<div class="content">
  All 27 shades are also available as <strong>background helpers</strong>.
  Combined with the invert color as foreground, it's easy to make readable
  elements with just 2 classes.
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Code</th>
      <th>Example</th>
      <th>Swatch</th>
    </tr>
  </thead>
  <tbody>
    {% for shade in site.data.palette %} {% assign background =
    "var(--bulma-primary" | append: shade | append: ")" %}
    <tr>
      <td style="vertical-align: middle;">
        <code>has-background-primary{{ shade }}</code>
      </td>
      <td class="p-0" style="--hl-radius: 0;">
        <div style="max-width: 40rem; overflow: hidden;">
          {% highlight html %}
          <p
            class="has-background-primary{{ shade }} has-text-primary{{ shade }}-invert"
          >
            Hello Bulma
          </p>
          {% endhighlight %}
        </div>
      </td>
      <td
        style="vertical-align: middle;"
        class="has-background-primary{{ shade }} has-text-primary{{ shade }}-invert"
      >
        Hello Bulma
      </td>
      <td class="has-text-centered" style="vertical-align: middle;">
        {% include docs/elements/color-swatch.html background=background %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
```

## File: docs/documentation/helpers/spacing-helpers.html

```html
---
title: Spacing helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-spacing
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-spacing
shortcuts:
  margin: m
  padding: p
directions:
  all: a
  top: t
  right: r
  bottom: b
  left: l
horizontal: x
vertical: y
values:
  0: 0
  1: 0.25rem
  2: 0.5rem
  3: 0.75rem
  4: 1rem
  5: 1.5rem
  6: 3rem
  auto: auto
customShortcuts:
  margin: mg
customHorizontal: h
customValues:
  small: 10px
  medium: 30px
  large: 60px
---

<div class="content">
  <p>
    Bulma provides <strong>margin</strong> <code>m*</code> and
    <strong>padding</strong> <code>p*</code> helpers in all
    <strong>directions</strong>:
  </p>

  <ul>
    <li><code>*t</code> for <strong>top</strong></li>
    <li><code>*r</code> for <strong>right</strong></li>
    <li><code>*b</code> for <strong>bottom</strong></li>
    <li><code>*l</code> for <strong>left</strong></li>
    <li>
      <code>*x</code> horizontally for both <strong>left</strong> and
      <strong>right</strong>
    </li>
    <li>
      <code>*y</code> vertically for both <strong>top</strong> and
      <strong>bottom</strong>
    </li>
  </ul>

  <p>
    You need to <strong>combine</strong> a margin/padding prefix with a
    direction suffix. For example:
  </p>

  <ul>
    <li>for a <code>margin-top</code>, use <code>mt-*</code></li>
    <li>for a <code>padding-bottom</code>, use <code>pb-*</code></li>
    <li>
      for both <code>margin-left</code> and <code>margin-right</code>, use
      <code>mx-*</code>
    </li>
  </ul>

  <p>
    Each of these <code>property-direction</code>
    <strong>combinations</strong> needs to be appended with one of
    <strong>6 value suffixes</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <th>Suffix</th>
    <th>Value</th>
  </thead>
  <tbody>
    <tr>
      <td><code>*-0</code></td>
      <td><code>0</code></td>
    </tr>
    <tr>
      <td><code>*-1</code></td>
      <td><code>0.25rem</code></td>
    </tr>
    <tr>
      <td><code>*-2</code></td>
      <td><code>0.5rem</code></td>
    </tr>
    <tr>
      <td><code>*-3</code></td>
      <td><code>0.75rem</code></td>
    </tr>
    <tr>
      <td><code>*-4</code></td>
      <td><code>1rem</code></td>
    </tr>
    <tr>
      <td><code>*-5</code></td>
      <td><code>1.5rem</code></td>
    </tr>
    <tr>
      <td><code>*-6</code></td>
      <td><code>3rem</code></td>
    </tr>
  </tbody>
</table>

{% include docs/elements/anchor.html name="List of all spacing helpers" %}

<p class="block">
  There are <strong>112 spacing helpers</strong> to choose from:
</p>

{% include docs/components/spacing-table.html values=page.values
shortcuts=page.shortcuts directions=page.directions horizontal=page.horizontal
vertical=page.vertical %}

<div class="content">
  <p>To use these classes, simply append them to any HTML element:</p>
</div>

{% highlight html %}
<!-- Adds 1rem of margin at the bottom -->
<p class="mb-4">Margin bottom</p>

<!-- Adds 0.25rem of padding on the left and the right -->
<p class="px-1">Horizontal padding</p>

<!-- Removes the margin on the right and adds 0.75rem padding at the top -->
<p class="mr-0 pt-3">Both</p>
{% endhighlight %} {% include docs/elements/anchor.html name="Configuration" %}
{% capture custom %} $spacing-shortcuts: ("margin": "mg"); $spacing-horizontal:
"h"; $spacing-vertical: null; $spacing-values: ("small": 10px, "medium": 30px,
"large": 60px); {% endcapture %}

<div class="content">
  <p>
    Because every developer has their own preferences, and to satisfy Bulma's
    customization features, it's possible to specify your own
    <strong>class name shortcuts</strong> as well as the
    <strong>spacing values</strong>.
  </p>
  <p>For example, if you wanted:</p>
  <ul>
    <li><strong>margin</strong> to be abbreviated to <code>mg</code></li>
    <li>
      <strong>padding</strong> to be totally
      <strong class="has-text-danger">excluded</strong>
    </li>
    <li><strong>horizontal</strong> to be abbreviated to <code>h</code></li>
    <li><strong>vertical</strong> to be excluded as well</li>
    <li>
      and to only have 3 values: <strong>"small"</strong> at <code>10px</code>,
      <strong>"medium"</strong> at <code>30px</code>, and
      <strong>"large"</strong> at <code>60px</code>
    </li>
  </ul>
  <p>
    You can simplify the CSS output by customizing these
    <strong>SCSS variables</strong>:
  </p>
</div>

{% highlight scss -%} {{- custom -}} {%- endhighlight %} {% include
docs/components/spacing-table.html values=page.customValues
shortcuts=page.customShortcuts directions=page.directions
horizontal=page.customHorizontal %}

<p>
  By customizing the output, you've narrowed down the list of spacing helpers
  from 112 to only <strong>18</strong>.
</p>
```

## File: docs/documentation/helpers/typography-helpers.html

```html
---
title: Typography helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-typography
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-typography
---

{% assign sizes = site.data['sizes-list'] %} {% capture thead %}
<thead>
  <tr>
    <th>Class</th>
    {% for breakpoint_hash in site.data.breakpoints %} {% assign breakpoint =
    breakpoint_hash[1] %}
    <th>
      {{ breakpoint.name }}<br />
      {% if breakpoint.id == 'mobile' %} Up to
      <code>{{ breakpoint.to }}px</code>
      {% elsif breakpoint.id == 'fullhd' %}
      <code>{{ breakpoint.from }}px</code> and above {% else %} Between
      <code>{{ breakpoint.from }}px</code> and
      <code>{{ breakpoint.to }}px</code>
      {% endif %}
    </th>
    {% endfor %}
  </tr>
</thead>
{% endcapture %} {% capture size1 %}
<td class="is-narrow has-background-danger-light">
  <code class="has-background-danger-light"
    >{{ initial_vars['$size-1'].value }}</code
  >
</td>
{% endcapture %} {% capture unchanged %}
<td class="is-narrow has-text-grey-light">unchanged</td>
{% endcapture %} {% capture left %}
<td class="is-narrow has-background-primary-light has-text-primary">
  left-aligned
</td>
{% endcapture %} {% include docs/elements/anchor.html name="Size" %}

<div class="content">
  <p>There are <strong>{{ sizes | size }} sizes</strong> to choose from:</p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Font-size</th>
      <th>Size</th>
    </tr>
  </thead>
  <tbody>
    {% for size in sizes %}
    <tr>
      <td>
        <code>is-{{ size.name }}</code>
      </td>
      <td>
        <code>{{ size.value }}</code>
      </td>
      <td><span class="is-{{ size.name }}">Example</span></td>
    </tr>
    {% endfor %}
  </tbody>
</table>

{% include docs/elements/anchor.html name="Responsive size" %}

<div class="content">
  <p>
    You can choose a <strong>specific</strong> size for <em>each</em> viewport
    width. You simply need to append the <strong>viewport width</strong> to the
    size modifier.
  </p>
  <p>For example, here are the modifiers for <code>$size-1</code>:</p>
</div>

<div class="table-container">
  <table class="table is-bordered">
    {{ thead }}
    <tbody>
      <tr>
        <td class="is-narrow"><code>is-size-1-mobile</code></td>
        {{ size1 }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow"><code>is-size-1-touch</code></td>
        {{ size1 }} {{ size1 }} {{ unchanged }} {{ unchanged }} {{ unchanged }}
      </tr>
      <tr>
        <td class="is-narrow"><code>is-size-1-tablet</code></td>
        {{ unchanged }} {{ size1 }} {{ size1 }} {{ size1 }} {{ size1 }}
      </tr>
      <tr>
        <td class="is-narrow"><code>is-size-1-desktop</code></td>
        {{ unchanged }} {{ unchanged }} {{ size1 }} {{ size1 }} {{ size1 }}
      </tr>
      <tr>
        <td class="is-narrow"><code>is-size-1-widescreen</code></td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ size1 }} {{ size1 }}
      </tr>
      <tr>
        <td class="is-narrow"><code>is-size-1-fullhd</code></td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ size1
        }}
      </tr>
    </tbody>
  </table>
</div>

<div class="content">
  <p>You can use the same logic for each of the <strong>7 sizes</strong>.</p>
</div>

{% include docs/elements/anchor.html name="Alignment" %}

<div class="content">
  <p>
    You can align the text with the use of one of
    <strong>4 alignment helpers</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Alignment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-centered</code></td>
      <td>Makes the text <strong>centered</strong></td>
    </tr>
    <tr>
      <td><code>has-text-justified</code></td>
      <td>Makes the text <strong>justified</strong></td>
    </tr>
    <tr>
      <td><code>has-text-left</code></td>
      <td>Makes the text aligned to the <strong>left</strong></td>
    </tr>
    <tr>
      <td><code>has-text-right</code></td>
      <td>Makes the text aligned to the <strong>right</strong></td>
    </tr>
  </tbody>
</table>

{% include docs/elements/anchor.html name="Responsive Alignment" %}

<div class="content">
  <p>
    You can <strong>align text</strong> differently for each
    <strong>viewport width</strong>. Simply append the
    <strong>viewport width</strong> to the alignment modifier.
  </p>

  <p>For example, here are the modifiers for <code>has-text-left</code>:</p>
</div>

<div class="table-container">
  <table class="table is-bordered">
    {{ thead }}
    <tbody>
      <tr>
        <td class="is-narrow"><code>has-text-left-mobile</code></td>
        {{ left }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-touch</code></td>
        {{ left }} {{ left }} {{ unchanged }} {{ unchanged }} {{ unchanged }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-tablet-only</code></td>
        {{ unchanged }} {{ left }} {{ unchanged }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-tablet</code></td>
        {{ unchanged }} {{ left }} {{ left }} {{ left }} {{ left }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-desktop-only</code></td>
        {{ unchanged }} {{ unchanged }} {{ left }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-desktop</code></td>
        {{ unchanged }} {{ unchanged }} {{ left }} {{ left }} {{ left }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-widescreen-only</code></td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ left }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-widescreen</code></td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ left }} {{ left }}
      </tr>
      <tr>
        <td class="is-narrow"><code>has-text-left-fullhd</code></td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ left
        }}
      </tr>
    </tbody>
  </table>
</div>

<div class="content">
  <p>
    You can use the same logic for each of the <strong>4 alignments</strong>.
  </p>
</div>

{% include docs/elements/anchor.html name="Text transformation" %}

<div class="content">
  <p>
    You can transform the text with the use of one of
    <strong>4 text transformation helpers</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Transformation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>is-capitalized</code></td>
      <td>
        Transforms <strong>the first character</strong> of each word to
        <strong>Uppercase</strong>
      </td>
    </tr>
    <tr>
      <td><code>is-lowercase</code></td>
      <td>
        Transforms <strong>all characters</strong> to <strong>lowercase</strong>
      </td>
    </tr>
    <tr>
      <td><code>is-uppercase</code></td>
      <td>
        Transforms <strong>all characters</strong> to <strong>UPPERCASE</strong>
      </td>
    </tr>
    <tr>
      <td><code>is-italic</code></td>
      <td>
        Transforms <strong>all characters</strong> to
        <strong class="is-italic">italic</strong>
      </td>
    </tr>
    <tr>
      <td>
        <code>is-underlined</code>
      </td>
      <td><strong class="is-underlined">Underlines</strong> the text</td>
    </tr>
  </tbody>
</table>

{% include docs/elements/anchor.html name="Text weight" %}

<div class="content">
  <p>
    You can transform the text weight with the use of one of
    <strong>5 text weight helpers</strong>:
  </p>
</div>

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>has-text-weight-light</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-light">light</span>
      </td>
    </tr>
    <tr>
      <td><code>has-text-weight-normal</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-normal">normal</span>
      </td>
    </tr>
    <tr>
      <td><code>has-text-weight-medium</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-medium">medium</span>
      </td>
    </tr>
    <tr>
      <td><code>has-text-weight-semibold</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-semibold">semibold</span>
      </td>
    </tr>
    <tr>
      <td><code>has-text-weight-bold</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-bold">bold</span>
      </td>
    </tr>
    <tr>
      <td><code>has-text-weight-extrabold</code></td>
      <td>
        Transforms text weight to
        <span class="has-text-weight-extrabold">extrabold</span>
      </td>
    </tr>
  </tbody>
</table>

{% include docs/elements/anchor.html name="Font family" %}

<div class="content">
  <p>
    You can change the font family with the use of one of
    <strong>5 font family helpers</strong>:
  </p>
</div>

{% assign font_families = 'sans-serif,monospace,primary,secondary,code' | split:
',' %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Family</th>
    </tr>
  </thead>
  <tbody>
    {% for family in font_families %}
    <tr>
      <td>
        <code>is-family-{{ family }}</code>
      </td>
      <td>Sets font family to <code>$family-{{ family }}</code></td>
    </tr>
    {% endfor %}
  </tbody>
</table>
```

## File: docs/documentation/helpers/visibility-helpers.html

```html
---
title: Responsive helpers
layout: docs
theme: helpers
doc-tab: helpers
doc-subtab: helpers-visibility
breadcrumb:
  - home
  - documentation
  - helpers
  - helpers-visibility
---

{% capture thead %}
<thead>
  <tr>
    <th>Class</th>
    {% for breakpoint_hash in site.data.breakpoints %} {% assign breakpoint =
    breakpoint_hash[1] %}
    <th>
      {{ breakpoint.name }}<br />
      {% if breakpoint.id == 'mobile' %} Up to
      <code>{{ breakpoint.to }}px</code>
      {% elsif breakpoint.id == 'fullhd' %}
      <code>{{ breakpoint.from }}px</code> and above {% else %} Between
      <code>{{ breakpoint.from }}px</code> and
      <code>{{ breakpoint.to }}px</code>
      {% endif %}
    </th>
    {% endfor %}
  </tr>
</thead>
{% endcapture %} {% capture flex %}
<td class="is-narrow has-text-primary has-background-primary-light">Flex</td>
{% endcapture %} {% capture visible %}
<td class="is-narrow has-text-success has-background-success-light">Visible</td>
{% endcapture %} {% capture hidden %}
<td class="is-narrow has-text-danger has-background-danger-light">Hidden</td>
{% endcapture %} {% capture unchanged %}
<td class="is-narrow has-text-grey-light">Unchanged</td>
{% endcapture %} {% include docs/elements/anchor.html name="Show" %}

<div class="content">
  <p>You can use one of the following <code>display</code> classes:</p>
  <ul>
    <li><code>is-block</code></li>
    <li><code>is-flex</code></li>
    <li><code>is-inline</code></li>
    <li><code>is-inline-block</code></li>
    <li><code>is-inline-flex</code></li>
  </ul>
  <p>For example, here's how the <code>is-flex</code> helper works:</p>
</div>

<div class="table-container">
  <table class="table is-bordered">
    {{ thead }}
    <tbody>
      <tr>
        <td class="is-narrow">
          <code>is-flex-mobile</code>
        </td>
        {{ flex }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-tablet-only</code>
        </td>
        {{ unchanged }} {{ flex }} {{ unchanged }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-desktop-only</code>
        </td>
        {{ unchanged }} {{ unchanged }} {{ flex }} {{ unchanged }} {{ unchanged
        }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-widescreen-only</code>
        </td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ flex }} {{ unchanged
        }}
      </tr>
      <tr>
        <th colspan="5">
          <p>
            Classes to display <strong>up to</strong> or <strong>from</strong> a
            specific breakpoint
          </p>
        </th>
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-touch</code>
        </td>
        {{ flex }} {{ flex }} {{ unchanged }} {{ unchanged }} {{ unchanged }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-tablet</code>
        </td>
        {{ unchanged }} {{ flex }} {{ flex }} {{ flex }} {{ flex }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-desktop</code>
        </td>
        {{ unchanged }} {{ unchanged }} {{ flex }} {{ flex }} {{ flex }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-widescreen</code>
        </td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ flex }} {{ flex }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-flex-fullhd</code>
        </td>
        {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ unchanged }} {{ flex
        }}
      </tr>
    </tbody>
  </table>
</div>

<div class="content">
  <p>
    For the other display options, just replace <code>is-flex</code> with
    <code>is-block</code> <code>is-inline</code> <code>is-inline-block</code> or
    <code>is-inline-flex</code>
  </p>
</div>

{% include docs/elements/anchor.html name="Hide" %}

<div class="table-container">
  <table class="table is-bordered">
    {{ thead }}
    <tbody>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-mobile</code>
        </td>
        {{ hidden }} {{ visible }} {{ visible }} {{ visible }} {{ visible }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-tablet-only</code>
        </td>
        {{ visible }} {{ hidden }} {{ visible }} {{ visible }} {{ visible }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-desktop-only</code>
        </td>
        {{ visible }} {{ visible }} {{ hidden }} {{ visible }} {{ visible }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-widescreen-only</code>
        </td>
        {{ visible }} {{ visible }} {{ visible }} {{ hidden }} {{ visible }}
      </tr>
      <tr>
        <th colspan="5">
          <p>
            Classes to hide <strong>up to</strong> or <strong>from</strong> a
            specific breakpoint
          </p>
        </th>
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-touch</code>
        </td>
        {{ hidden }} {{ hidden }} {{ visible }} {{ visible }} {{ visible }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-tablet</code>
        </td>
        {{ visible }} {{ hidden }} {{ hidden }} {{ hidden }} {{ hidden }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-desktop</code>
        </td>
        {{ visible }} {{ visible }} {{ hidden }} {{ hidden }} {{ hidden }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-widescreen</code>
        </td>
        {{ visible }} {{ visible }} {{ visible }} {{ hidden }} {{ hidden }}
      </tr>
      <tr>
        <td class="is-narrow">
          <code>is-hidden-fullhd</code>
        </td>
        {{ visible }} {{ visible }} {{ visible }} {{ visible }} {{ hidden }}
      </tr>
    </tbody>
  </table>
</div>

{% include docs/elements/anchor.html name="Other visibility helpers" %}

<table class="table is-bordered">
  <tbody>
    <tr>
      <td><code>is-invisible</code></td>
      <td>Adds visibility <strong>hidden</strong></td>
    </tr>
    <tr>
      <td><code>is-hidden</code></td>
      <td>Hides element</td>
    </tr>
    <tr>
      <td><code>is-sr-only</code></td>
      <td>
        Hide elements <strong>visually</strong> but keep the element available
        to be announced by a
        <strong>screen reader</strong>
      </td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/layout.html

```html
---
title: Layout
layout: docs
theme: library
doc-tab: layout
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - layout
---

{% include docs/components/links.html category_id='layout' %}
```

## File: docs/documentation/layout/container.html

```html
---
title: Container
layout: docs
theme: library
fullwidth: true
hide_categories: true
doc-tab: layout
doc-subtab: container
breadcrumb:
  - home
  - documentation
  - layout
  - layout-container
meta:
  colors: false
  sizes: true
  variables: true
  hide_css_vars: true
---

{% capture container_example %}
<div class="container">
  <div class="notification is-primary">
    This container is <strong>centered</strong> on desktop and larger viewports.
  </div>
</div>
{% endcapture %} {% capture container_fluid_example %}
<div class="container is-fluid">
  <div class="notification is-primary">
    This container is <strong>fluid</strong>: it will have a 32px gap on either
    side, on any viewport size.
  </div>
</div>
{% endcapture %} {% capture container_widescreen_example %}
<div class="container is-widescreen">
  <div class="notification is-primary">
    This container is <strong>fullwidth</strong> <em>until</em> the
    <code>$widescreen</code> breakpoint.
  </div>
</div>
{% endcapture %} {% capture container_fullhd_example %}
<div class="container is-fullhd">
  <div class="notification is-primary">
    This container is <strong>fullwidth</strong> <em>until</em> the
    <code>$fullhd</code> breakpoint.
  </div>
</div>
{% endcapture %} {% capture container_max_tablet_example %}
<div class="container is-max-tablet">
  <div class="notification is-primary">
    This container has a <code>max-width</code> of
    <code>$tablet - $container-offset</code>.
  </div>
</div>
{% endcapture %} {% capture container_max_desktop_example %}
<div class="container is-max-desktop">
  <div class="notification is-primary">
    This container has a <code>max-width</code> of
    <code>$desktop - $container-offset</code> on widescreen and fullhd.
  </div>
</div>
{% endcapture %} {% capture container_max_widescreen_example %}
<div class="container is-max-widescreen">
  <div class="notification is-primary">
    This container has a <code>max-width</code> of
    <code>$widescreen - $container-offset</code> on fullhd.
  </div>
</div>
{% endcapture %} {% assign bp_tablet = site.data.breakpoints.tablet %} {% assign
bp_desktop = site.data.breakpoints.desktop %} {% assign bp_widescreen =
site.data.breakpoints.widescreen %} {% assign bp_fullhd =
site.data.breakpoints.fullhd %} {% assign container_offset = 64 %} {% capture
thead %}
<thead>
  <tr>
    <th class="bd-is-empty"></th>
    {% for breakpoint_hash in site.data.breakpoints %} {% assign breakpoint =
    breakpoint_hash[1] %} {% if breakpoint.id == 'tablet' %}
    <th>
      Below
      <br />
      <code>{{ bp_tablet.to }}px</code>
    </th>
    {% elsif breakpoint.id != 'mobile' %}
    <th>
      {{ breakpoint.name }}
      <br />
      {% if breakpoint.id == 'fullhd' %}
      <code>{{ breakpoint.from }}px</code> and above {% else %} Between
      <code>{{ breakpoint.from }}px</code> and
      <code>{{ breakpoint.to }}px</code>
      {% endif %}
    </th>
    {% endif %} {% endfor %}
  </tr>
</thead>
{% endcapture %}

<div class="content">
  <p>
    The <code>container</code> is a simple utility element that allows you to
    <strong>center</strong> content on larger viewports. It can be used in any
    context, but mostly as a <strong>direct child</strong> of one of the
    following:
  </p>
  <ul>
    <li><code>navbar</code></li>
    <li><code>hero</code></li>
    <li><code>section</code></li>
    <li><code>footer</code></li>
  </ul>
</div>

<!--  -->
{% include docs/elements/anchor.html name="Overview" %}

<div class="table-container">
  <table class="table is-bordered">
    <thead>
      <tr>
        {{ thead }}
      </tr>
      <tr>
        <th>Class</th>
        <th colspan="4" class="has-text-centered"><code>max-width</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>.container</code></td>
        <td class="has-text-grey-light has-background-white-ter">Full width</td>
        <td>
          <code>{{ bp_desktop.from | minus: container_offset }}px</code>
        </td>
        <td>
          <code>{{ bp_widescreen.from | minus: container_offset }}px</code>
        </td>
        <td>
          <code>{{ bp_fullhd.from | minus: container_offset }}px</code>
        </td>
      </tr>
      <tr>
        <td><code>.container.is-widescreen</code></td>
        <td colspan="2" class="has-text-grey-light has-background-white-ter">
          Full width
        </td>
        <td>
          <code>{{ bp_widescreen.from | minus: container_offset }}px</code>
        </td>
        <td>
          <code>{{ bp_fullhd.from | minus: container_offset }}px</code>
        </td>
      </tr>
      <tr>
        <td><code>.container.is-fullhd</code></td>
        <td colspan="3" class="has-text-grey-light has-background-white-ter">
          Full width
        </td>
        <td>
          <code>{{ bp_fullhd.from | minus: container_offset }}px</code>
        </td>
      </tr>
      <tr>
        <td><code>.container.is-max-desktop</code></td>
        <td class="has-text-grey-light has-background-white-ter">Full width</td>
        <td colspan="3">
          <code>{{ bp_desktop.from | minus: container_offset }}px</code>
        </td>
      </tr>
      <tr>
        <td><code>.container.is-max-widescreen</code></td>
        <td class="has-text-grey-light has-background-white-ter">Full width</td>
        <td>
          <code>{{ bp_desktop.from | minus: container_offset }}px</code>
        </td>
        <td colspan="2">
          <code>{{ bp_widescreen.from | minus: container_offset }}px</code>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!--  -->
{% include docs/elements/anchor.html name="Default behavior" %}

<div class="content">
  <p>
    By default, the <code>container</code> will only be activated from the
    <code>$desktop</code> breakpoint. It will increase its
    <code>max-width</code> after reaching the <code>$widescreen</code> and
    <code>$fullhd</code> breakpoints.
  </p>
  <p>
    The container's <strong>width</strong> for each
    <strong>breakpoint</strong> is the result of:
    <code>$device - (2 * $gap)</code>. The <code>$gap</code> variable has a
    default value of <code> 32px</code> but can be modified.
  </p>
  <p>This is how the container will behave:</p>
  <ul>
    <li>
      on <code>$desktop</code> it will have a maximum width of
      <strong>960px</strong>.
    </li>
    <li>
      on <code>$widescreen</code> it will have a maximum width of
      <strong>1152px</strong>.
    </li>
    <li>
      on <code>$fullhd</code> it will have a maximum width of
      <strong>1344px</strong>.
    </li>
  </ul>
  <p>
    The values <strong>960</strong>, <strong>1152</strong> and
    <strong>1344</strong> have been chosen because they are divisible by both
    <strong>12</strong> and <strong>16</strong>.
  </p>
</div>

<div class="bd-example is-fullwidth">{{ container_example }}</div>

{% highlight html -%} {{- container_example -}} {%- endhighlight %}

<!--  -->
{% include docs/elements/anchor.html name="Widescreen or FullHD only" %}

<div class="content">
  <p>
    With the two modifiers <code>is-widescreen</code> and
    <code>is-fullhd</code>, you can have a <em>fullwidth</em> container
    <strong>until</strong> those specific breakpoints.
  </p>
</div>

<div class="bd-example is-fullwidth">{{ container_widescreen_example }}</div>

{% highlight html -%} {{- container_widescreen_example -}} {%- endhighlight %}

<div class="bd-example is-fullwidth">{{ container_fullhd_example }}</div>

{% highlight html -%} {{- container_fullhd_example -}} {%- endhighlight %}

<!--  -->
{% include docs/elements/anchor.html name="Tablet, Desktop and Widescreen
maximum widths" %}

<div class="content">
  <p>
    Sometimes, you might want a <strong>narrow</strong> container on larger
    viewports. That's why Bulma provides 3 modifier classes:
  </p>
  <ul>
    <li>
      <code>.container.is-max-tablet</code> will behave like a tablet container
    </li>
    <li>
      <code>.container.is-max-desktop</code> will behave like a desktop
      container
    </li>
    <li>
      <code>.container.is-max-widescreen</code> will behave like a widescreen
      container
    </li>
  </ul>
</div>

<div class="bd-example is-fullwidth">{{ container_max_tablet_example }}</div>

{% highlight html -%} {{- container_max_tablet_example -}} {%- endhighlight %}

<div class="bd-example is-fullwidth">{{ container_max_desktop_example }}</div>

{% highlight html -%} {{- container_max_desktop_example -}} {%- endhighlight %}

<div class="bd-example is-fullwidth">
  {{ container_max_widescreen_example }}
</div>

{% highlight html -%} {{- container_max_widescreen_example -}} {%- endhighlight
%}

<!--  -->
{% include docs/elements/anchor.html name="Absolute maximum width" %}

<div class="content">
  <p>
    If you want to change the maximum width of <strong>all</strong> containers,
    you can do so by updating the values of the
    <code>$container-max-width</code> Sass variable.
  </p>
  <p>
    By default, the <code>$fullhd</code> breakpoint value is used to calculate
    the <strong>absolute</strong> maximum width of the <code>container</code>.
    Simply change it to a smaller value like <code>$widescreen</code>,
    <code>$desktop</code>, or any value in <strong>pixels</strong>.
  </p>
</div>

<!--  -->
{% include docs/elements/anchor.html name="Fluid container" %}

<div class="content">
  <p>
    If you don't want to have a maximum width but want to keep the 32px margin
    on the left and right sides, add the
    <code>is-fluid</code> modifier:
  </p>
</div>

<div class="bd-example is-fullwidth">{{ container_fluid_example }}</div>

{% highlight html -%} {{- container_fluid_example -}} {%- endhighlight %}
```

## File: docs/documentation/layout/footer.html

```html
---
title: Footer
layout: docs
theme: library
doc-tab: layout
doc-subtab: footer
breadcrumb:
  - home
  - documentation
  - layout
  - layout-footer
meta:
  variables: true
---

{% capture footer_example %}
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
      The source code is licensed
      <a href="https://opensource.org/license/mit">MIT</a>. The website content
      is licensed
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
        >CC BY NC SA 4.0</a
      >.
    </p>
  </div>
</footer>
{% endcapture %}

<div class="content">
  <p>
    The Bulma <strong>footer</strong> is a simple container, with lots of bottom
    padding, making it great as the last element of any webpage.
  </p>
</div>

{% include docs/elements/snippet.html content=footer_example horizontal=true
more=true %}
```

## File: docs/documentation/layout/hero.html

```html
---
title: Hero
layout: docs
theme: library
fullwidth: true
hide_categories: true
hide_fortyfour: true
doc-tab: layout
doc-subtab: hero
breadcrumb:
  - home
  - documentation
  - layout
  - layout-hero
meta:
  colors: true
  sizes: true
  variables: true
---

<div class="content">
  <p>
    The hero component allows you to add a <strong>full width banner</strong> to
    your webpage, which can optionally cover the full height of the page as
    well.
  </p>
  <p>The basic requirement of this component are:</p>
  <ul>
    <li>
      <code>hero</code> as the main container
      <ul>
        <li>
          <code>hero-body</code> as a direct child, in which you can put all
          your content
        </li>
      </ul>
    </li>
  </ul>
  <p>
    For the <a href="#fullheight-hero">fullheight hero</a> to work, you will
    also need a <code>hero-head</code> and a <code>hero-foot</code>.
  </p>
</div>

{% capture hero_example %}
<section class="hero">
  <div class="hero-body">
    <p class="title">Hero title</p>
    <p class="subtitle">Hero subtitle</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=hero_example
horizontal=true fullwidth=true %} {% include docs/elements/anchor.html
name="Colors" %}

<div class="content">
  As with buttons, you can choose one of the
  <strong>8 different colors</strong>:
</div>

{% for color in site.data.colors.justColors %} {% capture foobar %}
<section class="hero is-{{ color }}">
  <div class="hero-body">
    <p class="title">{{ color | capitalize }} hero</p>
    <p class="subtitle">{{ color | capitalize }} subtitle</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=foobar
horizontal=true fullwidth=true %} {% endfor %}

<!--  -->

{% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    You can have even more imposing banners by using one of
    <strong>5 different sizes</strong>:
  </p>
  <ul>
    <li><code>is-small</code></li>
    <li><code>is-medium</code></li>
    <li><code>is-large</code></li>
    <li><code>is-halfheight</code></li>
    <li><code>is-fullheight</code></li>
  </ul>
</div>

{% capture small_hero %}
<section class="hero is-small is-primary">
  <div class="hero-body">
    <p class="title">Small hero</p>
    <p class="subtitle">Small subtitle</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=small_hero
horizontal=true fullwidth=true %} {% capture medium_hero %}
<section class="hero is-medium is-link">
  <div class="hero-body">
    <p class="title">Medium hero</p>
    <p class="subtitle">Medium subtitle</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=medium_hero
horizontal=true fullwidth=true %} {% capture large_hero %}
<section class="hero is-large is-info">
  <div class="hero-body">
    <p class="title">Large hero</p>
    <p class="subtitle">Large subtitle</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=large_hero
horizontal=true fullwidth=true %}

<div id="halfheight-hero"></div>

{% capture halfheight_example %}
<section class="hero is-success is-halfheight">
  <div class="hero-body">
    <div class="">
      <p class="title">Half height hero</p>
      <p class="subtitle">Half height subtitle</p>
    </div>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html
content=halfheight_example horizontal=true fullwidth=true %}

<div id="fullheight-hero"></div>

{% capture fullheight_example %}
<section class="hero is-danger is-fullheight">
  <div class="hero-body">
    <div class="">
      <p class="title">Fullheight hero</p>
      <p class="subtitle">Fullheight subtitle</p>
    </div>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html
content=fullheight_example horizontal=true fullwidth=true %}

<!-- Fullheight with navbar -->
{% include docs/elements/anchor.html name="Fullheight with navbar" %}

<div class="content">
  <p>
    If you are using a
    <a href="{{ site.url }}/documentation/components/navbar/#fixed-navbar"
      >fixed navbar</a
    >, you can use the <code>is-fullheight-with-navbar</code> modifier on the
    hero for it to occupy the viewport height minus the navbar height.
  </p>
</div>

{% capture fullheight_with_navbar_example %} {% include
docs/examples/navbar-basic.html %}

<section class="hero is-link is-fullheight-with-navbar">
  <div class="hero-body">
    <p class="title">Fullheight hero with navbar</p>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html
content=fullheight_with_navbar_example horizontal=true fullwidth=true %}

<!-- Fullheight with 3 parts -->
{% include docs/elements/anchor.html name="Fullheight hero in 3 parts" %}

<div class="content">
  <p>
    To obtain a hero that will cover the whole height of the viewport, you can
    split it in
    <strong>3 vertical parts</strong>:
  </p>
  <ul>
    <li>
      <code>hero</code>
      <ul>
        <li><code>hero-head</code> (always at the top)</li>
        <li><code>hero-body</code> (always vertically centered)</li>
        <li><code>hero-foot</code> (always at the bottom)</li>
      </ul>
    </li>
  </ul>
</div>

{% capture heroNavbarA %}
<section class="hero is-primary is-medium">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="{{ site.url }}/assets/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
{% endcapture %} {% capture heroNavbarB %}
<section class="hero is-info is-large">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="{{ site.url }}/assets/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active">
            <a>Overview</a>
          </li>
          <li>
            <a>Modifiers</a>
          </li>
          <li>
            <a>Grid</a>
          </li>
          <li>
            <a>Elements</a>
          </li>
          <li>
            <a>Components</a>
          </li>
          <li>
            <a>Layout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
{% endcapture %} {% capture heroNavbarC %}
<section class="hero is-success is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="{{ site.url }}/assets/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active"> Home </a>
            <a class="navbar-item"> Examples </a>
            <a class="navbar-item"> Documentation </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">Title</p>
      <p class="subtitle">Subtitle</p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
{% endcapture %} {% include docs/elements/snippet.html content=heroNavbarA
horizontal=true fullwidth=true more=true %} {% include
docs/elements/snippet.html content=heroNavbarB horizontal=true fullwidth=true
more=true %} {% include docs/elements/snippet.html content=heroNavbarC
horizontal=true fullwidth=true more=true %}
```

## File: docs/documentation/layout/level.html

```html
---
title: Level
layout: docs
theme: library
doc-tab: layout
doc-subtab: level
breadcrumb:
  - home
  - documentation
  - layout
  - layout-level
meta:
  variables: true
  hide_css_vars: true
---

{% capture nav_example %}
<!-- Main container -->
<nav class="level">
  <!-- Left side -->
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5"><strong>123</strong> posts</p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a post" />
        </p>
        <p class="control">
          <button class="button">Search</button>
        </p>
      </div>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
    <p class="level-item"><strong>All</strong></p>
    <p class="level-item"><a>Published</a></p>
    <p class="level-item"><a>Drafts</a></p>
    <p class="level-item"><a>Deleted</a></p>
    <p class="level-item"><a class="button is-success">New</a></p>
  </div>
</nav>
{% endcapture %} {% capture nav_centered_example %}
<nav class="level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
{% endcapture %} {% capture nav_centered_bis_example %}
<nav class="level">
  <p class="level-item has-text-centered">
    <a class="link is-info">Home</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Menu</a>
  </p>
  <p class="level-item has-text-centered">
    <img
      src="{{ site.url }}/assets/images/bulma-type.png"
      alt=""
      style="height: 30px"
    />
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Reservations</a>
  </p>
  <p class="level-item has-text-centered">
    <a class="link is-info">Contact</a>
  </p>
</nav>
{% endcapture %} {% capture nav_mobile_example %}
<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>
{% endcapture %}

<div class="content">
  <p>The <strong>structure</strong> of a level is the following:</p>
  <ul>
    <li>
      <code>level</code>: main container
      <ul>
        <li><code>level-left</code> for the left side</li>
        <li>
          <code>level-right</code> for the right side
          <ul>
            <li><code>level-item</code> for each individual element</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>
    In a <code>level-item</code>, you can then insert almost
    <em>anything</em> you want: a title, a button, a text input, or just simple
    text. No matter what elements you put inside a Bulma <code>level</code>,
    they will always be <strong>vertically centered</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=nav_example horizontal=true
more=true %} {% include docs/elements/anchor.html name="Centered level" %}

<div class="content">
  If you want a <strong>centered level</strong>, you can use as many
  <code>level-item</code> as you want, as long as they are
  <strong>direct</strong> children of the <code>level</code> container.
</div>

{% include docs/elements/snippet.html content=nav_centered_example
horizontal=true more=true %} {% include docs/elements/snippet.html
content=nav_centered_bis_example horizontal=true more=true %} {% include
docs/elements/anchor.html name="Mobile level" %}

<div class="content">
  By default, for space concerns, the level is vertical on mobile. If you want
  the level to be horizontal on mobile as well, add the
  <code>is-mobile</code> modifier on the <code>level</code> container.
</div>

{% include docs/elements/snippet.html content=nav_mobile_example horizontal=true
more=true %}
```

## File: docs/documentation/layout/media-object.html

```html
---
title: Media Object
layout: docs
theme: library
doc-tab: layout
doc-subtab: media-object
breadcrumb:
  - home
  - documentation
  - layout
  - layout-media
meta:
  variables: true
---

{% capture media_example %}
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{site.url}}/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
        sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
{% endcapture %} {% capture media_bis_example %}
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{site.url}}/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <a class="button is-info">Submit</a>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <label class="checkbox">
            <input type="checkbox" /> Press enter to submit
          </label>
        </div>
      </div>
    </nav>
  </div>
</article>
{% endcapture %} {% capture media_nested_example %}
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{site.url}}/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
        lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
        sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br />
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="{{site.url}}/assets/images/placeholders/96x96.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Sean Brown</strong>
            <br />
            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
            leo feugiat.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>

        <article class="media">
          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
          cursus ullamcorper sit amet nec massa.
        </article>

        <article class="media">
          Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
          Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
          tincidunt iaculis diam non, porta aliquet tortor.
        </article>
      </div>
    </article>

    <article class="media">
      <figure class="media-left">
        <p class="image is-48x48">
          <img src="{{site.url}}/assets/images/placeholders/96x96.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Kayli Eunice </strong>
            <br />
            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
            Maecenas varius felis sit amet magna vestibulum euismod malesuada
            cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id
            feugiat.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
          </p>
        </div>
      </div>
    </article>
  </div>
</article>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="{{site.url}}/assets/images/placeholders/128x128.png" />
    </p>
  </figure>
  <div class="media-content">
    <div class="field">
      <p class="control">
        <textarea class="textarea" placeholder="Add a comment..."></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button">Post comment</button>
      </p>
    </div>
  </div>
</article>
{% endcapture %}

<div class="content">
  <p>
    The
    <a
      href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code"
      >media object</a
    >
    is a UI element perfect for repeatable and nestable content.
  </p>
</div>

{% include docs/elements/snippet.html content=media_example more=true %}

<div class="content">
  <p>
    You can include <em>any</em> other Bulma element, like inputs, textareas,
    icons, buttons… or even a <strong>navbar</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=media_bis_example more=true %} {%
include docs/elements/anchor.html name="Nesting" %}

<div class="content">
  <p>You can nest media objects up to <strong>3 levels</strong> deep.</p>
</div>

{% include docs/elements/snippet.html content=media_nested_example
horizontal=true more=true %}
```

## File: docs/documentation/layout/section.html

```html
---
title: Section
layout: docs
theme: library
fullwidth: true
doc-tab: layout
doc-subtab: section
breadcrumb:
  - home
  - documentation
  - layout
  - layout-section
meta:
  variables: true
---

{% capture section_example %}
<section class="section">
  <h1 class="title">Section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like
    the one you're currently reading.
  </h2>
</section>
{% endcapture %} {% capture section_medium_example %}
<section class="section is-medium">
  <h1 class="title">Medium section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like
    the one you're currently reading.
  </h2>
</section>
{% endcapture %} {% capture section_large_example %}
<section class="section is-large">
  <h1 class="title">Large section</h1>
  <h2 class="subtitle">
    A simple container to divide your page into <strong>sections</strong>, like
    the one you're currently reading.
  </h2>
</section>
{% endcapture %}

<div class="content">
  <p>
    The <code>section</code> components are simple layout elements with
    responsive padding. They are best used as <strong>direct</strong> children
    of <code>body</code>.
  </p>
</div>

{% include docs/elements/snippet.html content=section_example horizontal=true
fullwidth=true %} {% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    You can use the modifiers <code>is-medium</code> and
    <code>is-large</code> to change the <strong>spacing</strong>.
  </p>
</div>

{% include docs/elements/snippet.html content=section_medium_example
horizontal=true fullwidth=true %} {% include docs/elements/snippet.html
content=section_large_example horizontal=true fullwidth=true %}
```

## File: docs/documentation/sass/extends.html

```html
---
title: Bulma Sass Extends
layout: docs
theme: sass
doc-tab: sass
doc-subtab: extends
breadcrumb:
  - home
  - documentation
  - sass
  - sass-extends
---

<div class="content">
  <p>
    In Bulma, a lot of element <strong>share</strong> a set of styles. While
    mixins allow sharing, they repeat the CSS rules everytime they are used.
  </p>

  <p>
    To avoid the repetition, Bulma uses the <code>@extend</code> rule to share
    code. This rule tells Sass that one selector should inherit the styles of
    another.
    <a
      href="https://sass-lang.com/documentation/at-rules/extend"
      target="_blank"
      >Learn more about the extend rule</a
    >.
  </p>

  <p>
    Instead of creating CSS classes that might not be used to be the
    <strong>source</strong> of the set of styles, Bulma uses Sass
    <strong>placeholders</strong>:
  </p>

  <ul>
    <li>{% include docs/elements/snippet-inline.html content="%control" %}</li>
    <li>
      {% include docs/elements/snippet-inline.html content="%unselectable" %}
    </li>
    <li>{% include docs/elements/snippet-inline.html content="%arrow" %}</li>
    <li>{% include docs/elements/snippet-inline.html content="%block" %}</li>
    <li>{% include docs/elements/snippet-inline.html content="%delete" %}</li>
    <li>{% include docs/elements/snippet-inline.html content="%loader" %}</li>
    <li>{% include docs/elements/snippet-inline.html content="%overlay" %}</li>
    <li>{% include docs/elements/snippet-inline.html content="%reset" %}</li>
  </ul>

  {% assign mixins_link = site.data.links.by_id['utilities-mixins'] %} {% assign
  controls_link = site.data.links.by_id['utilities-control-mixins'] %}

  <p>
    Each of these placeholders are simply the <code>@extend</code> version of
    their
    <a href="{{ site.url }}{{ mixins_link.path }}">corresponding mixins</a>
    (here for the
    <a href="{{ site.url }}{{ controls_link.path }}">control mixin</a>).
  </p>
</div>

{% include docs/elements/anchor.html name="How to use Bulma extends" %}

<div class="content">
  Import the extend rules with <code>@use</code> and use them with
  <code>@extend</code>:
</div>

{% highlight sass %} @use "bulma/sass/utilities/extends"; .my-control { @extend
%control; background-color: purple; color: white; } {% endhighlight %}
```

## File: docs/documentation/sass/form-control-mixins.html

```html
---
title: Bulma Sass Form Control Mixins
layout: docs
theme: sass
doc-tab: sass
doc-subtab: form-control-mixins
breadcrumb:
  - home
  - documentation
  - sass
  - sass-form-control-mixins
---

<div class="content">
  <p>
    In Bulma, the <strong>form controls</strong> are an essential part of the
    framework. They comprise the following elements:
  </p>

  <ul>
    <li>
      <code>.button</code>
    </li>
    <li>
      <code>.input</code>
    </li>
    <li>
      <code>.select</code>
    </li>
    <li>
      <code>.file-cta</code>
      <code>.file-name</code>
    </li>
    <li>
      <code>.pagination-previous</code>
      <code>.pagination-next</code>
      <code>.pagination-link</code>
      <code>.pagination-ellipsis</code>
    </li>
  </ul>

  <p>
    The <code>control()</code> mixin ensures <strong>consistency</strong> by
    providing a set of styles that are shared between all these form controls.
    You can use it to create additional controls:
  </p>
</div>

{% highlight sass %}@use "bulma/sass/utilities/controls"; .bulma-control-mixin {
@include controls.control; background: deeppink; color: white; }{% endhighlight
%} {% capture control-mixin %}
<button class="bulma-control-mixin">My control</button>
{% endcapture %} {% include docs/elements/snippet.html content=control-mixin %}
{% include docs/elements/anchor.html name="Sizes" %}

<div class="content">
  <p>
    Controls have a default font size of <code>$size-normal</code> and also come
    in <strong>3 additional sizes</strong>, which can be accessed via 3
    additional mixins:
  </p>

  <ul>
    <li>
      {% include docs/elements/snippet-inline.html content="@include
      controls.control-small;" %} with a font size <code>$size-small</code>
    </li>
    <li>
      {% include docs/elements/snippet-inline.html content="@include
      controls.control-medium;" %} with a font size <code>$size-medium</code>
    </li>
    <li>
      {% include docs/elements/snippet-inline.html content="@include
      controls.control-large;" %} with a font size <code>$size-large</code>
    </li>
  </ul>
</div>

{% highlight sass %}.bulma-control-mixin { &.is-small { @include
controls.control-small; } &.is-medium { @include controls.control-medium; }
&.is-large { @include controls.control-large; } }{% endhighlight %} {% capture
control-mixin-sizes %}
<button class="bulma-control-mixin is-small">Small</button>
<button class="bulma-control-mixin">Normal</button>
<button class="bulma-control-mixin is-medium">Medium</button>
<button class="bulma-control-mixin is-large">Large</button>
{% endcapture %} {% include docs/elements/snippet.html
content=control-mixin-sizes %} {% include docs/elements/anchor.html
name="Control placeholder" %}

<div class="content">
  <p>
    The <code>control()</code> mixin also exists as
    <a
      href="https://sass-lang.com/documentation/at-rules/extend#placeholder-selectors"
      target="_blank"
      >Sass placeholder</a
    >
    <code>%control</code>
  </p>
</div>

{% highlight sass %}@use "bulma/sass/utilities/extends"; .bulma-control-extend {
@extend %control; background: mediumblue; color: white; }{% endhighlight %} {%
capture control-extend %}
<button class="bulma-control-extend">My control</button>
{% endcapture %} {% include docs/elements/snippet.html content=control-extend %}
```

## File: docs/documentation/sass/functions.html

```html
---
title: Bulma Sass Functions
layout: docs
theme: sass
doc-tab: sass
doc-subtab: functions
breadcrumb:
  - home
  - documentation
  - sass
  - sass-functions
---
```

## File: docs/documentation/sass/mixins.html

```html
---
title: Bulma Sass Mixins
layout: docs
theme: sass
doc-tab: sass
doc-subtab: mixins
breadcrumb:
  - home
  - documentation
  - sass
  - sass-mixins
---

<div class="content">
  <p>
    Throughout the codebase, Bulma uses Sass mixins to <strong>enhance</strong> and facilitate the CSS output. While these mixins are mainly used within the context of Bulma, they are of course available for you to <strong>re-use</strong> in your own projects.
  </p>
</div>

{% include docs/elements/anchor.html name="Element Mixins" %}

<p class="block">
  These mixins create a <strong>visual</strong> HTML element.
</p>

{% include docs/elements/anchor-bis.html name="Arrow" %}

<div class="content">
  <p>
    The <code>arrow()</code> mixin creates a down-facing arrow. The <code>$color</code> parameter defines the color of the arrow.
  </p>
</div>

{% highlight sass %}.bulma-arrow-mixin {
  @include mixins.arrow(purple);
}{% endhighlight %}

{% capture arrow %}
<span class="bulma-arrow-mixin"></span>
{% endcapture %}

{% include docs/elements/snippet.html content=arrow %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Burger" %}

<div class="content">
  <p>
    The <code>burger()</code> mixin creates a 16x16px set of <strong>3 horizontal bars</strong> grouped within square. The dimensions of this square are defined by the <code>$dimensions</code> parameter.
  </p>
</div>

{% highlight sass %}.bulma-burger-mixin {
  @include mixins.burger(2.5rem);
}{% endhighlight %}

{% capture burger %}
<button class="bulma-burger-mixin">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>
{% endcapture %}

{% include docs/elements/snippet.html content=burger %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Delete" %}

<div class="content">
  <p>
    The <code>delete()</code> mixin creates a 20x20px circle containing a <strong>cross</strong>. It comes with 3 modifiers: <code>is-small</code>, <code>is-medium</code> and <code>is-large</code>.
  </p>
</div>

{% highlight sass %}.bulma-delete-mixin {
  @include mixins.delete;
}{% endhighlight %}

{% capture delete %}
<button class="bulma-delete-mixin is-small"></button>
<button class="bulma-delete-mixin"></button>
<button class="bulma-delete-mixin is-medium"></button>
<button class="bulma-delete-mixin is-large"></button>
{% endcapture %}

{% include docs/elements/snippet.html content=delete %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Loader" %}

<div class="content">
  <p>
    The <code>loader()</code> mixin creates a 1em <strong>spinning circle</strong>.
  </p>
</div>

{% highlight sass %}.bulma-loader-mixin {
  @include mixins.loader;
}{% endhighlight %}

{% capture loader %}
<span class="bulma-loader-mixin"></span>
{% endcapture %}

{% include docs/elements/snippet.html content=loader %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Font Awesome container" %}

<div class="content">
  <p>
    The <code>fa()</code> mixin creates a <strong>square inline-block element</strong>, ideal for containing a Font Awesome icon, or any other type of icon font.
    <br>
    The first <code>$size</code> parameter defines the icon font size.
    <br>
    The second <code>$dimensions</code> parameter defines the dimensions of the square container.
  </p>
</div>

{% highlight sass %}.bulma-fa-mixin {
  @include mixins.fa(1rem, 2rem);
  background-color: lavender; // For demo purposes
}{% endhighlight %}

{% capture fa %}
<span class="bulma-fa-mixin">
  <i class="fas fa-thumbs-up"></i>
</span>
{% endcapture %}

{% include docs/elements/snippet.html content=fa %}

<!--  -->

{% include docs/elements/anchor.html name="CSS Mixins" %}

<p class="block">
  These mixins add <strong>CSS rules</strong> to the element.
</p>

<!--  -->

{% include docs/elements/anchor-bis.html name="Block" %}

<div class="content">
  <p>
    The <code>block()</code> mixin adds <strong>spacing</strong> below an element, but only if it's <strong>not the last child</strong>.
    <br>
    The <code>$spacing</code> parameter defines the value of the <code>margin-bottom</code>.
  </p>
</div>

{% highlight sass %}.bulma-block-mixin {
  @include mixins.block(1rem);
}{% endhighlight %}

{% capture block %}
<p class="bulma-block-mixin">This element has a margin-bottom.</p>
<p class="bulma-block-mixin">This element too.</p>
<p class="bulma-block-mixin">Not this one because it's the last child.</p>
{% endcapture %}

{% include docs/elements/snippet.html content=block %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Overlay" %}

<div class="content">
  <p>
    The <code>overlay()</code> mixin makes the element <strong>cover</strong> its closest positioned ancestor.
    <br>
    The <code>$offset</code> parameter defines how far inside the element is positioned from each edge (top, bottom, left and right).
  </p>
</div>

{% highlight sass %}.bulma-overlay-mixin {
  @include mixins.overlay(1.5rem);
  background-color: darkorange;
  border-radius: 0.25em;
  color: white;
  opacity: 0.9;
  padding: 1em;
}{% endhighlight %}

{% capture overlay %}
<div class="bulma-overlay-mixin-parent">
  <div class="bulma-overlay-mixin">Overlay element</div>
</div>
{% endcapture %}

{% include docs/elements/snippet.html content=overlay %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Center" %}

<div class="content">
  <p>
    The <code>center()</code> mixin allows you to absolutely position an element with <strong>fixed dimensions</strong> at the <strong>center</strong> of its closest positioned ancestor.
    <br>
    The value of the <code>$width</code> parameter should be the width of the element the mixin is applied on.
    <br>
    Unless the element has square dimensions, the second parameter <code>$height</code> is required and its value should be the height of the element the mixin is applied on.
  </p>
</div>

{% highlight sass %}.bulma-center-mixin {
  @include mixins.center;
}{% endhighlight %}

{% capture center %}
<div class="bulma-center-mixin-parent">
  <img class="bulma-center-mixin" height="96" width="96" src="/assets/images/unsplash/mEZ3PoFGs_k.jpg">
</div>
{% endcapture %}

{% include docs/elements/snippet.html content=center %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Placeholder" %}

<div class="content">
  <p>
    The <code>placeholder()</code> mixin allows you to change the style of an <strong>input's placeholder</strong>.
    <br>
    The <code>$offset</code> parameter defines how far inside the element is positioned from each edge (top, bottom, left and right).
  </p>
</div>

{% highlight sass %}.bulma-placeholder-mixin {
  @include mixins.placeholder {
    color: lightblue;
  }
}{% endhighlight %}

{% capture placeholder %}
<input
  class="input bulma-placeholder-mixin"
  type="text"
  placeholder="I am a styled placeholder"
>
{% endcapture %}

{% include docs/elements/snippet.html content=placeholder %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Clearfix" %}

<div class="content">
  <p>
    The <code>clearfix()</code> mixin adds a <code>::after</code></strong> pseudo-element with a <code>clear: both</code> rule.
  </p>
</div>

{% highlight sass %}.bulma-clearfix-mixin {
  @include mixins.clearfix;
}{% endhighlight %}

{% capture clearfix %}
<div class="bulma-clearfix-mixin">
  <img height="80" width="80" style="float: left;" src="/assets/images/unsplash/La2kOu2dmH4.jpg">
  <p>This is a short image description.</p>
</div>

<p>This text is following the clearfix element and is correctly placed after.</p>
{% endcapture %}

{% include docs/elements/snippet.html content=clearfix %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Reset" %}

<div class="content">
  <p>
    The <code>reset()</code> mixin applies a soft style reset. This is especially useful for <code>&lt;button&gt;</code> elements.
  </p>
</div>

{% highlight sass %}.bulma-reset-mixin {
  @include mixins.reset;
}{% endhighlight %}

{% capture reset %}
<button>Default button</button>
<button class="bulma-reset-mixin">Reset button</button>
{% endcapture %}

{% include docs/elements/snippet.html content=reset %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Unselectable" %}

<div class="content">
  <p>
    The <code>unselectable()</code> mixin makes an element not selectable. This is to prevent the text to be selected when double-clicked.
  </p>
</div>

{% highlight sass %}.bulma-unselectable-mixin {
  @include mixins.unselectable;
}{% endhighlight %}

{% capture unselectable %}
<p>This text is selectable.</p>
<p class="bulma-unselectable-mixin">This text is not selectable.</p>
{% endcapture %}

{% include docs/elements/snippet.html content=unselectable %}

<!--  -->

{% include docs/elements/anchor-bis.html name="Overflow Touch" %}

<div class="content">
  <p>
    The <code>overflow-touch()</code> mixin add the <code>-webkit-overflow-scrolling: touch;</code> rule to the element.
  </p>
</div>

<!--  -->

{% include docs/elements/anchor.html name="Direction Mixins" %}

{% include docs/elements/anchor-bis.html name="Left-to-right and Right-to-left Mixins" %}

<div class="content">
  <p>
    Bulma has a global <code>$rtl</code> flag, which allows the framework to output a Right-to-left version of the CSS. By default, this flag's value is set to <code>false</code>. This means the framework output a Left-to-right version.
  </p>

  <p>
    The mixins <code>@mixin ltr</code> and <code>@mixin rtl</code> are here to output CSS rules based on the value of <code>$rtl</code>:
  </p>

  <ul>
    <li>
      if <code>$rtl: true</code>, <code>@include mixins.ltr</code> outputs nothing
    </li>
    <li>
      if <code>$rtl: false</code>, <code>@include mixins.rtl</code> outputs nothing
    </li>
  </ul>

  <p>
    This is useful for properties that are specific to the side of an element.
  </p>
</div>

{% highlight sass %}.bulma-ltr-rtl-mixin {
  background-color: lightgreen;
  padding: 0.5em 1em;
  border: 1px solid seagreen;
  margin-right: -1px;

  &:first-child {
    @include mixins.ltr {
      border-bottom-left-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }

    @include mixins.rtl {
      border-bottom-right-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }
  }

  &:last-child {
    @include mixins.ltr {
      border-bottom-right-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    @include mixins.rtl {
      border-bottom-left-radius: 0.5em;
      border-top-left-radius: 0.5em;
    }
  }
}{% endhighlight %}

{% capture ltr-rtl %}
<div style="display: flex;">
  <span class="bulma-ltr-rtl-mixin">One</span>
  <span class="bulma-ltr-rtl-mixin">Two</span>
  <span class="bulma-ltr-rtl-mixin">Three</span>
</div>
{% endcapture %}

{% include docs/elements/snippet.html content=ltr-rtl %}

<!--  -->

{% include docs/elements/anchor-bis.html name="LTR Position" %}

<div class="content">
  <p>
    The <code>ltr-position()</code> mixin is a quick way to switch between <code>left</code> and <code>right</code> CSS properties when dealing with positioned elements.
    <br>
    The first <code>$spacing</code> parameter defines the value of the offset, whether it's right or left.
    <br>
    The second <code>$right</code> parameter defines if the property outputs <code>right</code> (default) or <code>left</code>.
  </p>

  <p>
    Here is what the output looks like with a <code>$spacing</code> parameter set to <code>1rem</code>:
  </p>

  <table class="table is-bordered">
    <thead>
      <tr>
        <th>Flag →</th>
        <th><code>$rtl: false;</code></th>
        <th><code>$rtl: true;</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>@include mixins.ltr-position(1rem, true)</code></td>
        <td><code>right: 1rem</code></td>
        <td><code>left: 1rem</code></td>
      </tr>
      <tr>
        <td><code>@include mixins.ltr-position(1rem, false)</code></td>
        <td><code>left: 1rem</code></td>
        <td><code>right: 1rem</code></td>
      </tr>
    </tbody>
  </table>
</div>

<p class="title is-6">Sass source</p>

{% highlight sass %}.bulma-ltr-position-mixin {
  @include mixins.ltr-position(1rem, false);
  border-radius: 0.25em;
  position: absolute;
  top: 1rem;
}{% endhighlight %}

<p class="title is-6">CSS output</p>

{% highlight css %}.bulma-ltr-position-mixin {
  left: 1rem;
  border-radius: 0.25em;
  position: absolute;
  top: 1rem;
}{% endhighlight %}

{% capture ltr-position %}
<div class="bulma-ltr-position-mixin-parent">
  <img class="bulma-ltr-position-mixin" height="48" width="48" src="/assets/images/unsplash/iFgRcqHznqg.jpg">
  <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.</p>
</div>
{% endcapture %}

{% include docs/elements/snippet.html content=ltr-position %}
<!--  -->

{% include docs/elements/anchor-bis.html name="LTR Property" %}

<div class="content">
  <p>
    The <code>ltr-property()</code> mixin works like the <code>ltr-position()</code> mixin but allows you to choose <strong>which CSS property</strong> to set. The mixin will append <code>-right</code> or <code>-left</code> to that property. This is especially useful for <code>margin</code> and <code>padding</code>.
    <br>
    The first <code>$property</code> parameter which property you want to "flip" left and right.
    <br>
    The second <code>$spacing</code> parameter defines the value of the offset, whether it's right or left.
    <br>
    The third <code>$right</code> parameter defines if the property outputs <code>right</code> (default) or <code>left</code>.
  </p>

  <p>
    Here is what the output looks like with a <code>$spacing</code> parameter set to <code>1rem</code>:
  </p>

  <table class="table is-bordered">
    <thead>
      <tr>
        <th>Flag →</th>
        <th><code>$rtl: false;</code></th>
        <th><code>$rtl: true;</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>@include mixins.ltr-property("margin", 1rem, true)</code></td>
        <td><code>margin-right: 1rem</code></td>
        <td><code>margin-left: 1rem</code></td>
      </tr>
      <tr>
        <td><code>@include mixins.ltr-property("margin", 1rem, false)</code></td>
        <td><code>margin-left: 1rem</code></td>
        <td><code>margin-right: 1rem</code></td>
      </tr>
    </tbody>
  </table>
</div>

<p class="title is-6">Sass source</p>

{% highlight sass %}.bulma-ltr-property-mixin {
  @include mixins.ltr-property("margin", 1rem, false);
  border-radius: 0.25em;
}{% endhighlight %}

<p class="title is-6">CSS output</p>

{% highlight css %}.bulma-ltr-property-mixin {
  margin-left: 1rem;
  border-radius: 0.25em;
}{% endhighlight %}

{% capture ltr-property %}
<div class="bulma-ltr-property-mixin-parent">
  <p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum.</p>
  <img class="bulma-ltr-property-mixin" height="96" width="96" src="/assets/images/unsplash/jTSf1xnsoCs.jpg">
</div>
{% endcapture %}

{% include docs/elements/snippet.html content=ltr-property %}
```

## File: docs/documentation/sass/responsive-mixins.html

```html
---
title: Bulma Sass Responsive Mixins
layout: docs
theme: sass
doc-tab: sass
doc-subtab: responsive-mixins
breadcrumb:
  - home
  - documentation
  - sass
  - sass-responsive-mixins
---

<div class="content">
  <p>
    Bulma is <strong>responsive by default</strong>.
    <a href="{{ site.url}}/documentation/overview/responsiveness/"
      >Learn more about Bulma's responsiveness</a
    >.
  </p>
</div>

{% include docs/elements/anchor.html name="from() and until() mixins" %}

<div class="content">
  <p>
    Responsiveness in CSS is based on <strong>media queries</strong> (see
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
      target="_blank"
      >MDN documentation</a
    >).
  </p>

  <p>Bulma provides <strong>2 useful responsive mixins:</strong></p>

  <ul>
    <li>
      {% include docs/elements/snippet-inline.html content="@mixin
      from($breakpoint)" %} to target devices with a screen <em>wider</em> than
      or equal to the breakpoint
    </li>
    <li>
      {% include docs/elements/snippet-inline.html content="@mixin
      until($breakpoint)" %} to target devices with a screen
      <em>narrower</em> than the breakpoint
    </li>
  </ul>

  <p>Their usage is very simple:</p>
</div>

{% include docs/elements/anchor-bis.html name="from()" %}

<div class="content">
  <p>
    The <code>from()</code> mixin has a single parameter which sets the
    <strong>screen width</strong> from which the styles it contains will be
    applied:
  </p>
</div>

<p class="title is-6">Sass source</p>

{% highlight sass %}@use "bulma/sass/utilities/mixins"; .my-element {
background: red; @include mixins.from(1280px) { background: blue; } }{%
endhighlight %}

<p class="title is-6">CSS output</p>

{% highlight css %}.my-element { background: red; } @media screen and
(min-width: 1280px) { .my-element { background: blue; } }{% endhighlight %}

<div class="content">
  <p>
    For screens with a width of 1279px or less, the element's background will be
    <strong style="color: red;">red</strong>.
    <br />
    For screens 1280px-wide or more, the element's background will be
    <strong style="color: blue;">blue</strong>.
  </p>
</div>

{% include docs/elements/anchor-bis.html name="until()" %}

<div class="content">
  <p>
    The <code>until()</code> mixin has a single parameter which sets the
    <strong>screen width (minus <code>1px</code>)</strong> until which the
    styles it contains will be applied.
  </p>

  <p>
    This means that if you set a value of <code>1280px</code>, the styles will
    be applied on a screen width of <code>1279px</code> but
    <strong>not</strong> on a screen width of <code>1280px</code>.
  </p>

  <p>
    The reason for this <strong>1px offset</strong> is to allow you to use both
    <code>from()</code> and <code>until()</code> with the
    <strong>same breakpoint value</strong>. This leaves
    <strong>no gap</strong> between the 2 sets of rules.
  </p>
</div>

<p class="title is-6">Sass source</p>

{% highlight sass %}@use "bulma/sass/utilities/mixins"; $breakpoint: 1280px;
.my-element { @include mixins.until($breakpoint) { background: green; } @include
mixins.from($breakpoint) { background: orange; } }{% endhighlight %}

<p class="title is-6">CSS output</p>

{% highlight css %}@media screen and (max-width: 1279px) { .my-element {
background: green; } } @media screen and (min-width: 1280px) { .my-element {
background: orange; } }{% endhighlight %}

<div class="content">
  <p>
    For screens with a width of 1279px or less, the element's background will be
    <strong style="color: green;">green</strong>.
    <br />
    For screens 1280px-wide or more, the element's background will be
    <strong style="color: orange;">orange</strong>.
  </p>
</div>

{% include docs/elements/anchor.html name="Named mixins" %}

<div class="content">
  <p>
    By having <strong>4 breakpoints</strong> and supporting
    <strong>5 screen sizes</strong>, Bulma can support a lot of different
    setups.
  </p>
</div>

<div class="content">
  While you could use the mixins {% include docs/elements/snippet-inline.html
  content="@include mixins.from()" %} and {% include
  docs/elements/snippet-inline.html content="@include mixins.until()" %}, Bulma
  provides <strong>quick shortcuts</strong> with
  <strong>11 named mixins</strong>.
</div>

<div class="content">
  <p>
    These <strong>responsive mixins</strong> are named after the screen sizes
    and breakpoints used in Bulma, so that you can use them to create a
    <strong>responsive designs</strong>:
  </p>
</div>

{% capture inc-mobile %} @use "bulma/sass/utilities/mixins"; @include
mixins.mobile { // Styles applied // below $tablet } {% endcapture %} {% capture
inc-tablet %} @use "bulma/sass/utilities/mixins"; @include mixins.tablet { //
Styles applied // above $tablet } {% endcapture %} {% capture inc-tablet-only %}
@use "bulma/sass/utilities/mixins"; @include mixins.tablet-only { // Styles
applied // between $tablet // and $desktop } {% endcapture %} {% capture
inc-desktop-only %} @use "bulma/sass/utilities/mixins"; @include
mixins.desktop-only { // Styles applied // between $desktop // and $widescreen }
{% endcapture %} {% capture inc-widescreen-only %} @use
"bulma/sass/utilities/mixins"; @include mixins.widescreen-only { // Styles
applied // between $widescreen // and $fullhd } {% endcapture %} {% capture
inc-desktop %} @use "bulma/sass/utilities/mixins"; @include mixins.desktop { //
Styles applied // above $desktop } {% endcapture %} {% capture inc-widescreen %}
@use "bulma/sass/utilities/mixins"; @include mixins.widescreen { // Styles
applied // above $widescreen } {% endcapture %} {% capture inc-fullhd %} @use
"bulma/sass/utilities/mixins"; @include mixins.fullhd { // Styles applied //
above $fullhd } {% endcapture %} {% capture inc-touch %} @use
"bulma/sass/utilities/mixins"; @include mixins.touch { // Styles applied //
below $desktop } {% endcapture %} {% capture inc-until-widescreen %} @use
"bulma/sass/utilities/mixins"; @include mixins.until-widescreen { // Styles
applied // below $widescreen } {% endcapture %} {% capture inc-until-fullhd %}
@use "bulma/sass/utilities/mixins"; @include mixins.until { // Styles applied //
below $fullhd } {% endcapture %}

<div class="table-container">
  <table class="table is-bordered">
    <thead>
      <tr>
        {% for breakpoint_hash in site.data.breakpoints %} {% assign breakpoint
        = breakpoint_hash[1] %}
        <th style="width: 20%;">
          {{ breakpoint.name }}<br />
          {% if breakpoint.id == 'mobile' %} Up to
          <code>{{ breakpoint.to }}px</code>
          {% elsif breakpoint.id == 'fullhd' %}
          <code>{{ breakpoint.from }}px</code> and above {% else %} Between
          <code>{{ breakpoint.from }}px</code> and
          <code>{{ breakpoint.to }}px</code>
          {% endif %}
        </th>
        {% endfor %}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{% highlight sass %}{{ inc-mobile }}{% endhighlight %}</td>
        <td colspan="4">
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="notification">-</p>
        </td>
        <td colspan="4">
          {% highlight sass %}{{ inc-tablet }}{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="notification">-</p>
        </td>
        <td colspan="3">
          {% highlight sass %}{{ inc-desktop }}{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <p class="notification">-</p>
        </td>
        <td colspan="2">
          {% highlight sass %}{{ inc-widescreen }}{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <p class="notification">-</p>
        </td>
        <td>{% highlight sass %}{{ inc-fullhd }}{% endhighlight %}</td>
      </tr>
      <tr>
        <td>
          <p class="notification">-</p>
        </td>
        <td>{% highlight sass %}{{ inc-tablet-only }}{% endhighlight %}</td>
        <td colspan="3">
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p class="notification">-</p>
        </td>
        <td>{% highlight sass %}{{ inc-desktop-only }}{% endhighlight %}</td>
        <td colspan="2">
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <p class="notification">-</p>
        </td>
        <td>{% highlight sass %}{{ inc-widescreen-only }}{% endhighlight %}</td>
        <td>
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {% highlight sass %}{{ inc-touch }}{% endhighlight %}
        </td>
        <td colspan="3">
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          {% highlight sass %}{{ inc-until-widescreen }}{% endhighlight %}
        </td>
        <td colspan="2">
          <p class="notification">-</p>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          {% highlight sass %}{{ inc-until-fullhd }}{% endhighlight %}
        </td>
        <td colspan="1">
          <p class="notification">-</p>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{% assign or_link = site.data.links.by_id['overview-responsiveness'] %}

<div class="content">
  <p>
    Learn more about
    <a href="{{ site.url }}{{ or_link.path }}">Bulma responsiveness</a>.
  </p>
</div>
```

## File: docs/documentation/start.html

```html
---
title: Start
layout: docs
theme: start
doc-tab: start
hide_tabs: true
hide_pagination: true
breadcrumb:
  - home
  - documentation
  - overview
---

{% include docs/components/links.html category_id='start' %}
```

## File: docs/documentation/start/alternative-versions.html

```html
---
title: Alternative versions of Bulma
layout: docs
theme: start
doc-tab: start
doc-subtab: alternative-versions
breadcrumb:
  - home
  - documentation
  - start
  - start-alternative-versions
---

{% capture html_normal %}
<section class="section">
  <div class="container has-text-centered">
    <h1 class="title">Hello World</h1>
    <p class="subtitle">
      My first website with
      <strong class="has-text-primary">Bulma</strong>!
    </p>
  </div>
</section>
{% endcapture %} {% capture html_prefixed %}
<section class="bulma-section">
  <div class="bulma-container bulma-has-text-centered">
    <h1 class="bulma-title">Hello World</h1>
    <p class="bulma-subtitle">
      My first website with
      <strong class="bulma-has-text-primary">Bulma</strong>!
    </p>
  </div>
</section>
{% endcapture %} {% capture html_no_helpers %}
<section class="section">
  <div class="container">
    <h1 class="title">Hello World</h1>
    <p class="subtitle">
      My first website with
      <strong>Bulma</strong>!
    </p>
  </div>
</section>
{% endcapture %} {% capture html_prefixed_no_helpers %}
<section class="bulma-section">
  <div class="bulma-container">
    <h1 class="bulma-title">Hello World</h1>
    <p class="bulma-subtitle">
      My first website with
      <strong>Bulma</strong>!
    </p>
  </div>
</section>
{% endcapture %}

<div class="content">
  <p>
    Because different people have different requirements, Bulma comes in
    different versions ready to use:
  </p>
</div>

<table class="table is-bordered is-fullwidth">
  <thead>
    <tr>
      <th>Version</th>
      <th>Prefix</th>
      <th>Usage</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Complete</strong><br />
        <em style="white-space: nowrap">(Library + Helpers)</em>
      </td>
      <td>None</td>
      <td>{% highlight html -%} {{- html_normal -}} {%- endhighlight %}</td>
      <td>
        <div class="buttons">
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/bulma.css"
            >bulma.css</a
          >
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/bulma.min.css"
            >bulma.min.css</a
          >
        </div>
      </td>
    </tr>
    <tr>
      <td><strong>Prefixed</strong></td>
      <td><code>bulma-</code></td>
      <td>{% highlight html -%} {{- html_prefixed -}} {%- endhighlight %}</td>
      <td>
        <div class="buttons">
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-prefixed.css"
            >bulma-prefixed.css</a
          >
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-prefixed.min.css"
            >bulma-prefixed.min.css</a
          >
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Library Only</strong><br />
        <em>No Helpers</em>
      </td>
      <td>None</td>
      <td>{% highlight html -%} {{- html_no_helpers -}} {%- endhighlight %}</td>
      <td>
        <div class="buttons">
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-helpers.css"
            >bulma-no-helpers.css</a
          >
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-helpers.min.css"
            >bulma-no-helpers.min.css</a
          >
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <strong>No Helpers, Prefixed</strong><br />
        <em>Library Only</em>
      </td>
      <td><code>bulma-</code></td>
      <td>
        {% highlight html -%} {{- html_prefixed_no_helpers -}} {%- endhighlight
        %}
      </td>
      <td>
        <div class="buttons">
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-helpers-prefixed.css"
            >bulma-no-helpers-prefixed.css</a
          >
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-helpers-prefixed.min.css"
            >bulma-no-helpers-prefixed.min.css</a
          >
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <strong>No Dark Mode</strong><br />
        <em>Light Theme Only</em>
      </td>
      <td>None</td>
      <td>{% highlight html -%} {{- html_normal -}} {%- endhighlight %}</td>
      <td>
        <div class="buttons">
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-dark-mode.css"
            >bulma-no-dark-mode.css</a
          >
          <a
            class="button is-primary"
            href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/versions/bulma-no-dark-mode.min.css"
            >bulma-no-dark-mode.min.css</a
          >
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/start/css-classes.html

```html
---
title: Bulma is a collection of CSS classes
layout: docs
theme: start
doc-tab: start
doc-subtab: css-classes
breadcrumb:
  - home
  - documentation
  - start
  - start-css-classes
---
```

## File: docs/documentation/start/installation.html

```html
---
title: How to install Bulma
layout: docs
theme: start
doc-tab: start
doc-subtab: installation
breadcrumb:
  - home
  - documentation
  - start
  - start-installation
---

{% capture jsdelivr_a %} {%highlight css %} @import
"https://cdn.jsdelivr.net/npm/bulma@{{site.data.meta.version
}}/css/bulma.min.css"; {% endhighlight %} {% endcapture %} {% capture jsdelivr_b
%} {% highlight html %}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/bulma.min.css"
/>
{% endhighlight %} {% endcapture %} {% capture jsdelivr_rtl_a %} {% highlight
css %}@import "https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version
}}/css/bulma-rtl.min.css";{% endhighlight %} {% endcapture %} {% capture
jsdelivr_rtl_b %} {% highlight html %}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@{{ site.data.meta.version }}/css/bulma-rtl.min.css"
/>
{% endhighlight %} {% endcapture %}

<div class="bd-options">
  <div class="bd-option bd-theme-css">
    <div class="block media is-align-items-center">
      <div class="media-left">
        <span class="icon is-flex is-large">
          <i class="fab fa-css3 fa-2x"></i>
        </span>
      </div>

      <div class="media-content">
        <p class="title is-4">Get the Bulma <strong>CSS</strong> file</p>
        <p class="subtitle">
          A single <code>.css</code> file that includes all of Bulma
        </p>
      </div>
    </div>

    <div class="bd-option-item">
      <p class="bd-option-title block has-text-grey-light is-size-5">
        <span class="button bd-fat-button is-success is-light is-pulled-right"
          >Recommended</span
        >
        Option 1. <strong>Use a CDN</strong>
      </p>

      <p class="block">
        You can import the CSS file directly from
        <a href="{{ site.data.meta.jsdelivr }}" target="_blank">jsDelivr</a>:
      </p>

      {% include docs/components/tabs.html button_a="CSS @import" button_b="HTML
      <link />" item_a=jsdelivr_a item_b=jsdelivr_b %}

      <p class="block">
        Since the release of v1, the main version also works in
        <strong>RTL contexts</strong>, thanks to the use of
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
          >logical properties</a
        >. As a result, no separate RTL version of Bulma is developed anymore.
      </p>

      <p class="block">
        Bulma is also available via
        <a href="{{ site.data.meta.cdnjs }}" target="_blank">cdnjs</a>.
      </p>
    </div>

    <div class="bd-option-item">
      <p class="bd-option-title block has-text-grey-light is-size-5">
        Option 2. <strong>Download the Github release</strong>
      </p>

      <div class="block">
        You can get the latest Bulma release as a <code>.zip</code> from GitHub:
      </div>

      <a
        class="button bd-fat-button is-primary is-light"
        href="{{ site.data.meta.download }}"
      >
        Download v{{ site.data.meta.version }}
      </a>
    </div>
  </div>

  <div class="bd-option-or">
    <p>Or</p>
  </div>

  <div class="bd-option bd-theme-sass">
    <div class="block media is-align-items-center">
      <div class="media-left">
        <span class="icon is-flex is-large">
          <i class="fab fa-sass fa-2x"></i>
        </span>
      </div>

      <div class="media-content">
        <p class="title is-4">Get the Bulma <strong>Sass</strong> library</p>
        <p class="subtitle">
          A collection of <code>.sass</code> files to build your own version of
          Bulma
        </p>
      </div>
    </div>

    <div class="bd-option-item">
      <p class="bd-option-title block has-text-grey-light is-size-5">
        <span class="button bd-fat-button is-success is-light is-pulled-right"
          >Recommended</span
        >
        Option 1. <strong>Install the NPM package</strong>
      </p>

      <p class="block">
        Bulma is available through
        <a href="{{ site.data.meta.npm }}" target="_blank">npm</a>:
      </p>

      {% capture npm_item %} {% highlight bash %}npm install bulma{%
      endhighlight %} {% endcapture %} {% capture yarn_item %} {% highlight bash
      %}yarn add bulma{% endhighlight %} {% endcapture %} {% include
      docs/components/tabs.html button_a="npm" button_b="yarn" item_a=npm_item
      item_b=yarn_item %}

      <p class="block">
        Bulma is also available via
        <a href="{{ site.data.meta.cdnjs }}" target="_blank">cdnjs</a>.
      </p>
    </div>

    <div class="bd-option-item">
      <p class="bd-option-title block has-text-grey-light is-size-5">
        Option 2. <strong>Clone the GitHub repository</strong>
      </p>

      <p class="block">
        Bulma is available on
        <a href="{{ site.data.meta.github }}" target="_blank">GitHub</a>:
      </p>

      {% capture git_ssh %} {% highlight bash %}{{ site.data.meta.git_ssh }}{%
      endhighlight %} {% endcapture %} {% capture git_https %} {% highlight bash
      %}{{ site.data.meta.git_https }}{% endhighlight %} {% endcapture %} {%
      capture git_cli %} {% highlight bash %}{{ site.data.meta.git_cli }}{%
      endhighlight %} {% endcapture %} {% include docs/components/tabs.html
      button_a="SSH" button_b="HTTPS" button_c="GitHub CLI" item_a=git_ssh
      item_b=git_https item_c=git_cli %}

      <div class="notification is-warning is-light" style="font-size: 1rem">
        Note that the GitHub repository also includes this documentation, so
        it’s significantly bigger than the NPM package.
      </div>
    </div>
  </div>
</div>
```

## File: docs/documentation/start/migrating-to-v1.html

```html
---
title: Migrating to Bulma v1
layout: docs
theme: start
doc-tab: start
doc-subtab: migrating
breadcrumb:
  - home
  - documentation
  - start
  - start-migrating
---

{% capture markdown %} Bulma v1 is basically a **full rewrite** of the framework
using [**Dart Sass**](https://sass-lang.com/dart-sass/), which is the primary
implementation of Sass. While this affects a few development details, everything
has been done to make the transition **as easy as possible**. {% endcapture %}
{% include markdown.html content=markdown %} {% include
docs/elements/anchor.html name="What remains the same" %} {% capture markdown %}
**All HTML snippets are the same**. This means you don't need to update your
markup. **This is important** because it means, if you're using Bulma straight
"out of the box", you don't need to change anything. You can just swap
`bulma@0.9.4/css/bulma.min.css` with `bulma@1.0.0/css/bulma.min.css` and
everything will work. Things will look slightly different, but they will still
work. {% endcapture %} {% include markdown.html content=markdown %} {% include
docs/elements/anchor.html name="What changes" %} {% capture markdown %} *
[**Dart Sass**](https://sass-lang.com/dart-sass/) is used to build Bulma * if
you use the `sass` npm package, you're already using Dart Sass * [**CSS
Variables**]({{ site.data.links.by_id['features-css-variables'].path }}) are
used instead of literals: `color: var(--bulma-primary);` instead of `color:
hsl(171deg, 100%, 41%);`, which means you can customize Bulma with CSS only
(without using Sass) * Customization by setting your own value for Sass
variables works differently. See [how to customize Bulma with Sass]({{
site.data.links.by_id['customize-with-sass'].path }}). {% endcapture %} {%
include markdown.html content=markdown %} {% include docs/elements/anchor.html
name="What's new (i.e. did not exist before)" %} {% capture markdown %} * The
notion of [**Themes**]({{ site.data.links.by_id['features-themes'].path }}) is
introduced: a theme is a collection of CSS variables within a context, and is
the best approach to customize Bulma * As a result, a Theme for [**Dark
Mode**]({{ site.data.links.by_id['features-dark-mode'].path }}) is included *
[**Color Palettes**]({{ site.data.links.by_id['features-color-palettes'].path
}}) are created for each of the 7 primary colors * [**Skeleton loaders**]({{
site.data.links.by_id['features-skeletons'].path }}) exist as standalone
components but also as variants of other components * You can add a **prefix**
to all your Bulma classes so that `.button` becomes `.my-prefix-button` * a
pre-built prefixed version exists as one of the [**alternative versions**]({{
site.data.links.by_id["start-alternative-versions"].path }}) {% endcapture %} {%
include markdown.html content=markdown %} {% include docs/elements/anchor.html
name="Breaking Changes" %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>⛔️ Deprecated</th>
      <th>✅ How to fix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p class="mb-2"><strong>Tiles</strong> are deprecated</p>
        {% highlight html %}
        <!-- Before -->
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Hello World</p>
              <p class="subtitle">What is up?</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
        </div>
        {% endhighlight %}
      </td>
      <td>
        <p class="mb-2">
          Use the new and improved
          <a href="/documentation/grid/smart-grid/">Smart Grid</a>
        </p>
        {% highlight html %}
        <!-- After -->
        <div class="grid">
          <div class="cell">
            <article class="box">
              <p class="title">Hello World</p>
              <p class="subtitle">What is up?</p>
            </article>
          </div>
          <div class="cell">
            <article class="box">
              <p class="title">Foo</p>
              <p class="subtitle">Bar</p>
            </article>
          </div>
        </div>
        {% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>
        <p class="mb-2"><code>@import</code> is not recommended</p>
        {% highlight sass %} // Before $purple: #8A4D76; $pink: #FA7C91; $brown:
        #757763; $beige-light: #D0D1CD; $beige-lighter: #EFF0EB; // Update
        Bulma's global variables $family-sans-serif: "Nunito", sans-serif;
        $grey-dark: $brown; $grey-light: $beige-light; $primary: $purple; $link:
        $pink; // Update some of Bulma's component variables
        $control-border-width: 2px; $input-background-color: $beige-lighter;
        $input-border-color: transparent; $input-shadow: none; // Import the
        rest of Bulma @import "../path/to/bulma"; {% endhighlight %}
      </td>
      <td>
        <p class="mb-2">
          Use Dart Sass's new
          <a href="https://sass-lang.com/documentation/at-rules/use/"
            ><code>@use</code> and <code>@forward</code> keywords</a
          >
        </p>
        {% highlight sass %} // After $purple: #8a4d76; $pink: #fa7c91; $brown:
        #757763; $beige-light: #d0d1cd; $beige-lighter: #eff0eb; // Path to
        Bulma's sass folder @use "path/to/bulma/sass" with ( $family-primary:
        '"Nunito", sans-serif', $grey-dark: $brown, $grey-light: $beige-light,
        $primary: $purple, $link: $pink, $control-border-width: 2px, $input-h:
        color.hue($beige-lighter), $input-s: color.saturation($beige-lighter),
        $input-background-l: color.lightness($beige-lighter), $input-border-l:
        color.lightness($beige-lighter), $input-shadow: none ); {% endhighlight
        %}
      </td>
    </tr>
  </tbody>
</table>
```

## File: docs/documentation/start/modular.html

```html
---
title: Modularity in Bulma
layout: docs
theme: start
doc-tab: start
doc-subtab: modular
breadcrumb:
  - home
  - documentation
  - start
  - start-modular
---

{% capture import %} // Only load the columns @use "bulma/sass/grid/columns"; {%
endcapture %} {% capture columns %}
<div class="columns">
  <div class="column">1</div>
  <div class="column">2</div>
  <div class="column">3</div>
  <div class="column">4</div>
  <div class="column">5</div>
</div>
{% endcapture %} {% capture only_button %} // Load Bulma's base styles and
themes (including the minireset) @use "bulma/sass/base"; @use
"bulma/sass/themes"; // Load the button and title elements and components @use
"bulma/sass/elements/button"; @use "bulma/sass/elements/title"; @use
"bulma/sass/components/message"; {% endcapture %} {% capture buttons %}
<button class="button">Button</button>
<button class="button is-primary">Primary button</button>
<button class="button is-large">Large button</button>
<button class="button is-loading">Loading button</button>
{% endcapture %} {% capture use_rule %} @use "path/to/file.scss"; {% endcapture
%} {% capture base_loads %} // Load Bulma's base styles and themes (including
the minireset) @use "bulma/sass/base"; @use "bulma/sass/themes"; // Load other
Bulma components @use "bulma/sass/elements/button"; @use
"bulma/sass/components/message"; {% endcapture %}

<div class="content">
  <p>
    Bulma consists of elements and components defined in dozens of
    <code>.scss</code> files, that you can
    <a href="https://sass-lang.com/documentation/at-rules/use/"
      >load individually with the <code>@use</code> keyword</a
    >.
  </p>

  {% highlight sass %}{{ use_rule }}{% endhighlight %}

  <p>
    While this will correctly load the target file's styles, most Bulma
    components rely on <strong>base styles</strong> and
    <strong>CSS variables</strong> defined by the default themes.
  </p>

  <p>
    That is why it's preferable to <em>also</em> load the
    <code>sass/base</code> folder and the <code>sass/themes</code> folder:
  </p>

  {% highlight sass %}{{ base_loads }}{% endhighlight %}
</div>

{% include docs/elements/anchor.html name="Importing columns" %}

<div class="content">
  <p>
    Layout features like Bulma's columns don't rely on CSS variables defined by
    Bulma themes. As a result, you can load them directly without requiring any
    additional file.
  </p>

  <p>
    For example, importing Bulma <strong>columns</strong> only requires to load
    the file located in the <code>bulma/sass/grid</code> folder.
  </p>

  <p>
    Simply <strong>load</strong> the <code>columns.scss</code> file with the
    <code>@use</code> keyword
  </p>
  {% highlight sass %}{{ import }}{% endhighlight %}
  <p>
    Now you can use the classes <code>.columns</code> (for the container) and
    <code>.column</code> directly:
  </p>
  {% highlight html %}{{ columns }}{% endhighlight %}
</div>

{% include docs/elements/anchor.html name="Importing Bulma elements and
components" %}

<div class="content">
  <p>
    To load Bulma elements like the <code>.button</code> and components like the
    <code>.message</code>, it's preferable to also load the base styles and
    default themes.
  </p>

  {% highlight sass %}{{ only_button }}{% endhighlight %}

  <p>You can now use the <code>.button</code> class, and all its modifiers:</p>
  <ul>
    <li>
      <code>.is-active</code>
    </li>
    <li>
      <code>.is-primary</code>, <code>.is-info</code>,
      <code>.is-success</code>...
    </li>
    <li>
      <code>.is-small</code>, <code>.is-medium</code>,
      <code>.is-large</code>
    </li>
    <li>
      <code>.is-outlined</code>, <code>.is-inverted</code>,
      <code>.is-link</code>
    </li>
    <li>
      <code>.is-loading</code>,
      <code>[disabled]</code>
    </li>
  </ul>

  {% highlight html %}{{ buttons }}{% endhighlight %}
</div>

{% capture configuration %} $section-padding: 3rem 1.5rem !default;
$section-padding-desktop: 3rem 3rem !default; $section-padding-medium: 9rem
4.5rem !default; $section-padding-large: 18rem 6rem !default; {% endcapture %}
{% capture custom_section %} // Load the section component with custom variables
@use "bulma/sass/layout/section" with ( $section-padding: 3rem,
$section-padding-desktop: 4.5rem ); {% endcapture %} {% include
docs/elements/anchor.html name="Importing with custom Sass variables" %}

<div class="content">
  <p>
    Most Bulma components are configured with Sass variables. For example, the
    <code>.section</code> layout component uses 4 variables to define its
    padding:
  </p>
  {% highlight sass %}{{ configuration }}{% endhighlight %}
  <p>
    The <code>@use</code> keyword allows use to configure a module when loading
    it with our own variables:
  </p>
  {% highlight sass %}{{ custom_section }}{% endhighlight %}
</div>
```

## File: docs/documentation/start/overview.html

```html
---
title: Overview of Bulma
layout: docs
theme: start
doc-tab: start
doc-subtab: overview
breadcrumb:
  - home
  - documentation
  - start
  - start-overview
---

<div class="content">
  <p>
    Bulma is a <strong>CSS library</strong>. This means it provides CSS classes
    to help you style your HTML code.
  </p>
  <p>To use Bulma, you can either:</p>
  <ul>
    <li>use one of the pre-compiled <code>.css</code> files</li>
    <li>
      or install the <code>.scss</code> files so you can customize Bulma to your
      needs
    </li>
  </ul>
</div>

{% include docs/elements/anchor.html name="Code requirements" %}

<div class="content">
  <p>
    For Bulma to work correctly, you need to make your webpage
    <strong>responsive</strong>.
  </p>
</div>

<article class="media is-large">
  <div class="media-left">
    <p class="title is-5">1</p>
  </div>
  <div class="media-content">
    <p class="title is-5">Use the <strong>HTML5 doctype</strong></p>
    {%- highlight html -%}
    <!DOCTYPE html>
    {%- endhighlight -%}
  </div>
</article>

<article class="media is-large">
  <div class="media-left">
    <p class="title is-5">2</p>
  </div>
  <div class="media-content">
    <p class="title is-5">
      Add the responsive <strong>viewport</strong> meta tag
    </p>
    {% highlight html -%}
    <meta name="viewport" content="width=device-width, initial-scale=1" />{%
    endhighlight %}
  </div>
</article>

{% include docs/elements/anchor.html name="Starter template" %}

<div class="content">
  <p>
    If you want to get started <strong>right away</strong>, you can use this
    <strong>HTML starter template</strong>. Just copy/paste this code in a file
    and save it on your computer.
  </p>
</div>

<div class="bd-example bd-highlight-full">
  {% highlight html -%} {%- include docs/snippets/getting-started.html -%} {%-
  endhighlight %}
</div>
```

## File: docs/documentation/start/responsiveness.html

```html
---
title: Responsiveness
layout: docs
theme: start
doc-tab: start
doc-subtab: responsiveness
breadcrumb:
  - home
  - documentation
  - start
  - start-responsiveness
---

{% capture scss_code %} // Disable the widescreen breakpoint
$widescreen-enabled: false; // Disable the fullhd breakpoint $fullhd-enabled:
false; {% endcapture %} {% include docs/elements/anchor.html name="Vertical by
default" %}

<div class="content">
  <p>
    Every element in Bulma is <strong>mobile-first</strong> and optimizes for
    <strong>vertical reading</strong>, so by default on mobile:
  </p>
  <ul>
    <li><code>columns</code> are stacked vertically</li>
    <li>
      the <code>level</code> component will show its children stacked vertically
    </li>
    <li>the <code>nav</code> menu will be hidden</li>
  </ul>
  <p>
    You can however enforce the <strong>horizontal</strong> layout for both
    <code>columns</code> or <code>level</code> by appending the
    <code>is-mobile</code> modifier.
  </p>
</div>

{% include docs/elements/anchor.html name="Breakpoints" %} {% assign
variables_file_url =
'/blob/master/sass/utilities/initial-variables.sass#L56,L64' | prepend:
site.data.meta.github %} {% assign mixins_file_url =
'/blob/master/sass/utilities/mixins.sass#L81,L129' | prepend:
site.data.meta.github %}

<div class="content">
  <p>
    Bulma has
    <a href="{{ variables_file_url }}" target="_blank">4 breakpoints</a> which
    defines <strong>5 screen sizes</strong>:
  </p>
  <ul>
    {% for breakpoint_hash in site.data.breakpoints %} {% assign breakpoint =
    breakpoint_hash[1] %}
    <li>
      <code>{{ breakpoint.id }}</code>: {% if breakpoint.id == 'mobile' -%} up
      to <code>{{ breakpoint.to }}px</code> {%- else -%} from
      <code>{{ breakpoint.from }}px</code>
      {%- endif %}
    </li>
    {% endfor %}
  </ul>

  <p>
    To make use of these breakpoints, Bulma provides
    <a href="{{ site.url }}/documentation/sass/responsive-mixins/"
      >9 responsive mixins</a
    >.
  </p>
</div>

{% include docs/components/breakpoints-table.html %} {% assign urm_link =
site.data.links.by_id['utilities-responsive-mixins'] %}

<div class="content">
  <p>
    To simplify using these breakpoints, Bulma provides
    <a href="{{ site.url }}{{ urm_link.path }}">easy-to-use responsive mixins</a
    >.
  </p>
</div>

{% assign vernum = site.data.meta.version | downcase | remove: '.' | plus: 0 %}
{% if vernum >= 70 %} {% include docs/elements/anchor.html name="Disabling
breakpoints" %}

<div class="content">
  <p>
    By default, the <code>$widescreen</code> and
    <code>$fullhd</code> breakpoints are <strong>enabled</strong>. You can
    disable them by setting the corresponding Sass boolean to
    <code>false</code>:
  </p>
</div>

<div class="bd-highlight-full">
  {% highlight sass -%} {{- scss_code -}} {%- endhighlight %}
</div>
{% endif %} {% capture custom_message %} These are
<a href="{{ derived_variables.file_url }}" target="_blank">variables</a> with a
value that <strong>references</strong> another variable. {% endcapture %} {%
include docs/components/variables.html type='element'
variables_keys=page.variables_keys custom_message=custom_message
folder='utilities' file='initial-variables' %}
```

## File: docs/documentation/start/syntax.html

```html
---
title: Bulma's Modifiers Syntax
layout: docs
theme: start
doc-tab: start
doc-subtab: syntax
breadcrumb:
  - home
  - documentation
  - start
  - start-syntax
---

{% capture button_example %}
<button class="button">Button</button>
{% endcapture %} {% capture button_primary_example %}
<button class="button is-primary">Button</button>
{% endcapture %} {% capture button_colors %}
<button class="button is-primary">Button</button>
<button class="button is-link">Button</button>
<button class="button is-info">Button</button>
<button class="button is-success">Button</button>
<button class="button is-warning">Button</button>
<button class="button is-danger">Button</button>
{% endcapture %} {% capture button_sizes %}
<button class="button is-small">Button</button>
<button class="button">Button</button>
<button class="button is-medium">Button</button>
<button class="button is-large">Button</button>
{% endcapture %} {% capture button_states %}
<button class="button is-primary is-outlined">Button</button>
<button class="button is-loading">Button</button>
<button class="button" disabled>Button</button>
{% endcapture %} {% capture button_combinations %}
<button class="button is-primary is-small" disabled>Button</button>
<button class="button is-info is-loading">Button</button>
<button class="button is-danger is-outlined is-large">Button</button>
{% endcapture %}

<div class="columns">
  <div class="column">
    <p>
      Let's start with a simple <strong>button</strong> that uses the
      <code>"button"</code> CSS class:
    </p>
  </div>
  <div class="column">
    <p>{{button_example}}</p>
  </div>
  <div class="column is-half">
    {% highlight html %}{{button_example}}{% endhighlight %}
  </div>
</div>
<div class="columns">
  <div class="column">
    <p>
      By <strong>adding</strong> the <code>"is-primary"</code> CSS class, you
      can modify the <strong>color</strong>:
    </p>
  </div>
  <div class="column">
    <p>{{button_primary_example}}</p>
  </div>
  <div class="column is-half">
    {% highlight html %}{{button_primary_example}}{% endhighlight %}
  </div>
</div>
<div class="columns">
  <div class="column">
    <div class="content">
      <p>You can use one of the <strong>6 main colors</strong>:</p>
      <ul>
        <li><code>is-primary</code></li>
        <li><code>is-link</code></li>
        <li><code>is-info</code></li>
        <li><code>is-success</code></li>
        <li><code>is-warning</code></li>
        <li><code>is-danger</code></li>
      </ul>
    </div>
  </div>
  <div class="column">
    <p class="field">
      <button class="button is-primary">Button</button>
    </p>
    <p class="field">
      <button class="button is-link">Button</button>
    </p>
    <p class="field">
      <button class="button is-info">Button</button>
    </p>
    <p class="field">
      <button class="button is-success">Button</button>
    </p>
    <p class="field">
      <button class="button is-warning">Button</button>
    </p>
    <p class="field">
      <button class="button is-danger">Button</button>
    </p>
  </div>
  <div class="column is-half">
    <div class="bd-highlight-full">
      {% highlight html %}{{ button_colors }}{% endhighlight %}
    </div>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>You can also alter the <strong>size</strong>:</p>
      <ul>
        <li><code>is-small</code></li>
        <li><code>is-medium</code></li>
        <li><code>is-large</code></li>
      </ul>
    </div>
  </div>
  <div class="column">
    <p class="field">
      <button class="button is-small">Button</button>
    </p>
    <p class="field">
      <button class="button">Button</button>
    </p>
    <p class="field">
      <button class="button is-medium">Button</button>
    </p>
    <p class="field">
      <button class="button is-large">Button</button>
    </p>
  </div>
  <div class="column is-half">
    {% highlight html %}{{ button_sizes }}{% endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      <p>Or the <strong>style</strong> or <strong>state</strong>:</p>
      <ul>
        <li><code>is-outlined</code></li>
        <li><code>is-loading</code></li>
        <li><code>[disabled]</code></li>
      </ul>
    </div>
  </div>
  <div class="column">
    <p class="field">
      <button class="button is-primary is-outlined">Button</button>
    </p>
    <p class="field">
      <button class="button is-loading">Button</button>
    </p>
    <p class="field">
      <button class="button" disabled>Button</button>
    </p>
  </div>
  <div class="column is-half">
    {% highlight html %}{{ button_states }}{% endhighlight %}
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="content">
      As a result, it's very easy to <strong>combine modifiers:</strong>
    </div>
  </div>
  <div class="column">
    <p class="field">
      <button class="button is-primary is-small" disabled>Button</button>
    </p>
    <p class="field">
      <button class="button is-info is-loading">Button</button>
    </p>
    <p class="field">
      <button class="button is-danger is-outlined is-large">Button</button>
    </p>
  </div>
  <div class="column is-half">
    {% highlight html %}{{ button_combinations }}{% endhighlight %}
  </div>
</div>
```

## File: README.md

````markdown
# [Bulma](https://bulma.io)

Bulma is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

![Github](https://img.shields.io/github/v/release/jgthms/bulma?logo=Bulma)
[![npm](https://img.shields.io/npm/v/bulma.svg)][npm-link]
[![npm](https://img.shields.io/npm/dm/bulma.svg)][npm-link]
[![](https://data.jsdelivr.com/v1/package/npm/bulma/badge)](https://www.jsdelivr.com/package/npm/bulma)
[![Awesome][awesome-badge]][awesome-link]
[![Join the chat at https://gitter.im/jgthms/bulma](https://badges.gitter.im/jgthms/bulma.svg)](https://gitter.im/jgthms/bulma)
[![Build Status](https://travis-ci.org/jgthms/bulma.svg?branch=master)](https://travis-ci.org/jgthms/bulma)

<a href="https://bulma.io"><img src="https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png" alt="Bulma: a Flexbox CSS framework" style="max-width:100%;" width="600"></a>

## Quick install

Bulma is constantly in development! Try it out now:

### NPM

```sh
npm install bulma
```

**or**

### Yarn

```sh
yarn add bulma
```

### Bower

```sh
bower install bulma
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
@import 'bulma/css/bulma.css'
```

### CDN

[https://www.jsdelivr.com/package/npm/bulma](https://www.jsdelivr.com/package/npm/bulma)

Feel free to raise an issue or submit a pull request.

## CSS only

Bulma is a **CSS** framework. As such, the sole output is a single CSS file: [bulma.css](https://github.com/jgthms/bulma/blob/main/css/bulma.css)

You can either use that file, "out of the box", or download the Sass source files to customize the [variables](https://bulma.io/documentation/customize/#docsNav).

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Bulma can be considered "environment agnostic": it's just the style layer on top of the logic.

## Browser Support

Bulma uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/#feat=flexbox), Bulma is compatible with **recent** versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari

Internet Explorer (10+) is only partially supported.

## Documentation

The documentation resides in the [docs](docs) directory, and is built with the Ruby-based [Jekyll](https://jekyllrb.com/) tool.

Browse the [online documentation here.](https://bulma.io/documentation/start/overview/)

## Related projects

| Project                                                                              | Description                                                                                                      |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| [Bulma with Attribute Modules](https://github.com/j5bot/bulma-attribute-selectors)   | Adds support for attribute-based selectors                                                                       |
| [Bulma with Rails](https://github.com/joshuajansen/bulma-rails)                      | Integrates Bulma with the rails asset pipeline                                                                   |
| [BulmaRazor](https://github.com/loogn/bulmarazor)                                    | A lightweight component library based on Bulma and Blazor.                                                       |
| [Vue Admin (dead)](https://github.com/vue-bulma/vue-admin)                           | Vue Admin framework powered by Bulma                                                                             |
| [Bulmaswatch](https://github.com/jenil/bulmaswatch)                                  | Free themes for Bulma                                                                                            |
| [Goldfish (read-only)](https://github.com/Caiyeon/goldfish)                          | Vault UI with Bulma, Golang, and Vue Admin                                                                       |
| [ember-bulma](https://github.com/open-tux/ember-bulma)                               | Ember addon providing a collection of UI components for Bulma                                                    |
| [Bloomer](https://bloomer.js.org)                                                    | A set of React components for Bulma                                                                              |
| [React-bulma](https://github.com/kulakowka/react-bulma)                              | React.js components for Bulma                                                                                    |
| [Buefy](https://buefy.org/)                                                          | Lightweight UI components for Vue.js based on Bulma                                                              |
| [vue-bulma-components](https://github.com/vouill/vue-bulma-components)               | Bulma components for Vue.js with straightforward syntax                                                          |
| [BulmaJS](https://github.com/VizuaaLOG/BulmaJS)                                      | Javascript integration for Bulma. Written in ES6 with a data-\* API                                              |
| [Bulma-modal-fx](https://github.com/postare/bulma-modal-fx)                          | A set of modal window effects with CSS transitions and animations for Bulma                                      |
| [Bulma Stylus](https://github.com/groenroos/bulma-stylus)                            | Up-to-date 1:1 translation to Stylus                                                                             |
| [Bulma.styl (read-only)](https://github.com/log1x/bulma.styl)                        | 1:1 Stylus translation of Bulma 0.6.11                                                                           |
| [elm-bulma](https://github.com/surprisetalk/elm-bulma)                               | Bulma + Elm                                                                                                      |
| [elm-bulma-classes](https://github.com/ahstro/elm-bulma-classes)                     | Bulma classes prepared for usage with Elm                                                                        |
| [Bulma Customizer](https://bulma-customizer.bstash.io/)                              | Bulma Customizer &#8211; Create your own **bespoke** Bulma build                                                 |
| [Fulma](https://fulma.github.io/Fulma/)                                              | Wrapper around Bulma for [fable-react](https://github.com/fable-compiler/fable-react)                            |
| [Laravel Enso](https://github.com/laravel-enso/enso)                                 | SPA Admin Panel built with Bulma, VueJS and Laravel                                                              |
| [Django Bulma](https://github.com/timonweb/django-bulma)                             | Integrates Bulma with Django                                                                                     |
| [Bulma Templates](https://github.com/dansup/bulma-templates)                         | Free Templates for Bulma                                                                                         |
| [React Bulma Components](https://github.com/couds/react-bulma-components)            | Another React wrap on React for Bulma.io                                                                         |
| [purescript-bulma](https://github.com/sectore/purescript-bulma)                      | PureScript bindings for Bulma                                                                                    |
| [Vue Datatable](https://github.com/laravel-enso/vuedatatable)                        | Bulma themed datatable based on Vue, Laravel & JSON templates                                                    |
| [bulma-fluent](https://mubaidr.github.io/bulma-fluent/)                              | Fluent Design Theme for Bulma inspired by Microsoft’s Fluent Design System                                       |
| [csskrt-csskrt](https://github.com/4d11/csskrt-csskrt)                               | Automatically add Bulma classes to HTML files                                                                    |
| [bulma-pagination-react](https://github.com/hipstersmoothie/bulma-pagination-react)  | Bulma pagination as a react component                                                                            |
| [bulma-helpers](https://github.com/jmaczan/bulma-helpers)                            | Functional / Atomic CSS classes for Bulma                                                                        |
| [bulma-swatch-hook](https://github.com/hipstersmoothie/bulma-swatch-hook)            | Bulma swatches as a react hook and a component                                                                   |
| [BulmaWP (read-only)](https://github.com/tomhrtly/BulmaWP)                           | Starter WordPress theme for Bulma                                                                                |
| [Ralma](https://github.com/aldi/ralma)                                               | Stateless Ractive.js Components for Bulma                                                                        |
| [Django Simple Bulma](https://github.com/python-discord/django-simple-bulma)         | Lightweight integration of Bulma and Bulma-Extensions for your Django app                                        |
| [rbx](https://dfee.github.io/rbx)                                                    | Comprehensive React UI Framework written in TypeScript                                                           |
| [Awesome Bulma Templates](https://github.com/aldi/awesome-bulma-templates)           | Free real-world Templates built with Bulma                                                                       |
| [Trunx](https://github.com/fibo/trunx)                                               | Super Saiyan React components, son of awesome Bulma                                                              |
| [@aybolit/bulma](https://github.com/web-padawan/aybolit/tree/master/packages/bulma)  | Web Components library inspired by Bulma and Bulma-extensions                                                    |
| [Drulma](https://www.drupal.org/project/drulma)                                      | Drupal theme for Bulma.                                                                                          |
| [Bulrush](https://github.com/textbook/bulrush)                                       | A Bulma-based Python Pelican blog theme                                                                          |
| [Bulma Variable Export](https://github.com/service-paradis/bulma-variables-export)   | Access Bulma Variables in Javascript/Typescript in project using Webpack                                         |
| [Bulmil](https://github.com/gomah/bulmil)                                            | An agnostic UI components library based on Web Components, made with Bulma & Stencil.                            |
| [Svelte Bulma Components](https://github.com/elcobvg/svelte-bulma-components)        | Library of UI components to be used in [Svelte.js](https://svelte.technology/) or standalone.                    |
| [Bulma Nunjucks Starterkit](https://github.com/benninkcorien/nunjucks-starter-kit)   | Starterkit for Nunjucks with Bulma.                                                                              |
| [Bulma-Social](https://github.com/aldi/bulma-social)                                 | Social Buttons and Colors for Bulma                                                                              |
| [Divjoy](https://divjoy.com/?kit=bulma)                                              | React codebase generator with Bulma templates                                                                    |
| [Blazorise](https://github.com/Megabit/Blazorise)                                    | Blazor component library with the support for Bulma CSS framework                                                |
| [Oruga-Bulma](https://github.com/oruga-ui/theme-bulma)                               | Bulma theme for [Oruga UI](https://oruga.io)                                                                     |
| [@bulvar/bulma](https://github.com/daniil4udo/bulvar/tree/master/packages/bulma)     | Bulma with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) support |
| [@angular-bulma](https://quinnjr.github.io/angular-bulma)                            | [Angular](https://angular.io/) directives and components to use in your Bulma projects                           |
| [Bulma CSS Class Completion](https://github.com/eliutdev/bulma-css-class-completion) | CSS class name completion for the HTML class attribute based on Bulma CSS classes.                               |
| [Crispy-Bulma](https://github.com/ckrybus/crispy-bulma)                              | Bulma template pack for django-crispy-forms                                                                      |
| [Manifest](https://manifest.build)                                                   | Manifest is a lightweight Backend-as-a-Service with essential features: DB, Admin panel, API, JS SDK             |
| [Reactive Bulma](https://github.com/NicolasOmar/reactive-bulma)                      | A component library based on React, Bulma, Typescript and Rollup                                                 |

<p>Browser testing via<br /><a href="https://www.lambdatest.com/" target="_blank"><img src="https://bulma.io/assets/images/amis/lambdatest-logo.png" width="168" height="40" /></a></p>

## Copyright and license ![Github](https://img.shields.io/github/license/jgthms/bulma?logo=Github)

Code copyright 2023 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/main/LICENSE).

[npm-link]: https://www.npmjs.com/package/bulma
[awesome-link]: https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
````
