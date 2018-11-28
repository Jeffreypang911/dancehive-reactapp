<h1 align="center">
	<img
		width="300"
		alt="Dance Hive"
		src="https://raw.githubusercontent.com/melchua/dancehive-reactapp/master/design_assets/dh-logobox.png">
</h1>

<h3 align="center">
	Online learning and entertainment platform
</h3>

<p align="center">
	<strong>
		<a href="https://dancehive.app/">Website</a>
	</strong>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/thelounge/thelounge.github.io/master/img/thelounge-screenshot.png" width="550">
</p>

## Proposed Tech Stack

**Frontend**
* React 
* Mobx-state-tree

**Third Party**
* Firebase
* Auth0

**React Modules**
* autho0-js
* firebase
* reactstrap
* bootstrap

**Hosting**
* Amazon S3 (Video HLS)
* Firebase

## Related Projects

* **React Dance Hive Video Player.** A modification to react-player that adds useful features for training physical activities (mirroring, multiple angles, slow-down, speed-up). 
[react-player-dancehive](https://github.com/melchua/dh-video-player).


## Overview

* **Modern features brought to IRC.** Push notifications, link previews, new message markers, and more bring IRC to the 21st century.
* **Always connected.** Remains connected to IRC servers while you are offline.
* **Cross platform.** It doesn't matter what OS you use, it just works wherever Node.js runs.
* **Responsive interface.** The client works smoothly on every desktop, smartphone and tablet.
* **Synchronized experience.** Always resume where you left off no matter what device.

To learn more about configuration, usage and features of Dance Hive, take a look at [the website](https://dancehive.app).

Dance Hive is the official react-app of dancehive.app by [Mel Chua](https://github.com/melchua).

## Installation and usage

Dance Hive requires [Node.js](https://nodejs.org/) v6 or more recent.
[Yarn package manager](https://yarnpkg.com/) is also recommended.  
If you want to install with npm, `--unsafe-perm` is required for a correct install.

### Running stable releases using Yarn (recommended)

Run this in a terminal to install (or upgrade) the latest stable release from
[npm registry](https://www.npmjs.com/):

```sh
yarn global add thelounge
```

If you already have Dance Hive installed globally, use the following command to update it:

```sh
yarn global upgrade thelounge
```

When installation is complete, run:

```sh
thelounge start
```

For more information, read the [documentation](https://thelounge.chat/docs/), [wiki](https://github.com/thelounge/thelounge/wiki), or run:

```sh
thelounge --help
```

### Running from source

The following commands install and run the development version of Dance Hive:

```sh
git clone https://github.com/thelounge/thelounge.git
cd thelounge
yarn install
NODE_ENV=production yarn build
yarn start
```

When installed like this, `thelounge` executable is not created. Use `node index <command>` to run commands.

⚠️ While it is the most recent codebase, this is not production-ready! Run at
your own risk. It is also not recommended to run this as root.

## Development setup

Simply follow the instructions to run Dance Hive from source above, on your own
fork.

Before submitting any change, make sure to:

- Read the [Contributing instructions](https://github.com/thelounge/thelounge/blob/master/.github/CONTRIBUTING.md#contributing)
- Run `npm test` to execute linters and test suite
- Run `npm run build` if you change or add anything in `client/js` or `client/views`