(function(){

// not the best of checks; will have something more concrete later
if (typeof document.addEventListener !== "undefined") {
    return;
}

// create an MS event object and get prototype
var myEvt = document.createEventObject(),
    proto = myEvt.constructor.prototype;

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