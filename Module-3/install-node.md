
# Installing node - a non-browser javascript runtime environment

## Install node windows

### Install [windows subsystem for linux](https://docs.microsoft.com/en-us/windows/wsl/install)
- open the windows command prompt
- enter this command: 
```
wsl --install
```
- once it is done restart your machine
- after restart, it should open the ubuntu terminal (ubuntu is a linux os), and ask for a username and password (just use same you use for your laptop, and note, when typing passwords on the command line, it looks like nothing is happening)

### install nvm
```
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.bashrc
```
### install node v16
```
nvm install 16
```
### install this vs code extension: [remote development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## Install node mac

- first, check to see if you already have node. Open the terminal, then type `node -v` (and press enter), if nothing shows up after pressing enter, you don't have node
- install [homebrew](https://brew.sh/), by pasting and executing this `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` in the terminal
- install nvm with this command `brew install nvm`
- install node v16 with this command `nvm install 16`