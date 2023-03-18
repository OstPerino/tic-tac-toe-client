<template>
  <div class="choose">
    <CustomText> Выберите X или O</CustomText>
    <div class="radios">
      <div class="x">
        <label for="x">X</label>
        <input
          type="radio"
          id="x"
          @input="selectPlayerSign"
          value="x"
          name="sign"
        />
      </div>
      <div class="o">
        <label for="o">O</label>
        <input
          type="radio"
          id="o"
          @input="selectPlayerSign"
          value="o"
          name="sign"
        />
      </div>
    </div>
    <div class="error">
      <CustomText v-if="error">{{ error.value }}</CustomText>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { selectSign } from "@/api/gameServices/gameService";
import CustomText from "@/components/UI/CustomText.vue";
import { ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { Nullable } from "@/types";

const store = useStore();
const route = useRoute();

const error = ref<Nullable<string>>(null);
const sign = ref("");

const selectPlayerSign = async (event: any) => {
  try {
    const sign = event.target.value;
    const requestSign = sign === "X";
    const response = await selectSign({
      gameId: route.params.id,
      sign: requestSign,
    });
    console.log(response);
  } catch (e) {
    error.value = e.response.data.reason;
    console.log(e);
  }
};
</script>

<style scoped lang="scss">
.radios {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
}
</style>
