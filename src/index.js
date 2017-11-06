import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Effect from './components/Effect';

import styles from './styles';

class ReactDribbleButton extends PureComponent {
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
    classes: PropTypes.shape({
      effect: PropTypes.string,
      button: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    effectClassName: PropTypes.string,
    animationDuration: PropTypes.number,
  };

  static defaultProps = {
    color: 'default',
    onClick: null,
    children: null,
    className: '',
    component: 'button',
    effectClassName: '',
    animationDuration: 650,
  };

  state = {
    effects: [],
  };

  onClick = (event) => {
    this.updateEffects(event);

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  updateEffects({ pageX, pageY }) {
    const now = Date.now();
    const { animationDuration } = this.props;

    this.setState(({ effects }) => {
      const activeEffects = effects.filter(({ date }) => now - date < animationDuration);

      return {
        effects: [...activeEffects, { date: now, pageX, pageY }],
      };
    });
  }

  renderEffects = ({ effect }, effectClassName) => {
    if (!this.button) {
      return null;
    }

    const { left, top } = this.button.getBoundingClientRect();

    const diameter = Math.max(this.button.offsetWidth, this.button.offsetHeight);
    const offsetTop = top + window.pageYOffset;
    const offsetLeft = left + window.pageXOffset;

    const className = `${effect} ${effectClassName}`;

    return this.state.effects.map(({ date, pageX, pageY }) => (
      <Effect
        key={date}
        top={pageY - offsetTop}
        left={pageX - offsetLeft}
        size={diameter}
        className={className}
      />
    ));
  };

  render() {
    const {
      color,
      classes,
      children,
      component,
      className,
      effectClassName,
      animationDuration,
      ...props
    } = this.props;

    const Component = component;

    return (
      <Component
        {...props}
        ref={(ref) => {
          this.button = ref;
        }}
        onClick={this.onClick}
        className={`${classes.button} ${className}`}
      >
        {this.renderEffects(classes, effectClassName)}

        {children}
      </Component>
    );
  }
}

export default injectSheet(styles)(ReactDribbleButton);
