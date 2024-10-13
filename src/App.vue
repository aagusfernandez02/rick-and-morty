<script setup lang="ts">
import { ref, Ref } from 'vue';
import Episodes from './components/Episodes.vue';
import Characters from './components/Characters.vue';

const tab: Ref<string> = ref('');
const isLoading: Ref<boolean> = ref(false);

const startLoading = () => {
  isLoading.value = true;
}
const stopLoading = () => {
  isLoading.value = false;
}
</script>

<template>
  <div class="circularProgressContainer" v-if="isLoading">
    <v-progress-circular indeterminate :size="128" :width="10"></v-progress-circular>
  </div>
  <main>
    <h1 class="text-h2 mb-10 mt-10 text-center rickAndMorty_font" >Rick and Morty app</h1>

    <v-card width="100vw" min-height="100vh" class="card-content">
      <v-tabs v-model="tab" bg-color="dark">
        <v-tab value="one">Personajes</v-tab>
        <v-tab value="two">Episodios</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <Characters 
              @startLoading="startLoading" 
              @stopLoading="stopLoading"
            />
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <Episodes />
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

.circularProgressContainer {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba($color: #000000, $alpha: 0.5)
}
</style>
