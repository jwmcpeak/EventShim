# EventShim

## A Basic Standards DOM Event API for IE8
EventShim adds support for addEventListener(), removeEventListener(), and standard Event object properties to IE8's event model.

### Why
To write standards-based event code now in IE8 without using a library such as jQuery, MooTools, etc.

### How
The right way: by modifying the DispEventObj's prototype, as well as the HTMLDocument and Element DOM interface prototypes. This approach allows you to "write once."

### Quick Start
EventShim is easy to implement.

#### Step 1: Clone the repo
    $ git clone git@github.com:jwmcpeak/EventShim

#### Step 2: Load the Script
    <script src="eventShim.js"></script>

### Notable API
The goal of EventShim is to make writing cross-browser event code painless and transparent. Naturally, it is impossible to replicate 100% of the DOM3 Event API in IE8, but the following lists the properties and methods added to the DispEventObj interface.

#### Properties

- bubbles
- defaultPrevented
- relatedTarget
- target

#### Methods

- preventDefault()
- stopPropagation()

EventShim also adds addEventListener() and removeEventListener() to the following objects and/or interfaces:

- window
- HTMLDocument
- Element

This covers all use-cases.


### Notes
- There is no capture. It's IE, remember?