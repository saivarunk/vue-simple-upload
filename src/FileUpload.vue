<template>
  <div>
    <input style="display:none;" type="file" :id="`fileUpload_${_uid}`" name="fileUpload" @change="onFileChange">
    <a href="#" @click.prevent="`document.getElementById('fileUpload_${_uid}').click()`">{{title}}</a>
    <span v-if="filename !== null">{{filename}}</span>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'fileupload',
  props: {
    target: {
      type: String
    },
    action: {
      type: String,
      default: 'POST'
    },
    alias: {
      type: String
    },
    title: {
      type: String
    }
  },
  data () {
    return {
      file: null,
      fileName: null
    }
  },  
  methods: {
    emitter (event, data) {
      this.$emit(event, data)
    },
    uploadProgress (oEvent) {
      let vm = this
      if (oEvent.lengthComputable) {
        let percentComplete = Math.round(oEvent.loaded * 100 / oEvent.total)
        vm.emitter('progress', percentComplete)
      } else {
        // Unable to compute progress information since the total size is unknown
        vm.emitter('progress', false)
      }
    },
    getCookie: function(name)
    {
        var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        {
            return unescape(arr[2]);
        }
        else
        {
            return null;
        }
    },
    onFileChange (e) {
      let vm = this

      if (!this.target || this.target === '') {
        console.log('Please provide the target url')
      } else if (!this.action || this.action === '') {
        console.log('Please provide file upload action ( POST / PUT )')
      } else if (this.action !== 'POST' && this.action !== 'PUT') {
        console.log('File upload component only allows POST and PUT Actions')
      } else {
        let files = e.target.files || e.dataTransfer.files

        if (!files.length) {
          return
        };

        /*global FormData XMLHttpRequest:true*/
        /*eslint no-undef: "error"*/

        this.file = files[0]
        this.fileName = this.file.name
        let formData = new FormData()
        formData.append(this.alias, this.file)
        var xhr = new XMLHttpRequest()
        xhr.open(this.action, this.target)

        xhr.setRequestHeader("X-XSRF-TOKEN", vm.getCookie('XSRF-TOKEN'));

        xhr.onloadstart = function (e) {
          vm.emitter('start', e)
        }
        xhr.onloadend = function (e) {
          vm.emitter('finish', e)
        }
        xhr.upload.onprogress = vm.uploadProgress
        xhr.send(formData)
      }
    }
  }
}
</script>
