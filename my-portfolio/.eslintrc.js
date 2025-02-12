module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable the quote escaping rule since we're using TypeScript string literals
    'react/no-unescaped-entities': 'off'
  }
}; 