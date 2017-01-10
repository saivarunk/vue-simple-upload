# vue-simple-upload

An simple file upload component for vue.js.

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
    FileUpload
  },
  ...
}
```
After that, you can use it in your templates:

```html
<fileupload target="http://localhost:8000/api/upload" action:"POST"></fileupload>
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

```
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vue-simple-upload/dist/vue-simple-upload.min.js"></script>

new Vue({
  ...
  components: {
    'fileupload': FileUpload.FileUpload
  },
  ...
})
```


## Props

 - target (String):
   Target endpoint to upload the file

 - action (String):
   Target action ( POST or PUT )


## Event



## License

Released under the [MIT](LICENSE) License.
