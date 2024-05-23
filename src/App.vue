<script setup lang="ts">
interface Errors {
  [key: string]: string;
}
// Supports weights 200-800
import '@fontsource-variable/karla';
import { Form, Input, RadioGroup, Radio, TextArea, CheckBox, Button } from './components';
import { ref } from 'vue';
import Toast from './components/Toast.vue';

const enquire = defineModel<string>('enquire')

const firstName = ref<string>('')
const lastName = ref<string>('')
const email = ref<string>('')

const message = ref<string>('')

const consent = ref<boolean>(false)

const errors = ref<Errors>({})

const success = ref(false)

const handleSubmit = () => {

  if (!firstName.value) {
    errors.value["firstName"] = "This field is required"
  } else {
    errors.value["firstName"] = ""
  }

  if (!lastName.value) {
    errors.value["lastName"] = "This field is required"
  } else {
    errors.value["lastName"] = ""
  }

  if (!email.value) {
    errors.value["email"] = "This field is required"
  } else {
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.value["email"] = "Please enter a valid email address"
    } else {
      errors.value["email"] = ""
    }
  }

  if (!message.value) {
    errors.value["message"] = "This field is required"
  } else {
    errors.value["message"] = ""
  }

  if (enquire.value === undefined) {
    errors.value["query"] = "Please select a query type"
  } else {
    errors.value["query"] = ""
  }

  if (!consent.value) {
    errors.value["consent"] = "To submit this form, please consent to being contacted"
  }else{
    errors.value["consent"] = ""
  }

  if (Object.values(errors.value).every((error) => error === "")) {
    success.value = true;
    email.value ="";
    firstName.value ="";
    lastName.value = "";
    enquire.value= undefined;
    message.value = "";
    consent.value = false;
  }
}

</script>

<template>
  <Toast v-if="success"/>
  <main class="w-full h-full min-h-screen max-w-full bg-green-100 py-3xl grid items-center justify-center max-sm:py-xl max-sm:px-m max-sm:justify-normal">
    <Form @submit="handleSubmit" @reset="">
      <div class=" w-full h-full grid items-start justify-center gap-y-m max-sm:justify-normal">
        <h1 class="heading w-full mb-xl">Contact Us</h1>
        <div class="flex justify-between items-center gap-x-m w-full max-sm:flex-col max-sm:gap-y-l">
          <Input type="text" label="First Name" v-model="firstName" :error="errors!['firstName']" />
          <Input type="text" label="Last Name" v-model="lastName" :error="errors!['lastName']" />
        </div>
        <Input v-model="email" type="text" label="Email" :error="errors!['email']" />
        <RadioGroup class="flex flex-col gap-y-m" v-model="enquire">
          <span class="body-s after:content-['*'] after:ml-xs after:text-green-200">Query Type</span>
          <div class=" flex items-center justify-between gap-x-m max-sm:flex-col max-sm:gap-y-m">
            <Radio value="General Enquiry">General Enquiry</Radio>
            <Radio value="Support Request">Support Request</Radio>
          </div>
          <span v-if="errors['query']" class="body-s !text-red-950">{{ errors["query"] }}</span>
        </RadioGroup>
        <TextArea v-model="message" label="Message" :error="errors['message']"></TextArea>
      </div>
      <CheckBox v-model="consent" label="I consent to being contacted by the team" :error="errors['consent']"/>
      <Button>
        Submit
      </Button>
    </Form>
  </main>
</template>
