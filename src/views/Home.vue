<template>
  <div class="home container mt-2 mb-4">
    <div class="alert alert-success" ref="printMe" style="border-radius:15px">
      <h1 class="logo">وتيقة دعم فلسطين</h1>
      <div class="container">
        <div v-if="!$store.getters.isLog">
          <b-form-input
            v-model="userInput"
            placeholder="ضع اسمك"
          ></b-form-input>
          <br />
          <b-button variant="primary" @click="add"
            >شارك ألان في الحملة</b-button
          >
        </div>
        <div v-else class=" p-1" style="text-align:right" id="target">
          <p></p>
          <p>
            <span>الإسم الكامل :</span>
            <strong class="text-danger " style="font-size:27px">
              {{ $store.getters.getUser }}
            </strong>
          </p>
          أنا ادعم فلسطين لا للحرب ضد غزة فلسطين بلدي ،فلسطين قضيتي لن اتسامح
          فيها
          <hr />

          <p>
            I support Palestine, not a war against Gaza, Palestine is my
            country, Palestine is my cause, I will not tolerate it
          </p>
          <h5 style="text-align:right">#ghazaUnderAttak</h5>
          <h3 style="text-align:left">فلسطين قضيتي</h3>
        </div>
      </div>
    </div>
    <div>
      <b-button variant="success" @click="showimg">الحصول على الوتيقة</b-button>
      <hr />
    </div>

    <div v-if="views">
      <img :src="output" id="" alt="" srcset="" width="100%" />
    </div>
    <a href="//zuphaims.com/4/3880520">
      <p>إضغط هنا لدعم</p>
      <div>
        <img
          src="@/assets/palestine.svg"
          alt=""
          srcset=""
          height="200px"
          width="100%"
        />
      </div>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      output: "",
      userInput: "",
      views: false,
    };
  },
  methods: {
    showimg: function() {
      this.views = true;
    },
    print: async function() {
      const el = this.$refs.printMe;

      const options = {
        type: "dataURL",
        lang: "ar",
      };
      this.output = await this.$html2canvas(el, options);
      const soutput = this.$html2canvas(el, options);
      document.execCommand("SaveAs", true, soutput);
    },
    add: function() {
      this.$store.dispatch("add", this.userInput);
      window.location = "";
    },
  },
  mounted() {
    this.print();
  },
};
</script>
