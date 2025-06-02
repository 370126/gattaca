# {% t titles.about_us %}

Gattaca 实验室由田大成教授和陈建群教授于 2003 年创立，源于南京大学分子生物学与生态学团队的工作，并以生物信息学和计算机科学等多个学科的教职人员的开创性工作为基础。

{% include section.html %}

## 亮点


{% assign button1_text = buttons.see_publications | t %}

{% assign feature1_title = titles.our_research | t %}

{% assign feature1_image = "images/research.PNG" | prepend: site.baseurl_root %}

{% capture text %}

进化生物学中的一个基本问题是遗传变异是如何产生和维持的。我们的研究主要集中在这个问题上，尽管我们也对进化基因组学的其他问题感兴趣。我们的实验主要分为分子组和信息组两部分。前者主要从事分子生物学实验，后者主要利用计算机程序进行序列分析。在实际操作中，分子和信息往往相互渗透、相互学习。
    
{%
  include button.html
  link="research"
  text=button1_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature1_image
  link="research"
  title=feature1_title
  text=text
%}


{% assign button2_text = buttons.browse_projects | t %}

{% assign feature2_title = titles.our_projects | t %}

{% assign feature2_image = "images/project.png" | prepend: site.baseurl_root %}

{% capture text %}

实验室主要从事植物抗性基因的分子进化和不对称遗传。

{%
  include button.html
  link="projects"
  text=button2_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature2_image
  link="projects"
  title=feature2_title
  flip=true
  style="bare"
  text=text
%}


{% assign button3_text = buttons.meet_team | t %}

{% assign feature3_title = titles.our_team | t %}

{% assign feature3_image = "images/team.jpg" | prepend: site.baseurl_root %}

{% capture text %}

我们是一个由来自不同背景的优秀学生和研究人员组成的包容性团队。

{%
  include button.html
  link="team"
  text=button3_text
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image=feature3_image
  link="team"
  title=feature3_title
  text=text
%}