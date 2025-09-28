<template>
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
                    </ul>
                    <div class="tab-content py-3">
                        <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body text-center">
                                            <div class="position-relative mb-4">
                                                <img src="https://dzfullstack.com/assets/images/logo-img.png"
                                                    style="width: 150px; height: 150px; object-fit: cover;"
                                                    class="rounded-circle border-3 border-primary p-1">
                                                <div class="position-absolute bottom-0 end-0">
                                                    <input type="file"  class="d-none" accept="image/*">
                                                    <button class="btn btn-light rounded-circle p-2 shadow-sm" >
                                                        <i class='bx bx-camera'></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <h4 class="mb-1">Nguyễn Văn A</h4>
                                            <p class="text-muted mb-3">Bác sĩ nội khoa</p>
                                            <div class="d-flex justify-content-center gap-2 mb-4">
                                                <div class="px-3 py-2 rounded-3 bg-light text-center">
                                                    <h5 class="mb-0 text-primary">10</h5>
                                                    <small class="text-muted">Năm KN</small>
                                                </div>
                                                <div class="px-3 py-2 rounded-3 bg-light text-center">
                                                    <h5 class="mb-0 text-primary">Nam</h5>
                                                    <small class="text-muted">Giới tính</small>
                                                </div>
                                            </div>
                                            <div class="info-list">
                                                <div class="info-item">
                                                    <i class='bx bx-envelope text-primary'></i>
                                                    <span>nguyenvana@gmail.com</span>
                                                </div>
                                                <div class="info-item">
                                                    <i class='bx bx-phone text-primary'></i>
                                                    <span>0909090909</span>
                                                </div>
                                                <div class="info-item">
                                                    <i class='bx bx-calendar text-primary'></i>
                                                    <span>2025-01-01</span>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="text-muted mb-2">Chuyên khoa</label>
                                                    <p class="mb-3">Bác sĩ nội khoa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="card border-0 shadow-sm mb-4">
                                        <div class="card-body">
                                            <h5 class="card-title mb-4">Thông Tin Chi Tiết</h5>
                                            <div class="info-section">
                                                <h6 class="text-primary mb-3">
                                                    <i class='bx bx-briefcase me-2'></i>Kinh Nghiệm & Đào Tạo
                                                </h6>
                                                <div class="mb-4">
                                                    <label class="text-muted mb-2">Kinh nghiệm làm việc</label>
                                                    <p class="mb-3">10 năm</p>
                                                </div>
                                            </div>
                                            <div class="info-section">
                                                <h6 class="text-primary mb-3">
                                                    <i class='bx bx-certification me-2'></i>Chứng Chỉ & Thành Tựu
                                                </h6>
                                                <div class="mb-4">
                                                    <label class="text-muted mb-2">Chứng chỉ</label>
                                                    <p class="mb-3">Chứng chỉ</p>
                                                    <label class="text-muted mb-2">Thành tựu</label>
                                                    <p>Thành tựu</p>
                                                </div>
                                               
                                            </div>
                                            <div class="info-section">
                                                <h6 class="text-primary mb-3">
                                                    <i class='bx bx-detail me-2'></i>Thông Tin Khác
                                                </h6>
                                                <div>
                                                    <label class="text-muted mb-2">Thành viên tổ chức</label>
                                                    <p class="mb-3">Thành viên tổ chức</p>
                                                    <label class="text-muted mb-2">Mô tả</label>
                                                    <p style="white-space: pre-line">Mô tả</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card border-0 shadow-sm">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="card-title mb-0">Cập Nhật Thông Tin</h5>
                                                <button class="btn btn-primary btn-sm" >
                                                    <i class='bx bx-edit me-1'></i>Chỉnh sửa
                                                </button>
                                            </div>
                                            <form >
                                                <div class="row g-3">
                                                    <div class="col-md-6">
                                                        <label class="form-label">Họ và Tên</label>
                                                        <input type="text"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Email</label>
                                                        <input type="email"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Số Điện Thoại</label>
                                                        <input type="text"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Ngày Sinh</label>
                                                        <input type="date"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Giới Tính</label>
                                                        <select  class="form-select">
                                                            <option value="1">Nam</option>
                                                            <option value="0">Nữ</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="form-label">Chuyên Khoa</label>
                                                        <select  class="form-select" multiple>
                                                            <option value="1">Bác sĩ nội khoa</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Số Năm Kinh Nghiệm</label>
                                                        <input type="number"  class="form-control">
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Kinh Nghiệm Làm Việc</label>
                                                        <textarea  class="form-control" rows="2"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Quá Trình Đào Tạo</label>
                                                        <textarea  class="form-control" rows="2"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Chứng Chỉ</label>
                                                        <textarea  class="form-control" rows="2"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Thành Tựu</label>
                                                        <textarea  class="form-control" rows="2"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Thành Viên Tổ Chức</label>
                                                        <textarea  class="form-control" rows="2"></textarea>
                                                    </div>
                                                    <div class="col-12">
                                                        <label class="form-label">Mô Tả</label>
                                                        <textarea  class="form-control" rows="3"></textarea>
                                                    </div>
                                                    <div class="col-12 text-end">
                                                        <button type="button" class="btn btn-light me-2" >Hủy</button>
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
                                                        <input 
                                                            class="form-control" 
                                                            placeholder="Nhập mật khẩu hiện tại">
                                                        <button class="btn btn-outline-secondary" type="button" 
                                                            @click="showPassword.old = !showPassword.old">
                                                            <i class='bx' :class="showPassword.old ? 'bx-hide' : 'bx-show'"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Mật Khẩu Mới</label>
                                                    <div class="input-group">
                                                        <input 
                                                            class="form-control" 
                                                            placeholder="Nhập mật khẩu mới">
                                                        <button class="btn btn-outline-secondary" type="button" 
                                                            @click="showPassword.new = !showPassword.new">
                                                            <i class='bx' :class="showPassword.new ? 'bx-hide' : 'bx-show'"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Xác Nhận Mật Khẩu Mới</label>
                                                    <div class="input-group">
                                                        <input 
                                                            class="form-control" 
                                                            placeholder="Nhập lại mật khẩu mới">
                                                        <button class="btn btn-outline-secondary" type="button" 
                                                            @click="showPassword.confirm = !showPassword.confirm">
                                                            <i class='bx' :class="showPassword.confirm ? 'bx-hide' : 'bx-show'"></i>
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
</template>

<script>
import baseRequestBacsi from '../../../core/baseRequestBacsi';

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
                hinh_anh: '',
                chuc_danh: '',
                chuyen_khoa: '',
                mo_ta: '',
                chung_chi: '',
                kinh_nghiem_lam_viec: '',
                qua_trinh_dao_tao: '',
                thanh_tuu: '',
                thanh_vien_to_chuc: '',
                so_nam_kinh_nghiem: '',
                id_phong_kham: '',
                tinh_trang: 1,
                listId_chuyen_khoa: []

            },
            updateForm: {
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                ngay_sinh: '',
                gioi_tinh: 1,
                mo_ta: '',
                chuc_danh: '',
                chung_chi: '',
                kinh_nghiem_lam_viec: '',
                qua_trinh_dao_tao: '',
                thanh_tuu: '',
                thanh_vien_to_chuc: '',
                so_nam_kinh_nghiem: '',
                listId_chuyen_khoa: []
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
            list_chuyen_khoa: []
        }
    },
    mounted() {
        this.loadProfile();
    },
    methods: {
        loadProfile() {
            baseRequestBacsi.get('bac-si/profile/data')
                .then(res => {
                    if (res.data.status) {
                        this.list_chuyen_khoa = res.data.list_chuyen_khoa;
                        this.profile = res.data.data;
                        this.profile.listId_chuyen_khoa = res.data.data.id_chuyen_khoa.split(',');
                        this.updateForm = { ...res.data.data };
                    }
                });
        },
    },
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

.info-section {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e9ecef;
}

.info-section:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
}

textarea.form-control {
    resize: none;
}

.btn-light {
    background-color: #f8f9fa;
    border-color: #e9ecef;
}

.btn-light:hover {
    background-color: #e9ecef;
    border-color: #dee2e6;
}

.input-group .btn {
    padding: 0.375rem 0.75rem;
}

.input-group .btn i {
    font-size: 1.25rem;
}

.rounded-3 {
    border-radius: 0.5rem !important;
}
</style>