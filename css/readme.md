# Overview
Less (Leaner Style Sheets) is a CSS preprocessor that adds additional features to CSS such as variables, nested rules, and mixins. It allows developers to write clean, maintainable, and reusable code.

To use Less, you can either compile your .less files to .css files using a build system or a tool like lessc, or you can use a browser plugin or a JavaScript runtime to interpret .less files in the browser.

Lessc is a command-line tool for compiling Less files to CSS. To use it, you need to have Node.js and the Less package installed on your system.

To compile a Less file to CSS, you can use the following command:

```
lessc main.less style.css
```

This will compile the main.less file to a style.css file in the same directory.

You can also use the --autoprefix flag to automatically add vendor prefixes to your CSS rules. For example:

```
lessc main.less --autoprefix style.css
```

This will compile the main.less file to a style.css file and add vendor prefixes to the generated CSS rules as needed to ensure compatibility with different browsers.

You can find more information about Less and lessc in the official Less documentation: http://lesscss.org/.

## Codes examples
Documentation and examples

https://lesscss.org

## File Structure and methodology
The project respect the RSCSS methodoly: https://ricostacruz.com/rscss/index.html

Projects are organized into the following categories:

Constants: These files include variables that define constants used throughout the project.

Tools: These files include utility styles, such as a normalize file and a clearfix file.

Selectors: These file provide overidding for some selector to make customisation easier and can be used to include styles for various types of selectors, such as classes, IDs, and pseudo-classes.

Elements: These files include styles for specific HTML elements.

Components: These files include styles for reusable component.

Structures: These files include styles for structural elements, such as the footer and navbar.

Layouts: These files include styles for specific page layouts.

Helpers: These files include utility styles for things like animations, flexbox, text etc.

## Examples
Constants are used to define common properties with the @constant: value; syntax.
```
@xxs: 320px;
```

Elements are the most common elements in the UI and are described with a single, meaningful word. They are defined using the .element { property: value; } syntax.
```
.title { 
  font-style: bold; 
}
```

Variants of elements are described using a hyphen followed by a single word, nested inside the element's CSS selector with the &.-variant { property: value; } syntax.
```
.title { 
  font-size: 20px; 
  font-style: bold; 
  
  &.-bigger { 
    font-size: 24px; 
  }
}

```

More complex UI parts, called components, are described with the .component-example { property: value; } syntax.
```
.dialog-container { 
  width: 100%; 
}
```

Variants of components are described in the same way as element variants, using the &.-variant { property: value; } syntax.
```
.search-container { 
  width: 200px; 
  cursor: pointer;
  
  &.-smaller { 
    width: 120px; 
  } 
}
```

Nested components and elements are kept to a minimum to keep the nesting level low.
```
.component-example { 
  property: value; 
  
  .nested-component { 
    property: value; 
  } 
}
```

Helpers, indicated with the prefix "_", are used to simplify development by allowing the definition of common properties directly in the markup. They are defined using the _helpers { property: value; } syntax and may also have variants with the &.-variant { property: value; } syntax.
```
._helpers { 
  property: value; 
  
  &.-variant { 
    property: value; 
  } 
}
```
