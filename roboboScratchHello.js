(function(ext) {
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
	  return {status: 2, msg: 'Ready'};
	};

	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name
			[' ', 'hello_block', 'hello_block'],
		]
	};

	// Register the extension
	ScratchExtensions.register('Robobo sample extension', descriptor, ext);
})({});
