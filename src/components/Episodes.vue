<script setup lang="ts">
import axios from 'axios';
import { onMounted, Ref, ref, watch } from 'vue';

const episodes: Ref<Episode[]> = ref([]);
const totalPages: Ref<number> = ref(0);
const actualPage: Ref<number> = ref(1);

watch(actualPage, async () => {
    await fetchEpisodes();
});

const fetchEpisodes = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${actualPage.value}`);
        const res_info: Info = response.data.info;
        const res_episodes: Episode[] = response.data.results;

        episodes.value = res_episodes;
        console.log(res_info.pages)
        totalPages.value = res_info.pages || 0;
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

onMounted(async () => {
    await fetchEpisodes();
});

</script>

<template>
    <!-- <h1 class="text/center">Personajes</h1> -->
    <div class="charactersContainer">
        <v-pagination :length="totalPages"  v-model="actualPage" v-if="totalPages > 0" style="width: 100vw;"></v-pagination>
        <v-card v-for="episode in episodes" class="mx-auto" width="300" :key="episode.id">
            <!-- <v-img height="200px" :src="character.image" cover></v-img> -->
            <v-card-title>{{ episode.name }}</v-card-title>
            <v-card-subtitle># {{ episode.episode }}</v-card-subtitle>
            <!-- <v-card-text>
                <ul>
                    <li>- Created at: {{ character.created }}</li>
                    <li>- Gender: {{ character.gender }}</li>
                    <li>- Location: {{ character.location.name }}</li>
                    <li>- Origin: {{ character.origin.name }}</li>
                </ul>
            </v-card-text> -->
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