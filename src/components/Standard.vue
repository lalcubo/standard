<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card>
          <h1 class="text-center white--text">Estandares</h1>
          <v-card-subtitle>
            <h3>Formularios</h3>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Nombre"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Correo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Fecha"
                    hint="DD/MM/YYYY formato"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  label="Nombre"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                outlined
                label="Correo"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
              <v-menu
                ref="menu2"
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    outlined
                    v-model="dateFormatted"
                    label="Fecha"
                    hint="DD/MM/YYYY formato"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
            </v-row>
          </v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h1 class=" white--text">Botones</h1>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small color="primary">Button Primary</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small color="info">Button Info</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small color="success">Button Success</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small color="warning">Button Warning</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small >Button Normal</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small color="error">Button Error</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded color="primary">Button Primary</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded color="info">Button Info</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded color="success">Button Success</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded color="warning">Button Warning</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded >Button Normal</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="2">
                <div class="my-2">
                  <v-btn small rounded color="error">Button Error</v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h1 class=" white--text">Tablas</h1>
              </v-col>
              <v-col>
                <template>
                <div>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    hide-default-footer
                    class="elevation-1"
                    @page-count="pageCount = $event"
                  ></v-data-table>
                  <v-pagination
                  v-model="page"
                  :length="pageCount"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right">
                  </v-pagination>
                  <v-pagination
                  v-model="page"
                  :length="pageCount"
                  prev-icon="mdi-arrow-left"
                  next-icon="mdi-arrow-right">
                  </v-pagination>
                  <v-col cols="12" md="2">
                    <v-text-field
                      :value="itemsPerPage"
                      label="Items por página"
                      type="number"
                      min="-1"
                      max="15"
                      @input="itemsPerPage = parseInt($event, 10)"
                    ></v-text-field>
                  </v-col>
                </div>
              </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h1 class=" white--text">Modales</h1>
              </v-col>
              <v-col cols="12" md="6">
                <v-dialog v-model="dialog" max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    >
                      Ejemplo Modal
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="headline">Titulo</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="dialog = false">Cancelar</v-btn>
                      <v-btn color="green darken-1" text @click="dialog = false">Aceptar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="12" md="6">
                <template>
                  <div class="text-center">
                    <v-btn
                      :disabled="dialog2"
                      :loading="dialog2"
                      class="white--text"
                      color="info"
                      @click="dialog2 = true"
                    >
                      Modal de espera
                    </v-btn>
                    <v-dialog
                      v-model="dialog2"
                      hide-overlay
                      persistent
                      width="300"
                    >
                      <v-card
                        color="primary"
                        dark
                      >
                        <v-card-text>
                          Por Favor Espere
                          <v-progress-linear
                            height="10"
                            striped
                            indeterminate
                            color="white"
                            class="mb-0"
                          ></v-progress-linear>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <h1 class=" white--text">Alerta de mensaje</h1>
              </v-col>
              <v-col cols="12" md="6">
                <template>
                <div class="text-center">
                  <v-dialog
                    persistent 
                    v-model="dialog3"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Confirm
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title
                        class="headline primary lighten-2"
                        primary-title
                      >
                        Titulo
                      </v-card-title>

                      <v-card-text>
                        Lorem ipsum dolor sit ametut, labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialog3 = false"
                        >
                          Cancelar
                        </v-btn>
                        <v-btn
                          color="primary"
                          text
                          @click="dialog3 = false"
                        >
                          Aceptar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </div>
                </template>
              </v-col>
              <v-col cols="12" md="6">
                <template>
                <div class="text-center">
                  <v-dialog
                    persistent 
                    v-model="dialog4"
                    width="250"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="error"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        Error Alert
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title
                        class="error"
                        primary-title
                      >
                      </v-card-title>
                      <v-card-subtitle>
                        <v-btn class="my-3 mx-2" icon color="error">
                          <v-icon>mdi-alert</v-icon>
                          <h3>Error</h3>
                        </v-btn>
                      </v-card-subtitle>
                      <v-card-text>
                        Mensaje del Error.
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialog4 = false"
                        >
                          Aceptar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </div>
                </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" dark>
                <h1 class="white--text">Otro tipo de mensajes de alerta</h1>
              </v-col>
                <v-col cols="4">

                </v-col>
                <v-col cols="4">
                <template>
                  <div>
                    <v-alert  type="success">
                      Alerta tipo Success.
                    </v-alert>
                    <v-alert border="top" type="success">
                      Alerta tipo Success con borde.
                    </v-alert>

                    <v-alert type="info">
                      Alerta tipo info.
                    </v-alert>
                    <v-alert border="top" type="info">
                      Alerta tipo info con borde.
                    </v-alert>

                    <v-alert type="warning">
                      Alerta tipo warning.
                    </v-alert>
                    <v-alert border="top" type="warning">
                      Alerta tipo warning con borde.
                    </v-alert>

                    <v-alert type="error">
                      Alerta tipo error.
                    </v-alert>
                    <v-alert  border="top" type="error">
                      Alerta tipo error.
                    </v-alert>
                  </div>
                </template>
              </v-col>
            </v-row>

                        <v-row>
              <v-col cols="12">
                <h1 class="white--text">Alert estilo snackbar</h1>
              </v-col>
              <v-col cols="4">
              </v-col>
              <v-col cols="4">
                <template>
                  <div class="text-center">
                    <v-btn
                      dark
                      color="primary"
                      @click="snackbar = true"
                    >
                      Alert tipo snackbar
                    </v-btn>

                    <v-snackbar
                      v-model="snackbar"
                      :timeout="timeout"
                      :multi-line="true"
                      color="error"
                      rounded="pill"
                      :right="true"
                    >
                      {{ text }}

                      <template v-slot:action="{ attrs }">
                        <v-btn
                          color="blue"
                          text
                          v-bind="attrs"
                          @click="snackbar = false"
                        >
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </div>
                </template>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <h1 class="white--text">switch tipo booleano</h1>
              </v-col>
              <v-col cols="4"></v-col>
              <v-col cols="4">
                <template>
                  <v-container fluid>
                    <v-switch v-model="switch1" :label="`estado: ${switch1.toString()}`"></v-switch>
                  </v-container>
                </template>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h1 class=" white--text">
                  Fuentes y colores
                </h1>
              </v-col>
              <v-col cols="12">
                <h2>
                  Fuentes: "Helvetica Neue", Helvetica, Arial, sans-serif
                </h2>
              </v-col>
              <v-col cols="12" md="2" >
                <div class="primary text-center">
                  <span class="white--text">PRIMARY| #0076BE</span>
                </div>
              </v-col>
              <v-col cols="12" md="2" >
                <div class="info text-center">
                  <span class="white--text">INFO | #51BFE4</span>
                </div>
              </v-col>
              <v-col cols="12" md="2" >
                <div class="success text-center">
                  <span class="white--text">SUCCESS | #AFD063</span>
                </div>
              </v-col>
              <v-col cols="12" md="2" >
                <div class="warning text-center">
                  <span class="white--text">WARNING | #FF952D</span>
                </div>
              </v-col>
              <v-col cols="12" md="2" >
                <div class="error text-center">
                  <span class="white--text">ERROR | #FF5A5A</span>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Standard',
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      valid: false,
      dialog: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      switch1: false,
      snackbar: false,
      text: 'El color y posición puede cambiar',
      timeout: 3000,
      page: 1,
      pageCount: 0,
      itemsPerPage: 5,
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
            class: 'primary white--text'
          },
          { text: 'Calories', value: 'calories', class: 'primary white--text' },
          { text: 'Fat (g)', value: 'fat', class: 'primary white--text' },
          { text: 'Carbs (g)', value: 'carbs', class: 'primary white--text' },
          { text: 'Protein (g)', value: 'protein', class: 'primary white--text' },
          { text: 'Iron (%)', value: 'iron', class: 'primary white--text' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],


      firstname: '',
      nameRules: [
        v => !!v || 'El Nombre es requerido',
        v => v.length <= 10 || 'El nombre debe tener menos de 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+/.test(v) || 'El correo debe ser valido',
      ],
      //para las fechas
    }),
    methods: {
      changeLocale () {
        this.$vuetify.lang.current = 'es'
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [day, month, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
      dialog2 (val) {
        if (!val) return

        setTimeout(() => (this.dialog2 = false), 2000)
      },
    },
  }
</script>
<style>
h1 {
  background-color: #0076BE;
}
table tr:nth-child(even) {
    background-color: rgba(224, 224, 224, 0.24);
}

table tr:nth-child(odd) {
    background-color: #fff;
}
* {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
</style>