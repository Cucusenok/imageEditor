<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Meta -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- End Meta -->

    <title>Image Editor</title>

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
<div id="app">
    <app></app>
</div>


<!--Scripts -->
<script src="{{  URL::asset('js/app.js')   }}"></script>
<!--End Scripts -->
</body>
</html>
