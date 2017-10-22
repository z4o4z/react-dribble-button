import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMATION_DURATION = 500;

export default class ReactDribbleButton extends PureComponent {
  static propTypes = {
    color: PropTypes.oneOf([
      'red',
      'pink',
      'blue',
      'cyan',
      'teal',
      'lime',
      'grey',
      'green',
      'amber',
      'brown',
      'black',
      'orange',
      'purple',
      'yellow',
      'indigo',
      'default',
      'blue-grey',
      'light-blue',
      'light-green',
      'deep-orange',
      'deep-purple',
    ]),
    onClick: PropTypes.func,
    children: PropTypes.children,
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    effectClassName: PropTypes.string,
  };

  static defaultProps = {
    color: 'default',
    onClick: null,
    children: null,
    className: '',
    component: 'button',
    effectClassName: '',
  };

  state = {
    effects: [],
  };

  onClick = event => {
    this.updateEffects(event);

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  updateEffects({ pageX, pageY }) {
    const now = Date.now();

    this.setState(({ effects }) => ({
      effects: [
        ...effects.filter(({ date }) => now - date < ANIMATION_DURATION),
        {
          date: Date.now(),
          pageX,
          pageY,
        },
      ],
    }));
  }

  renderEffects = effectClassName => {
    if (!this.button) {
      return null;
    }

    const { left, top } = this.button.getBoundingClientRect();
    const diameter = Math.max(this.button.offsetWidth, this.button.offsetHeight);

    return this.state.effects.map(({ date, pageX, pageY }) => {
      const effectStyle = {
        top: `${pageY - (top + window.pageYOffset)}px`,
        left: `${pageX - (left + window.pageXOffset)}px`,
        width: `${diameter}px`,
        height: `${diameter}px`,
      };

      return (
        <i
          key={date}
          style={effectStyle}
          className={`react-dribble-button__effect ${effectClassName}`}
        />
      );
    });
  };

  render() {
    const { color, children, component, className, effectClassName, ...props } = this.props;

    const Component = component;

    return (
      <Component
        {...props}
        ref={ref => {
          this.button = ref;
        }}
        onClick={this.onClick}
        className={`react-dribble-button --${color} ${className}`}
      >
        {this.renderEffects(effectClassName)}

        {children}
      </Component>
    );
  }
}
