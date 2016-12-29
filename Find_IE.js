/* 
  ================================================================================
  ===========================  script created by:    =============================
  ===========================    Jack Reinieren      =============================
  ===========================  Date: 1 november 2016 =============================
  ================================================================================
  
  ================================================================================
  ===================== What does this script do? ================================
  === This script checks if a user uses IE 11 to browse to some site.          ===
  === If the user does indeed uses IE 11, then a custom message is displayed,  ===
  === along with a list of compatible browsers and a link to the downloadpages ===
  === of the browsers. A working example can be found here:                    ===
  === http://www.maxifusion.nl/agenda.html (Site is in Dutch)                  ===
  ================================================================================
 */

 /* Function checks if the browser in use is IE 11,
    If IE11 is in use, the function returns true, 
    else, it returns false. */
function msieversion() {

			var ua = window.navigator.userAgent;
			var old_ie = ua.indexOf('MSIE ');
			var new_ie = ua.indexOf('Trident/');

			if ((old_ie > -1) || (new_ie > -1)) {
				return true
				
			} else {
				return false
				
			}
};


// This function to create a list of browsers:
 function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(array[i]);

        // Add it to the list:
        list.appendChild(item);
    };

    // Finally, return the constructed list:
    return list;
};


// Function to use when the browser is in fact IE11
function IECompat () {
	
	 var ShowDataEl = document.getElementById("ShowData"); // <-- this is a div, you can change this to suite your needs
	 var AllBrowsers = [];
	 var Browsers = {
		Titles: ["Chrome", "FireFox", "Opera", "Edge"],
		Hrefs: ['https://www.google.com/chrome/browser/desktop/index.html', 'https://www.mozilla.org/nl/firefox/new/', 'http://www.opera.com/nl', "https://www.microsoft.com/nl-nl/windows/microsoft-edge"]
	};
	
	// create an array for the downloadlinks.
	for (var i=0; i < Browsers.Titles.length; i++) {
			var a = document.createElement('a');
			var linkText = document.createTextNode(Browsers.Titles[i]);
			a.appendChild(linkText);
			a.title = linkText;
			a.href = Browsers.Hrefs[i];
		 AllBrowsers.push(a)
		 };
	
	var node = document.createTextNode('<CUSTOM MESSAGE> (eg: You can download one of these great other browsers:) ');
	ShowDataEl.appendChild(node)
	ShowDataEl.appendChild(makeUL(AllBrowsers));	
	};

	
/*  You can use this in your script, to check if IE 11 is in fact, in use
  if (msieversion()) {
    IECompat()
	}
*/
