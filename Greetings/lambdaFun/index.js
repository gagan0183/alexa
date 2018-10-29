/*
    Lamda expression for greeting skill in alexa
*/

exports.handler = function(event, context) {
    var request = event.request;

    /*
        1) 3 types of requests
            i)   LaunchRequest       Ex: "Open greeter"
            ii)  IntentRequest       Ex: "Say hello to John" or "ask greeter to say hello to John"
            iii) SessionEndedRequest Ex: "exit" or error or timeout
    */

    if(request.type === "LaunchRequest") {

    }
    else if(request.type === "IntentRequest") {

    }
    else if(request.type === "SessionEndedRequest") {

    }
    else {
        context.fail("unknown intent type");
    }
};