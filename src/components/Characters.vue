<script setup>
import { ar } from 'vuetify/locale';
import CharacterCard from './CharacterCard.vue';
import { onBeforeMount, ref } from 'vue';

const totalCharacters = ref(0);
const characters = ref([]);

const emit = defineEmits(['startLoading', 'stopLoading'])

const fetchRandomCharacters = async () => {
    emit('startLoading');

    let numbers = [];
    for(let i=0; i<6; i++){
        numbers.push(randomIntFromInterval(1, totalCharacters.value, numbers))
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${numbers}`);
    const response_json = await response.json();
    characters.value = response_json;

    emit('stopLoading');
}

onBeforeMount(async ()=>{
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const response_json = await response.json();
    const info = response_json.info;
    totalCharacters.value = info.count;
    
    await fetchRandomCharacters();
});

const randomIntFromInterval = (min, max, array=[]) => {
    let x = Math.floor(Math.random() * (max - min + 1) + min );
    while( array.includes(x) ){
        x = Math.floor(Math.random() * (max - min + 1) + min );
    }
    return x;
}   
</script>

<template>
    <div class="heading">
        <h2 class="text-h5 text-center">Algunos personajes aleatorios!</h2>
        <v-btn prepend-icon="mdi-refresh" variant="tonal" @click="fetchRandomCharacters">
            Wubba Lubba dub-dub
        </v-btn>
    </div>
    <div class="charactersContainer">
        <CharacterCard v-for="character in characters" :character="character"/>
    </div>
</template>

<style scoped lang="scss">
.heading{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}
.charactersContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

@media (min-width: 768px) {
    .charactersContainer{
        flex-direction: row;
        flex-wrap: wrap;
    }
}
</style>