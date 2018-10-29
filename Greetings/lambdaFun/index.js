/*
    Lamda expression for greeting skill in alexa
*/

exports.handler = function(event, context) {
    try {
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
            let options = {};
            if(request.intent.name === "HelloIntent") {
                let name = request.intent.slots.FirstName.value;
                options.speechText = "Hello " + name + ". ";
                options.speechText += getWish(); 
                options.endSession =  true;
                context.succeed(buildResponse(options));
            }
            else {
                throw "unknown intent";
            }
        }
        else if(request.type === "SessionEndedRequest") {

        }
        else {
            throw "unknown intent type";
        }
    }
    catch(e) {
        context.fail("exception ", e);
    }
};

function getWish() {
    var myDate = new Date();
    var hours = myDate.getUTCHours() + 5.30;
    if(hours < 0) {
        hours = hours + 24;
    }

    if(hours < 12) {
        return "Good Morning";
    }
    else if(hours < 18) {
        return "Good Evening";
    }
    else {
        return "Good Night";
    }
}

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