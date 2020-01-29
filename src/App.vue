<template>
  <div id="app">    
    <div id="nav">
      <div class="container">
        <div class="subItems">
          <router-link to="/"><i class="fa fa-home"></i></router-link>
          <router-link to="/setting"><i class="fa fa-cog"></i></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

body {
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
#app .main {
  min-height: 600px;
  background-image: url('assets/bg.png');
  background-repeat: no-repeat;
  background-position: top right;
}
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-transform: uppercase;
  font-size: 30px;
  margin-top:0;
}

ul {
  list-style: none;
}
input[type="text"],
textarea {
  width: 100%;
  display: inline-block;
  padding: 8px;
  border: 0;
  font-size: 1em;
  border: 1px solid #ddd;
  resize: none;
  outline:none;
  border-radius: 4px;
}

input[type="radio"],
input[type="checkbox"] {
  display: inline-block;
  margin-right: 5px;
}

textarea {
  padding: 10px;
  min-height: 50px;
  border: 1px solid #ddd;
}
.clearfix::after, .clearfix::before {
  content: "";
  display: table;
   clear: both;
}

.pull-left { float: left !important;}
.pull-right { float: right !important;}

.form-item {
  margin-bottom: 15px;
}
.form-item span {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 20px;
}
.form-item label {
  margin-right: 10px;
}
.btn {
  outline: none;
  display: inline-block;
  background-color: #2093ff;
  border: 0;
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 15px;
  color: #fff;
  border-radius: 50px;
  margin: 0 10px 0 0;
}
.btn-start {
  background-color: #ff4756;
}
.btn-stop {
  background-color: #46c93a;
}
.btn-reset {
  background-color: #1e1e1e;
}

#nav .subItems {
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 9;
}
#nav a {
  margin-right: 10px;
}
#nav a .fa {
  font-size:1.4em;
  color: #a2a2a2
}
</style>
