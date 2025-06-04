
# {% include icon.html icon="fa-solid fa-wrench" %} {% t projects.title %}

占位置的文字。

{% include tags.html tags="publication, resource, website" %}

{% include search-info.html %}

{% include section.html %}

## {% t projects.featured %}

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## {% t projects.more %}

{% include list.html component="card" data="projects" filter="!group" style="small" %}