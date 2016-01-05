
# taciturn-tatertot [![Build Status](https://travis-ci.org/skibz/taciturn-tatertot.svg)](https://travis-ci.org/skibz/taciturn-tatertot) [![Code Climate](https://codeclimate.com/github/skibz/taciturn-tatertot/badges/gpa.svg)](https://codeclimate.com/github/skibz/taciturn-tatertot) [![Test Coverage](https://codeclimate.com/github/skibz/taciturn-tatertot/badges/coverage.svg)](https://codeclimate.com/github/skibz/taciturn-tatertot/coverage)

> a simple and kind of unfinished bandwidth meter

using `ifstat`, [blessed](https://github.com/chjj/blessed) and [blessed-contrib](https://github.com/yaronn/blessed-contrib) (`ncurses` abstraction)

##### build and run

debian-derived linuxes:

```bash
sudo apt-get install -y ifstat
npm i -g taciturn-tatertot
```

os x:

```bash
brew install ifstat
npm i -g taciturn-tatertot
```

officially, this program only supports os x and linux. however, if you've managed to get it running on another platform, please open an issue and let me know! the same goes for wanting to have support added for your platform.
