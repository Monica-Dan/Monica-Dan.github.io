<?php

namespace App\Http\Controllers\Demo;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DemoCotroller extends Controller
{
    public function Index() {
        return view('about');
    } //end method

    public function ContactMethod() {
        return view('contact');
    }
}
