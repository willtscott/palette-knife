/*
    Main site function

    resources:
    https://manu.ninja/dominant-colors-for-lazy-loading-images/
    https://cloud.google.com/vision/docs/detecting-properties#vision-image-property-detection-protocol
    http://www.cs.cmu.edu/~har/visapp2006.pdf

    Thanks goes to:
    https://github.com/willtscott/google-images-download/blob/master/google_images_download/google_images_download.py
    https://medium.freecodecamp.org/client-side-web-scraping-with-javascript-using-jquery-and-regex-5b57a271cb86
    http://www.whateverorigin.org/
*/

$(document).ready(function() {
    // all custom jQuery will go here
    var searchTerm = 'india';
    var params = '';
    // Google image search
    var url = 'https://www.google.com/search?q=' + searchTerm + '&espv=2&biw=1366&bih=667&site=webhp&source=lnms&tbm=isch' + params + '&sa=X&ei=XosDVaCXD8TasATItgE&ved=0CAcQ_AUoAg';
    console.log('Before: ' + url);
    url = 'http://www.whateverorigin.org/get?method=raw&url=' + encodeURIComponent(url) + '&callback=?';
    $.getJSON(url, function(data) {                    
        // console.log(response.contents);
        // $('#demo').html(response.contents);

        // This iframe sillyness is to put the html into a css sandbox (so it doesn't affect the main website)
        var iframe = $("#output")[0];//.html(data.contents);
        var doc = iframe.document;
        if(iframe.contentDocument) {
            doc = iframe.contentDocument;
        } else if(iframe.contentWindow) {
            doc = iframe.contentWindow.document;
        }
        doc.open();
        doc.writeln(data.contents);
        doc.close();
    });

    console.log('After: ' + url);

    // var colors = $(response).find(/<g-img style="background:rgb(*,*,*)">/);
//    var challenges = $(response).find('tbody tr').length;
//   var challenges = response.replace(/<thead>[\s|\S]*?<\/thead>/g).match(/<tr>/g).length;



    // $("#demo").html(response.contents);
});




// var paletteKnife = (function () {
//     const rp = require('request-promise');
//     var searchTerm = '';
//     var params = '';
//     const url = 'https://www.google.com/search?q=' + searchTerm + '&espv=2&biw=1366&bih=667&site=webhp&source=lnms&tbm=isch' + params + '&sa=X&ei=XosDVaCXD8TasATItgE&ved=0CAcQ_AUoAg';

//     // Public methods
//     return {
//         rp(url)
//             .then(function(html){
//                 //success!
//                 console.log(html);
//             })
//             .catch(function(err){
//                 //handle error
//             });
//     }


// });