<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="mt-2">Danh Sách Bệnh Nhân</h4>
                </div>
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-lg-12">
                            <div class="position-relative search-bar-box input-group w-100">
                                <input  type="text"
                                    class="form-control search-control" placeholder="Tìm kiếm theo tên, số điện thoại...">
                                <span class="position-absolute top-50 search-show translate-middle-y">
                                </span>
                                <button  class="btn btn-primary">
                                    <i class='bx bx-search me-1'></i>Tìm Kiếm
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center bg-primary text-white">
                                    <th>#</th>
                                    <th>Họ Tên</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Email</th>
                                    <th>Ngày Sinh</th>
                                    <th>Giới Tính</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td class="text-center"></td>
                                    <td></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center"></td>
                                    <td class="text-center">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Hồ Sơ Bệnh Án -->
    <div class="modal fade" id="hoSoBenhAnModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title text-white">Hồ Sơ Bệnh Án</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Họ Tên:</label>
                            <div>Nguyễn Văn A</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Số Điện Thoại:</label>
                            <div>0909090909</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Email:</label>
                            <div>nguyenvana@gmail.com</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Ngày Sinh:</label>
                            <div>2025-01-01</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Giới Tính:</label>
                            <div>Nam</div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="fw-bold">Địa Chỉ:</label>
                            <div>Hà Nội</div>
                        </div>
                        <div class="col-12 mb-3">
                            <label class="fw-bold">Tiền Sử Bệnh:</label>
                            <div>Không</div>
                        </div>
                        <div class="col-12 mb-3">
                            <label class="fw-bold">Dị Ứng:</label>
                            <div>Không</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Lịch Sử Khám -->
    <div class="modal fade" id="lichSuKhamModal" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title text-white">Lịch Sử Khám Bệnh</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center bg-light">
                                    <th>#</th>
                                    <th>Ngày Khám</th>
                                    <th>Triệu Chứng</th>
                                    <th>Chẩn Đoán</th>
                                    <th>Đơn Thuốc</th>
                                    <th>Lời Dặn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  class="align-middle">
                                    <td class="text-center">1</td>
                                    <td class="text-center">2025-01-01</td>
                                    <td>Sốt cao</td>
                                    <td>Sốt cao</td>
                                    <td>Paracetamol 500mg</td>
                                    <td>Ghi chú</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style>
</style>