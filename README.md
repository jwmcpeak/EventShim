# EventShim

## A Basic Standards DOM Event API for IE8
EventShim is a shim that adds support for addEventListener(), removeEventListener(), and standard Event object properties to IE8's event model.

### Why
To write standards-based event code now in IE8. 

### How
The right way: by modifying the DispEventObj's prototype, as well as the HTMLDocument and Element DOM interface prototypes. This approach allows you to "write once."

### Quick Start
EventShim is easy to implement.

#### Step 1: Clone the repo
    $ git clone git@github.com:jwmcpeak/EventShim

#### Step 2: Load the Script
    <script src="eventShim.js"></script>

#### API
None at the moment. The goal of EventShim is to make writing cross-browser event code painless and transparent.

#### Notes
- There is no capture. It's IE, remember?