<template>
  <v-layout style="margin-top:10px;">
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{title}}</h3>
              <div>{{dates}}<br>For more information, click <a href="http://www.csha.org/Education/Annual-Convention" target="_blank">here</a>.</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "CSHA 2018 Annual Convention & Exhibition",
      dates: "March 22-25, 2018 | Sacramento Convention Center"
    };
  }
};
</script>
