<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeSlider;

class SliderController extends Controller
{
    public function getSlider()
    {
        $sliders = HomeSlider::get();
        return $sliders;
    }
}
