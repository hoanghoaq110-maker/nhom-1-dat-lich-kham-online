<template>
  <div class="row justify-content-center">
    <div class="card shadow-sm">
      <div class="card-header text-white">
        <div class="row">
          <div class="col text-center">
            <h5><b>THỐNG KÊ LỊCH HẸN THEO BÁC SĨ</b></h5>
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
                  <th class="text-center align-middle">Bác Sĩ</th>
                  <th class="text-center align-middle">Số lượng lịch hẹn</th>
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
          <Pie v-if="loaded" :data="chartData" :options="chartOptions"/>
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
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  components: { Pie },
  data() {
    return {
      loaded: false,
      thong_ke: { begin: '', end: '' },
      staticData: [
        { label: 'Bs. Nguyễn Văn A', count: 35 },
        { label: 'Bs. Trần Thị B', count: 28 },
        { label: 'Bs. Lê Văn C', count: 42 },
        { label: 'Bs. Phạm Thị D', count: 25 },
        { label: 'Bs. Hoàng Văn E', count: 30 },
        { label: 'Bs. Đỗ Thị F', count: 38 }
      ],
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40"
            ],
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
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
