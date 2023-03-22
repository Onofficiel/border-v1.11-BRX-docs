# Border BRX2 Manifest Format
```json
{
  // Required
  "name": "Extension Name",
  "manifest_version": 2,
  "version": "1.0.0", // Can be number with either 1 or 2 decimal places
  "background": {
    "scripts": ["index.js"]
  },
  // Optional, but recommended
  "description": "Extension Description",
  // Required to use APIs that need permissions
  "permissions": [
    "tabs",
    "windows",
    "bookmarks",
    "history"
  ],
  // Optional, but also recommended
  "icons": {
    "64": "icon-64x64.png",
    "32": "icon-32x32.png",
    "128": "icon-128x128.png"
  }
}
```
