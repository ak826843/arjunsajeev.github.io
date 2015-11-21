---
layout: post
title: Setting up MacVim on El Capitan
---
Setting up MacVim on El Capitan was harder than I thought. Initially I tried to install MacVim using homebrew but then the final final build process kept on failing due to some reason. It turns out that there where some issues with homebrew and El Capitan at the time.I also installed the latest version of the Xcode command line tools.

## Installation

So now you can install MacVim using homebrew.

```
brew install macvim
```

## Plugin management

Basically there are two popular tools for plugin management - Pathogen and Vundle. After a lot of browsing I decided to go with [Vundle](https://github.com/VundleVim/Vundle.vim).Follow the instructions in the Vundle Readme file to setup Vundle. Modify the .vimrc file as required.


Now launch vim and run :PluginInstall

## Customization

I tried out various vim configs and finally settled on [this](https://github.com/settermjd/vim-for-technial-writers/blob/master/.vimrc).
