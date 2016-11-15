K-AUTOFILL
====

Bookmarklet to autofill a website.

## Features
- This bookmarklet fill the rows which are not edited manually with "9:00-12:00, 13:00-18:00, Regular(PAY CATEGORY)"  
- This bookmarkler can't fill a timesheet with "Overtime(PAY CATEGORY)"  

## For Users
### Set up a bookmarklet (in general)
1. Create any bookmark  
2. Edit the bookmark. Copy and paste from 'dist_bookmarklet/*js' to a URL of the bookmark  
3. If you want, edit a name of the bookmark  

### How to use
Open the timesheet page, and click the bookmark which you edited    
Please start this bookmarklet after open the timesheet  
If it is finished, a dialog is appear  

### Caution
This bookmarklet is created for private  
I am not responsible for any loss, damages, troubles when you use this bookmarklet  

## Contributing
### Set up a develop-environment (Mac)
`brew install nodebrew`  
`nodebrew install v6.9.1`  
`nodebrew use v6.9.1`  
git clone  
`cd k-autofill`  
`npm install`  
### Work-flow
Edit src/main.js  
Check Code: `npm run lint`  
Build: `npm run build`  
Final output of a bookmarklet may be created in dist_bookmarklet/*.js
Or, Watching with `npm run watch` and editing src/main.js  
### Others
npm: 3.10.8  
node: v6.9.1  
Clean: `npm run clean`  
Translating order: source file(src) -> babelled file(dist) -> bookmarkletted file(dist_bookmarklet)
