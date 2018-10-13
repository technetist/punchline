<template>
  <div class="col-md-6">
    <div class="joke-card card m-2 p-2">
      <div class="card-body">
        <p><u>{{ joke.setup }}</u></p>
        <p><em>{{ joke.punchline }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['joke']
  }
</script>
