<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Input;
use App\ImageHandler\ImageHandler;
use App\Image;
use App;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ImagesController extends Controller
{

    public function  store(){

        $image =  ImageHandler::convetrBaseToImage( Input::get('image') );
        $imageName = uniqid() . '.jpg';
        ImageHandler::saveImage($image, $imageName);

        $imgModel = new Image;
        $imgModel->name = $imageName;
        $imgModel->url = md5($imageName);
        $imgModel->save();

        $baseLink = App::make('url')->to('/'); //get site URL
        $imageLink = Storage::disk('userImages')->url($imageName); //get link to image

        return response()->json(array('link' => $baseLink . '/' . md5($imageName), 'imglink' => $baseLink . $imageLink), 200);
    }


    public function  showImage($imgSrc){

        $img =  Image::where('url', $imgSrc)->first();

        if(!empty($img)){
            $imgPath =  Storage::disk('userImages')->url($img['name']);
            return view('image', ['img' =>$imgPath]);
        }
        else return view('image' );
    }
}

