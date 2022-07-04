<template>
  <div class="">
    <div class="analytics">
      <h1 class="analytics-title">Аналитика</h1>
      <LineChart :chartData="chartData" :chartOptions="chartOptions" />
    </div>
    <Background />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_CHART_DATA } from "@/store/getter-types";
import Background from "@/components/Background/Background";
import LineChart from "@/components/Statistic/LineChart.vue";
import moment from "moment";

export default {
  name: "AnalyticsView",
  components: {
    LineChart,
    Background,
  },
  computed: {
    ...mapGetters({
      chart: GET_CHART_DATA,
    }),
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        // animation: {
        //   duration: 1000,
        // },
        transitions: {
          show: {
            animation: {
              duration: 1500,
              x: {
                from: 1000,
              },
              y: {
                from: 1000,
              },
            },
          },
          hide: {
            animation: {
              duration: 1500,
              x: {
                to: 1000,
              },
              y: {
                to: 1000,
              },
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              callback: (tick, index) => {
                let date = moment(this.chartData.labels[tick])
                  .locale("ru")
                  .format("LL");
                let formattingDate = date.split(" ");
                return index % 5
                  ? ""
                  : `${formattingDate[0]} ${formattingDate[1]}`;
              },
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
              beginAtZero: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Аналитика по визитам",
          },
          legend: {
            display: true,
            position: "top",
          },
        },
      },
    };
  },
  methods: {
    setChartData() {
      let labels = [];
      let data = {
        label: "Посещения",
        backgroundColor: "#FD8A5E",
        borderColor: "rgba(75, 192, 192, 0.5)",
        fill: {
          target: "origin",
          above: "rgba(253, 138, 94, 0.5)",
        },
        tension: 0.3,
        data: [],
      };
      this.chart.forEach((el) => {
        labels.push(el.date);
        data.data.push(el.visits);
      });

      this.chartData.labels = labels;
      this.chartData.datasets.push(data);
    },
  },
  beforeMount() {
    this.setChartData();
  },
};
</script>
<style lang="scss">
.analytics {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 10%;
  background-color: #ffffffeb;
  border-radius: 20px;
  padding: 18px;
  &-title {
    color: #ff8453;
    font-size: 28px;
    margin: 20px 0;
  }
}
</style>
