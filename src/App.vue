<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list" style="text-align:center;">
            <ion-list-header>
            </ion-list-header>
            <ion-note>
              <ion-chip color="success">
              <ion-label color="000000" :outline="true">BTC R${{btc}}</ion-label>
            </ion-chip>
            <ion-chip color="danger">
              <ion-label color="000000">IPCA {{ipca}}</ion-label>
            </ion-chip>
            <ion-chip color="success">
              <ion-label color="000000">US$ R${{dolar}}</ion-label>
            </ion-chip>
              <ion-list>
                <ion-item>
                  <ion-select interface="popover" placeholder="Selectione o intervalo" @ionChange="trocarIntervalo($event)" 
                  >
                    <ion-select-option value="0">Hoje</ion-select-option>
                    <ion-select-option value="1">7 dias</ion-select-option>
                    <ion-select-option value="2">15 dias</ion-select-option>
                    <ion-select-option value="3">30 dias</ion-select-option>
                    <ion-select-option value="4">1 ano</ion-select-option>
                  </ion-select>
                </ion-item>
              </ion-list>
            </ion-note>

            <ion-menu-toggle
              auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon
                  slot="start"
                  :ios="p.iosIcon"
                  :md="p.mdIcon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import {
  home,
  add,
  help,
  information,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from "ionicons/icons";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
    IonSelect,
    IonSelectOption,
  },
  data() {
    return {
      externalFactor: [],
      btc: 0,
      ipca: 0,
      dolar: 0,
      intervalo: 0,
    }
  },
  methods: {
    chamarExternalFactor: async function() {
        await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/DailyFactor')
          .then((response) => {
            this.externalFactor = response.data;
            this.btc = this.externalFactor[0]['externalPeriod'][this.intervalo]['dailyDTO']['value'];
            this.ipca = this.externalFactor[1]['externalPeriod'][this.intervalo]['dailyDTO']['value'];
            this.dolar = this.externalFactor[2]['externalPeriod'][this.intervalo]['dailyDTO']['value'];
          })
          .catch((error) => {
            console.log(error)
          })
    },
    trocarIntervalo($event: any) {
      this.intervalo = $event.target.value
      this.chamarExternalFactor();
    }
  },
  async created() {
    await this.chamarExternalFactor()
  },
  setup() {
    const selectedIndex = ref(0);
    const appPages = [
      {
        title: "P??gina Inicial",
        url: "/folder/pagina-inicial",
        iosIcon: home,
        mdIcon: home,
      },
      {
        title: "Solicitar Produto",
        url: "/folder/solicitar-produto",
        iosIcon: add,
        mdIcon: add,
      },
      {
        title: "Gr??ficos",
        url: "/folder/graficos",
        iosIcon: heartOutline,
        mdIcon: heartSharp,
      },
      {
        title: "Infla????o",
        url: "/folder/inflacao",
        iosIcon: information,
        mdIcon: information,
      },
      {
        title: "Bitcoin",
        url: "/folder/bitcoin",
        iosIcon: information,
        mdIcon: information,
      },
      {
        title: "D??lar",
        url: "/folder/dolar",
        iosIcon: information,
        mdIcon: information,
      },
      {
        title: "Sobre n??s",
        url: "/folder/sobre-nos",
        iosIcon: help,
        mdIcon: help,
      },
    ];
    const labels = [
      "Family",
      "Friends",
      "Notes",
      "Work",
      "Travel",
      "Reminders",
    ];

    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    const route = useRoute();

    return {
      selectedIndex,
      appPages,
      labels,
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      isSelected: (url: string) => (url === route.path ? "selected" : ""),
    };
  },
});
</script>

<style scoped>

.selected{
  color: #000000;
  background-color: #f4f5f8;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
