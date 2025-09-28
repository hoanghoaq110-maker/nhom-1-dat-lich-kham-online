<template>
  <div>
    <!-- Statistics Cards -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
      <div class="col">
        <div class="card radius-10 border-start border-0 border-3 border-info">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="text-wrap">
                <p class="mb-0 text-secondary">Tổng lịch hẹn</p>
                <h4 class="my-1 text-info">{{ stats.tong_lich_hen || 0 }}</h4>
                <p class="mb-0 font-13 text-success">
                  <i class="bx bxs-calendar"></i>
                  <span>Tất cả các lịch hẹn</span>
                </p>
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                <i class='bx bxs-calendar-check'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card radius-10 border-start border-0 border-3 border-danger">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="text-wrap">
                <p class="mb-0 text-secondary">Lịch hẹn tháng này</p>
                <h4 class="my-1 text-danger">{{ stats.lich_hen_thang_nay || 0 }}</h4>
                <p class="mb-0 font-13 text-success">
                  <i class="bx bxs-calendar-star"></i>
                  <span>Trong tháng</span>
                </p>
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto">
                <i class='bx bx-calendar'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card radius-10 border-start border-0 border-3 border-success">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="text-wrap">
                <p class="mb-0 text-secondary">Lịch hẹn thành công</p>
                <h4 class="my-1 text-success">{{ stats.lich_hen_thanh_cong || 0 }}</h4>
                <p class="mb-0 font-13 text-success">
                  <i class="bx bxs-check-circle"></i>
                  <span>{{ stats.ty_le_thanh_cong || 0 }}% tỷ lệ thành công</span>
                </p>
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto">
                <i class='bx bxs-check-square'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card radius-10 border-start border-0 border-3 border-warning">
          <div class="card-body">
            <div class="d-flex align-items-center">
              <div class="text-wrap">
                <p class="mb-0 text-secondary">Đánh giá trung bình</p>
                <h4 class="my-1 text-warning">{{ stats.danh_gia_trung_binh || 0 }}/5</h4>
                <p class="mb-0 font-13 text-warning">
                  <i class="bx bxs-star"></i>
                  <span>Mức độ hài lòng</span>
                </p>
              </div>
              <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                <i class='bx bxs-star'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h3>Thống Kê Lịch Hẹn Tháng {{ currentMonth }}</h3>
              </div>
            </div>
            <hr>
            <div style="height: 350px">
              <Line v-if="chartData.labels.length > 0" :data="chartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Bar, Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

import baseRequestAdmin from '../../../core/baseRequestAdmin'

export default {
  name: 'AdminDashboard',
  components: { Bar, Line },
  data() {
    return {
      stats: {},
      begin: '',
      end: '',
      currentMonth: '',
      currentYear: '',
      chartData: {
        labels: [],
        datasets: [{
          label: 'Số lịch hẹn',
          backgroundColor: '#27AE60',
          borderColor: '#27AE60',
          data: []
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    }
  },

  mounted() {
    this.initializeDates()
    this.loadDashboardData()
    this.loadAppointmentData()
  },

  methods: {
    initializeDates() {
      const date = new Date()
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 2)
      this.currentMonth = (date.getMonth() + 1).toString().padStart(2, '0')
      this.currentYear = date.getFullYear()
      this.begin = firstDay.toISOString().slice(0, 10)
      this.end = date.toISOString().slice(0, 10)
    },

    formatNumber(num) {
      if (!num) return 0
      if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'
      } else if (num >= 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B'
      }
      return num
    },

    formatCurrency(value) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(value)
    },

    formatDateTime(datetime) {
      if (!datetime) return ''
      return new Date(datetime).toLocaleString('vi-VN')
    },

    async loadDashboardData() {
      baseRequestAdmin.get('admin/thong-ke/tong-quan')
        .then(res => {
            this.stats = res.data.data
        })
        .catch(error => {
          console.error('Error loading dashboard data:', error)
        })
    },

    async loadAppointmentData() {
      baseRequestAdmin.get(`admin/thong-ke/lich-hen/${this.begin}/${this.end}`)
        .then(res => {
          if (res.data.status) {
            this.chartData = {
              ...this.chartData,
              labels: res.data.labels || [],
              datasets: [{
                ...this.chartData.datasets[0],
                data: res.data.data || []
              }]
            }
          }
        })
        .catch(error => {
          console.error('Error loading appointment data:', error)
        })
    }
  }
}
</script>

<style scoped>
.widgets-icons-2 {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.widgets-icons-2 i {
  font-size: 27px;
}

.bg-gradient-scooter {
  background: #17ead9;
  background: -webkit-linear-gradient(45deg, #17ead9, #6078ea);
  background: linear-gradient(45deg, #17ead9, #6078ea);
}

.bg-gradient-bloody {
  background: #f54ea2;
  background: -webkit-linear-gradient(45deg, #f54ea2, #ff7676);
  background: linear-gradient(45deg, #f54ea2, #ff7676);
}

.bg-gradient-ohhappiness {
  background: #00b09b;
  background: -webkit-linear-gradient(45deg, #00b09b, #96c93d);
  background: linear-gradient(45deg, #00b09b, #96c93d);
}

.bg-gradient-blooker {
  background: #ffdf40;
  background: -webkit-linear-gradient(45deg, #ffdf40, #ff8359);
  background: linear-gradient(45deg, #ffdf40, #ff8359);
}

.radius-10 {
  border-radius: 10px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>