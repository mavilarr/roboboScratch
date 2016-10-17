(function(ext) {
	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
	  return {status: 2, msg: 'Ready'};
	};

	ext.hello_block = function() {
		
	};

	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name
			[' ', 'cmd_block', 'hello_block'],
			['w', 'cmd_block_wait', 'hello_block'],
			['r', 'report_block', 'hello_block'],
			['R', 'report_block_wait', 'hello_block'],
			['h', 'hat_block', 'hello_block'],
			['b', 'bool_report_block', 'hello_block'],
		]
	};

	// Register the extension
	ScratchExtensions.register('Robobo sample extension', descriptor, ext);
})({});
