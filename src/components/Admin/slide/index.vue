<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="mt-2">Quản Lý Slide</h4>
                    <div>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themSlideModal">
                            <i class="bx bx-plus me-1"></i>Thêm slide
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <!-- Slides Grid -->
                    <div class="row">
                        <div class="col-md-4 mb-4" v-for="(item, index) in list_slide" :key="index">
                            <div class="card h-100 border-0 shadow-sm">
                                <img :src="item.hinh_anh" class="card-img-top" 
                                    style="height: 200px; object-fit: cover;">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">{{ item.tieu_de }}</h5>
                                    <p class="card-text text-muted">{{ item.mo_ta }}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox"
                                                :checked="item.tinh_trang == 1"
                                                @change="changeStatus(item)">
                                            <label class="form-check-label">
                                                {{ item.tinh_trang == 1 ? 'Đang hiển thị' : 'Đã ẩn' }}
                                            </label>
                                        </div>
                                        <div>
                                            <button class="btn btn-primary btn-sm me-1" 
                                                @click="editItem(item)"
                                                data-bs-toggle="modal" data-bs-target="#suaSlideModal">
                                                <i class="bx bx-edit"></i>
                                            </button>
                                            <button class="btn btn-danger btn-sm"
                                                @click="deleteItem(item)"
                                                data-bs-toggle="modal" data-bs-target="#xoaSlideModal">
                                                <i class="bx bx-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-light">
                                    <small class="text-muted">
                                        <i class="bx bx-sort me-1"></i>
                                        Thứ tự: {{ item.thu_tu }}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal fade" :id="isEditing ? 'suaSlideModal' : 'themSlideModal'" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">{{ isEditing ? 'Cập Nhật Slide' : 'Thêm Slide Mới' }}</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Tiêu đề <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="form.tieu_de" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mô tả</label>
                        <textarea class="form-control" v-model="form.mo_ta" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Hình ảnh <span class="text-danger">*</span></label>
                        <input type="text" class="form-control" v-model="form.hinh_anh" 
                            placeholder="Nhập đường dẫn hình ảnh" required>
                        <small class="text-muted">Kích thước đề xuất: 1920x600px</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Đường dẫn</label>
                        <input type="text" class="form-control" v-model="form.link" 
                            placeholder="Nhập đường dẫn khi click vào slide">
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Thứ tự <span class="text-danger">*</span></label>
                            <input type="number" class="form-control" v-model="form.thu_tu" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Trạng thái</label>
                            <div class="form-check form-switch mt-2">
                                <input class="form-check-input" type="checkbox" v-model="form.tinh_trang">
                                <label class="form-check-label">Hiển thị slide</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="saveSlide">
                        {{ isEditing ? 'Cập nhật' : 'Thêm mới' }}
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div class="modal fade" id="xoaSlideModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Xóa Slide</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger mb-0">
                        Bạn có chắc chắn muốn xóa slide này?
                        <br>
                        Hành động này không thể hoàn tác!
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="deleteSlide">Xác nhận xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import baseRequestAdmin from '../../../core/baseRequestAdmin';

export default {
    data() {
        return {
            list_slide: [],
            form: {
                id: '',
                tieu_de: '',
                mo_ta: '',
                hinh_anh: '',
                link: '',
                thu_tu: 0,
                tinh_trang: true
            },
            delete_slide: {},
            isEditing: false
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequestAdmin.get('admin/slide/data')
                .then(res => {
                    if (res.data.status) {
                        this.list_slide = res.data.data;
                    }
                });
        },
        editItem(item) {
            this.isEditing = true;
            this.form = { ...item };
        },
        deleteItem(item) {
            this.delete_slide = item;
        },
        saveSlide() {
            const url = this.isEditing ? 'admin/slide/update' : 'admin/slide/create';
            baseRequestAdmin.post(url, this.form)
                .then(res => {
                    if (res.data.status) {
                        this.$toast.success(this.isEditing ? 'Cập nhật slide thành công' : 'Thêm slide thành công');
                        this.loadData();
                        this.resetForm();
                        document.querySelector(`#${this.isEditing ? 'suaSlideModal' : 'themSlideModal'} .btn-close`).click();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
                .catch(err => {
                    if (err.response?.data?.errors) {
                        Object.values(err.response.data.errors).forEach(error => {
                            this.$toast.error(error[0]);
                        });
                    }
                });
        },
        deleteSlide() {
            baseRequestAdmin.post('admin/slide/delete', { id: this.delete_slide.id })
                .then(res => {
                    if (res.data.status) {
                        this.$toast.success('Xóa slide thành công');
                        this.loadData();
                        document.querySelector('#xoaSlideModal .btn-close').click();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },
        changeStatus(item) {
            baseRequestAdmin.post('admin/slide/change-status', { id: item.id })
                .then(res => {
                    if (res.data.status) {
                        this.$toast.success('Cập nhật trạng thái thành công');
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },
        resetForm() {
            this.form = {
                id: '',
                tieu_de: '',
                mo_ta: '',
                hinh_anh: '',
                link: '',
                thu_tu: 0,
                tinh_trang: true
            };
            this.isEditing = false;
        }
    }
}
</script>

<style scoped>
.form-switch .form-check-input {
    width: 3em;
    height: 1.5em;
    cursor: pointer;
}

.modal-body label.form-label {
    font-weight: 500;
}

.form-control:focus,
.form-select:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.card {
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
}
</style> 