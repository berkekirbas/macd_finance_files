<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Macd Finance') }}</title>

	<link href="{{ mix('/css/app.css') }}" rel="stylesheet">
	<link href="{{ asset('/assets/css/ionicons.min.css') }}" rel="stylesheet">
  <link href="{{ asset('/assets/css/font-awesome.min.css')}}" rel="stylesheet" >

	<link href="{{ asset('/assets/css/bootstrap.min.css') }}" rel="stylesheet">
	<link href="{{ asset('/assets/css/style.css') }}" rel="stylesheet">
    
</head>
<body>
  <div id="root"></div>

  <script charset="utf8" src="{{ mix('/jsf/manifest.js') }}"></script>
  <script charset="utf8" src="{{ mix('/jsf/vendor.js') }}"></script>
  <script charset="utf8" src="{{ mix('/jsf/app.js') }}"></script>

  <script charset="utf8" src="{{ asset('/assets/js/jquery-3.1.1.min.js') }}"></script>
  <script charset="utf8" src="{{ asset('/assets/js/bootstrap.min.js') }}"></script>


</body>
</html>
