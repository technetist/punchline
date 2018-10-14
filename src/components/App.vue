<template>
  <div id="app">
    <h3>Got Jokes?</h3>
    <button class="btn btn-success"
            @click="initJokes">Get 10 More Jokes
    </button>

    <button class="btn btn-success"
            @click="addJoke">Get One More Joke
    </button>
    <div class="my-2">
      <div class="col-8 offset-2 col-md-4 offset-md-4">

        <div class="row">
          <div v-for="type in types"
               class="col-4 checkboxRow">
            <label>
              <input
                type="checkbox"
                :value="type"
                v-model="checkedTypes"
                checked>
              <br>
              {{type}}
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
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
    data() {
      return {
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming']
      }
    },
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  }
</script>
