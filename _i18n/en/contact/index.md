
# {% include icon.html icon="fa-regular fa-envelope" %} {% t contact.title %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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


