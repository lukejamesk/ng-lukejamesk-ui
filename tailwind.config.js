module.exports = {
  mode: 'jit',
  content: [
    "./projects/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      s: '480px',
      m: '768px',
      l: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: 'var(--black)',
      background: {
        default: 'var(--bg)',
        contrast: {
          vlow: 'var(--bg-very-low-contrast)',
          low: 'var(--bg-low-contrast)',
          high: 'var(--bg-high-contrast)',
        }
      },
      text: {
        default: 'var(--text)',
      },
      primary: {
        default: 'var(--primary)',
        contrast: {
          high: 'var(--primary-high-contrast)',
          low: 'var(--primary-low-contrast)',
        },
      },
    },
    spacing: {
      '0': '0px',
      xxs: '.25rem',
      xs: '.5rem',
      s: '.75rem',
      m: '1rem',
      l: '1.25rem',
      xl: '1.50rem',
      xxl: '2rem',
      xxxl: '3rem',
    }
  },
  plugins: [],
}
