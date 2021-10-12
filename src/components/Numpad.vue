<template>
    <div class="keypad-container">
        <div class="keypad-flex  keypad-class" v-for="n in 12" :key="n">
            <div class="keypad" v-if="n == 10 && onReset" @click="onReset">
                <div class="keypad-center">
                    <strong class="keypad-delete">C</strong>
                </div>
            </div>
            <div class="keypad" :ripple="true" v-if="n != 10 && n != 12"  @click="onInput(n)">
                <div v-if="n < 10" class="keypad-center">{{ n }}</div>
                <div v-if="n == 11" class="keypad-center">0</div>
            </div>
            <div class="keypad" v-if="n == 12 && onDelete" @click="onDelete(n)">
            <div v-if="n == 12" class="keypad-center">
                <strong class="keypad-delete">&laquo;</strong>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Numpad",
  data: () => ({
    n: 0,
    animation: "keypad-hide"
  }),
  props: {
    keypadClass: { type: String, default: "keypad-class", required: false },
    onInput: { type: Function, required: true },
    onDelete: { type: Function, required: false },
    onReset: { type: Function, required: false }
  },
}
</script>

<style>
.keypad-class {
  color: #888;
  background: #fafafa;
  border: 0.004rem solid #eaeaea;
}

.keypad-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  min-width: 0;
  flex-direction: row;
}

.keypad-flex {
  flex-basis: 32%;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  max-width: 33%;
  min-height: 4rem;
}

.keypad {
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
  margin: 0 auto;
}

.keypad-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3rem;
}

.keypad-delete {
  font-size: 1.5rem;
}

</style>
