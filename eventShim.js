/* Copyright (c) 2012 Jeremy McPeak http://www.wdonline.com
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(){

// IE version check by James Padolsey
// https://gist.github.com/527683
var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    
    return v > 4 ? v : undef;
    
}());

if (ie !== 8) {
    return;
}

// create an MS event object and get prototype
var proto = document.createEventObject().constructor.prototype;

//
// The target Property
//
Object.defineProperty( proto, "target", {
    get: function(){ return this.srcElement; }
});

//
// The relatedTarget Property
//
Object.defineProperty( proto, "relatedTarget", {
    get: function(){
        var type = this.type;

        if (type === "mouseover" || type === "mouseout") {
            return (type === "mouseover") ? this.fromElement : this.toElement;
        }
    }
});

//
// The preventDefault() Method
//
proto.preventDefault = function() {
    this.returnValue = false;
};

//
// The stopPropagation() Method
//
proto.stopPropagation = function() {
    this.cancelBubble();
};


//
////
////// The addEventListener() and removeEventListener() method setup
////
//
var addEventListenerFunc = function(type, fn, useCapture) {
    // useCapture isn't used; it's IE!

    this.attachEvent("on" + type, fn);
};


// setup the DOM objects
HTMLDocument.prototype.addEventListener = addEventListenerFunc
Element.prototype.addEventListener = addEventListenerFunc



}());