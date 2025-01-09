```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This configuration is missing the necessary `content` array. Tailwind needs to know where to look for your HTML and CSS files to extract the classes you are using.  Without this, Tailwind won't process your styles.