import { reactive } from "vue";

export const store = reactive({
  kosar: [
    {
      darab: 0,
    },
  ],
});

export const store2 = reactive({
  kosar: [],
  szoszok: [],
});
export const storeExtra = reactive({
  kosarExtra: [],
});

export const storeszunet = reactive({
  elsoszunet: [
    {
      elsoszunet: 0,
    },
  ],
});

export const store3 = reactive({
  van: false,
});

export const sorszam = reactive({
  sorszam: 0,
});

export const store_login = reactive({
  loggedIn: false,
  access_token: "",
  refresh_token: "",
});
