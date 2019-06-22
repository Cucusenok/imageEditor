<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Meta -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- End Meta -->

    <title>Image</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!--End Fonts -->

    <!-- Styles -->
    <link href="{{ URL::asset('css/app.css') }}" rel="stylesheet">
    <!--End Styles -->

    <!--Scripts -->
    <!--End Scripts -->

</head>
<body>

@if(!empty($img))
    <div style="text-align: center; ">
    <img src="{{$img}}"><br>
    <a href="/" style="display: inline-block; color: white; padding: 10px; background: forestgreen;">Try</a>
    </div>
@else
    Sorry, but image with this URL not found
@endif



<!--Scripts -->
<!--End Scripts -->
</body>
</html>
