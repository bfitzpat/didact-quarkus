# Using the Quarkus Tools for Visual Studio Code Extension

![Quarkus](https://redhat.gallerycdn.vsassets.io/extensions/redhat/vscode-quarkus/1.1.1/1571860223463/Microsoft.VisualStudio.Services.Icons.Default){.imageRight}

[Quarkus](https://quarkus.io/) is a Java platform offering fast boot times and low memory footprint. It targets both stock JVMs (OpenJDK in the first place) and [GraalVM](https://www.graalvm.org/).

[Quarkus extensions](https://quarkus.io/extensions/) are units of Quarkus distribution. They configure, boot and integrate a technology (in our case Camel components) into your Quarkus application. You will typically use them as dependencies in your project.

And the [Quarkus Tools for VS Code Extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus) provides access to Quarkus functionality in VS Code using the Language Server Protocol and extensions to JDT.

[Check out the Quarkus.io site for details about Quarkus itself.](https://quarkus.io)

## Quarkus on VS Code - Creating a new Application

What follows is a simple step-by-step process that helps you create a new Quarkus project.

We will:

* Create a new Quarkus project
* Start a debug session to see the Quarkus application in action
* Update the project code to see the "live" aspect of Quarkus debugging

## Prerequisites 

You must have a few things set up prior to walking through the steps in this tutorial. 

<a href='didact://?commandId=vscode.didact.validateAllRequirements' title='Validate all requirements!'><button>Validate all Requirements at Once!</button></a>

| Requirement (Click to Verify)  | Availability | Additional Information/Solution |
| :--- | :--- | :--- |
| [Quarkus Tools for Visual Studio Code is installed](didact://?commandId=vscode.didact.extensionRequirementCheck&text=quarkus-extension-requirement-status$$redhat.vscode-quarkus&completion=Quarkus%20extension%20pack%20available. "Checks the VS Code workspace to make sure the Quarkus extension is installed"){.didact} | *Status: unknown*{#quarkus-extension-requirement-status} 	| [Click here to install](vscode:extension/redhat.vscode-quarkus "Opens the extension page and provides an install link") |

## Creating a new Quarkus Application

Quarkus provides an amazingly fast platform for Java applications, so let's create one!

- [ ] [Start the `Quarkus: Generate a Maven project` command to create a project. You can open the Command Palette with F1 or Ctrl+Shift+P to find the command yourself, or click here to start it automatically.](didact://?commandId=quarkusTools.createProject&completion=Started%20Quarkus%20wizard. "Starts the Quarkus 'Create Project' wizard"){.didact}

At each step, enter the information below.

| Step | Value |
| :--- | :---  |
| 1. Your project groupId | `org.acme` |
| 2. Your project artifactId | `greetings` |
| 3. Your project version | `1.0.0-SNAPSHOT` |
| 4. Your package name | `org.acme` |
| 5. Your resource name | `GreetingResource` |
| 6. Pick extensions | None needed, just press `Enter` |

When you finish going through the wizard, you will be prompted to select the folder where you want the project to be created. Select a folder in the dialog and click `Generate Here` to continue. This will open a new workbench window with your project directed automatically added.

*You may have to open this Didact tutorial in the other workbench window to continue.*

## Debugging your Quarkus application

When you are ready to run and debug your application, the Quarkus tooling can help you with that by starting the application and attaching the integrated VS Code debugger.

- [ ] [Start the `Quarkus: Debug current Quarkus project` command to start a debug session. You can open the Command Palette with F1 or Ctrl+Shift+P to find the command yourself, or click here to start it automatically.](didact://?commandId=quarkusTools.debugQuarkusProject&completion=Started%20Quarkus%20debug. "Starts a Quarkus Debug session"){.didact}

To validate that the application is running, we can go to the Rest endpoint and operation that it creates. 

- [ ] [Go to `http://localhost:8080/hello`](http://localhost:8080/hello) to see the string "hello" appear. 

## Updating the code while in a live debug session

If you open the `GreetingResource.java` file, you can edit the message displayed to the user.

- [ ] If you have the `greetings` project in your workspace, you can [open the GreetingResource.java file in the editor.](didact://?commandId=vscode.openFolder&projectFilePath=src/main/java/org/acme/GreetingResource.java&completion=Opened%20the%20GreetingResource.java%20file "Opens the GreetingResource.java file"){.didact}

Change the return string of the `hello()` method to `Hello, world!` and save the file, then refresh your link in the web browser to see `Hello, world!`.

# Other capabilities

Beyond creating and debugging Quarkus projects, the VS Code extension also provides multiple code snippets to aid in common development tasks.

For more about **Quarkus Tools for Visual Studio Code**, [check out the extension page](hhttps://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus).

Happy coding!
