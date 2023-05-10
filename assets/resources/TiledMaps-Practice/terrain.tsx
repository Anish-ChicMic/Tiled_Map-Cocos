<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.10.1" name="terrain" tilewidth="32" tileheight="32" tilecount="1024" columns="32">
 <image source="terrain.png" width="1024" height="1024"/>
 <tile id="0">
  <animation>
   <frame tileid="175" duration="60"/>
   <frame tileid="176" duration="60"/>
   <frame tileid="177" duration="60"/>
  </animation>
 </tile>
 <wangsets>
  <wangset name="roadset" type="corner" tile="-1">
   <wangcolor name="road" color="#ff0000" tile="-1" probability="1"/>
   <wangtile tileid="10" wangid="0,1,0,0,0,1,0,1"/>
   <wangtile tileid="11" wangid="0,1,0,1,0,0,0,1"/>
   <wangtile tileid="42" wangid="0,0,0,1,0,1,0,1"/>
   <wangtile tileid="43" wangid="0,1,0,1,0,1,0,0"/>
   <wangtile tileid="73" wangid="0,0,0,1,0,0,0,0"/>
   <wangtile tileid="74" wangid="0,0,0,1,0,1,0,0"/>
   <wangtile tileid="75" wangid="0,0,0,0,0,1,0,0"/>
   <wangtile tileid="105" wangid="0,1,0,1,0,0,0,0"/>
   <wangtile tileid="106" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="107" wangid="0,0,0,0,0,1,0,1"/>
   <wangtile tileid="137" wangid="0,1,0,0,0,0,0,0"/>
   <wangtile tileid="138" wangid="0,1,0,0,0,0,0,1"/>
   <wangtile tileid="139" wangid="0,0,0,0,0,0,0,1"/>
  </wangset>
 </wangsets>
</tileset>
