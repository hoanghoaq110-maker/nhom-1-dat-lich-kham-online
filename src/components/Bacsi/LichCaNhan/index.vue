<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h4 class="mt-2">Lịch Làm Việc Cá Nhân</h4>
                    <div>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#themLichModal">
                            <i class="bx bx-plus me-1"></i>Thêm lịch làm việc
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card border-0 shadow-sm">
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <button class="btn btn-sm btn-light">
                                            <i class='bx bx-chevron-left'></i>
                                        </button>
                                        <div class="d-flex align-items-center">
                                            <input type="month" class="form-control form-control-sm mx-2" value="2024-03">
                                        </div>
                                        <button class="btn btn-sm btn-light">
                                            <i class='bx bx-chevron-right'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card border-0 shadow-sm mb-4">
                                <div class="card-body">
                                    <div class="mb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="bg-success rounded me-2" style="width: 20px; height: 20px;">
                                            </div>
                                            <span>Ca sáng (8:00 - 12:00)</span>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="bg-info rounded me-2" style="width: 20px; height: 20px;"></div>
                                            <span>Ca chiều (13:00 - 17:00)</span>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="d-flex align-items-center">
                                            <div class="bg-warning rounded me-2" style="width: 20px; height: 20px;">
                                            </div>
                                            <span>Ca tối (18:00 - 21:00)</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <div class="bg-secondary rounded me-2" style="width: 20px; height: 20px;">
                                            </div>
                                            <span>Đã khóa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card border-0 shadow-sm">
                                <div class="card-header bg-light">
                                    <h6 class="mb-0">Thống kê</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-2">
                                        <div class="d-flex justify-content-between">
                                            <span>Tổng số ca:</span>
                                            <strong>12</strong>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="d-flex justify-content-between">
                                            <span>Ca sáng:</span>
                                            <strong>5</strong>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <div class="d-flex justify-content-between">
                                            <span>Ca chiều:</span>
                                            <strong>4</strong>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="d-flex justify-content-between">
                                            <span>Ca tối:</span>
                                            <strong>3</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="card border-0 shadow-sm">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr class="text-center bg-light">
                                                    <th>Thứ 2</th>
                                                    <th>Thứ 3</th>
                                                    <th>Thứ 4</th>
                                                    <th>Thứ 5</th>
                                                    <th>Thứ 6</th>
                                                    <th>Thứ 7</th>
                                                    <th>Chủ nhật</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-center">
                                                    <td class="bg-light">
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2 text-muted">26</div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td class="bg-light">
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2 text-muted">27</div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td class="bg-light">
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2 text-muted">28</div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td class="bg-light">
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2 text-muted">29</div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2">1</div>
                                                            <div class="d-flex justify-content-center">
                                                                <span class="badge bg-success me-1" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#themLichModal">
                                                                    Ca sáng
                                                                </span>
                                                            </div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2">2</div>
                                                            <div class="d-flex justify-content-center">
                                                                <span class="badge bg-info me-1" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#themLichModal">
                                                                    Ca chiều
                                                                </span>
                                                            </div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="position-relative h-100">
                                                            <div class="small mb-2">3</div>
                                                            <div class="d-flex justify-content-center">
                                                                <span class="badge bg-warning me-1" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#themLichModal">
                                                                    Ca tối
                                                                </span>
                                                            </div>
                                                            <button class="btn btn-sm btn-light position-absolute bottom-0 start-50 translate-middle-x mb-1">
                                                                <i class="bx bx-plus"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <!-- Thêm 4 tuần nữa tương tự -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="xoaLichModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Lịch Làm Việc</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i></div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                <div class="text-white">Bạn có chắc chắn xóa lịch làm việc <b>01/03/2024</b> này không!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="themLichModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header text-white bg-primary">
                    <h5 class="modal-title text-white">Thêm Lịch Làm Việc</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="form-label">Ngày <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" value="2024-03-01" required>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ca làm việc <span class="text-danger">*</span></label>
                        <select class="form-select" required>
                            <option value="">-- Chọn ca làm việc --</option>
                            <option value="Sáng">Ca sáng (8:00 - 12:00)</option>
                            <option value="Chiều">Ca chiều (13:00 - 17:00)</option>
                            <option value="Tối">Ca tối (18:00 - 21:00)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tình trạng</label>
                        <select class="form-select">
                            <option value="1">Đang mở</option>
                            <option value="0">Đã khóa</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                        <i class='bx bx-save me-1'></i>Thêm mới
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LichCaNhan'
}
</script>

<style scoped>
.badge {
    font-weight: 500;
    padding: 0.5em 1em;
}

.table td {
    padding: 0.5rem;
    height: 120px;
    width: 14.28%;
}

.table td>div {
    min-height: 100px;
}

.modal-body label.form-label {
    font-weight: 500;
}

.form-control:focus,
.form-select:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.btn-light {
    background-color: #f8f9fa;
    border-color: #ddd;
}

.btn-light:hover {
    background-color: #e9ecef;
    border-color: #ddd;
}

.bx-chevron-left,
.bx-chevron-right {
    font-size: 1.2rem;
    line-height: 1;
}

input[type="month"] {
    min-width: 150px;
}
</style>