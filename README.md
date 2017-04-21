K-AUTOFILL
====

Bookmarklet to autofill a website.  

# For Users
## Set up a bookmarklet
1. Open https://kosukemori.github.io/k-autofill/.
2. From the page, drag and drop one of links to your bookmarks bar.

## How to use
### Autofill
1. **Open a current timesheet page**
2. Click the bookmark, and wait until a popup is appeared.

### Jump to a current timesheet
1. Login.
2. Click the bookmark.

## Caution
This bookmarklet is MIT license.
**I am not responsible for any loss, damages, troubles when you use this bookmarklet.**

### Others
- **Please update your browser for latest version**.
- Columns are setted as '9:00-12:00', '13:00-18:00, 'Regular'.
- This bookmarklert don't deal with overtime and PTO.
- Please forget about Internet Explorer.

# Development
## Set up a develop-environment (Mac)
```shell
brew install nodebrew
nodebrew install v6.9.1
nodebrew use v6.9.1
```
Fork, clone and checkout your repo
```shell
cd k-autofill
npm install
```

## Edit and build
Edit `src/*.js` (main.js: Autofill, current-timesheet.js: Jump to a current timesheet)

Build: `npm run build` (index.html is automatically generated, so please check it as like as https://'username'.github.io/k-autofill/)

## Others
- npm: 3.10.8
- node: v6.9.1
- Clean command: `npm run clean`
- Check Code command: `npm run lint`
- Watch command: `npm run watch`
- You can use async and await because babel translate it to ES6 code.
