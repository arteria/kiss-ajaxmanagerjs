# kiss-ajaxmanager.js

Please not, this "thing" is in alpha state. 




## About kiss-ajaxmanager.js

(Keep It) Simple and stupid AJAX manager for JavaScript. We use this AJAX manager in combination with Backbone.js (and without as well) 
in our Single-page applications.
 


| kiss-ajaxmanager.js |  | 
| ------------- | --- | 
| Current version | 0.1.0 |
| License | The MIT License |

## Features

* 

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

This method is called every time ... #TODO


## TODO, planned Features and know Issues

* cleanup retry mechanism.
* Automatically add requests (Polling) (if in idle mode, see ``setIdleCallback``).
* Increase and decrease frequence if more or less requests are in the queue.
* Add stack trace support (http://stacktracejs.com/) to provide more info in case of an error

## Version History and Changelog

### 0.1.0

arteria open-sourced the inital version of kiss-ajaxmanager.js under the MIT License.


