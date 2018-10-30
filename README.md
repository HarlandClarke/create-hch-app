# create-bare-vue-app

This project came about, because I needed a way to have a command line tool generate
a boilerplate [Vue](https://vuejs.org) or [Nuxt](https://nuxtjs.com) apps for work.
Although there should be a _standard_ way of setting up Vue projects, occasionally
you have to deviate, but only really in the types of packages you install.

Inspired by [create-nuxt-app](https://github.com/nuxt/create-nuxt-app), this is a
general tool for setting up Vue projects (i.e., no work-related proprietary stuff)
that I'm open-sourcing and using as the basis for projects I create. It adheres,
in its own unique way, to the Linux philosophy of doing **one** thing and doing it _well_.


## Installation

There's no need to install this, but if you wish, you can use `npm`:

```
    npm i -g create-bare-vue-app
```  

## Usage (Recommended vs. installing)

Leveraging the power of [npx](https://www.npmjs.com/package/npx) (which is shipped with `npm^5.2.0`),
run

```
    npx create-bare-vue-app <my-project>
```

In the event you don't follow convention and `<my-project>` is something like `"My Project"`,
`create-bare-vue-app` sanitizes the string to be a valid npm project name.

## Features

1. You can choose between:
    - A Nuxt install
    - Vanilla Vue project
2. You have the choice of these scripting languages:
    - [TypeScript](https://typescriptlang.org)
    - ES6
    - ES7
    - ES8
3. You can install (or not) these UI frameworks:
    - [Foundation](https://foundation.zurb.com)
    - [Vuetify](https://vuetifyjs.com)
    - [Quasar Framework](https://quasar-framework.org) (Coming soon!)
4. You also can opt to install:
    - [Axios](https://github.com/axios/axios) or [Superagent](https://github.com/visionmedia/superagent)
    - [ESLint](https://eslint.org)
    - [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill)

By default, the following packages are bundled:
 - [Babel](https://babeljs.io) (obviously)
 - [Webpack](https://webpack.js.org) 

## TODO

- [ ] Complete Nuxt.js setup
- [ ] Create vanilla Vue project if user doesn't use Nuxt (currently just does `npm init`)
- [ ] Merge Nuxt template with frameworks (i.e., for [Foundation](https://foundation.zurb.com), [Vuetify](https://vuetifyjs.com), and [Quasar](https://quasar-framework.org))
- [ ] Do Quasar setup
- [ ] Add [Jest](https://jestjs.io)

## License

This project is licensed under the MIT license.

## Credits

- [makiten](https://github.com/makiten)