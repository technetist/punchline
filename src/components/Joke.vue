<template>
  <div class="col-md-6">
    <div class="joke-card card m-2 p-2">
      <div class="card-body">
        <button class="close" @click="removeJoke(index)"><span>&times;</span></button>
        <p><u>{{ joke.setup }}</u></p>
        <p><em>{{ joke.punchline }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    props: ['joke', 'index'],
    methods: mapActions([
      'removeJoke'
    ])
  }
</script>
