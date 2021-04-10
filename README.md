# d3-axis-for-react

Using d3 to build charts in React is mostly a wonderful experience. But
it's hard to use `d3-axis` with React: it internally uses d3's selection
system, so if you're creating your charts in React with JSX, you can't.

This is `d3-axis`, but for React. As direct a port as you can get. You can
essentially read the [API Reference](https://github.com/d3/d3-axis#api-reference)
for d3-axis, and translate it directly to this component: for every d3-style
setter function, use a prop. The `scale` argument that you provide to
the axis method is a `scale` prop.

- **Tiny**: No dependencies. React is a peerDependency and this package does not depend on d3.
- **No new opinions**: Same API as d3, just with props instead of methods.
- **No animation**: d3's axis system supports transitioning. This does not: that's
  out of scope.
- **TypeScript included**: written in TypeScript, includes types.
- **Compatible with server-side rendering**: this doesn't use `useEffect` or any
  hooks: instead of using d3 to create DOM, this uses React.

### Translation example:

Traditional d3 style:

```js
d3.axisBottom(x)
  .ticks(d3.timeMonth.every(3))
  .tickFormat(d => d <= d3.timeYear(d) ? d.getFullYear() : null)
```

With d3-axis-for-react

```jsx
<Axis
  scale={x}
  ticks={d3.timeMonth.every(3)}
  tickFormat={d => d <= d3.timeYear(d) ? d.getFullYear() : null} />
```

### Examples

- [Line chart example on CodeSandbox](https://codesandbox.io/s/d3-axis-for-react-line-chart-example-dnbwd)

### API

```js
import { Axis, Orient } from "d3-axis-for-react";

// Orient is an enum that you provide to the orient=
// prop, like:
<Axis
  scale={x}
  orient={Orient.left} />
```

---

Development supported by [Earthrise Media](https://www.earthgenome.org/earthrise/).
Adapted from [d3-axis](https://github.com/d3/d3-axis), written by Mike Bostock,
licensed MIT.
