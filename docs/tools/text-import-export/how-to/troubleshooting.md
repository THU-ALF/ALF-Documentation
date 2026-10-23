---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

## Replace authored text

### Export is greyed out, or step 2 says the scene isn't saved

Press **Save the scene** in step 2. The tool can only export from a saved scene.

### "This scene has no texts the tool can export"

The scene has no texts from the tools this one knows. Check step 1 for what's left out, and tick **Include general scene texts**.

### The file is refused when I choose it

- **It isn't a complete export.** An AI assistant's answer may have words before or after the file. Delete them, so the file starts with `{` and ends with `}`.
- **It's not an exported file**, or it was made by a newer version of the tool.

### Many texts are "not found in this scene"

- **The objects were removed or renamed** since the export.
- **The AI assistant changed other fields** than `text`. Translate the original export again, and check the answer.

Export again to get a fresh file.

### "Nothing was imported: more texts were changed in the scene…"

The scene changed after you ticked a box. Look at the list again, then import.

### "The file was changed since it was chosen"

You saved the file again after choosing it. Look at the list once more, then import.

### A translated label is cut off or wraps

The translation is longer than the original. Shorten it in the file and import again, or make the label bigger in its tool.

### The bending lesson's texts are back in the old language

The Mesh Deformation tools write their texts again each time you generate. Import after the last generate.

## Runtime localization

### Enable / update localization is greyed out

- **The scene isn't saved.** Save it first.
- **The base language code isn't valid.** Use a two-letter code, such as `en` or `de`.
- **The collection name isn't valid.** Use only letters, numbers, hyphens and underscores, for example `planetary-lab`.

### Check & save reports a file without ".json"

Windows hid the file extension, and the file was saved as `….json.txt`. In File Explorer, switch on **View > File name extensions** and rename the file so it ends in `.json`.

### Check & save reports that the locale doesn't match the file name

The file name says one language, the `"locale"` inside the file another. Make them the same, for example `lesson.fr.json` with `"locale": "fr"`.

### Some texts stay in the original language

They have no translation in the file, or they aren't linked yet. Press **Enable / update localization** again, then **Re-export base language files**, and translate the new texts.

### Letters are missing or shown as boxes

The font doesn't have those letters. Step 3 lists them. Ask the tech team for a font that covers the language.
