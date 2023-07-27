@extends('admin.admin_master')
@section('admin')
    <div class="page-wrapper">
        <div class="page-content">
            <div class="card radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">All Category </h5>
                        </div>
                        <div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
                        </div>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table class="mb-0 table align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th>SL</th>
                                    <th>Category Image </th>
                                    <th>Category Name </th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($categories as $key => $value)
                                <tr>
                                    <td>{{ ++$key; }}</td>
                                    <td>
                                      <img title="{{ $value->category_image }}" src="{{ $value->category_image }}" alt="{{ $value->category_name }}" width="80" height="100">
                                       {{--  <div class="d-flex align-items-center">
                                            <div class="recent-product-img">
                                                <img src="assets/images/icons/chair.png" alt="">
                                            </div>
                                            <div class="ms-2">
                                                <h6 class="font-14 mb-1">Light Blue Chair</h6>
                                            </div>
                                        </div> --}}

                                    </td>
                                    <td> {{ $value->category_name }}</td>
                                    <td>
                                        <div  class="d-flex order-actions"> 
                                            <a  id="delete" href="{{ route('category.delete', $value->id) }}" type="button" class="bg-white">
                                                <i class="btn btn-outline-danger bx bx-trash-alt me-0"></i>
                                            </a> &nbsp; &nbsp;
                                            <a href="{{ url('category/edit/' . $value->id) }}" type="button" class="bg-white">
                                                <i class="btn btn-outline-info bx bx-edit-alt me-0"></i>
                                            </a>
                                        </div>
                                    </td>
                                    
                                    {{-- <td>
                                        <div class="badge rounded-pill bg-light-info text-info w-100">In Progress</div>
                                    </td> --}}
                                   {{--  <td>
                                        <div class="d-flex order-actions"> <a href="javascript:;" class=""><i
                                                    class="bx bx-cog"></i></a>
                                            <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                        </div>
                                    </td> --}}
                                </tr>

                                @empty
                                <tr>
                                    <td>No data found</td>
                                </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
