import colors from './colors';

function hexToRGBA(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default {
  button: {
    display: 'inline-block',
    width: '100%',
    height: '50px',
    position: 'relative',

    boxSizing: 'border-box',

    border: 'none',
    borderRadius: '12px',

    fontSize: '16px',
    textAlign: 'center',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textDecoration: 'none',

    color: '#fff',
    backgroundSize: '200% 200%',

    zIndex: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    transform: 'translateZ(0)',
    transition: 'box-shadow 0.3s ease, background-position 0.3s ease',
    backgroundColor: ({ color }) => colors[color][0],
    backgroundImage: ({ color }) => `radial-gradient(
      ellipse at center,
      ${colors[color][1]} 0%,
      ${hexToRGBA(colors[color][0], 0)} 60%,
      ${colors[color][0]} 100%
    )`,

    '&:focus': {
      outline: 'none',
      boxShadow: 'rgba(0, 0, 0, 0.4) 0 4px 4px 0',
      backgroundPosition: '50% 50%',
    },

    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.3) 0 8px 8px 0',
      backgroundPosition: '100% 100%',
    },
  },

  effect: {
    display: 'block',
    position: 'absolute',

    borderRadius: '100%',

    zIndex: '-1',
    animation: props => `ripple ${props.animationDuration}ms linear both`,
    backgroundImage: ({ color }) => `radial-gradient(
      ellipse at center,
      ${hexToRGBA(colors[color][0], 0)} 0%,
      ${colors[color][1]} 7%,
      ${colors[color][1]} 30%,
      ${hexToRGBA(colors[color][0], 0)} 60%,
      ${hexToRGBA(colors[color][0], 0.3)} 100%
    )`,
  },

  '@keyframes ripple': {
    from: {
      opacity: 1,
      transform: 'translate3d(-50%, -50%, 0) scale(0)',
    },

    to: {
      opacity: 0,
      transform: 'translate3d(-50%, -50%, 0) scale(3)',
    },
  },
};
