console.log("# devtools page loaded");

chrome.devtools.panels.create('Test', './icon.png', './panel.html', function(panel) {
	panel.onShown.addListener(() => {
		console.log("# dev tools panel shown");
		debugger;
	});
});

chrome.devtools.inspectedWindow.getResources(function (resources){

    // This function returns array of resources available in the current window

    for(i=0; i < resources.length; i++){

        // Matching with current snippet URL

        console.log("# resource: ", resources[i]);

        if(resources[i].url == "Script snippet #1"){
            resources[i].getContent(function (content, encoding){
                console.log("# encoding is ", encoding);
                console.log("# content is ", content);
            });
        }
    }

});
