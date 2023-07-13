d3-axis-for-react

# d3-axis-for-react

## Table of contents

### Enumerations

- [Orient](enums/Orient.md)

### Functions

- [Axis](README.md#axis)

## Functions

### Axis

▸ **Axis**<`Domain`\>(`«destructured»`): `Element`

The axis component. This renders an axis, within a
`g` element, for use in a chart.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Domain` | extends `AxisDomain` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | - |
| › `domainPathProps?` | ``null`` \| `SVGProps`<`SVGPathElement`\> | Additional attributes to the domain path, or null to omit |
| › `offset?` | `number` | - |
| › `orient?` | [`Orient`](enums/Orient.md) | - |
| › `scale` | `AxisScale`<`Domain`\> | An initialized d3 scale object, like a d3.linearScale |
| › `tickArguments?` | `any`[] | - |
| › `tickFormat?` | `any` | - |
| › `tickLineProps?` | ``null`` \| `SVGProps`<`SVGLineElement`\> | Additional attributes to add to tick line elements, or null to omit |
| › `tickPadding?` | `number` | - |
| › `tickSize?` | `number` | - |
| › `tickSizeInner?` | `number` | - |
| › `tickSizeOuter?` | `number` | - |
| › `tickTextProps?` | ``null`` \| `SVGProps`<`SVGTextElement`\> | Additional attributes to add to tick text elements, or null to omit |
| › `tickValues?` | ``null`` \| `any`[] | - |
| › `ticks?` | `any`[] | - |

#### Returns

`Element`

#### Defined in

[index.tsx:33](https://github.com/tmcw/d3-axis-for-react/blob/7123c8d/src/index.tsx#L33)
