[![](https://img.shields.io/npm/dm/react-dribble-button.svg?style=flat-square)](https://www.npmjs.com/package/react-dribble-button)

# react-dribble-button

The Button component with pretty nice hive and click effects

## Installation

```
$ npm install react-dribble-button
```

## Demo

[Try it out](https://z4o4z.github.io/react-dribble-button/storybook-static/index.html)

| ![](./demo/demo-1.gif) | ![](./demo/demo-4.gif) |

## Basic Usage

```js
import DribbleButton from 'react-dribble-button';

// Inside of a component's render() method:
render() {
  return (
    <DribbleButton color="deep-orange" onClick={this.onClick} animationDuration={1000} >
      Try this cool color!
    </DribbleButton>
  );
}
```

## Examples

Please clone the repo and run `npm run storybook` or `yarn storybook` to show examples of usages.

## Usage (API)

The `DribbleButton` component has a few properties, as described below.

> NOTE: To use color themes needs import specific theme from `'react-dribble-button/css/[color-theme].css'`

| Property | Type | Defaut | Description |
| -------- | ---- | -------- | ----------- |
| `color` | `string` | `default` | The color theme. Should be one of the folowing strings: 'red' | 'pink' | 'blue' | 'cyan' | 'teal' | 'lime' | 'grey' | 'green' | 'amber' | 'brown' | 'black' | 'orange' | 'purple' | 'yellow' | 'indigo' | 'default' | 'blue-grey' | 'light-blue' | 'light-green' | 'deep-orange' | 'deep-purple
| `onClick` | `function` | `null` | Click handler. |
| `children` | `any` | `null` | Children element. |
| `className` | `string` | `''` | Class name of the component. |
| `component` | `string or Component` | `button` | Component type. |
| `effectClassName` | `string` | `''` | Class name of the effect component. |
| `animationDuration` | `number` | `650` | The dribble animation duration in ms. |


## Contributing

I welcome contributions! Please open an issue if you have any feature ideas
or find any bugs. I also accept pull requests with open arms. I will
go over the issues when I have time. :)
