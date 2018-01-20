<template>
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
</template>


<script>
export default {
  data() {
    return {
      copyURL: window.location.href,
      dialog: false,
      // trueURL: document.referrer,
      trueURL: window.location.href
    };
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
    }
  }
};
</script>
