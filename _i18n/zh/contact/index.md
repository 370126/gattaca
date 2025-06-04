
# {% include icon.html icon="fa-regular fa-envelope" %} {% t contact.title %}

占位置的文字。


{%
  include button.html
  type="email"
  link="sihaiyang@nju.edu.cn"
%}



{% include button.html 
   type="address" 
   tooltip="Our location on baidu Maps for easy navigation"
   link=site.links.map_url_amap 
%}