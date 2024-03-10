<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Message, State } from '../data/model';
import MessageCard from './MessageCard.vue';

let messages = ref<Message[]>([]);
let messageCount = ref(0);

// Generate a random message every second
onMounted(() => {
  setInterval(() => {
    if (messages.value.length >= 10) {
      messages.value.shift();
    }
    messageCount.value++;
    if (messageCount.value >= 100) {
      messageCount.value = 0;
    }
    messages.value.push({
      Key: `Key ${messageCount.value}`,
      Tag: `Tag ${messageCount.value}`,
      Name: `Name ${messageCount.value}`,
      Type: Object.values(State)[
        Math.floor(Math.random() * Object.values(State).length)
      ],
      Level:
        Object.values(State)[
          Math.floor(Math.random() * Object.values(State).length)
        ],
      Description: `Description ${Math.floor(Math.random() * 1000) + 1}`,
      Timestamp: new Date().toISOString(),
      Timesvalue: messageCount.value,
      Acknowledged: false,
    });
  }, 500);
});
</script>

<template>
  <div>
    <MessageCard
      v-for="(message, index) in messages"
      :key="index"
      :message="message"
    />
  </div>
</template>
