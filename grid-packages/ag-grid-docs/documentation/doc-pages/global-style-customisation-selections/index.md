---
title: "Customising Selections"
---

Control how selected rows and cells appear.

## Row Selections

When [row selection](/row-selection/) is enabled, you can set the color of selected rows using `--ag-selected-row-background-color`. If your grid uses alternating row colours we recommend setting this to a semi-transparent colour so that the alternating row colours are visible below it.

```css
.ag-theme-alpine {
    /* bright green, 10% opacity */
    --ag-selected-row-background-color: rgb(0, 255, 0, 0.1);
}
```

<grid-example title='Custom Row Selection Colour' name='custom-row-selection-color' type='generated' options='{ "exampleHeight": 450 }'></grid-example>

## Range Selections

[Range selections](/range-selection/) can be created by clicking and dragging on the grid. Multiple overlapping range selections can be made by holding <kbd>Ctrl</kbd> while creating a new range outside the existing range. Copying from a selection will briefly highlight the range of cells (<kbd>Ctrl + C</kbd>). There are several variables to control the selection and highlight style:

```css
.ag-theme-alpine {
    --ag-range-selection-border-color: rgb(193, 0, 97);
    --ag-range-selection-border-style: dashed;
    --ag-range-selection-background-color: rgb(255, 0, 128, 0.1);
    /* these next 3 variables control the background colour when 2, 3 or 4+ ranges overlap,
       and should have progressively greater opacity to look realistic - see the docs below
       for the correct formulas to use */
    --ag-range-selection-background-color-2: rgb(255, 0, 128, 0.19);
    --ag-range-selection-background-color-3: rgb(255, 0, 128, 0.27);
    --ag-range-selection-background-color-4: rgb(255, 0, 128, 0.34);

    --ag-range-selection-highlight-color: rgb(60, 188, 0, 0.3);
}
```

<grid-example title='Custom Range Selection Style' name='custom-range-selection-style' type='generated'  options='{ "enterprise": true, "modules": ["clientside", "range", "menu", "clipboard"] }'></grid-example>

### Range Selection CSS Variables

<api-documentation source='global-style-customisation-variables/resources/variables.json' section='variables' names='["--ag-range-selection-border-color", "--ag-range-selection-border-style", "--ag-range-selection-background-color", "--ag-range-selection-background-color-2", "--ag-range-selection-background-color-3", "--ag-range-selection-background-color-4", "--ag-range-selection-highlight-color", "--ag-range-selection-chart-category-background-color", "--ag-range-selection-chart-background-color"]' config='{"maxLeftColumnWidth": 35, "hideHeader": true}'></api-documentation>
