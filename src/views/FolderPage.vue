<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button auto-hide="false"></ion-menu-button>
          </ion-buttons>
        <ion-title>InflaTech</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">InflaTech</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- PÁGINA INICIAL -->

      <div id="container" v-if="$route.params.id == 'pagina-inicial'">
        <!-- title -->
        <div class="title-home">
          <h1>Melhores preços do dia</h1>
          <!-- ion-chip -->
          <ion-chip color="success">
            <ion-label color="000000" :outline="true">BRL</ion-label>
          </ion-chip>
          <ion-chip color="danger">
            <ion-label color="000000">BTC</ion-label>
          </ion-chip>
          <ion-chip color="success">
            <ion-label color="000000">DLR</ion-label>
          </ion-chip>
        </div>

        <ion-card class="card"  v-for="precoDia in precosDia" :key="precoDia.price.id">
          <img
            v-if="precoDia.price.product.linkImage"
            v-bind:src="precoDia.price.product.linkImage"
          />

          <div style="display:grid;">
            <ion-card-header style="display:grid;">
              <ion-card-subtitle class="subtitle"
                >{{precoDia.price.product.name}}</ion-card-subtitle
              >
              <ion-card-title class="title">R$ {{precoDia.price.value}}</ion-card-title>
            </ion-card-header>
            <ion-card-content class="price">
              Melhor preço dos ultimos {{precoDia.bestOfferRangeDays}} dias
            </ion-card-content>
          </div>
        </ion-card>

      </div>

      <!-- PÁGINA INFLAÇÃO -->

      <div id="container" v-if="$route.params.id == 'inflacao'">
        <ion-grid
          style="background: #a1b5be; margin-top: 30px; border: 1px solid black"
        >
          <ion-row>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >IPCA do <br>ultimo mês</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >{{this.ipcaFirst}}%</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >IPCA <br>12 meses</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >{{this.ipcaSecond}}%</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item color="transparent">
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >INPC do <br>ultimo mês</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >{{this.ipcaThird}}%</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div style="color: black; margin: 20px; text-align: center">
          <h1>O que é a inflação?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <!-- PÁGINA BITCOIN -->

      <div id="container" v-if="$route.params.id == 'bitcoin'">
        <ion-grid
          style="background: #a1b5be; margin-top: 30px; border: 1px solid black"
        >
          <ion-row>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Bitcoin <br>hoje</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 10px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.btcToday}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Bitcoin no <br>último mês</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 10px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.btcMonthly}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item color="transparent">
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Bitcoin no <br>ultimo ano</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 10px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.btcYearly}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div style="color: black; margin: 20px; text-align: center">
          <h1>O que é bitcoin?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <h1>Por que o bitcoin influência o preço dos produtos?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <!-- PÁGINA DOLAR -->

      <div id="container" v-if="$route.params.id == 'dolar'">
        <ion-grid
          style="background: #a1b5be; margin-top: 30px; border: 1px solid black"
        >
          <ion-row>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Dólar <br>hoje</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.dolarToday}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item
                color="transparent"
                style="border-right: 1px solid black"
              >
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Dólar no <br>último mês</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.dolarMonthly}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
            <ion-col size="4">
              <ion-item color="transparent">
                <div style="padding-top: 10px; text-align: center; width: 100%">
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 400;
                      font-size: 10px;
                      line-height: 12px;
                      color: #000000;
                    "
                    >Dólar no <br>ultimo ano</ion-label
                  >
                  <br />
                  <ion-label
                    style="
                      font-family: 'Lato';
                      font-style: normal;
                      font-weight: 700;
                      font-size: 20px;
                      line-height: 24px;
                      color: #000000 !important;
                    "
                    >R$ {{this.dolarYearly}}</ion-label
                  >
                </div>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div style="color: black; margin: 20px; text-align: center">
          <h1>Por que o dólar influência o preço dos produtos?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <!-- PÁGINA SOLICITAR PRODUTO -->

      <div id="container" v-if="$route.params.id == 'solicitar-produto'">


        
        <div class="box">
          <div class="box-head">
            <h1>Solicitar novo produto</h1>
          </div>
          <div class="box-body">
            <ion-item color="transparent" style="color: black">
              <ion-label>Nome</ion-label>
              <ion-input v-model="nomeProduto"></ion-input>
            </ion-item>
            <ion-item color="transparent" style="color: black">
              <ion-label>Link do produto</ion-label>
              <ion-input v-model="linkProduto"></ion-input>
            </ion-item>
            <ion-item color="transparent" style="color: black">
              <ion-label>Link da imagem</ion-label>
              <ion-input v-model="linkImagem"></ion-input>
            </ion-item>

            <div
              class="box-buttons"
              style="margin-top: 30px; margin-bottom: 30px"
            >
              <ion-button size="small" color="primary" v-on:click="enviarPedido">OK</ion-button>
            </div>
          </div>
        </div>
      </div>

      <!-- PÁGINA GRAFICOS -->

      <div id="container" v-if="$route.params.id == 'graficos'">
        <v-select
          style="margin: 10px;"
          v-if="options" 
          :options="options"
          :reduce="name => name.id"
          label="name"
          v-model="idProdutoSelecionado">
        </v-select>
        <div class="box">
          <ion-card class="card" style="border: 0; box-shadow: unset;">
            <img
            v-if="produtoGrafico.linkImage"
            v-bind:src="produtoGrafico.linkImage"
          />

            <div style="display:grid;">
              <ion-card-header style="display:grid;">
                <ion-card-subtitle class="subtitle"
                  >{{this.produtoGrafico.name}}</ion-card-subtitle
                >
                <ion-card-title class="title">R$ {{this.produtoGrafico.price}}</ion-card-title>
              </ion-card-header>
              <ion-card-content class="price">
                Melhor preço dos ultimos {{this.produtoGrafico.bestOfferRangeDays}} dias
              </ion-card-content>
            </div>
          </ion-card>

          <!-- 2 colunas -->
          <ion-grid style="margin-top: 30px">
            <ion-item color="transparent">
              <div style="text-align: center; width: 100%">
                <!-- button -->
                <ion-button
                  size="small"
                  color="secondary"
                  v-bind:href="produtoGrafico.linkShop"
                  >Ver na loja</ion-button>
              </div>
            </ion-item>
          </ion-grid>

          <div class="box-head">
            <h5>Real</h5>
          </div>
          <div class="box-body">
            <Line :chart-data="PriceChartData" />
          </div>
          <div class="box-head">
            <h5>Bitcoin</h5>
          </div>
          <div class="box-body">
            <Line :chart-data="BtcChartData" />
          </div>
          <div class="box-head">
            <h5>Dólar</h5>
          </div>
          <div class="box-body">
            <Line :chart-data="inflationChartData" />
          </div>
        </div>
      </div>


      <!-- PÁGINA DE SOBRE-NÓS -->

      <div id="container" v-if="$route.params.id == 'sobre-nos'">

        <div style="color: black; margin: 20px; text-align: center">
          <h1>Sobre nós</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';
import Vue from "vue";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonChip,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'
import vSelect from "vue-select";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

export default defineComponent({
  name: "FolderPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonChip,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    Line,
    vSelect
  },
  data() {
    return {

      // Gráficos
      options: [],
      
      PriceChartData: {
        labels: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
          {
            label: 'Real',
            backgroundColor: '#556d8b',
            data: [10, 20, 12, 11, 13, 14, 16]
          }
        ]
      },

      BtcChartData: {
        labels: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
          {
            label: 'BTC',
            backgroundColor: '#556d8b',
            data: [10, 20, 12, 11, 13, 14, 16]
          }
        ]
      },

      inflationChartData: {
        labels: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
          {
            label: 'Dólar',
            backgroundColor: '#556d8b',
            data: [10, 20, 12, 11, 13, 14, 16]
          }
        ]
      },

      idProdutoSelecionado: 1,
      produtoGrafico: [],

      // Tela Inicial
      
      precosDia: [],

      // IPCA

      ipcaFirst: 0,
      ipcaSecond: 0,
      ipcaThird: 0,

      // DOLAR

      dolarToday: 0,
      dolarMonthly: 0,
      dolarYearly: 0,

      // BTC

      btcToday: 0,
      btcMonthly: 0,
      btcYearly: 0,

      //POST

      nomeProduto: "",
      linkProduto: "",
      linkImagem: "",
    }
  },
  methods: {
    chamarDailyDeal: async function() {
      await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/PrecoDia')
        .then((response) => {
          this.precosDia = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    chamarIpca: async function() {
      await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/IPCA')
        .then((response) => {
          this.ipcaFirst = response.data[0]['firstMetric'];
          this.ipcaSecond = response.data[0]['secondMetric'];
          this.ipcaThird = response.data[0]['thirdyMetric'];
        })
        .catch((error) => {
          console.log(error)
        })
    },
    chamarDolar: async function() {
      await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/Dolar')
        .then((response) => {
          this.dolarToday = response.data[0]['today'];
          this.dolarMonthly = response.data[0]['monthly'];
          this.dolarYearly = response.data[0]['yearly'];
        })
        .catch((error) => {
          console.log(error)
        })
    },
    chamarBtc: async function() {
      await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/Bitcoin')
        .then((response) => {
          this.btcToday = response.data[0]['today'];
          this.btcMonthly = response.data[0]['monthly'];
          this.btcYearly = response.data[0]['yearly'];
        })
        .catch((error) => {
          console.log(error)
        })
    },
    enviarPedido: async function() {
      await axios.post('https://inflatech.free.beeceptor.com/my/api/path', {
        nome: this.nomeProduto,
        linkProduto: this.linkProduto,
        linkImagem: this.linkImagem
      })
      .then((response) => {
        this.nomeProduto = "";
        this.linkProduto = "";
        this.linkImagem = "";
        console.log(response);
      })
    },
    recuperarProduto: async function() {
      await axios.get('http://demo2883314.mockable.io/getProduto/' + this.idProdutoSelecionado)
        .then((response) => {
          this.PriceChartData['labels'] = response.data[0]['priceHistory'][0]['months'];
          this.PriceChartData['datasets'][0]['data'] = response.data[0]['priceHistory'][0]['prices'];
          this.BtcChartData['labels'] = response.data[0]['priceHistory'][1]['months'];
          this.BtcChartData['datasets'][0]['data'] = response.data[0]['priceHistory'][1]['prices'];
          this.inflationChartData['labels'] = response.data[0]['priceHistory'][2]['months'];
          this.inflationChartData['datasets'][0]['data'] = response.data[0]['priceHistory'][2]['prices'];
          this.produtoGrafico = response.data[0];
        })
        .catch((error) => {
          console.log(error)
        })
    },
    listaProdutos: async function() {
      await axios.get('https://635c1d30fc2595be2640f3f3.mockapi.io/getAllProdutos/')
        .then((response) => {
          this.options = response.data;
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  async created() {
    await this.chamarDailyDeal()
    await this.chamarIpca()
    await this.chamarDolar()
    await this.chamarBtc()
    await this.recuperarProduto()
    await this.listaProdutos()
  },
  watch: { 
    idProdutoSelecionado: function() { // watch it
      this.recuperarProduto()
    }
  }
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import 'vue-select/dist/vue-select.css';


.subtitle {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #152530;
  margin-top: 10px;
}

.ion-col > .ion-item.ion-color.ion-color-transparent.item.ios.item-fill-none.item-label {
  color:transparent!important;
}

:host(.ion-color) {
    color: transparent!important;
}

.box {
  margin: 20px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
}
.box-head {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #152530;
}
.box-body {
  margin-top: 20px;
  text-align: center;
  color: #000000;
}

ion-col > ion-item.ion-color.ion-color-transparent.item.md.item-fill-none.item-label{
    color: transparent!important;
}


.title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #556d8b;
}

.title-home {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #152530;
  text-align: center;
}

.title-home > h1 {
  font-family: "Lato", sans-serif;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #152530;
}

.price {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #036a0e;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
  color: #000000;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin: 0;
}

#container a {
  text-decoration: none;
  color: #000000;
}
.card {
  display: flex;
  background: white;
  border-radius: 10px;
  border: 1px solid black;
  margin: 10px;
}
.card img {
  width: 93px;
  height: 93px;
  border-radius: 10px;
  margin: 10px;
  object-fit: cover;
}

</style>

<style scoped>
>>> {
  --vs-controls-color: #664cc3;
  --vs-border-color: #664cc3;

  --vs-dropdown-bg: #282c34;
  --vs-dropdown-color: #cc99cd;
  --vs-dropdown-option-color: #cc99cd;

  --vs-selected-bg: #664cc3;
  --vs-selected-color: #152530;

  --vs-search-input-color: #152530;

  --vs-dropdown-option--active-bg: #664cc3;
  --vs-dropdown-option--active-color: #152530;
}
</style>
