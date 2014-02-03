// Our single-page application
// author: Kirk Austin, Brendan Boyd, Karthiga T
// ensure our namespace
if (!this.gensler) {
    this.gensler = {};
}
if (!this.gensler.app) {
    this.gensler.app = {};
}

// Application specific functions
(function(gensler, $) {

    // interaction logging
    gensler.app.logInteraction = function(info) {
        var applicationId = window.location.href;
        var interactionData = {
            "applicationId": applicationId,
            "clientIp": "127.0.0.1",
            "interaction": "",
            "interactionInfo": "",
            "toolId": "",
            "userAgent": navigator.userAgent,
            "userId": 0
        }; // TODO: change this if the user is logged in
        if (info.interaction) {
            interactionData.interaction = info.interaction;
        }
        if (info.interactionInfo) {
            interactionData.interactionInfo = info.interactionInfo;
        }
        if (info.toolId) {
            interactionData.toolId = info.toolId;
        }
        if (info.userId) {
            interactionData.userId = info.userId;
        }

        $.ajax({
            url: gensler.app.endpoints.interaction,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(interactionData)
        }).done(function(data, textStatus, jqXHR) {}).fail(function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown, 'interaction logging error');
        });
    },

    //Globals
    this.gensler.app.name = "GDEA EntryForm";

    //default image directory
    this.gensler.app.imageDirectory = "dist/image";

    //placeholder for the container
    this.gensler.app.container = undefined;

    gensler.app.launch = function() {

        // first set the image directory
        gensler.app.imageDirectory = "css/image/";
        // and our title
        $('title').text(gensler.app.name);


    };
})(this.gensler, jQuery);
