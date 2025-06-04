# {% include icon.html icon="fa-solid fa-users" %} {% t team.title %}

占位置的文字。

{% include section.html %}

{% include list.html data="members_zh" component="portrait" filter="role == 'principal-investigator'" %}

<br>


## {% t team.Group_members %}
{% include list.html data="members_zh" component="portrait" filter="role == 'postdoc'" %}
<br>

## {% t team.Graduate_students %}
{% include list.html data="members_zh" component="portrait" filter="role == 'phd'" %}
{% include list.html data="members_zh" component="portrait" filter="role == 'master'" %}
<br>

## {% t team.Undergraduate_students %}
{% include list.html data="members_zh" component="portrait" filter="role == 'undergrad'" %}


<br>
<hr class="subtle-divider"> 

# {% t team.Former_Members %}

{% include list.html data="former_members" component="portrait" style="small" %}
