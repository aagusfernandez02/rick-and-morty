<script setup lang="ts">
import { ref, Ref } from 'vue';
import Characters from './components/Characters.vue';

const tab: Ref<string> = ref('');
</script>

<template>
  <main>
    <h1 class="text-h2 mb-10 mt-10">Rick and Morty app</h1>

    <v-card min-height="100vh" min-width="100vw"class="card-content">
      <v-tabs v-model="tab" bg-color="green-darken-3">
        <v-tab value="one">Personajes</v-tab>
        <v-tab value="two">Episodios</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <Characters />
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            Episodios
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .card-content {
    background-color: $bg-primary-color;
    color: $font-primary-color;
  }
}
</style>
