<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">QForm Components</div>
      <q-separator class="q-my-md" />
      <q-form ref="myform" class="q-gutter-y-md q-mt-lg" autofocus greedy>
        <q-input
          outlined
          v-model="form.title"
          label="재목"
          :rules="[val => !!val || '필수 항목입니다.']"
        />
        <q-input
          outlined
          v-model="form.content"
          label="내용"
          type="textarea"
          counter
          hint="50자 이내로 입력해주세요 "
          :rules="[
            val => !!val || '필수 항목입니다.',
            val => {
              val.length <= 50 || '최대 50 이내로 입력하세요';
            },
          ]"
          lazy-rules
        />
        <q-select
          outline
          v-model="form.tags"
          :options="tagOptions"
          label="태그"
          emit-value
          multiple
          hint="최대 2개까지 선택할 수 있습니다."
          :rules="[
            val => val.length > 0 || '필수 항목입니다.',
            val => {
              val.length <= 2 || '최대 2개까지 선택가능합니다. ';
            },
          ]"
        />
        <q-input outline v-model="form.date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="form.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-toggle :label="`동의 하시겠습니까?`" v-model="form.accept" />
        <!-- false-value="Disagreed"
          true-value="Agreed" -->
        <div class="q-gutter-x-sm">
          <q-btn
            label="validate"
            type="submit"
            color="secondary"
            @click="validate"
          />
          <q-btn
            label="resetValidation"
            type="submit"
            color="warning"
            @click="reset"
          />
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="submit"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script setup>
import { date } from 'quasar';
import { ref } from 'vue';

const myform = ref(null);
const form = ref({
  title: '',
  content: '',
  tags: [],
  date: '2022/01/01',
  accept: false,
});

const tagOptions = ref([
  { label: '구글', value: 'google' },
  { label: '트위터', value: 'twitter' },
  { label: '페이스북', value: 'facebook' },
  { label: '인스타그램', value: 'instagram' },
  { label: '애플', value: 'apple' },
  { label: '오라클', value: 'oracle' },
]);

const validate = () => {
  myform.value.validate().then(success => {
    if (success) {
      alert('성공 입니다.');
    } else {
      alert('실패 입니다.');
    }
  });
};

const reset = () => {
  myform.value.resetValidation();
};
</script>

<style lang="scss" scoped></style>
