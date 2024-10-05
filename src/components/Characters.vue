<script setup lang="ts">
import axios from 'axios';
import { onMounted, Ref, ref, watch } from 'vue';

const characters: Ref<Character[]> = ref([]);
const totalPages: Ref<number> = ref(0);
const actualPage: Ref<number> = ref(1);

watch(actualPage, async () => {
    await fetchCharacters();
});

const fetchCharacters = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${actualPage.value}`);
        const res_info: Info = response.data.info;
        const res_characters: Character[] = response.data.results;

        characters.value = res_characters;
        console.log(res_info.pages)
        totalPages.value = res_info.pages || 0;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

onMounted(async () => {
    await fetchCharacters();
});

</script>

<template>
    <!-- <h1 class="text/center">Personajes</h1> -->
    <div class="charactersContainer">
        <v-pagination :length="totalPages"  v-model="actualPage" v-if="totalPages > 0"></v-pagination>
        <v-card v-for="character in characters" class="mx-auto" width="300">
            <v-img height="200px" :src="character.image" cover></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-subtitle>{{ `${character.species} ${character.type}` }}</v-card-subtitle>
            <v-card-text>
                <ul>
                    <li>- Created at: {{ character.created }}</li>
                    <li>- Gender: {{ character.gender }}</li>
                    <li>- Location: {{ character.location.name }}</li>
                    <li>- Origin: {{ character.origin.name }}</li>
                </ul>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped lang="scss">
.charactersContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    ul {
        list-style: none;
    }
}
</style>