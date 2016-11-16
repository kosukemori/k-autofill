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


<a href="javascript:(function(){function%20_asyncToGenerator(a){return%20function(){var%20b=a.apply(this,arguments);return%20new%20Promise(function(d,c){function%20a(g,h){try{var%20e=b[g](h);var%20f=e.value}catch(a){c(a);return}if(e.done){d(f)}else{return%20Promise.resolve(f).then(function(b){a('next',b)},function(b){a('throw',b)})}}return%20a('next')})}}(function(b,c){let%20a=c;a=document.createElement('script');a.src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';a.onload=function(){b(jQuery.noConflict(true))};document.body.appendChild(a)}(function(a){let%20c=(()=%3E{var%20d=_asyncToGenerator(function*(){console.log('Start:%20Add%20rows');while(true){const%20e=top.frames.ADMIN_CENTER.document.body;const%20d=a('table.reportTable%20%3E%20tbody%20%3E%20.firstRow',e);let%20c=0;for(;c%3Cd.length;c+=1){const%20f=a(d[c]).find('.dateLabel%20%3E%20div').text();if(!f.match(/Sat|Sun/)){const%20h=a(d[c]).find('.icon-plus_circle_16');if(h.length%3E0){h.click();yield%20b(2200);break}}}if(!(c%3Cd.length)){break}}console.log('End:%20Add%20rows');console.log('Start:%20Fill%20Rows%20%26%20Click%20Regular');const%20e=top.frames.ADMIN_CENTER.document.body;const%20d=a('table.reportTable%20%3E%20tbody%20%3E%20.firstRow',e);for(let%20c=0;c%3Cd.length;c+=1){const%20f=a(d[c]).find('.dateLabel%20%3E%20div').text();if(!f.match(/Sat|Sun/)){a(d[c]).find('.clockLeft%20input').attr('value','9:00a');a(d[c]).find('.clockRight%20input').attr('value','12:00p');a(d[c]).next().find('.clockLeft%20input').attr('value','1:00p');a(d[c]).next().find('.clockRight%20input').attr('value','6:00p');a(a(d[c]).find('.icon-List_18')[1]).click();yield%20b(2e3);let%20g=top.frames.ADMIN_CENTER.frames.PopupBodyFrame.document.body;a('.reportTable%20td:contains(%22Regular%22)',g).prev().find('a').click();yield%20b(1e3);a(a(d[c]).next().find('.icon-List_18')[1]).click();yield%20b(2e3);g=top.frames.ADMIN_CENTER.frames.PopupBodyFrame.document.body;a('.reportTable%20td:contains(%22Regular%22)',g).prev().find('a').click();yield%20b(1e3)}}console.log('End:%20Fill%20Rows%20%26%20Click%20Regular');alert('Autofill%20is%20finished!')});return%20function%20a(){return%20d.apply(this,arguments)}})();function%20b(a){return%20new%20Promise(resolve=%3EsetTimeout(resolve,a))}c();return%20this}))}())">title</a>
</a>
