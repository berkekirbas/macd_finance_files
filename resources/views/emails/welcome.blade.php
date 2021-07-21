@component('mail::message')

# Welcome

{{$name}}

Thank You,<br>

{{ config('app.name') }}
@endcomponent