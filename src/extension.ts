import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	if (vscode.window.activeTextEditor) {
		maybeNoTouch(vscode.window.activeTextEditor);
	}
	const focusListener = vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor) {
			maybeNoTouch(editor);
		}
	});
	context.subscriptions.push(focusListener);
}

function maybeNoTouch(editor: vscode.TextEditor) {
	const document = editor.document;

	if (!document.isDirty && !isUserData(document) && !inWorkspace(document)) {
		vscode.commands.executeCommand('workbench.action.files.setActiveEditorReadonlyInSession');
	}
}

function inWorkspace(document: vscode.TextDocument): boolean {
	return vscode.workspace.getWorkspaceFolder(document.uri) !== undefined;
}

function isUserData(document: vscode.TextDocument): boolean {
	const uri = document.uri;
	return uri.scheme === 'vscode-userdata' && uri.path.endsWith('.json');
}
