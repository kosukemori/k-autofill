K-AUTOFILL
====

Bookmarklet to autofill a website.  

## For Users
### Set up a bookmarklet
1. Open https://kosukemori.github.io/k-autofill/.  
2. From the page, drag and drop one of links to your bookmarks bar.  

### How to use
#### Autofill
1. **Open a current timesheet page**  
2. Click the bookmark, and wait until a popup is appeared.  

#### Jump to a current timesheet
1. Login.  
2. Click the bookmark.  

### Caution
This bookmarklet is created for private.  
I am not responsible for any loss, damages, troubles when you use this bookmarklet.  

### Others
- **Please update your browser for latest version**.  
- Columns are setted as '9:00-12:00', '13:00-18:00, 'Regular'.  
- This bookmarklert don't deal with overtime and PTO.
- Please forget about Internet Explorer.  

<br />
<br />
<br />

## Contributing
### Set up a develop-environment (Mac)
`brew install nodebrew`  
`nodebrew install v6.9.1`  
`nodebrew use v6.9.1`  
Fork, clone and checkout your repo  
`cd k-autofill`  
`npm install`  
### Work-flow
Edit src/main.js  
Check Code: `npm run lint`  
Build: `npm run build`  
Final output of a bookmarklet may be created in 'bookmarklet/*.js'
Or, Watching with `npm run watch` and editing src/main.js  
### Others
npm: 3.10.8  
node: v6.9.1  
Clean: `npm run clean`  
Translating order: source file(src) -> babelled file(dist) -> bookmarkletted file(bookmarklet)
