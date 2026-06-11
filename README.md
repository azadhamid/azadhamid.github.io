# Hamid Azad GitHub Pages site

This folder contains a static portfolio website designed for GitHub Pages.

## How to publish at https://azadhamid.github.io/

1. Create a public GitHub repository named exactly:

   ```text
   azadhamid.github.io
   ```

2. Copy all files from this folder into that repository.

3. Commit and push to the `main` branch.

4. In GitHub, open **Settings → Pages** and make sure the source is set to the `main` branch and the root folder.

5. After GitHub builds the site, open:

   ```text
   https://azadhamid.github.io/
   ```

## Where to replace content

- Replace public email in `index.html` near the contact section.
- Replace LinkedIn URL in `index.html`.
- Replace demo videos in `assets/videos/` with your final exported videos using the same filenames, or update the `<video src="...">` paths.
- Replace text in the project and publication cards with final paper titles, repository links, and dataset links.

## Recommended video settings

- Format: MP4, H.264 codec
- Resolution: 1280×720 or 1920×1080
- Duration: 5–15 seconds for homepage loops
- Audio: remove audio or keep muted
- File size: keep each video small for fast loading

## Suggested final demo clips

1. Monocular UAV localization: predicted vs ground-truth 3D trajectory.
2. Radar-camera fusion: synchronized range/azimuth/elevation with target track.
3. Payload detection: original crop, translated crop, attention heatmap, predicted label.
4. Monte Carlo simulation: scenario sweep animation and metric dashboard.
5. Synthetic simulator: weather/sensor settings with simulated drone scene.
