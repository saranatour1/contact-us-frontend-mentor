<script setup lang="ts">
// Supports weights 200-800
import '@fontsource-variable/karla';
import { Form, Input, RadioGroup, Radio, TextArea, CheckBox, Button } from './components';

const tipPerct = defineModel<number>('tipPerct')

</script>

<template>
  <main class="w-full h-full min-h-screen max-w-full bg-green-100 py-3xl grid items-center justify-center">
    <Form class="">
      <div class=" w-full h-full grid items-start justify-center gap-y-m">
        <h1 class="heading w-full mb-xl">Contact Us</h1>      
        <div class="flex justify-between items-center gap-x-m w-full">
          <Input type="text" label="First Name"/>
          <Input type="text" label="Last Name"/>
        </div>
        <Input type="text" label="Email"/>
        <RadioGroup class="flex items-center justify-between my-2xl" v-model="tipPerct">
          <Radio  :value=".05" >0.5%</Radio> 
          <Radio  :value="1.0">1.0%</Radio>
        </RadioGroup>
        <TextArea label="Message"></TextArea>
      </div>
      <CheckBox label="I consent to being contacted by the team"/>
      <Button>
          Submit
      </Button>
    </Form>
  </main>
</template>

