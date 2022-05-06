
# Installing node - a non-browser javascript runtime environment

## Install node windows

### Install [windows subsystem for linux](https://docs.microsoft.com/en-us/windows/wsl/install)
- open the windows command prompt (as administrator)
- enter this command: 
```
wsl --install
```
- once it is done restart your machine
- after restart, it should open the ubuntu terminal (ubuntu is a linux os), and ask for a username and password (just use same you use for your laptop, and note, when typing passwords on the command line, it looks like nothing is happening)

### install nvm
Execute these commands one at a time in the ubuntu terminal
- `sudo apt install curl`
- `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
- `source ~/.bashrc`

### install node v16
```
nvm install 16
```
### install this vs code extension: [remote development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## Install node mac

- first, check to see if you already have node. Open the terminal, then type `node -v` (and press enter), if nothing shows up after pressing enter, you don't have node
- install [homebrew](https://brew.sh/), by pasting and executing this `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` in the terminal
- install nvm with this command `brew install nvm` (if you get error "nvm not found", close the terminal and open a new one and try again)
- setup nvm: `mkdir ~/.nvm`
- setup nvm command: ```echo "export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion" >> ~/.zshrc```
- install node v16 with this command `nvm install 16`

## Make sure it worked

- from your terminal, you should now be able to type `node` and be in the node repl. You should see a carrot. Type some javascript and press enter to execute it. Press ctrl+c twice to exit.

## If it didn't work

- hit up a mentor or instructor to get help, issues happen all the time.