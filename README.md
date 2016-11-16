K-AUTOFILL
====

Bookmarklet to autofill a website.

## Features
- This bookmarklet fill the rows with "9:00-12:00, 13:00-18:00, Regular(PAY CATEGORY)".  
- This bookmarkler can't fill a timesheet with "Overtime(PAY CATEGORY)".  

## For Users
### Set up a bookmarklet (in general) and how to use
0. **Please update your browser for latest version**.  
1. Create any bookmark.  
2. Edit the bookmark. Copy and paste from 'bookmarklet/*.js' to a URL of the bookmark.  
3. If you want, edit a name of the bookmark.  
4. **After open a current timesheet page**, click the bookmark which you edited.   
5. If it is finished, a dialog is appear.  

### Contents of 'bookmarklet/*.js'  
- 'bookmarklet/main.js': Main bookmarklet to autofill.  
- 'bookmarklet/current-timesheet.js': Jump current timesheet after login.  
- ~~'bookmarklet/savingtimeNov.js':Enter ST and DST for Daylight savings time. I think it's no meaning~~  
=> Don't worry about daylight saving times. We don't need do anything.  

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
