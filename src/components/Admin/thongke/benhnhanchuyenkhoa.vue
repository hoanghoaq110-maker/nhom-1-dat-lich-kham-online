<template>
  <div class="row justify-content-center">
    <div class="card shadow-sm">
      <div class="card-header text-white">
        <div class="row">
          <div class="col text-center">
            <h5><b>THỐNG KÊ BỆNH NHÂN THEO CHUYÊN KHOA</b></h5>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row mb-3">
          <div class="col-lg-1"></div>
          <div class="col-lg-1 text-end">
            <p class="mt-2">Từ Ngày:</p>
          </div>
          <div class="col-lg-3">
            <input v-on:change="loadData()" v-model="thong_ke.begin" type="date" class="form-control">
          </div>
          <div class="col-lg-1 text-end">
            <p class="mt-2">Đến Ngày:</p>
          </div>
          <div class="col-lg-3">
            <input v-on:change="loadData()" v-model="thong_ke.end" type="date" class="form-control">
          </div>
          <div class="col-lg-2">
            <button @click="loadData()" class="btn btn-primary">Thống Kê</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center mt-3">
    <div class="col-lg-4">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th class="text-center align-middle">#</th>
                  <th class="text-center align-middle">Chuyên Khoa</th>
                  <th class="text-center align-middle">Số lượng bệnh nhân</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in staticData" :key="index">
                  <td class="text-center align-middle">{{ index + 1 }}</td>
                  <td class="align-middle">{{ item.label }}</td>
                  <td class="text-center align-middle">{{ item.count }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body">
          <Bar v-if="loaded" :data="chartData" :options="chartOptions"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  position: "top-right",
});
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  data() {
    return {
      loaded: false,
      thong_ke: { begin: '', end: '' },
      staticData: [
        { label: 'Nội Tổng Quát', count: 150 },
        { label: 'Ngoại Khoa', count: 120 },
        { label: 'Tim Mạch', count: 180 },
        { label: 'Da Liễu', count: 90 },
        { label: 'Nhi Khoa', count: 200 },
        { label: 'Sản Phụ Khoa', count: 160 },
        { label: 'Mắt', count: 110 }
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Số lượng bệnh nhân',
            backgroundColor: [
              "#C0392B", "#1ABC9C", "#F1C40F", "#E67E22", "#8E44AD", "#2980B9", "#27AE60"
            ],
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  },
  async mounted() {
    this.loaded = false;
    var date = new Date();
    var subday = new Date(date.setDate(date.getDate() - 0));
    this.thong_ke.begin = subday.toISOString().slice(0, 10);
    this.thong_ke.end = new Date().toISOString().slice(0, 10);
    this.loadData();
  },
  methods: {
    loadData() {
      this.loaded = false;
      this.chartData.labels = this.staticData.map(item => item.label);
      this.chartData.datasets[0].data = this.staticData.map(item => item.count);
      this.loaded = true;
    }
  },
}
</script>