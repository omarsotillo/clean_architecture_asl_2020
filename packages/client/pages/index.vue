<template>
  <div class="flex flex-col flex-wrap content-center mt-10">
    <form class="border  rounded p-10 shadow ">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-first-name"
      >
        Su forma guapa
      </label>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Titulaco
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="card.title"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Title"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Textaco
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="card.text"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="text"
            placeholder="Text"
          />
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            v-on:click="createCard"
          >
            Crear card
          </button>
        </div>
      </div>
    </form>
    <div
      v-for="card in cards"
      :key="card.title"
      class="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ card.title }}</div>
        <p class="text-gray-700 text-base">
          {{ card.text }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span
          v-for="(tag, index) in card.tags"
          :key="`tag-${index}`"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >#{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ICard, RestCardsApi, ICardDto } from 'core'

export default Vue.extend({
  data() {
    return {
      cards: new Array<ICard>(),
      card: <ICardDto>{}
    }
  },
  beforeMount() {
    this.getCards()
  },
  methods: {
    async getCards() {
      const repo = new RestCardsApi()
      this.cards = await repo.getCards()
    },
    async createCard() {
      const repo = new RestCardsApi()
      this.card = await repo.createCard(this.card)
      this.getCards()
    }
  }
})
</script>

<style></style>
