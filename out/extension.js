"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
let dbg = vscode.window.createOutputChannel("dohvscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (dbg.appendLine) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    dbg.appendLine('Congratulations, your extension "dohvscode" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('dohvscode.externaldiff', () => {
        const cp = require('child_process');
        dbg.appendLine('cwd: ' + process.cwd());
        process.chdir('/Users/kem/src/atp/listsdb/');
        dbg.appendLine('cwd should be listsdb: ' + process.cwd());
        cp.exec('/usr/bin/git difftool', (err, stdout, stderr) => {
            dbg.appendLine('stdout: ' + stdout);
            dbg.appendLine('stderr: ' + stderr);
            if (err) {
                dbg.appendLine('error: ' + err);
            }
        });
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('external diff launched');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map