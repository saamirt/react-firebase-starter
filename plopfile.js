module.exports = function(plop) {
	// controller generator
	plop.setGenerator("component", {
		description:
			"creates a component folder with functional component, scss file, and images folder",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "controller name please"
			}
		],
		actions: [
			{
				type: "add",
				path: "src/{{name}}.js",
				templateFile: "plop-templates/controller.hbs"
			}
		]
	});
};
