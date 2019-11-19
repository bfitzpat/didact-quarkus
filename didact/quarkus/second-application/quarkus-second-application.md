# Using the Quarkus Tools for Visual Studio Code Extension

![Quarkus](https://redhat.gallerycdn.vsassets.io/extensions/redhat/vscode-quarkus/1.1.1/1571860223463/Microsoft.VisualStudio.Services.Icons.Default){.imageRight}

[Quarkus](https://quarkus.io/) is a Java platform offering fast boot times and low memory footprint. It targets both stock JVMs (OpenJDK in the first place) and [GraalVM](https://www.graalvm.org/).

[Quarkus extensions](https://quarkus.io/extensions/) are units of Quarkus distribution. They configure, boot and integrate a technology (in our case Camel components) into your Quarkus application. You will typically use them as dependencies in your project.

And the [Quarkus Tools for VS Code Extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus) provides access to Quarkus functionality in VS Code using the Language Server Protocol and extensions to JDT.

[Check out the Quarkus.io site for details about Quarkus itself.](https://quarkus.io)

## Quarkus on VS Code - Creating a new Application

What follows is a simple step-by-step process that helps you create a new Quarkus project.

We will:

* Do some things

## Prerequisites 

You must have a few things set up prior to walking through the steps in this tutorial. 

<a href='didact://?commandId=vscode.didact.validateAllRequirements' title='Validate all requirements!'><button>Validate all Requirements at Once!</button></a>

| Requirement (Click to Verify)  | Availability | Additional Information/Solution |
| :--- | :--- | :--- |
| [At least one folder exists in the workspace](didact://?commandId=vscode.didact.workspaceFolderExistsCheck&text=workspace-folder-status&completion=A%20valid%20folder%20exists%20in%20the%20workspace. "Ensure that at least one folder exists in the user workspace"){.didact} | *Status: unknown*{#workspace-folder-status} | Create a workspace folder (or [click here to create a temporary folder](didact://?commandId=vscode.didact.createWorkspaceFolder&completion=Created%20temporary%20folder%20in%20the%20workspace. "Create a temporary folder and add it to the workspace."){.didact}), close, and reopen the Didact window
| [DK 1.8+ with JAVA_HOME configured appropriately](didact://?commandId=vscode.didact.requirementCheck&text=java-requirements-status$$java%20-version$$Runtime%20Environment&completion=Java%20is%20available%20on%20this%20system. "Tests to see if `java -version` returns a result"){.didact} 	| *Status: unknown*{#java-requirements-status} 	| 
[Apache Maven is accessible at the command line](didact://?commandId=vscode.didact.requirementCheck&text=maven-requirements-status$$mvn%20--version$$Apache%20Maven&completion=Apache%20Maven%20is%20available%20on%20this%20system. "Tests to see if `mvn -version` returns a result"){.didact} 	| *Status: unknown*{#maven-requirements-status} 	| See [Installing Apache Maven](https://maven.apache.org/install.html "Documentation on how to Install Apache Maven on your system") and then restart VS Code
| [Quarkus Tools for Visual Studio Code is installed](didact://?commandId=vscode.didact.extensionRequirementCheck&text=quarkus-extension-requirement-status$$redhat.vscode-quarkus&completion=Quarkus%20extension%20pack%20available. "Checks the VS Code workspace to make sure the Quarkus extension is installed"){.didact} | *Status: unknown*{#camelk-extension-requirement-status} 	| [Click here to install](vscode:extension/redhat.vscode-quarkus "Opens the extension page and provides an install link") |

## Creating a new Quarkus Application

Quarkus provides an amazingly fast platform for Java applications, so let's create one!

* Steps will go here

# Finding more information

For more about **Apache Camel Extensions for Quarkus**, [check out the project documentation](https://camel.apache.org/camel-quarkus/latest/index.html).
