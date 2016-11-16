K-AUTOFILL
====

Bookmarklet to autofill a website.

## Features
- This bookmarklet fill the rows with "9:00-12:00, 13:00-18:00, Regular(PAY CATEGORY)".  
- This bookmarkler can't fill a timesheet with "Overtime(PAY CATEGORY)".  

## For Users
### Set up a bookmarklet
1. **Please update your browser for latest version**.  
2. Open https://kosukemori.github.io/k-autofill/.
3. Drag and drop a link of them to your bookmark bar.

### How to use
#### Autofill
1. **After open a current timesheet page**, click the bookmark. Done!  
2. If it is finished, a dialog is appear.  

#### Jump to a current timesheet
1. After login, click the bookmark. Done!  

## Caution
This bookmarklet is created for private.  
I am not responsible for any loss, damages, troubles when you use this bookmarklet.  
And please forget about Internet Explorer.

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
