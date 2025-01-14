<template>
    <div class="payment-options">
        <div
            class="payment-option"
            :key="method.id"
            :class="{ selected: selectedMethod === method.id }"
        >
            <div class="option-header">
            <input type="radio" :checked="selectedMethod === method.id" />
            <span class="method-name">{{ method.name }}</span>
            <div v-if="method.icons" class="method-icons">
                <img
                v-for="icon in method.icons"
                :key="icon"
                :src="icon"
                alt="Payment Icon"
                />
            </div>
            </div>
            <!-- <p class="method-description">{{ method.description }}</p> -->
        </div>
    </div>

</template>

<script>
export default{
    
    props : {
        method: Object,
        selectedMethod : Number
    },
    methods: {
  },
}

</script>

<style scoped>
.payment-options {
    width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.payment-option {
  border: 1px solid #ccc;
  /* border-radius: 10px; */
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 80px;
}

.payment-option:hover {
  background: #f9f9f9;
}

.payment-option.selected {
  border-color: #37e7a7;
  background: #ffffff;
}

.option-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-header input {
  margin-right: 10px;
}

.method-name {
  font-weight: bold;
  flex: 1;
}

.method-icons img {
  width: 50px;
  height: 25px;
  margin-left: 10px;
}

.method-description {
  font-size: 12px;
  color: #666;
}

</style>