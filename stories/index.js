import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/index';

import '../src/style.css';
import '../src/themes/red.css';
import '../src/themes/pink.css';
import '../src/themes/blue.css';
import '../src/themes/purple.css';
import '../src/themes/indigo.css';
import '../src/themes/deep-purple.css';
import '../src/themes/light-blue.css';
import '../src/themes/cyan.css';
import '../src/themes/teal.css';
import '../src/themes/green.css';
import '../src/themes/light-green.css';
import '../src/themes/lime.css';
import '../src/themes/yellow.css';
import '../src/themes/amber.css';
import '../src/themes/orange.css';
import '../src/themes/deep-orange.css';
import '../src/themes/brown.css';
import '../src/themes/grey.css';
import '../src/themes/blue-grey.css';
import '../src/themes/black.css';

const itemStyle = {
  display: 'inline-block',
  width: '50%',
  padding: '10px',
  boxSizing: 'border-box',
};

storiesOf('Button', module)
  .add('default', () => (
    <Button color="default" onClick={action('clicked')}>
      default
    </Button>
  ))
  .add('red', () => (
    <Button color="red" onClick={action('clicked')}>
      red
    </Button>
  ))
  .add('pink', () => (
    <Button color="pink" onClick={action('clicked')}>
      pink
    </Button>
  ))
  .add('purple', () => (
    <Button color="purple" onClick={action('clicked')}>
      purple
    </Button>
  ))
  .add('deep-purple', () => (
    <Button color="deep-purple" onClick={action('clicked')}>
      deep-purple
    </Button>
  ))
  .add('Indigo', () => (
    <Button color="indigo" onClick={action('clicked')}>
      Indigo
    </Button>
  ))
  .add('blue', () => (
    <Button color="blue" onClick={action('clicked')}>
      blue
    </Button>
  ))
  .add('light-blue', () => (
    <Button color="light-blue" onClick={action('clicked')}>
      light-blue
    </Button>
  ))
  .add('cyan', () => (
    <Button color="cyan" onClick={action('clicked')}>
      cyan
    </Button>
  ))
  .add('teal', () => (
    <Button color="teal" onClick={action('clicked')}>
      teal
    </Button>
  ))
  .add('green', () => (
    <Button color="green" onClick={action('clicked')}>
      green
    </Button>
  ))
  .add('light-green', () => (
    <Button color="light-green" onClick={action('clicked')}>
      light-green
    </Button>
  ))
  .add('lime', () => (
    <Button color="lime" onClick={action('clicked')}>
      lime
    </Button>
  ))
  .add('yellow', () => (
    <Button color="yellow" onClick={action('clicked')}>
      yellow
    </Button>
  ))
  .add('amber', () => (
    <Button color="amber" onClick={action('clicked')}>
      amber
    </Button>
  ))
  .add('orange', () => (
    <Button color="orange" onClick={action('clicked')}>
      orange
    </Button>
  ))
  .add('deep-orange', () => (
    <Button color="deep-orange" onClick={action('clicked')}>
      deep-orange
    </Button>
  ))
  .add('brown', () => (
    <Button color="brown" onClick={action('clicked')}>
      brown
    </Button>
  ))
  .add('grey', () => (
    <Button color="grey" onClick={action('clicked')}>
      grey
    </Button>
  ))
  .add('blue-grey', () => (
    <Button color="blue-grey" onClick={action('clicked')}>
      blue-grey
    </Button>
  ))
  .add('black', () => (
    <Button color="black" onClick={action('clicked')}>
      black
    </Button>
  ))
  .add('all', () => (
    <div>
      <div style={itemStyle}>
        <Button color="default" onClick={action('clicked')}>
          {' '}
          default{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="red" onClick={action('clicked')}>
          {' '}
          red{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="pink" onClick={action('clicked')}>
          {' '}
          pink{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="purple" onClick={action('clicked')}>
          {' '}
          purple{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="deep-purple" onClick={action('clicked')}>
          {' '}
          deep-purple{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="indigo" onClick={action('clicked')}>
          {' '}
          Indigo{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="blue" onClick={action('clicked')}>
          {' '}
          blue{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="light-blue" onClick={action('clicked')}>
          {' '}
          light-blue{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="cyan" onClick={action('clicked')}>
          {' '}
          cyan{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="teal" onClick={action('clicked')}>
          {' '}
          teal{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="green" onClick={action('clicked')}>
          {' '}
          green{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="light-green" onClick={action('clicked')}>
          {' '}
          light-green{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="lime" onClick={action('clicked')}>
          {' '}
          lime{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="yellow" onClick={action('clicked')}>
          {' '}
          yellow{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="amber" onClick={action('clicked')}>
          {' '}
          amber{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="orange" onClick={action('clicked')}>
          {' '}
          orange{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="deep-orange" onClick={action('clicked')}>
          {' '}
          deep-orange{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="brown" onClick={action('clicked')}>
          {' '}
          brown{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="grey" onClick={action('clicked')}>
          {' '}
          grey{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="blue-grey" onClick={action('clicked')}>
          {' '}
          blue-grey{' '}
        </Button>
      </div>
      <div style={itemStyle}>
        <Button color="black" onClick={action('clicked')}>
          {' '}
          black{' '}
        </Button>
      </div>
    </div>
  ));
