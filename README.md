# Tailwind Just In Time (JIT) Compiler Demo

## How to feel the pain of not using JIT
1. Run `npm run build` to build the `style.css` file from the bloated `tailwind.config.js` file.
2. Observe that it takes around 6 seconds to create a 12M sized `style.css` file that contains over 500,000 lines of code.
3. Run `npm run dev` to start the dev server that displays the `index.html` file in the browser.
4. Observe how slow the Chrome Dev Tools are using a 12M `style.css` file.

## How to feel the power of using JIT
1. Uncomment line 4 of the `tailwind.config.js` file and save it.
2. Run `npm run build` to build the `style.css` file from the bloated `tailwind.config.js` file.
3. Observe that it takes less than 1 second to create a small `style.css` file that only contains the CSS needed for the utility classes used in the `index.html` file.

To learn more about Tailwind's new JIT compiler, check out my [CSS On-Demand with Tailwind JIT article](http://shadowsmith.com/css-on-demand-with-tailwind-jit) and of course [Tailwind's Just-in-Time Mode documentation](https://tailwindcss.com/docs/just-in-time-mode).