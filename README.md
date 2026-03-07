# Firefly MAL Theme
Firefly MAL Theme is a MyAnimeList theme that aims to add a Firefly theme to their list.

> [!CAUTION]
> This theme uses the `anchor-name` property, as well as properties related to `anchor()`.\
> *(and many other modern CSS properties/pseudo-selectors)*
> 
> It is only supported on modern browsers.\
> *(features may break on older browsers)*

> [!WARNING]
> This theme is in beta. Bugs ahead.


> [!WARNING]
> This theme was only tested in the Anime list.\
> We might also make a Manga list in due time.

## Features
- Firefly theme
- Responsive layout
- Uber-customizable (refer to the Settings page)
- Small, cute Firefly next to the MAL logo when anyone visits your list

## How to add this theme?
 - Go to your list.
 - In your sidebar, hover over the gear icon and select `Style Settings`.
 - From there, choose a theme you want to replace. *(We recommend going for this one, since this is the default theme.)*\
   <img width="221" height="217" alt="image" src="https://github.com/user-attachments/assets/bfa0294d-7845-41fc-8967-5d2329e19c82" />
 - Inside of the Custom CSS area, copy/paste the following code:

```css
@import url('https://urgud.github.io/Firefly-MAL-Theme/firefly-anime-list.css'); /* DO NOT REMOVE THIS LINE!!! */
/*
  Do not change the following unless you know what you're doing.
*/
/* FONT */
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&display=swap');

*:not(i) {
  font-family: var(--font-text) !important;
}

/* ---------------------------------------------------------------- */

/*
  *** SETTINGS ***
  Change whatever you want your list to look like.
*/

:root {
  /* Do not change this unless you have a different font */
  --font-text: "Albert Sans", "Verdana", system-ui; /* The first quote is the actual font. Any other fonts listed is as fallback */

  /*
    Not sure what settings you can change? Check out the official docs on the GitHub.
    https://urgud.github.io/Firefly-MAL-Theme/
  */
}
```
 - Once pasted, save the theme.
 - Select the theme (if you didn't replace the default theme).
### And you're done! You now have the Firefly MAL theme!
