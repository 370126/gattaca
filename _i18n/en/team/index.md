# {% include icon.html icon="fa-solid fa-users" %} {% t team.title %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}

<br>


## {% t team.Group_members %}

{% include list.html data="members" component="portrait" filter="role == 'faculty'" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}
<br>

## {% t team.Graduate_students %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
{% include list.html data="members" component="portrait" filter="role == 'master'" %}
<br>

## {% t team.Undergraduate_students %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad'" %}


<br>
<hr class="subtle-divider"> 

# {% t team.Former_Members %}

{% include list.html data="former_members" component="portrait" style="small" %}
