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
        context.succeed(buildResponse({
            speechText: "Welcome to Greeting skill. Using our skill you can greet your guests. whom you want to greet?  ",
            repromptText: "You can say for example, say hello to John",
            endSession: false
        }));
    }
    else if(request.type === "IntentRequest") {

    }
    else if(request.type === "SessionEndedRequest") {

    }
    else {
        context.fail("unknown intent type");
    }
};

function buildResponse(options) {
    var response = {
        version: "1.0",
        response: {
            outputSpeech: {
              type: "PlainText",
              text: options.speechText
            },
            shouldEndSession: options.endSession
          }
    };

    if(options.repromptText) {
        response.response.reprompt = {
            outputSpeech: {
                type: "PlainText",
                text: options.repromptText
            }
        };
    }
    return response;
}