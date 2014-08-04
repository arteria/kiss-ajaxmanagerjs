# kiss-ajaxmanager.js

Please not, this "thing" is in alpha state. 




## About kiss-ajaxmanager.js

(Keep It) Simple and stupid AJAX manager for JavaScript. We use this AJAX manager in combination with Backbone.js (and without as well) 
in our Single-page applications.
 


| kiss-ajaxmanager.js |  | 
| ------------- | --- | 
| Current version | 0.1.1 |
| License | The MIT License |

## Features

* Uniformed AJAX calls
* Automatically add requests (Polling) (if in idle mode, see ``setIdleCallback``).

## Requirements and Dependencies


* jQuery


## How to use kiss-ajaxmanager.js
 

### Installation Instruction
#### Downloading
Simply download the kiss-ajaxmanager.js	file from this repository (cd ./js/ && wget https://raw.github.com/arteria/kiss-ajaxmanagerjs/master/kiss-ajaxmanager.js -O kiss-ajaxmanager.js) and add it to your project. Asuming you downloaded the file into your /js/ directory, the
inlcude would be:

	<script type="text/javascript" src="/js/kiss-ajaxmanager.js"></script> 

#### Hotlinking

Use https://rawgithub.com/. The include will looks like this:
	
	<script type="text/javascript" src="https://rawgithub.com/arteria/kiss-ajaxmanagerjs/master/kiss-ajaxmanager.js"></script> 


### AJAX Setup (Start the Engine!)


In your DOM ready routine, run the AJAX manager.

	$(function() {    
	    ajaxManager.run(); 
	});


### ajaxManager in action (or "how to use it in your Web App")

#### addReq (add Request)

Once the manager is running, process requests using the ``ajaxManager.addReq( .. )`` method. Basically you could replace all your ``$.ajax( .. )`` calls in your source. 

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

#### removeReq (remove Request)

Docs #TODO

#### setIdleCallback

The method passed by setIdleCallback is called every time a request queue is empty.

	
	ajaxManager.setIdleCallback(function(){
	    console.log('It\'s so boring...');
	});


### setAutoCacheCallback

Allows to pass a function that takes the request and the success callback. The `data` object must be passed to origSuc See the following example:


	ajaxManager.setAutoCacheCallback(function(data, successCb){
	    console.log("Caching data...", data); // Simulates caching. Plays well with https://github.com/arteria/kiss-cache.js
	    successCb(data); // Calls original success callback for this request.
	});



## TODO, planned Features and know Issues

* Cleanup and retry mechanism.
* Increase and decrease frequence if more or less requests are in the queue.
* Add stack trace support (http://stacktracejs.com/) to provide more info in case of an error
* 

## Version History and Changelog

### 0.1.1

Auto caching support added.

### 0.1.0

arteria open-sourced the inital version of kiss-ajaxmanager.js under the MIT License.


