# Personal Tailwindcss Themes
> This project is not a script or an extension. It is just an approach to use custom themes inside tailwindcss
You can try it [online](https://nuxt-tailwindcss-themes-ahmedashrafaz.vercel.app/)
## Overview
At the begnning of each project, I'm always stuck at the phase of choosing the font and the colors of the website. I can have so many [Color Palettes](https://colorhunt.co/) but I don't know which color to use for text and which for the background etc.

So, I created this project to save all my themes in. It's like a `.dotfile` but for my themes configuration.

This project uses [tailwindcss](https://tailwindcss.com/) to be able to integrate the custom themes with the project.

## Integrate with your nuxt project
1. Integrate with [TailwindCSS](https://tailwindcss.com/docs/installation)
2. See the [Themes Store File](https://github.com/AhmedAshrafAZ/tailwindcss-themes/blob/main/store/themesStore.ts). I use [Pinia](https://pinia.vuejs.org/) if you are using it, you can take the file to your project. If not, you can write your own functions that does the same behaviour.
3. Download the [Themes File](https://github.com/AhmedAshrafAZ/tailwindcss-themes/blob/main/assets/tailwind/themes.ts) and add it to your assets folder.
4. Don't forget to update the import in the [Themes Store File](https://github.com/AhmedAshrafAZ/tailwindcss-themes/blob/main/store/themesStore.ts) after you download the [Themes File](https://github.com/AhmedAshrafAZ/tailwindcss-themes/blob/main/assets/tailwind/themes.ts)

## Theme Structure
I followed the convension of [DaisyUI](https://daisyui.com/docs/colors/) in naming the colors so this is what the themes file should have in order to work perfectly.
```json
{
    "--color-primary": "",
    "--color-primary-content": "",
    "--color-primary-focus": "",

    "--color-secondary": "",
    "--color-secondary-content": "",
    "--color-secondary-focus": "",

    "--color-accent": "",
    "--color-accent-content": "",
    "--color-accent-focus": "",

    "--color-neutral": "",
    "--color-neutral-content": "",
    "--color-neutral-focus": "",

    "--color-base": "",
    "--color-base-content": "",
    "--color-base-darker": "",
    "--color-base-darkest": "",

    "--color-info": "",
    "--color-info-content": "",

    "--color-success": "",
    "--color-success-content": "",

    "--color-warning": "",
    "--color-warning-content": "",

    "--color-error": "",
    "--color-error-content": "",
}
```
As you can see, each color have the `default`, `content` and `focus` colors. So it is now easier to know which one goes for the background and which one goes for the text. Except for the status color I did not think I need to use a focus color but might be added at the future.

Also, you can use any color format suits the css such as rgb(), rgba(), hsl(), or hex. 

## Trying it locally
1. Clone the repo
    ```bash
    git clone git@github.com:AhmedAshrafAZ/tailwindcss-themes.git
    ```
2. Install dependencies (I use yarn)

    ```bash
    yarn install
    ```
3. Run the development Server
    ```bash
    yarn dev -- --open
    ```

## Todos
- [x] Create a list to choose the preview theme

- [x] Create custom components to preview theme colors 

- [ ] Add more themes

- [ ] Convert all colors to one format (maybe hex).

- [ ] Import and Export themes

- [ ] Auto generate the `content` and `focus` colors if the main color is chosen
