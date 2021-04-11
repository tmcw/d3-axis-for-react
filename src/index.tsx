import React from "react";
import type { AxisScale, AxisDomain } from "d3-axis";

function identity(x: any) {
  return x;
}

export enum Orient {
  top = 1,
  right = 2,
  bottom = 3,
  left = 4,
}

function translateX(x: number) {
  return "translate(" + x + ",0)";
}

function translateY(y: number) {
  return "translate(0," + y + ")";
}

export const Axis = <Domain extends AxisDomain>({
  scale,
  ticks,
  tickArguments = [],
  tickValues = null,
  tickFormat = null,
  tickSize,
  tickSizeInner = 6,
  tickSizeOuter = 6,
  tickPadding = 3,
  orient = Orient.bottom,
  offset = typeof window !== "undefined" && window.devicePixelRatio > 1
    ? 0
    : 0.5,
}: {
  scale: AxisScale<Domain>;
  ticks?: any;
  tickArguments?: any[];
  tickValues?: any[] | null;
  // TODO
  tickFormat?: any;
  tickSize?: number;
  tickSizeInner?: number;
  tickSizeOuter?: number;
  tickPadding?: number;
  offset?: number;
  orient?: Orient;
}) => {
  if (tickSize) {
    tickSizeInner = tickSize;
    tickSizeOuter = tickSize;
  }

  if (ticks) {
    tickArguments = ticks;
  }

  function number(scale: AxisScale<Domain>) {
    return (d: any) => {
      const value = scale(d);
      return value === undefined ? 0 : +value;
    };
  }

  function center(scale: AxisScale<Domain>, offset: number) {
    if (scale.bandwidth) {
      offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    }
    if ((scale as any).round()) offset = Math.round(offset);
    return (d: Domain) => {
      const value = scale(d);
      return value === undefined ? 0 : value + offset;
    };
  }

  const k = orient === Orient.top || orient === Orient.left ? -1 : 1,
    x = orient === Orient.left || orient === Orient.right ? "x" : "y",
    transform =
      orient === Orient.top || orient === Orient.bottom
        ? translateX
        : translateY;

  // Rendering
  const values =
      tickValues == null
        ? (scale as any).ticks
          ? (scale as any).ticks.apply(scale, tickArguments)
          : scale.domain()
        : tickValues,
    format =
      tickFormat == null
        ? (scale as any).tickFormat
          ? (scale as any).tickFormat.apply(scale, tickArguments)
          : identity
        : tickFormat,
    spacing = Math.max(tickSizeInner, 0) + tickPadding,
    range = scale.range(),
    range0 = +range[0] + offset,
    range1 = +range[range.length - 1] + offset,
    position = (scale.bandwidth ? center : number)(scale.copy(), offset);

  const domainPath =
    orient === Orient.left || orient === Orient.right
      ? tickSizeOuter
        ? "M" +
          k * tickSizeOuter +
          "," +
          range0 +
          "H" +
          offset +
          "V" +
          range1 +
          "H" +
          k * tickSizeOuter
        : "M" + offset + "," + range0 + "V" + range1
      : tickSizeOuter
      ? "M" +
        range0 +
        "," +
        k * tickSizeOuter +
        "V" +
        offset +
        "H" +
        range1 +
        "V" +
        k * tickSizeOuter
      : "M" + range0 + "," + offset + "H" + range1;

  const lineProps = {
    [x + "2"]: k * tickSizeInner,
  };

  const textProps = {
    [x]: k * spacing,
  };

  return (
    <g>
      {values.map((tick: any, i: number) => (
        <g
          className="tick"
          key={i}
          transform={transform(position(tick) + offset)}
        >
          <line stroke="currentColor" {...lineProps} />
          <text
            fill="currentColor"
            {...textProps}
            dy={
              orient === Orient.top
                ? "0em"
                : orient === Orient.bottom
                ? "0.71em"
                : "0.32em"
            }
            fontSize="10"
            fontFamily="sans-serif"
            textAnchor={
              orient === Orient.right
                ? "start"
                : orient === Orient.left
                ? "end"
                : "middle"
            }
          >
            {format(tick)}
          </text>
        </g>
      ))}
      <path
        className="domain"
        stroke="currentColor"
        fill="transparent"
        d={domainPath}
      />
    </g>
  );
};
