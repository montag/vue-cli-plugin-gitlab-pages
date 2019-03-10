# vue-cli-plugin-gitlab-pages

> Gitlab CI plugin for vue-cli

This plugin generates a Gitlab CI config (gitlab-ci.yml) that will enable build, linting, unit testing and automatic deployment to Gitlab Pages.

## Configuration Options

Upon installation the plugin will prompt for several options.

- **ciBranch** 

    This is the remote branch the pipeline will watch for changes. Commits to this branch will trigger the pipeline.
    
    Defaults to `master`
    
    NOTE: This mean changes to this branch will be deploy publicly.
    
- **nodeVersion**

    The version of the node image to use for building on the CI pipeline. 
    
    Defaults to `latest`
    
- **enableLinting**

    This enables the linting CI stage. Also adds a `ci:lint` service that will fail the pipeline on linter warnings. 
    
    Requires a service `lint`
    
    Defaults to `true`
    
- **enableUnitTesting**

    This enables the unit testing CI stage.  
    
    Requires a service `test:unit`
    
    Defaults to `true` 
    
- **writeVueConfig**

    By default Gitlab Pages will deploy to `https://<username>.gitlab.io/<project_name>`. For the Vue app to work in this default config, the production publicPath of the vue app must be set to `/<project_name>`. 
    
    This option will write a vue.config.js file, that sets the publicPath for production builds to `/<project_name>` using the name found in the `package.json`. 
    
    Defaults to `false` to avoid breaking `vue.config.js`
    
    Modifying the publicPath can be done manually in a variety of ways (package.json, vue.config.js, .env.*, etc) and is independent of the Gitlab CI configuration and can be set in any of those ways.
    
 
          
 ## Installing in an Already Created Project
 
 ``` sh
 vue add vue-cli-plugins-gitlab-pages
 ```
 
 ## Troubleshooting
 
 - If the pipeline succeeds but the pages url displays a blank page with errors such as:
     
    ```ecmascript 6
    Refused to apply style ... because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
    ```
    
    Check that the publicPath matches the deployment path. 
    
 - Unit Test Error 
 
    ```ecmascript 6
    TypeError: Cannot assign to read only property 'Symbol(Symbol.toStringTag)' of object '#<process>'   
    ```
    
    This is a bug in `node:latest` and certain versions of Jest. Node image `11.10.1` should work.
    
    See: https://github.com/facebook/create-react-app/issues/6591