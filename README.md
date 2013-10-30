# kiss-ajaxmanager.js

Please not, this "thing" is in alpha state. 


## About kiss-ajaxmanager.js

(Keep It) Simple and stupid AJAX manager for JavaScript.

| kiss-ajaxmanager.js |  | 
| ------------- | --- | 
| Current version | 0.1.0 |
| License | The MIT License |


## Requirements and Dependencies


* jQuery


## Usage
 

### Installation
#### Download
Simply download the kiss-ajaxmanager.js	file from this repository and add it to your project. For example:

	<script type="text/javascript" src="/js/kiss-ajaxmanager.js"></script> 

#### Hotlinking

Use https://rawgithub.com/. The include will looks like this:
	
	<script type="text/javascript" src="https://rawgithub.com/arteria/kiss-ajaxmanagerjs/master/kiss-ajaxmanager.js"></script> 


### Setup (Start the engine.)


In your DOM ready routine, run the AJAX manager.

	$(function() {    
	    ajaxManager.run(); 
	});


### ajaxManager in action (or "how to use it")

#### addReq (add request)

Unce the manager is running, process requests using the ``ajaxManager.addReq( .. )`` method. Basically you could replace all your ``$.ajax( .. )`` calls in your source.

	ajaxManager.addReq({
	   type: 'POST',
	   url: '/blub',
	   async: false,
	   data: {},
	   beforeSend: function(data) {    
	       // do stuff
	   },
	   success: function(data) {
	      // do stuff with data
	   },
	   error: function(data) {
	      // do stuff with data
	   } 
	});

#### removeReq (remove request)

#### setIdleCallback




## TODO, planned features and know issues


* cleanup retry mechanism.
* Automatically add requests (Polling) (if in idle mode).
* Increase and decrease frequence if more or less requests are in the queue.

## Version history and changelog


### 0.1.0

arteria open-sourced the inital version of kiss-ajaxmanager.js under the MIT License.


