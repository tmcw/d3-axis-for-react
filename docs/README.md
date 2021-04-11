d3-axis-for-react

# d3-axis-for-react

## Table of contents

### Enumerations

- [Orient](enums/orient.md)

### Functions

- [Axis](README.md#axis)

## Functions

### Axis

▸ `Const`**Axis**<Domain\>(`__namedParameters`: { `offset?`: *number* ; `orient?`: [*Orient*](enums/orient.md) ; `scale`: *AxisScale*<Domain\> ; `tickArguments?`: *any*[] ; `tickFormat?`: *any* ; `tickPadding?`: *number* ; `tickSize?`: *number* ; `tickSizeInner?`: *number* ; `tickSizeOuter?`: *number* ; `tickValues?`: *null* \| *any*[] ; `ticks?`: *any*  }): *Element*

The axis component. This renders an axis, within a
`g` element, for use in a chart.

#### Type parameters:

Name | Type |
:------ | :------ |
`Domain` | AxisDomain |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`__namedParameters` | *object* | - |
`__namedParameters.offset?` | *number* | - |
`__namedParameters.orient?` | [*Orient*](enums/orient.md) | - |
`__namedParameters.scale` | *AxisScale*<Domain\> | An initialized d3 scale object, like a d3.linearScale   |
`__namedParameters.tickArguments?` | *any*[] | - |
`__namedParameters.tickFormat?` | *any* | - |
`__namedParameters.tickPadding?` | *number* | - |
`__namedParameters.tickSize?` | *number* | - |
`__namedParameters.tickSizeInner?` | *number* | - |
`__namedParameters.tickSizeOuter?` | *number* | - |
`__namedParameters.tickValues?` | *null* \| *any*[] | - |
`__namedParameters.ticks?` | *any* | - |

**Returns:** *Element*

Defined in: [index.tsx:33](https://github.com/tmcw/d3-axis-for-react/blob/5f0ebfb/src/index.tsx#L33)
