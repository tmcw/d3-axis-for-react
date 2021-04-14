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
- **No canvas**: d3-axis is compatible with Canvas thanks to d3's selection/context
  system. This component only targets SVG.
- **TypeScript included**: written in TypeScript, includes types.
- **Compatible with server-side rendering**: this doesn't use `useEffect` or any
  hooks: instead of using d3 to create DOM, this uses React.

### Installation

This is the `d3-axis-for-react` package on NPM, so:

```sh
$ yarn add d3-axis-for-react
# or
$ npm install d3-axis-for-react
```

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

- [Line chart](https://codesandbox.io/s/d3-axis-for-react-line-chart-example-dnbwd)
- [Index chart](https://codesandbox.io/s/d3-axis-for-react-index-chart-example-v0pe0)
- [Bar chart](https://codesandbox.io/s/bar-chart-example-d1j5e)

### [📚 API documentation](./docs/README.md)

---

Development supported by [Earthrise Media](https://www.earthgenome.org/earthrise/).
Adapted from [d3-axis](https://github.com/d3/d3-axis), written by Mike Bostock,
licensed MIT.
