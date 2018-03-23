# Serverless Kubeless Typescript Template

### Setting up a local cluster

First of all, download and install minikube following the instructions of the [oficial repository](https://github.com/kubernetes/minikube#installation) depending on your OS, and install the proper [requirements](https://github.com/kubernetes/minikube#requirements), personally I'm using minikube and kubernetes 1.9.0 on Windows 10 with Hyper-V:

```
λ  minikube start --vm-driver=hyperv --hyperv-virtual-switch="Primary Virtual Switch"
```

> **Note**:
> Before executing the upper command you have to configure a [virtual switch](https://docs.docker.com/machine/drivers/hyper-v/#2-set-up-a-new-external-network-switch-optional) in the Hyper-V manager, in order to grant minikube access to internet.

> **Important:**
> If you are using minikube in windows with the hyper-v drive, you have to use minikube through an admin powershell, because this is necessary to interact with the hyper-v machine.

> **Curiosity:**
> You can connect to the minikube VM with the user 'docker' and the password 'tcuser'.

#### Deploying Kubeless

Once you have the minikube running in your local machine you only have follow the instructions of the [official documentation](http://kubeless.io/docs/quick-start/).

### Dependencies

To use serverless with kubeless you need to install the following plugin:

```
$ npm install serverless-kubeless
```

Once you have it installed, only remain to install the dependencies in the `package.json`:

```
$ yarn
or
$ npm install
```

### Issues encountered

* Despite of, the serverless deploy process has a full integration with the webpack plugin, the kubeless runtime [can't execute](https://github.com/serverless/serverless-kubeless/issues/83) a handler compiled by webpack.

* The handler name in the serverless.yml can't be a path, because the handler name in kubeless can't contain the character '/', entering in conflict with the [application structure](https://github.com/oasp/oasp4fn/wiki/Structure) specified by Oasp4Fn. However this could be easily solved adding [one line](https://github.com/serverless/serverless-kubeless/blob/master/deploy/kubelessDeploy.js#L109) in the serverless-kubeless plugin, that splits the handler name and takes only the last part of the path.

* The Node.js runtimes in kubeless, force us to export explicitly inside an object that overrides the `module.exports` object ([sample](https://github.com/serverless/serverless-kubeless/blob/master/examples/post-nodejs/handler.js)), also the use of a http Request/Response structure to handle the events and the impossibility to work easily with promises, aren't positive points for the FaaS framework.
