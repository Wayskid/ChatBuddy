<script setup lang="ts">
  import {ref} from "vue"

  const showMessage = ref(false)
  const searchVal = ref("")

  function changeShowMsg(state:boolean){
    showMessage.value = state
  }

  console.log(showMessage.value)
</script>

<template>
  <main class="bg-black text-white px-0 md:p-6 h-screen grid grid-rows-[auto,1fr]">
    <p class="text-center py-3 md:pb-5 md:pt-0 md:text-xl font-semibold italic">ChatBuddy</p>
    <div class="flex w-[min(90rem,100%)] m-auto h-full overflow-hidden">
      <div class="bg-gray-600 py-3 grid grid-rows-[auto,auto,1fr,auto] sm:w-1/4 sm:min-w-[250px]" :class="showMessage ? 'w-0':'w-full'">
        <div class="flex items-center justify-between px-3">
          <p class="font-semibold">Ways Alabi</p>
          <p class="w-10 h-10 bg-slate-800 font-bold rounded-full grid place-items-center">W</p>
        </div>
        <div class="flex items-center mx-3 p-2 border border-gray-400 mt-3 focus-within:border-gray-300">
          <v-icon name="fa-search" scale="1" />
          <input type="text" class="bg-transparent w-full pl-2 outline-none" placeholder="Search" v-model="searchVal" >
        </div>
        <ul class="overflow-auto">
          <li class="grid grid-cols-[40px,1fr,35px] gap-2 items-center p-3" @click="changeShowMsg(true)">
            <p class="h-10 bg-slate-800 font-bold rounded-full grid place-items-center">W</p>
            <div class="">
              <p class="font-semibold">Ways Alabi</p>
              <p class="text-sm">Hello</p>
            </div>
            <p class="">5h ago</p>
          </li>
          <li class="grid grid-cols-[40px,1fr,35px] gap-2 items-center p-3" @click="changeShowMsg(true)">
            <p class="h-10 bg-slate-800 font-bold rounded-full grid place-items-center">W</p>
            <div class="">
              <p class="font-semibold">Ify Ana</p>
              <p class="text-sm">Hello</p>
            </div>
            <p class="">5h ago</p>
          </li>
        </ul>
        <div class="flex items-center justify-between pt-3 px-3">
          <v-icon name="co-settings" scale="1.5" />
          <v-icon name="md-logout" scale="1.5" />
        </div>
      </div>
      <div class="bg-white text-black sm:w-3/4 text-center grid" :class="!showMessage ? 'w-0':'w-full'" @click="changeShowMsg(false)">
        <div class="m-auto">
          <v-icon name="ri-chat-voice-fill" scale="5" />
          <p class="text-2xl">Pick up where you left off</p>
          <p class="">Select a buddy and chat away.</p>
        </div>
      </div>
    </div>
  </main>
</template>
