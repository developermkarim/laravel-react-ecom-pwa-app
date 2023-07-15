<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;

class VisitorController extends Controller
{

    public function GetVisitorDetails()
    {
        $ip_address = $_SERVER["REMOTE_ADDR"];
        date_default_timezone_set('Asia/Dhaka');
        $visit_time = date('h:i:sa');
        $visit_date = date('d-m-Y');

        $visitor = Visitor::insert([
           'ip_address'=>$ip_address,
           'visit_time'=>$visit_time,
           'visit_date'=>$visit_date,
        ]);
        return $visitor;
    }    
}
