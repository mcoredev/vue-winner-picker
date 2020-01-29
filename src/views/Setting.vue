<template>
  <div class="container">

    <h1>Setting</h1>
    <div class="form-item">
      <label>Title of competition</label>
      <input id="title" type="text" v-model="title" placeholder="Name competition">
      <div class="error" v-if="errors.title.length">{{ errors.title }}</div>
    </div>

    <div class="form-item">
      <label>Description of competition</label>
      <textarea id="description" v-model="description" placeholder="Your description"></textarea>
    </div>

    <div class="form-item">
        <label><input type="radio" v-model="typeSource" name="typeSource" value="list">Write custom list</label>
        <label><input type="radio" v-model="typeSource" name="typeSource" value="external">External JSON URL</label>
        <br><br>  
        
        <div v-if="typeSource === 'list'">
          <label>List of contestants</label>
          <textarea class="list" v-model="contestants" rows="10"></textarea>
          <br><small>Each record must be on a new line</small>
        </div>
    </div>

    <div v-if="typeSource === 'external'" class="form-item">
      <label>External JSON URL</label>
      <input type="text" v-model="url" placeholder="Type your JSON url address">
      <small>Type your external source of contestants (JSON format)</small>
    </div>

    <div class="error" v-if="errors.source.length">{{ errors.source }}</div>
    <div class="success" v-if="validate">{{ submitMessage }}</div>
    <br>

    <button class="btn btn-stop" @click="save">Save settings</button>
  </div>
</template>

<script>

export default {
  name: "Setting",
  data: function() {
    return {
        url: '',
        title: '',
        description: '',
        contestants: '',
        source: null,
        validate: false,
        submitMessage: '',
        typeSource: 'list',
        errors: {
          title: '',
          source: '',
        }
    };
  },
  methods:{
    validation(){
      //reset form errors
      this.resetFormErrors()

      if(!this.title) {
        this.errors.title = "Title is required!"
      }
      
      if(this.typeSource == 'list' && !this.contestants) {
        this.errors.source = "List of contestants is required!"
      }

      if(this.typeSource == 'external' && !this.url) {
        this.errors.source = "External source of contestants is required!"
      }
      
      if(!this.errors.title && !this.errors.source) {
        this.validate = true
        return true
      }
      return false
    },
    //save data to localStorage
    save(){
      if(this.validation()) {
        //if contestant list is fill
        if(this.contestants) {
          // split data 
          let source = this.contestants.split("\n")
          // get only is fill
          this.source = source.filter(item => item != " " && item != "")
        }

        //after validate data save to localStorage
        localStorage.setItem('setting',JSON.stringify(
          {
            url: this.url,
            title: this.title,
            contestants: this.source,
            typeSource: this.typeSource,
            description: this.description
          }
        ))
        // get submit message
        this.submitMessage = "Your settings was succesfully saved!"
      }
    },
    // reset form errors
    resetFormErrors(){
      this.errors = {
        title: '',
        source: '',
      }
    }
  },
  //after create
  created() {
    // check if localStorage setting exist
    if(localStorage.getItem('setting') !== null) {
      let setting = JSON.parse(localStorage.getItem('setting'))
      
      this.url = setting.url
      this.title = setting.title
      this.typeSource = setting.typeSource
      this.description = setting.description
      this.contestants = setting.contestants.join("\n")
    }
  },

};
</script>

<style scoped>

.error {
  color:orangered;
}

.success {
  color:seagreen;
}
</style>
