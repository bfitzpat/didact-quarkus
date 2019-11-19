![Apache Camel](https://raw.githubusercontent.com/bfitzpat/vscode-didact/master/example/camelinaction/post-logo-apache-camel-d.png)

# Apache Camel Extensions for Quarkus

[Quarkus](https://quarkus.io/) is a Java platform offering fast boot times and low memory footprint. It targets both stock JVMs (OpenJDK in the first place) and [GraalVM](https://www.graalvm.org/).

[Quarkus extensions](https://quarkus.io/extensions/) are units of Quarkus distribution. They configure, boot and integrate a technology (in our case Camel components) into your Quarkus application. You will typically use them as dependencies in your project.

Users of Camel can write Quarkus applications running Camel integrations.

[Check out the Apache Camel Extensions for Quarkus project documentation for more details about the framework.](https://camel.apache.org/camel-quarkus/latest/index.html)

[Check out the Quarkus.io site for details about Quarkus itself.](https://quarkus.io)

## Apache Camel on Quarkus - Your First Application

What follows is a simple step-by-step process that helps you create and run a Camel integration on a local Quarkus instance.

We will:

* Create a Maven project with a sample Apache Camel integration written in Java
* Run the application on a local Quarkus instance using Maven in a VS Code terminal window
* Examine the running Restful application in a web browser
* Update the Java route and watch the change ripple through to the running web application after a quick refresh of the web page 

## Prerequisites 

You must have a few things set up prior to walking through the steps in this tutorial. 

<a href='didact://?commandId=vscode.didact.validateAllRequirements' title='Validate all requirements!'><button>Validate all Requirements at Once!</button></a>

| Requirement (Click to Verify)  | Availability | Additional Information/Solution |
| :--- | :--- | :--- |
| [At least one folder exists in the workspace](didact://?commandId=vscode.didact.workspaceFolderExistsCheck&text=workspace-folder-status&completion=A%20valid%20folder%20exists%20in%20the%20workspace. "Ensure that at least one folder exists in the user workspace"){.didact} | *Status: unknown*{#workspace-folder-status} | Create a workspace folder (or [click here to create a temporary folder](didact://?commandId=vscode.didact.createWorkspaceFolder&completion=Created%20temporary%20folder%20in%20the%20workspace. "Create a temporary folder and add it to the workspace."){.didact}), close, and reopen the Didact window
| [JDK 1.8+ with JAVA_HOME configured appropriately](didact://?commandId=vscode.didact.requirementCheck&text=java-requirements-status$$java%20-version$$Runtime%20Environment&completion=Java%20is%20available%20on%20this%20system. "Tests to see if `java -version` returns a result"){.didact} 	| *Status: unknown*{#java-requirements-status} 	| 
[Apache Maven is accessible at the command line](didact://?commandId=vscode.didact.requirementCheck&text=maven-requirements-status$$mvn%20--version$$Apache%20Maven&completion=Apache%20Maven%20is%20available%20on%20this%20system. "Tests to see if `mvn -version` returns a result"){.didact} 	| *Status: unknown*{#maven-requirements-status} 	| See [Installing Apache Maven](https://maven.apache.org/install.html "Documentation on how to Install Apache Maven on your system") and then restart VS Code
| [VS Code Extension Pack for Apache Camel by Red Hat is installed](didact://?commandId=vscode.didact.extensionRequirementCheck&text=extension-requirement-status$$redhat.apache-camel-extension-pack&completion=Camel%20extension%20pack%20available. "Checks the VS Code workspace to make sure the extension pack is installed"){.didact} | *Status: unknown*{#extension-requirement-status} 	| [Click here to install](vscode:extension/redhat.apache-camel-extension-pack "Opens the extension page and provides an install link") |

## Your First Camel Integration on Quarkus

Quarkus provides an amazingly fast platform for Java applications, so we will write our first integration in Java.

### Step 1: Creating a Folder and Your Integration

First, we need to set up our sample project. Camel on Quarkus has many examples available at their [GitHub project hosting the source](https://github.com/apache/camel-quarkus/tree/master/examples), but we're just going to use a simple one: `rest-json`.

You can download the project yourself from the GitHub repo and then copy it into a folder in your workspace, following the directions [here in the Apache Camel Extensions for Quarkus user guide](https://camel.apache.org/camel-quarkus/latest/user-guide.html#_step_by_step_with_the_rest_json_example). Or you can create a sample folder and copy in the file with the link below.

- [ ] [Create a sample folder in your VS Code workspace and we will define it there.](didact://?commandId=vscode.didact.scaffoldProject&extFilePath=redhat.didact-quarkus/didact/quarkus/first-application/rest-json-project.json&completion=Created%20rest-json%20project. "Creates a folder and copies in rest-json"){.didact}

## Step 2: Exploring the Project POM file

Now that you have a copy of the project let's take a quick look at the project `pom.xml` file. If you imported or copied the project yourself, go ahead and open it now. Go to the Explorer activity (Ctrl+Shift+E) and look at the workspace folders listed.

If you clicked the link to create the sample project, you can find it in `rest-json/pom.xml` in the Explorer view.

- [ ] If you have the `rest-json` project in your workspace, you can [open the pom.xml file in the editor.](didact://?commandId=vscode.openFolder&projectFilePath=rest-json/pom.xml&completion=Opened%20the%20pom.xml%20file "Opens the pom.xml file"){.didact}

For this file, we're simply defining where to get project dependencies. 

The application has just two compile dependencies:

```xml
<dependency>
    <groupId>org.apache.camel.quarkus</groupId>
    <artifactId>camel-quarkus-platform-http</artifactId>
</dependency>
<dependency>
    <groupId>org.apache.camel</groupId>
    <artifactId>camel-jackson</artifactId>
</dependency>
```

These component dependencies are managed in `camel-quarkus-bom` that we use as the Maven parent. `camel-quarkus-bom` and its ancestors also manage plugins necessary for a typical Camel Quarkus application. In case you cannot use `camel-quarkus-bom` as a parent of your application, make sure that you add those plugins manually along with their versions.

Beyond that, there are only three classes in the application: `Routes` defining the Camel routes and a couple of entity classes (`Fruit` and `Legume`).

And `src/main/resources/application.properties` configures the application application name through the `camel.context.name` property set there.

## Step 3: Deploying the Application

To start the application, we will use Maven at the command line:

```shell
$ mvn clean compile quarkus:dev
```

This command compiles the project, starts your application and lets the Quarkus tooling watch for changes in your workspace. Any modifications in your project will automatically take effect in the running application. You can do this yourself or click below.

- [ ] [Opens a new terminal and executes the Maven command.](didact://?commandId=vscode.didact.sendNamedTerminalAString&text=quarkus-app$$cd%20rest-json%26%26mvn%20clean%20compile%20quarkus:dev&completion=Opened%20a%20new%20terminal%20and%20executed%20maven%20command. "Opens a new terminal and executes the Maven command"){.didact}

Check the application in the browser, e.g. [http://localhost:8080/fruits](http://localhost:8080/fruits) for the rest-json example. You should see a list of fruits returned in a rendered JSON form.

## Step 4: Updating the Integration

While our application is running, we can modify it and see those changes reflected in the deployed application when we refresh the browser. Let's try that now.

- [ ] If you have the `rest-json` project in your workspace, you can [open the Routes.json file in the editor.](didact://?commandId=vscode.openFolder&projectFilePath=rest-json/src/main/java/org/acme/rest/json/Routes.java&completion=Opened%20the%20Routes.java%20file "Opens the Routes.java file"){.didact}

Change something in that file in the `Routes()` method. Perhaps add a new type of fruit!

```java
        ...
        this.fruits.add(new Fruit("Pineapple", "Tropical fruit"));

        /* ADD THIS LINE to add a new fruit */
        this.fruits.add(new Fruit("Banana", "Tropical fruit"));
        ...
```

Then save the file and watch as the project is rebuilt in the terminal window automatically. 

When it's done, we should be able to check the application in the browser again, e.g. [http://localhost:8080/fruits](http://localhost:8080/fruits), and see our additional fruit in the JSON returned!

## Step 5: Stopping the Application

When you are ready to stop your running Quarkus application, click on the terminal where you see the maven project running and press `Ctrl+C`. Note you may have to use that key sequence twice due to the way VS Code terminals operate. 

See the VS Code documentation [for more about the Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

# Finding more information

For more about **Apache Camel Extensions for Quarkus**, [check out the project documentation](https://camel.apache.org/camel-quarkus/latest/index.html).
