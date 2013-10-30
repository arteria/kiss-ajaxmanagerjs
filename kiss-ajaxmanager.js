var ajaxManager = (function() {
    var requests = [];
    var retry = 0;
    return {
         
        dump: function(opt) {
            alert("retry is " + retry);
            if (requests.length == 0) {
                alert("Dumped empty ajaxManager");
            }
            else {
                alert("DUMP ajaxManager");
                for (var i=0; i<requests.length; i++) {
                    console.log(requests[i]);
                }        
            }
        },
        addReq: function(opt) {
            requests.push(opt);
            ////console.log("ADD " + requests.length + " requests in queue")
        },
        removeReq:  function(opt) {
            if ($.inArray(opt, requests) > -1){
                requests.splice($.inArray(opt, requests), 1);
                ////console.log("DEL " + requests.length + " requests in queue") 
            }
        },
        retry: function() {
            ////console.log('requests.length => ' + requests.length)
            $('#retryMessage').hide();
            if (retry >= 3) {
                $("#fatalErrorModal").modal({
                    keyboard: false, 
                    backdrop: 'static'
                });
            }
            else {
                retry++;
                this.run(); 
            }
            
            
            
        },
        run: function() {
            var self = this;
            var oriSuc;
            var oriErr;
            var oriBef;
            
            if (requests.length) {
                $('#loadingMessageStatusTop').show();
                if (retry==0) {
                    oriSuc = requests[0].success; // complete
                    oriErr = requests[0].error;
                    oriBef = requests[0].beforeSend;
                    
                    requests[0].success = function(data) { // complete
                         try {
                             //console.log(" ajaxMgr -> success");
                             $('#loadingMessageStatusTop').hide();
                             if (typeof oriSuc === 'function') { 
                                 //console.log(" ajaxMgr -> orig success");
                                 oriSuc(data);
                             }
                             requests.shift();
                             self.run.apply(self, []);
                             retry = 0; // reset
                         }
                         catch (error) {
                             console.log(" " + error);
                         }
                    };
                    
                    requests[0].error = function(data){ // onError
                        try {
                            //console.log(" ajaxMgr -> error");
                            if (data.status == '403') {
                                // full overlay
                                $("#loggedOutModal").modal({
                                    keyboard: false, 
                                    backdrop: 'static'
                                });
                            }
                            else {
                                $('#loadingMessageStatusTop').hide();
                                $('#retryMessage').show();
                            }    
                             
                            if (typeof oriErr === 'function') { 
                                 oriErr(data);
                            }
                        }
                        catch (error) {
                            console.log(" " + error);
                        }
                    };
                    
                    requests[0].beforeSend = function(data, settings) { // onBeforeSend
                         try {
                             //console.log(" ajaxMgr -> beforeSend");
                             $('#loadingMessageStatusTop').show();
                             if (typeof oriBef === 'function') { 
                                 oriBef(data, settings);
                             }
                         }
                         catch (error) {
                             console.log(" " + error);
                         }
                    };
                }
                $.ajax(requests[0]);   
            } 
            else {  
                self.tid = setTimeout(function() {
                    self.run.apply(self, []);
                }, 50); //1000, 100 => 10Hz Current settings, refresh queue at 20 Hz
            }
        },
        stop:  function() {
            requests = [];
            clearTimeout(this.tid);
        }
     };
}());

