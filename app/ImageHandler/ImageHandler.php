<?php


namespace App\ImageHandler;

use Illuminate\Support\Facades\Storage;



class ImageHandler
{

    public static function convetrBaseToImage($baseImage ){

        $baseImage = str_replace('data:image/octet-stream;base64,', '', $baseImage); //delete data from base64 format
        $baseImage = str_replace(' ', '+', $baseImage);
        return base64_decode($baseImage);
    }//end  convetrBaseToImage


    public static  function saveImage($image, $imageName){

        Storage::disk('userImages')->put($imageName, $image); //save file(check full path in config)
    }

}