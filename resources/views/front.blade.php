<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MGL - Mobile Gaming League</title>

        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet"> --}}
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <link href="https://fonts.googleapis.com/css?family=Montserrat%7COpen+Sans:700,400%7CRaleway:400,800,900" rel="stylesheet" /> --}}
        {{-- <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}"> --}}
        <link rel="icon" href="{{asset('images/common/fav-icon.png')}}" type="image/x-icon">
        <link href="{{asset('css/bootstrap.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('css/style.min.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('css/preloader-default.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('css/demo-switcher.css')}}" rel="stylesheet" type="text/css" />
    {{-- <link rel="stylesheet" href="{{asset('carousel.css')}}"/> --}}
        <!-- Styles -->
    </head>
    <body>
       <div id="root">
       </div>
    </body>
    <script src="{{asset('/js/app.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/library/jquery.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/library/bootstrap.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/main.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/library/fancySelect.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/header.js')}}"></script>
</html>
