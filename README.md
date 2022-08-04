Steps for creating this project
1. npx create-react-app form-typescript-tailwind --template typescript
2. npx tailwindcss init -p
3. npm install -D tailwindcss postcss autoprefixer
4. add this in tailwind.config.js  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
5. edit this in tsconfig.json "isolatedModules": false,