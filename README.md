# d3-axis for React

Using d3 to build charts in React is mostly a wonderful experience. But
it's hard to use `d3-axis` in that system: it internally uses d3's selection
system, so if you're creating your charts in React with JSX, you can't.

This is `d3-axis`, but for React. As direct a port as you can get. You can
essentially read the [API Reference](https://github.com/d3/d3-axis#api-reference)
for d3-axis, and translate it directly to this component: for every d3-style
setter function, use a prop. The `scale` argument that you provide to
the axis method is a `scale` prop.

### Examples

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
