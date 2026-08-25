# joseph-aoun.github.io — rebuild

Static, dependency-free personal portfolio for GitHub Pages.

## Before deploying

Keep the existing `img/image_joseph.jpg` file in the repository, or replace it with a newer portrait using the same path. If it is missing, the site falls back to a generated initials placeholder.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

Copy these files into the root of `joseph-aoun.github.io`, then:

```bash
git add -A
git commit -m "Rebuild personal website"
git push origin main
```

GitHub Pages should redeploy automatically.
