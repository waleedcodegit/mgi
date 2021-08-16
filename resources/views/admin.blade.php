<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MGL - Mobile Gaming League</title>
        <meta name="csrf-tocken" content="{{csrf_token()}}">
            <link rel="stylesheet" href="{{asset('admin/assets/css/app.min.css')}}">
            <link rel="stylesheet" href="{{asset('admin/assets/bundles/bootstrap-social/bootstrap-social.css')}}">
            <!-- Template CSS -->
            <link rel="stylesheet" href="{{asset('admin/assets/css/style.css')}}">
            <link rel="stylesheet" href="{{asset('admin/assets/css/components.css')}}">
            <!-- Custom style CSS -->
            <link rel="stylesheet" href="{{asset('admin/assets/css/custom.css')}}">
            <link rel='shortcut icon' type='image/x-icon' href='{{asset('images/common/mgl-logo.png')}}' />
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('/js/app.js')}}"></script>
        <script src="{{asset('admin/assets/js/app.min.js')}}"></script>
  <!-- JS Libraies -->
  <script src="{{asset('admin/assets/bundles/apexcharts/apexcharts.min.js')}}"></script>
  <!-- Page Specific JS File -->
  <script src="{{asset('admin/assets/js/page/index.js')}}"></script>
  <!-- Template JS File -->
  <script src="{{asset('admin/assets/js/scripts.js')}}"></script>
  <!-- Custom JS File -->
  <script src="{{asset('admin/assets/js/custom.js')}}"></script>

    </body>
</html>
