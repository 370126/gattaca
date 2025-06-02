# {% t titles.about_us %}

The Gattaca Laboratory was founded in 2003 by Prof. Dacheng Tian and Prof. Jianqun Chen, growing out of the work of NJU's Molecule Biology and Ecology Group, and building on the seminal work of faculty members in a range of other disciplines, from bioinformatics and computer science.

{% include section.html %}

## Highlights


{% assign button1_text = buttons.see_publications | t %}
{% assign feature1_title = titles.our_research | t %}
{% assign feature1_image = "images/research.PNG" | prepend: site.baseurl_root %}
{% assign link_research = "research" | prepend: site.baseurl %}
{% assign link_projects = "projects" | prepend: site.baseurl %}
{% assign link_team = "team" | prepend: site.baseurl %}


{% capture text %}

A fundamental problem in evolutionary biology is how genetic variation is created and maintained. Our research focuses on this problem, although we are also interested in other issues of evolutionary genomics. Our experiments are mainly divided into two parts, molecular group and information group. The former is mainly engaged in molecular biology experiments, and the latter mainly uses computer programs to analyze sequences. In actual operation, molecules and information often penetrate and learn from each other.
    
{%
  include button.html
  link=link_research
  text=button1_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature1_image
  link=link_research
  title=feature1_title
  text=text
%}


{% assign button2_text = buttons.browse_projects | t %}

{% assign feature2_title = titles.our_projects | t %}

{% assign feature2_image = "images/project.png" | prepend: site.baseurl_root %}

{% capture text %}

The laboratory is mainly engaged in the molecular evolution and asymmetric inheritance of plant resistance genes.

{%
  include button.html
  link=link_projects
  text=button2_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature2_image
  link=link_projects
  title=feature2_title
  flip=true
  style="bare"
  text=text
%}


{% assign button3_text = buttons.meet_team | t %}

{% assign feature3_title = titles.our_team | t %}

{% assign feature3_image = "images/team.jpg" | prepend: site.baseurl_root %}

{% capture text %}

We are an inclusive group of talented students and researchers from diverse backgrounds.

{%
  include button.html
  link=link_team
  text=button3_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature3_image
  link=link_team
  title=feature3_title
  text=text
%}