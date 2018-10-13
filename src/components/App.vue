<template>
  <div id="app">
    <h3>Got Jokes?</h3>
    <button class="btn btn-success"
            @click="initJokes">Get 10 More Jokes
    </button>

    <button class="btn btn-success"
            @click="addJoke">Get One More Joke
    </button>

    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        :key="index"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import Joke from './Joke';

  export default {
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>
