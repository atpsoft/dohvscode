// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as stream from "stream";

let dbg = vscode.window.createOutputChannel("dohvscode");
const terminal = vscode.window.createTerminal(`Ext Terminal difftool`);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (dbg.appendLine) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  dbg.appendLine('Congratulations, your extension "dohvscode" is now active with terminal!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('dohvscode.externaldiff', () => {
    let currentWindow = vscode.window.activeTextEditor;
    if (currentWindow) {
      let file = currentWindow.document.uri.fsPath;
      let dir = currentWindow.document.uri.path;
      dbg.appendLine('calling difftool via terminal with open file: ' + currentWindow.document.uri.fsPath + ' using dir: ' + dir);
      terminal.sendText("cd " + dir + "; git difftool -- " + file);
    } else {
      dbg.appendLine('no open file, not diffing');
    }
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
