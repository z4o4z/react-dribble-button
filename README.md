[![](https://img.shields.io/npm/dm/react-dribble-button.svg?style=flat-square)](https://www.npmjs.com/package/react-dribble-button)

# react-dribble-button

The Button component with pretty nice hive and click effects

## Installation

```
$ npm install react-dribble-button
```

## Demo

[Try it out](https://z4o4z.github.io/react-dribble-button/storybook-static/index.html)

![](./demo/demo-1.gif)
![](./demo/demo-4.gif)

## Basic Usage

```js
import DribbleButton from 'react-dribble-button';
import 'react-dribble-button/css/style.css';
import 'react-dribble-button/css/deep-orange.css';

// Inside of a component's render() method:
render() {
  return (
    <DribbleButton colorSchema="deep-orange" onClick={this.onClick}>
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
| `color` | `string` | `{}` | The color theme. Should be one of the folowing strings: 'red' | 'pink' | 'blue' | 'cyan' | 'teal' | 'lime' | 'grey' | 'green' | 'amber' | 'brown' | 'black' | 'orange' | 'purple' | 'yellow' | 'indigo' | 'default' | 'blue-grey' | 'light-blue' | 'light-green' | 'deep-orange' | 'deep-purple | `onClick` | `number` | `Dimensions.get('window').width` | Component's width. |
| `children` | `number` | `Dimensions.get('window').height` | Component's height. |
| `className` | `func` | `null` | To get a reference to the scrollable component. |
| `component` | `object` | `{}` | These styles will be applied to the scroll view. |
| `effectClassName` | `number` | `45` | This is the height of sticky(fixed) header. |


## Contributing

I welcome contributions! Please open an issue if you have any feature ideas
or find any bugs. I also accept pull requests with open arms. I will
go over the issues when I have time. :)
