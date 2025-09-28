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
                            <div class="row d-flex">
                                <div class="col-lg-4 d-flex">
                                    <div class="card border-0 shadow-sm flex-fill">
                                        <div class="card-body text-center">
                                            <div class="position-relative mb-4">
                                                <img src="../../../assets/images/avatars/avatar-1.png"
                                                    style="width: 150px; height: 150px; object-fit: cover;"
                                                    class="rounded-circle border-3 border-primary p-1">
                                                <div class="position-absolute bottom-0 end-0">
                                                    <input type="file" ref="fileInput" @change="handleFileUpload" class="d-none" accept="image/*">
                                                    <button class="btn btn-light rounded-circle p-2 shadow-sm" @click="$refs.fileInput.click()">
                                                        <i class='bx bx-camera'></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <h4 class="mb-1">Nguyễn Văn A</h4>
                                            <p class="text-muted mb-3">Chức Vụ</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex">
                                    <div class="card border-0 shadow-sm flex-fill">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="card-title mb-0">Cập Nhật Thông Tin</h5>
                                            </div>
                                                <form >
                                                <div class="row g-3">
                                                    <div class="col-md-6">
                                                        <label class="form-label">Họ và Tên</label>
                                                        <input type="text"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Email</label>
                                                        <input disabled type="email"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Số Điện Thoại</label>
                                                        <input type="text"  class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Chức Vụ</label>
                                                        <select  class="form-select" >
                                                            <option v-for="role in roles" :key="role.id" :value="role.id">
                                                                {{ role.ten_chuc_vu }}
                                                            </option>
                                                        </select>
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
                                                        <input :type="showPassword.old ? 'text' : 'password'" 
                                                            
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
                                                        <input :type="showPassword.new ? 'text' : 'password'" 
                                                            
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
                                                        <input :type="showPassword.confirm ? 'text' : 'password'" 
                                                            
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
import baseRequestAdmin from '../../../core/baseRequestAdmin';

export default {
    data() {
        return {
            isEditing: false,
            profile: {
                id: '',
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                tinh_trang: 1,
                id_chuc_vu: '',
                is_master: 0,
                ten_chuc_vu: ''
            },
            updateForm: {
                id: '',
                ho_ten: '',
                email: '',
                so_dien_thoai: '',
                id_chuc_vu: ''
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
            roles: []
        }
    }
   
}
</script>