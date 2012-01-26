//sample json for logic, this is not exact questions and answers but it is format of questions and answers
jObj={
    "categories" : [
    "206739",
    "206736",
    "207423",
    "206738",
    "206838"
    ],
    "links" : [ 
    { 
        "selections" : 
        { 
            "206736" : [ "External" ], //if this "question 20673" has the answer "external" show the link below as answer.
            "206738" : [ "One time" ],
            "206739" : [ "One recipient constantly", "Manually change recipients", "Multiple recipients in different domains", "Programmatic recipients"],
            "206838" : [ "Email content withouth attachment","Documents"],
            "207423" : [ "Cannot be redistributed or forwarded" ]
        },
        "text" : "Adobe LiveCycle",
        "url" : "/technology.risk/content?nodeID=206764"
    },
    { 
        "selections" :
        {
            "206736" : [ "Internal" ],
            "206738" : [ "One time" ],
            "206739" : [ "One recipient constantly", "Manually change recipients","Multiple recipients in different domains","Programmatic recipients"],
            "206838" : [ "Email content withouth attachment","Documents"],
            "207423" : [ "Cannot be redistributed or forwarded (For internal only)"]
        },
        "text" : "Liquid Machines",
        "url" : "/technology.risk/content?nodeID=206767"
    },
    { 
        "selections" : 
        { 
            "206736" : [ "External" ],
            "206738" : [ "Regularly" ],
            "206739" : [ "One recipient constantly", "Manually change recipients", "Multiple recipients in different domains"],
            "206838" : [ "Custom Content" ]
        },
        "text" : "Password Protected Documents",
        "url" : "/technology.risk/content?nodeID=206729"
    },
    {
        "selections" : {
            "206736" : [ "Internal" ],//this set of answers to question node id 206736
            "206738" : [ "Regularly" ],//this answer to node question (node id 206738)
            "206739" : [ "Programmatic recipients" ],
            "206838" : [ "Documents", "Custom Content"]
        },
        "text" : "Project Shares", //creates this machine answer and link 
        "url" : "/technology.risk/content?nodeID=206765"
    },
    {
        "selections" : {
            "206738" : [ "Regularly" ],
            "206739" : [ "One recipient constantly",
            "Manually change recipients",
            "Programmatic recipients"
            ],
            "206838" : [ "Documents" ]
        },
        "text" : "SecureZone",
        "url" : "/technology.risk/content?nodeID=206761"
    },
    {
        "selections" : {
            "206736" : [ "External" ],
            "206738" : [ "Regularly" ],
            "206739" : [ "One recipient constantly",
            "Manually change recipients",
            "Multiple recipients in different domains",
            "Programmatic recipients"
            ],
            "206838" : [ "Documents",
            "Custom Content"
            ],
            "207423" : [ "Large volume of data, FTP required" ]
        },
        "text" : "SEFT",
        "url" : "/technology.risk/content?nodeID=206762"
    },
    {
        "selections" : {
            "206736" : [ "External" ],
            "206738" : [ "One time" ],
            "206739" : [ "One recipient constantly" ],
            "206838" : [ "Documents" ],
            "207423" : [ "Large volume of data, FTP required" ]
        },
        "text" : "SEFT",
        "url" : "/technology.risk/content?nodeID=206762"
    },
    {
        "selections" : {
            "206736" : [ "Internal" ],
            "206738" : [ "Regularly" ],
            "206739" : [ "One recipient constantly",
            "Manually change recipients",
            "Multiple recipients in different domains"
            ],
            "206838" : [ "Documents" ],
            "207423" : [ "Cannot be redistributed or forwarded (For internal only)" ]
        },
        "text" : "Sharepoint",
        "url" : "/technology.risk/content?nodeID=206763"
    },
    {
        "selections" : {
            "206736" : [ "External" ],
            "206738" : [ "Regularly" ],
            "206739" : [ "One recipient constantly",
            "Manually change recipients",
            "Multiple recipients in different domains",
            "Programmatic recipients"
            ],
            "206838" : [ "Email content withouth attachment" ]
        },
        "text" : "TLS",
        "url" : "/technology.risk/content?nodeID=206771"
    },
    {
        "selections" : {
            "206736" : [ "External" ],
            "206738" : [ "One time" ],
            "206739" : [ "Manually change recipients",
            "Multiple recipients in different domains"
            ],
            "206838" : [ "Custom Content" ]
        },
        "text" : "Password Protected Documents",
        "url" : "/technology.risk/content?nodeID=206729"
    }
    ]
}