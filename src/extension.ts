// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "didact-quarkus" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

	registerTutorialWithDidact(context);
}

async function registerTutorialWithDidact(context: vscode.ExtensionContext) {
	// call didact command to register tutorial
	try {
		// test to ensure didact is available 
		const extensionId = 'redhat.vscode-didact';
		const didactExt : any = vscode.extensions.getExtension(extensionId);

		// if didact is available, register the new extension
		if (didactExt) {
			// command ID: vscode.didact.register
			const commandId = 'vscode.didact.register';

			// then pass name, uri, and category
			const tutorialName = 'Your First Camel Application on Quarkus';
			const tutorialPath = path.join(context.extensionPath, './didact/quarkus/first-application/camel-on-quarkus-first-application.md');
			const tutorialUri = vscode.Uri.parse(`file://${tutorialPath}`);
			const tutorialCategory = 'Quarkus';

			console.log('Tutorial URI registered: ' + tutorialUri.fsPath);

			await vscode.commands.executeCommand(
				commandId,
				tutorialName, 
				tutorialUri,
				tutorialCategory);

			// add our second tutorial as well
			const tutorial2Name = 'Your Second Application Using the Quarkus Extension for VS Code';
			const tutorial2Path = path.join(context.extensionPath, './didact/quarkus/second-application/quarkus-second-application.md');
			const tutorial2Uri = vscode.Uri.parse(`file://${tutorial2Path}`);
			const tutorial2Category = 'Quarkus';

			console.log('Tutorial URI registered: ' + tutorial2Uri.fsPath);

			await vscode.commands.executeCommand(
				commandId,
				tutorial2Name, 
				tutorial2Uri,
				tutorial2Category);
		}
	} catch (error) {
		console.log(error);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
