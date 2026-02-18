# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![desktop](/screenshots/desktop.png)
![mobile](/screenshots/mobile.png)

### Links

- Solution URL: [Solution](https://github.com/ibn-h/url-shortening-api-master)
- Live Site URL: [Website](https://ibn-h.github.io/url-shortening-api-master/)

## My process

### Built with

- [React](https://reactjs.org/) - Front-end framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TinyURL](https://tinyurl.com/) API I used to shorten links
- Mobile-first workflow

### What I learned

For the footer I had to add a hover effect on the svg images. The problem here is that I didn't know how to import a svg as a svg element. After a quick search I found out about vite-plugin-svgr, which is a dependency that allows you to import a svg image as a svg element. This way I could just add a simple hover effect to add the asked transition. Here are all the relevant codes I used to make the icons svg and add the hover effect:

```jsx
import FacebookLogo from "../assets/icon-facebook.svg?react";
import TwitterLogo from "../assets/icon-twitter.svg?react";
import PinterestLogo from "../assets/icon-pinterest.svg?react";
import InstagramLogo from "../assets/icon-instagram.svg?react";

const icons = [
  {
    name: "Facebook",
    logo: FacebookLogo,
  },
  {
    name: "Twitter",
    logo: TwitterLogo,
  },
  {
    name: "Pinterest",
    logo: PinterestLogo,
  },

  {
    name: "Instagram",
    logo: InstagramLogo,
  },
];

<div className="flex items-center justify-center gap-3">
  {icons.map((icon, index) => {
    const Icon = icon.logo;

    return (
      <a href="" key={index} aria-label={icon.name}>
        {
          <Icon className="hover:text-primary-blue footer-icon transition-colors duration-300" />
        }
      </a>
    );
  })}
</div>;
```

A bit of CSS code because something went wrong with the fill property in TailwindCSS:

```css
.footer-icon path {
  fill: currentColor;
}
```

### Useful resources

- [SVGR for vite](https://www.npmjs.com/package/vite-plugin-svgr) - This library allowed me to import svg files as real svg elements, which allowed me to change properties like color.

## Author

- Website - [Badr Belarbi/IbnH](https://ibn-h.github.io/bb-portfolio/)
- Frontend Mentor - [@ibn-h](https://www.frontendmentor.io/profile/ibn-h)
