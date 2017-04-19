# vue-simple-upload

[![npm](https://img.shields.io/npm/v/vue-simple-upload.svg) ![npm](https://img.shields.io/npm/dm/vue-simple-upload.svg)](https://www.npmjs.com/package/vue-simple-upload)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![Build Status](https://secure.travis-ci.org/saivarunk/vue-simple-upload.png?branch=master)](https://travis-ci.org/saivarunk/vue-simple-upload)

An simple file upload component for vue.js.

Checkout Demo on [JSFiddle](https://jsfiddle.net/saivarunk/o9vwjnar/)

## Installation

`npm install vue-simple-upload`

## Usage
vue-simple-upload is a UMD module, which can be used as a module in both CommonJS and AMD modular environments.
When in non-modular environment, FileUpload will be registered as a global variable.</p>

### ES6
```js

import FileUpload from 'vue-simple-upload/dist/FileUpload'

export default {
  ...
  components: {
    'fileupload': FileUpload
  },
  ...
}
```
After that, you can use it in your templates:

```html
<fileupload target="http://localhost:8000/api/upload" action="POST"></fileupload>
```

### CommonJS
```js
var Vue = require('vue')
var FileUpload = require('vue-simple-upload')

var YourComponent = Vue.extend({
  ...
  components: {
    'fileupload': FileUpload.FileUpload
  },
  ...
})
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-simple-upload/dist/vue-simple-upload.min.js"></script>
<script>
new Vue({
  ...
  components: {
    'fileupload': FileUpload.FileUpload
  },
  ...
})
</script>
```
## Usage 

```vue
<template>
<fileupload target="http://localhost:8000/api/upload" action="POST" v-on:progress="progress" v-on:start="startUpload" v-on:finish="finishUpload"></fileupload>
</template>

<script>
new Vue({
  ...
  components: {
    'fileupload': FileUpload.FileUpload
  },
  methods: {
    startUpload(e) {
      // file upload start event
      console.log(e);
    },
    finishUpload(e) {
      // file upload finish event
      console.log(e);
    },
    progress(e) {
      // file upload progress
      // returns false if progress is not computable
      console.log(e);
    }
  }
})
</script>
```

## Props

 - target (String):
   Target endpoint to upload the file

 - action (String):
   Target action ( POST or PUT )


## Events

You can access the file upload events using v-on methods.

- File Upload start event:
  You can access the start event using v-on:start="startUpload"

```js

methods() {
  startUpload(e) {
    // start event
  }
}

```

- File Upload finish event:
  You can access the start event using v-on:finish="finishUpload"

```js

methods() {
  finishUpload(e) {
    // finish event
  }
}

```

- File Upload progress event:
  You can access the file upload progress using v-on:progress="progress"

```js

methods() {
  progress(e) {
    // listen to file upload progress
  }
}

```

## Todos

- Multi File Upload

## License

Released under the [MIT](LICENCE) License.
