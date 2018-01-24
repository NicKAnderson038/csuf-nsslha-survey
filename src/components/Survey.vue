<template>
  <!-- <v-app id="inspire"> -->
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <!-- <v-toolbar-title>CSHA Convention Survey</v-toolbar-title> -->
            <qr-code></qr-code>
          </v-toolbar>
          <v-card-text>
            <span class="title"></span>
            <v-alert color="success" icon="check_circle" :value="alert" transition="scale-transition">
              Upload Successful!.
            </v-alert>
            <div id="app">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-select label="Are you interested in attending the Annual CSHA Convention?" v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required></v-select>
                <v-text-field label="Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
                <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
                <v-checkbox label="Member of CSUF NSSLHA?" v-model="checkboxNsslha"></v-checkbox>
                <v-checkbox label="Member of CSHA?" v-model="checkboxCsha"></v-checkbox>
                <v-btn @click="submit" :disabled="!valid">
                  submit
                </v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <csha-info></csha-info>
  </v-container>
  <!-- </v-app> -->
</template>

<script>
import QrCode from "./Qrcode";
import CshaInfo from "./CshaInfo";
export default {
  data() {
    return {
      alert: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      phone: "",
      phoneRules: [v => !!v || "Phone number is required"],
      checkboxNsslha: false,
      checkboxCsha: false,
      select: null,
      items: [
        "Full Registration (4 Days)",
        "2 Day Registration",
        "1 Day Registration",
        "Not attending"
      ]
    };
  },
  created() {
    try {
      // this.fetch();
      this.alerter;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    alertRestore() {
      return setTimeout(() => {
        return (this.alert = false);
      }, 3000);
    }
  },
  components: {
    QrCode,
    CshaInfo
  },
  methods: {
    async submit() {
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Name: this.name,
          Email: this.email,
          Phone: this.phone,
          Nsslha: this.checkboxNsslha,
          Csha: this.checkboxCsha,
          Attendance: this.select
        })
      };
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        try {
          console.log("Reading request obj: ", request);
          // const response = await fetch("/api/submit", request);
          const response = await fetch(
            "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha",
            request
          );
          const data = await response.json();
          console.log("It worked! ", data);
          this.alert = true;
          this.alertRestore;
          return;
        } catch (error) {
          throw new Error(err);
        }
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    async fetch() {
      try {
        const response = await fetch(
          "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha"
        );
        const data = await response.json();
        console.log("It worked! ", data);
        this.items = data;
        return;
      } catch (error) {
        throw new Error(err);
      }
    }
  }
};
</script>

<style>
.table__overflow {
  margin-top: 40px;
}
</style>
