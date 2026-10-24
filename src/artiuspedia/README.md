# ArtiusPedia content

Every character and place in the ArtiusPedia is a Markdown file in this folder. The site reads them by itself, so there is nothing to register in the code.

```
src/artiuspedia/
  characters/
    pivolo.en.md    <- English (required, also holds the images and order)
    pivolo.pt.md    <- Portuguese
    ...
  places/
    rupestrine.en.md
    rupestrine.pt.md
    ...
```

## Editing an entry

Open the file and change the text. The part between the `---` lines is the info, everything under it is the description:

```md
---
title: Pivolo
subtitle: Evil. Envious. Bitter!
order: 1
image: /img/characters/pivolo.png
thumb: 5% 5% 320%
---

Pivolo was a student at the EdAN art school...

A blank line starts a new paragraph.
```

| field      | what it is                                                   | needed in        |
| ---------- | ------------------------------------------------------------ | ---------------- |
| `title`    | big name on the card                                         | en and pt        |
| `subtitle` | line under the name                                          | en and pt        |
| `order`    | position in the list (1 = first)                             | en               |
| `image`    | image of the entry, from `public/`                           | en               |
| `thumb`    | optional, how the round thumbnail is cut out of the image    | en               |

Anything left out of the `.pt.md` file comes from the `.en.md` one, so the Portuguese files only need the title, subtitle and text (or an `image` if it should be different in Portuguese).

In the text you can use `**bold**`, `*italic*` and `[links](https://...)`.

### Thumbnails

The round thumbnails are made from `image`, there are no separate thumbnail files. By default characters zoom on the top of the picture and places show the middle. If a thumbnail doesn't show the face, set `thumb: x y zoom`:

- `x` and `y` move the crop, like CSS `background-position` (`0% 0%` = top left, `100% 100%` = bottom right)
- `zoom` is how big the image is compared to the circle (`100%` = the whole width fits, `300%` = three times bigger)

For example `thumb: 50% 10% 250%` zooms in at the top middle. Change the numbers a little and look at the page with `npm run dev` until it looks right.

## Adding a new character or place

1. Put the image in `public/img/characters/` (or `public/img/locations/`).
2. Create `name.en.md` and `name.pt.md` in `characters/` (or `places/`). The file name is also its link, so use lowercase without spaces, like `dodo` or `duck-lagoon`.
3. Give it an `order` to put it in the right spot, and a `thumb` if the thumbnail needs fixing.

That's it.

To remove one, delete its two files.

## How it updates automatically

- **While running `npm run dev`** the page updates as soon as a file is saved or added.
- **On the real site**, every push to `main` runs the GitHub Action in `.github/workflows/main.yml`, which builds the site again with whatever files are here and publishes it. After a minute or two the change is live on pvicvg.com. This works the same if you edit or add a file straight from github.com.

## Links

The ArtiusPedia opens as a popup on the Artius page, and every view has its own link that can be shared:

- `pvicvg.com/#/artius/artiuspedia` - pick characters or places
- `pvicvg.com/#/artius/artiuspedia/characters` - the cast
- `pvicvg.com/#/artius/artiuspedia/places` - the locations
- `pvicvg.com/#/artius/artiuspedia/characters/pierre` - one character (the file name)
- `pvicvg.com/#/artius/artiuspedia/places/rupestrine` - one place
