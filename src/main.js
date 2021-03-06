(function (f, src) {
  let s = src;
  s = document.createElement('script');
  s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
  s.onload = function () {
    f(jQuery.noConflict(true));
  };
  document.body.appendChild(s);
}(function ($) {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function main() {
    // 1. Add rows -> 2. Fill columns -> 3.

    // Add rows
    console.log('Start: Add rows');
    while (true) {
      const bodyCenter = top.frames.ADMIN_CENTER.document.body;
      const $firstRows = $('table.reportTable > tbody > .firstRow', bodyCenter);
      let i = 0;
      for (; i < $firstRows.length; i += 1) {
        const day = $($firstRows[i]).find('.dateLabel > div').text();
        const $holiday = $('span:contains("Holiday")', $firstRows[i]);
        if (!day.match(/Sat|Sun/) && $holiday.length === 0) {
          const $iconPlus = $($firstRows[i]).find('.icon-plus_circle_16');
          if ($iconPlus.length > 0) {
            $iconPlus.click();
            await sleep(2200); // Wait for refreshing DOM
            break; // Continue to add row
          }
        }
      }
      if ($firstRows.length <= i) {
        break; // When adding row is finished
      }
    }
    console.log('End: Add rows');

    // Fill Rows & Click Regular
    console.log('Start: Fill Rows & Click Regular');
    const bodyCenter = top.frames.ADMIN_CENTER.document.body;
    const $firstRows = $('table.reportTable > tbody > .firstRow', bodyCenter);
    for (let i = 0; i < $firstRows.length; i += 1) {
      const day = $($firstRows[i]).find('.dateLabel > div').text();
      const $holiday = $('span:contains("Holiday")', $firstRows[i]);
      if (!day.match(/Sat|Sun/) && $holiday.length === 0) {
        // Fill Rows
        $($firstRows[i]).find('.clockLeft input').attr('value', '9:00a');
        $($firstRows[i]).find('.clockRight input').attr('value', '12:00p');
        $($firstRows[i]).next().find('.clockLeft input').attr('value', '1:00p');
        $($firstRows[i]).next().find('.clockRight input').attr('value', '6:00p');
        // Click Regular
        $($($firstRows[i]).find('.icon-List_18')[1]).click();
        await sleep(2000);
        let bodyPopup = top.frames.ADMIN_CENTER.frames.PopupBodyFrame.document.body;
        $('.reportTable td:contains("Regular")', bodyPopup).prev().find('a').click();
        await sleep(1000);
        $($($firstRows[i]).next().find('.icon-List_18')[1]).click();
        await sleep(2000);
        bodyPopup = top.frames.ADMIN_CENTER.frames.PopupBodyFrame.document.body;
        $('.reportTable td:contains("Regular")', bodyPopup).prev().find('a').click();
        await sleep(1000);
      }
    }
    console.log('End: Fill Rows & Click Regular');
    alert('Autofill is finished!');
  }

  main();

  return this;
}));
