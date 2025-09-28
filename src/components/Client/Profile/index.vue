<template>
    <div class="container mt-2">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <ul class="nav nav-tabs nav-primary" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                    aria-selected="true">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon"><i class='bx bx-user-circle font-18 me-1'></i></div>
                                        <div class="tab-title">Thông Tin Cá Nhân</div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab"
                                    aria-selected="false">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon"><i class='bx bx-lock font-18 me-1'></i></div>
                                        <div class="tab-title">Đổi Mật Khẩu</div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#lich-kham" role="tab"
                                    aria-selected="false">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon"><i class='bx bx-calendar font-18 me-1'></i></div>
                                        <div class="tab-title">Lịch Khám</div>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" data-bs-toggle="tab" href="#lich-su-kham" role="tab"
                                    aria-selected="false">
                                    <div class="d-flex align-items-center">
                                        <div class="tab-icon"><i class='bx bx-history font-18 me-1'></i></div>
                                        <div class="tab-title">Lịch Sử Khám</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content py-3">
                            <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                                <div class="row">
                                    <div class="col-lg-4 d-flex">
                                        <div class="card border-0 shadow-sm flex-fill">
                                            <div class="card-body text-center">
                                                <div class="position-relative mb-4">
                                                    <img src="../../../assets/images/avatars/avatar-1.png"
                                                        style="width: 150px; height: 150px; object-fit: cover;"
                                                        class="rounded-circle border-3 border-primary p-1">
                                                </div>
                                                <h4 class="mb-1">{{ profile.ho_ten }}</h4>
                                                <p class="text-muted mb-3">Bệnh nhân</p>
                                                <div class="d-flex justify-content-center gap-2 mb-4">
                                                    <div class="px-3 py-2 rounded-3 bg-light text-center">
                                                        <h5 class="mb-0 text-primary">{{ gioiTinhText }}</h5>
                                                        <small class="text-muted">Giới tính</small>
                                                    </div>
                                                    <div class="px-3 py-2 rounded-3 bg-light text-center">
                                                        <h5 class="mb-0 text-primary">{{ tinhTrangText }}</h5>
                                                        <small class="text-muted">Trạng thái</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="card border-0 shadow-sm flex-fill">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 class="card-title mb-0">Cập Nhật Thông Tin</h5>
                                                </div>
                                                <form >
                                                    <div class="row g-3">
                                                        <div class="col-md-6">
                                                            <label class="form-label">Họ và Tên</label>
                                                            <input type="text" 
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Email</label>
                                                            <input disabled type="email" 
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Số Điện Thoại</label>
                                                            <input type="text" 
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Ngày Sinh</label>
                                                            <input type="date" 
                                                                class="form-control">
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label class="form-label">Giới Tính</label>
                                                            <select  class="form-select">
                                                                <option value="0">Nam</option>
                                                                <option value="1">Nữ</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Địa Chỉ</label>
                                                            <textarea  class="form-control" rows="2"></textarea>
                                                        </div>
                                                        <div class="col-12 text-end">
                                                            <button type="submit" class="btn btn-primary">
                                                                <i class='bx bx-save me-1'></i>Lưu Thay Đổi
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="lich-kham" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card border-0 shadow-sm">
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Lịch Khám Của Tôi</h5>
                                                <div class="table-responsive">
                                                    <table class="table table-hover">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th>Ngày Khám</th>
                                                                <th>Giờ Khám</th>
                                                                <th>Bác Sĩ</th>
                                                                <th>Chuyên Khoa</th>
                                                                <th>Trạng Thái</th>
                                                                <th>Thao Tác</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="appointment in appointments" :key="appointment.id">
                                                                <td>{{ formatDate(appointment.ngay_kham) }}</td>
                                                                <td>{{ appointment.gio_kham }}</td>
                                                                <td>{{ appointment.bac_si?.ho_ten }}</td>
                                                                <td>{{ appointment.chuyen_khoa?.ten_chuyen_khoa }}</td>
                                                                <td>
                                                                    <span :class="getStatusBadgeClass(appointment.tinh_trang)">
                                                                        {{ getStatusText(appointment.tinh_trang) }}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button class="btn btn-sm btn-outline-danger" 
                                                                        @click="cancelAppointment(appointment.id)"
                                                                        v-if="appointment.tinh_trang === 0">
                                                                        <i class='bx bx-x'></i> Hủy
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr v-if="appointments.length === 0">
                                                                <td colspan="6" class="text-center text-muted">
                                                                    Chưa có lịch khám nào
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="lich-su-kham" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card border-0 shadow-sm">
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Lịch Sử Khám Bệnh</h5>
                                                <div class="table-responsive">
                                                    <table class="table table-hover">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th>Ngày Khám</th>
                                                                <th>Bác Sĩ</th>
                                                                <th>Chuyên Khoa</th>
                                                                <th>Chẩn Đoán</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="history in medicalHistory" :key="history.id">
                                                                <td>{{ formatDate(history.ngay_kham) }}</td>
                                                                <td>{{ history.bac_si?.ho_ten }}</td>
                                                                <td>{{ history.chuyen_khoa?.ten_chuyen_khoa }}</td>
                                                                <td>{{ history.chan_doan || 'Chưa có' }}</td>
                                                                <td>
                                                                    <span class="text-muted">Chưa có</span>
                                                                </td>
                                                            </tr>
                                                            <tr v-if="medicalHistory.length === 0">
                                                                <td colspan="6" class="text-center text-muted">
                                                                    Chưa có lịch sử khám bệnh
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                                <div class="row justify-content-center">
                                    <div class="col-lg-6">
                                        <div class="card border-0 shadow-sm">
                                            <div class="card-body">
                                                <h5 class="card-title mb-4">Thay Đổi Mật Khẩu</h5>
                                                <form >
                                                    <div class="mb-3">
                                                        <label class="form-label">Mật Khẩu Hiện Tại</label>
                                                        <div class="input-group">
                                                            <input :type="showPassword.old ? 'text' : 'password'"
                                                                class="form-control"
                                                                placeholder="Nhập mật khẩu hiện tại">
                                                            <button class="btn btn-outline-secondary" type="button"
                                                                @click="showPassword.old = !showPassword.old">
                                                                <i class='bx'
                                                                    :class="showPassword.old ? 'bx-hide' : 'bx-show'"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label">Mật Khẩu Mới</label>
                                                        <div class="input-group">
                                                            <input :type="showPassword.new ? 'text' : 'password'"
                                                                class="form-control"
                                                                placeholder="Nhập mật khẩu mới">
                                                            <button class="btn btn-outline-secondary" type="button"
                                                                @click="showPassword.new = !showPassword.new">
                                                                <i class='bx'
                                                                    :class="showPassword.new ? 'bx-hide' : 'bx-show'"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label class="form-label">Xác Nhận Mật Khẩu Mới</label>
                                                        <div class="input-group">
                                                            <input :type="showPassword.confirm ? 'text' : 'password'"
                                                                class="form-control"
                                                                placeholder="Nhập lại mật khẩu mới">
                                                            <button class="btn btn-outline-secondary" type="button"
                                                                @click="showPassword.confirm = !showPassword.confirm">
                                                                <i class='bx'
                                                                    :class="showPassword.confirm ? 'bx-hide' : 'bx-show'"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary w-100">
                                                        <i class='bx bx-lock-alt me-1'></i>Đổi Mật Khẩu
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseRequestBenhNhan from '../../../core/baseRequestBenhNhan';

export default {
    data() {
        return {
            profile: {
                id: '',
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                ngay_sinh: '',
                gioi_tinh: 1,
                dia_chi: '',
                tinh_trang: 1
            },
            updateForm: {
                id: '',
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                ngay_sinh: '',
                gioi_tinh: 1,
                dia_chi: ''
            },
            passwordForm: {
                old_password: '',
                new_password: '',
                confirm_password: ''
            },
            showPassword: {
                old: false,
                new: false,
                confirm: false
            },
            appointments: [],
            medicalHistory: []
        }
    },
    mounted() {
        this.loadProfile();
        this.loadAppointments();
        this.loadMedicalHistory();
    },
    methods: {
        loadProfile() {
            baseRequestBenhNhan.get('benh-nhan/profile/data')
                .then(res => {
                    if (res.data.status) {
                        this.profile = res.data.data;
                        this.updateForm = {
                            id: this.profile.id,
                            ho_ten: this.profile.ho_ten,
                            email: this.profile.email,
                            so_dien_thoai: this.profile.so_dien_thoai,
                            ngay_sinh: this.profile.ngay_sinh,
                            gioi_tinh: this.profile.gioi_tinh,
                            dia_chi: this.profile.dia_chi
                        };
                    }
                });
        },
        loadAppointments() {
            baseRequestBenhNhan.get('benh-nhan/lich-kham/data')
                .then(res => {
                    if (res.data.status) {
                        this.appointments = res.data.data;
                    }
                });
        },
        loadMedicalHistory() {
            baseRequestBenhNhan.get('benh-nhan/lich-su-kham/data')
                .then(res => {
                    if (res.data.status) {
                        this.medicalHistory = res.data.data;
                    }
                });
        },
        formatDate(date) {
            if (!date) return '';
            return new Date(date).toLocaleDateString('vi-VN');
        },
        getStatusBadgeClass(status) {
            const classes = {
                0: 'badge bg-secondary',
                1: 'badge bg-success',
                2: 'badge bg-danger',
                3: 'badge bg-warning'
            };
            return classes[status] || 'badge bg-secondary';
        },
        getStatusText(status) {
            const texts = {
                0: 'Chờ xác nhận',
                1: 'Đã xác nhận',
                2: 'Đã hủy',
                3: 'Đã thành công'
            };
            return texts[status] || 'Không xác định';
        },
        cancelAppointment(appointmentId) {
            if (confirm('Bạn có chắc chắn muốn hủy lịch khám này?')) {
                baseRequestBenhNhan.post(`benh-nhan/lich-kham/huy/${appointmentId}`)
                    .then(res => {
                        if (res.data.status) {
                            this.$toast.success('Hủy lịch khám thành công');
                            this.loadAppointments();
                        } else {
                            this.$toast.error(res.data.message);
                        }
                    });
            }
        },
      
    },
    computed: {
        gioiTinhText() {
            return this.profile.gioi_tinh === 0 ? 'Nam' : 'Nữ';
        },
        tinhTrangText() {
            return this.profile.tinh_trang === 1 ? 'Hoạt động' : 'Khóa';
        }
    }
}
</script>

<style scoped>
.card {
    border: none;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.nav-tabs .nav-link {
    border: none;
    color: #6c757d;
    padding: 1rem;
}

.nav-tabs .nav-link.active {
    color: #0d6efd;
    border-bottom: 2px solid #0d6efd;
}

.form-label {
    color: #6c757d;
    font-weight: 500;
    font-size: 0.875rem;
}

.info-list {
    text-align: left;
    padding: 1rem 0;
}

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    color: #6c757d;
}

.info-item i {
    width: 24px;
    font-size: 1.1rem;
    margin-right: 0.5rem;
}

.rounded-3 {
    border-radius: 0.5rem !important;
}

textarea.form-control {
    resize: none;
}

.input-group .btn {
    padding: 0.375rem 0.75rem;
}

.input-group .btn i {
    font-size: 1.25rem;
}
</style>