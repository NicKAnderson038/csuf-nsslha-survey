<template>
<!-- <v-app id="inspire"> -->
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 md6 offset-md3>
          <v-card>
            <v-toolbar color="indigo" dark>
              <!-- <v-toolbar-title>CSHA Convention Survey</v-toolbar-title> -->

                   <!-- BEGIN: qrcode -->
                   <v-toolbar-title>
                <v-btn color="clear" large id="btn" flat dark @click.native.stop="dialog = true">CSHA Convention Survey</v-btn>
      <v-dialog v-model="dialog" max-width="200">
        <v-card>
          <qriously :value="trueURL" :size="200"></qriously>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat="flat" v-clipboard="copyURL" @success="handleSuccess" @error="handleError" @click.native="dialog = false">Copy URL</v-btn>
            <v-btn color="red darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      </v-toolbar-title>
<!-- END: qrcode -->

            </v-toolbar>
            <v-card-text>
              <span class="title"></span>

   <div id="app">
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-select
        label="Are you interested in attending the Annual CSHA Convention?"
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        required
      ></v-select>
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
      ></v-text-field>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        required
      ></v-text-field>
       <v-text-field
        label="Phone"
        v-model="phone"
        :rules="phoneRules"
        required
      ></v-text-field>
      <v-checkbox
        label="Member of CSUF NSSLHA?"
        v-model="checkboxNsslha"
      ></v-checkbox>
      <v-checkbox
        label="Member of CSHA?"
        v-model="checkboxCsha"
      ></v-checkbox>
      <v-btn
        @click="submit"
        :disabled="!valid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
</div>
</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Quote -->
       <v-layout style="margin-top:10px;">
           <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">CSHA 2018 Annual Convention & Exhibition</h3>
                    <div>March 22-25, 2018 | Sacramento Convention Center<br>For more information, click <a href="http://www.csha.org/Education/Annual-Convention" target="_blank">here</a>.</div>
                  </div>
                </v-card-title>
              </v-card>
           </v-flex>
      </v-layout>
    </v-container>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      copyURL: window.location.href,
      dialog: false,
      // trueURL: document.referrer,
      trueURL: window.location.href,
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
    } catch (error) {
      console.error(error);
    }
  },
  // computed: {
  //   copy() {
  //     console.log(document.referrer);
  //     return this.trueURL;
  //   }
  // },
  methods: {
    handleSuccess(e) {
      console.log(`success: ${e.text}`);
    },
    handleError(e) {
      console.log(`error: ${e}`);
    },
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
