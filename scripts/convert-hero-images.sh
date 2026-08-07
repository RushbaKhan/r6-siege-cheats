#!/bin/bash
set -euo pipefail
HERO_DIR="/workspace/public/screenshots/hero"
for png in "$HERO_DIR"/*.png; do
  base="${png%.png}"
  ffmpeg -y -i "$png" -vf "scale='min(1920,iw)':-2" -c:v libwebp -quality 82 -compression_level 6 "${base}.webp" 2>/dev/null
  echo "Converted $(basename "$png") -> $(basename "${base}.webp") ($(du -h "${base}.webp" | cut -f1))"
done
