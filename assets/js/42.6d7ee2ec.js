(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{358:function(_,v,t){"use strict";t.r(v);var a=t(1),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"关于mysql索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于mysql索引"}},[_._v("#")]),_._v(" 关于MySQL索引")]),_._v(" "),v("blockquote",[v("p",[_._v("读 《高性能MySQL》")])]),_._v(" "),v("p",[_._v("索引是存储引擎用于快速找到记录的一种数据结构，这是索引的基本功能。")]),_._v(" "),v("p",[_._v('索引优化应该是对性能优化最有效的手段了。索引能够轻易将查询性能提高几个数量级，"最优"的索引有时比一个"好的"索引能要好两个数量级。')]),_._v(" "),v("h2",{attrs:{id:"索引基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引基础"}},[_._v("#")]),_._v(" 索引基础")]),_._v(" "),v("p",[_._v("在MySQL中，存储引擎先在索引中找到对应值，然后根据匹配的索引记录找到对应的数据行。")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT first_name FROM sakila.actor WHERE actor_id=5;\n")])])]),v("p",[_._v("如果在"),v("code",[_._v("actor_id")]),_._v("列上建有索引，则MySQL将使用该索引找到"),v("code",[_._v("actor_id")]),_._v("为5的行，也就是说，MySQL现在索引上按值进行查找，然后返回所有包含该值的数据行。")]),_._v(" "),v("p",[_._v("在MySQL中，索引是在存储引擎层而不是服务器层实现的。所以，并没有统一的索引标准：不同存储引擎的索引的工作方式并不一样，也不是所有的存储引擎都支持所有类型的索引。即使多个存储引擎支持同一种类型的索引，其底层的实现也可能不同。")]),_._v(" "),v("h3",{attrs:{id:"b-tree索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引"}},[_._v("#")]),_._v(" B-Tree索引")]),_._v(" "),v("p",[v("a",{attrs:{href:"%5Bhttps://zh.wikipedia.org/wiki/B%E6%A0%91%5D(https://zh.wikipedia.org/wiki/B%E6%A0%91)"}},[_._v("B-Tree")]),_._v("通常意味着所有的值都是按顺序存储的，并且每一个叶子页到根的距离相同。")]),_._v(" "),v("p",[_._v("下图展示了B-Tree索引的抽象表示，大致反映了InnoDB索引是如何工作的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9501.png",alt:""}})]),_._v(" "),v("p",[_._v("B-Tree索引能够加快访问数据的速度，因为存储引擎不再需要进行全盘扫描来获取需要的数据，取而代之的是从索引的根节点开始搜索。根节点的槽中存放了指向子节点的指针，存储引擎根据这些指针向下层查找。通过比较节点页的值和要查找的值可以找到合适的指针进入下层子节点，这些指针实际上定义了子节点页中值的上限和下限。最终存储引擎要么找到对应的值，要么该记录不存在。")]),_._v(" "),v("p",[_._v("上图中，仅绘制了一个节点和其对应的叶子节点，其实在根节点和叶子节点之间可能有很多层节点页。树的深度和表的大小直接相关。")]),_._v(" "),v("p",[_._v('B-Tree索引顺序列是顺序组织存储的，所以很适合查找范围数据。例如，在一个基于文本域的索引树上，按字母顺序传递连续的值进行查找是非常合适的，所以像"找出所有以I到K开头的名字"这样的查找效率会非常高。')]),_._v(" "),v("p",[_._v("有数据表：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("CREATE TABLE People (\n\t\tlast_name varchar(50) \tnot null,\n  \tfirst_name varchar(50) \tnot null,\n  \tdob date\t\t\t\t\t\t\t\tnot null,\n  \tgender enum('m', 'f')\t\tnot null,\n  \tkey(last_name, first_name, dob)\n);\n")])])]),v("p",[_._v("对于表中的数据，索引包含了"),v("code",[_._v("last_name")]),_._v("、"),v("code",[_._v("first_name")]),_._v("和"),v("code",[_._v("dob")]),_._v("列的值，下图显示了该索引是如何组织数据的存储的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9502.png",alt:""}})]),_._v(" "),v("p",[_._v("请注意，索引对多个值进行排序的依据是"),v("code",[_._v("CREATE TABLE")]),_._v("语句中定义索引时列的顺序。上图最后两个条目，姓和名相同，则根据他们的日期来排列顺序。")]),_._v(" "),v("p",[_._v("可以使用B-Tree索引的查询类型：")]),_._v(" "),v("ul",[v("li",[_._v("全值匹配：和索引中的所有列进行匹配，如索引可用于查找姓名为Cuba Allen、出生于1960-01-01的人。")]),_._v(" "),v("li",[_._v("匹配最左前缀：只使用索引的第一列。索引可用于查找所有姓为Allen的人。")]),_._v(" "),v("li",[_._v("匹配列前缀：匹配某一列的值的开头部分。索引可用于朝赵所有以J开头的姓的人。这里也只使用了索引的第一列。")]),_._v(" "),v("li",[_._v("匹配范围值：例如前面提到的索引可用于查找姓在Allen和Barrymore之间的人。这里也只使用了索引的第一列。")]),_._v(" "),v("li",[_._v("精确匹配某一列并范围匹配另外一列：用于查找所有姓为Allen，并且名字是字母K开头的人。即第一列"),v("code",[_._v("last_name")]),_._v("全匹配，第二列"),v("code",[_._v("first_name")]),_._v("范围匹配。")]),_._v(" "),v("li",[_._v("只访问索引的查询：只需要访问索引，而无需访问数据行。")])]),_._v(" "),v("p",[_._v("一般来说，如果B-Tree可以按照某种方式查找到值，那么也可以按照这种方式用于排序。所以，如果"),v("code",[_._v("ORDER BY")]),_._v("子句满足前面列出的几种查询类型，则这个索引也可以满足对应的排序需求。")]),_._v(" "),v("p",[_._v("关于B-Tree索引的一些限制：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果不是按照索引的最左列开始查找，则无法使用索引。")])]),_._v(" "),v("li",[v("p",[_._v("不能跳过索引中的列。")])]),_._v(" "),v("li",[v("p",[_._v("如果查询中有某个列的范围查询，则其右边所有列都无法使用索引优化查找。")])])]),_._v(" "),v("p",[_._v("到此可明白，索引列的顺序是非常重要的：这些限制都和索引列的顺序有关。在优化性能的时候，可能需要使用相同的列但顺序不同的索引来满足不同类型的查询需求。")]),_._v(" "),v("h3",{attrs:{id:"哈希索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#哈希索引"}},[_._v("#")]),_._v(" 哈希索引")]),_._v(" "),v("p",[_._v("哈希索引基于哈希表实现，只有精确匹配索引所有列的查询才有效。")]),_._v(" "),v("p",[_._v("对于每一行数据，存储引擎都会对所有的索引计算一个哈希码，哈希码是一个较小的值，并且不同键值的行计算出来的哈希码也不一样。哈希索引将所有的哈希码存储在索引中，同时在哈希表中保存指向每个数据行的指针。")]),_._v(" "),v("p",[_._v("在MySQL中，只有Memory引擎显示支持哈希索引。这是其默认支持类型，也支持B-Tree索引。")]),_._v(" "),v("p",[_._v("如果多个列的哈希值相同，索引会以链表的方式存放多个记录指针到同一个哈希条目中。")]),_._v(" "),v("p",[_._v("有数据表：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("CREATE TABLE testhash (\n\t\tfname VARCHAR(50) NOT NULL,\n  \tlname VARCHAR(50) NOT NULL,\n  \tKEY USING HASH(fname)\n) ENGINE=MEMORY;\n")])])]),v("p",[_._v("表中有如下数据：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("+-----------+----------+\n| fname     | lname    |\n+-----------+----------+\n| Arjen     | Lentz    |\n| Baron     | Schwartz |\n| Peter     | Zaitsev  |\n| Vadim     | Tkachenko|\n+-----------+----------+\n")])])]),v("p",[_._v("假设索引使用假想的哈希函数"),v("code",[_._v("f()")]),_._v("，它返回下面的值：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("f('Arjen') = 2323\nf('Baron') = 7437\nf('Peter') = 8784\nf('Vadim') = 2458\n")])])]),v("p",[_._v("则哈希索引的数据结构如下：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("槽（Slot）")]),_._v(" "),v("th",[_._v("值（Value）")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("2323")]),_._v(" "),v("td",[_._v("指向第1行的指针")])]),_._v(" "),v("tr",[v("td",[_._v("2458")]),_._v(" "),v("td",[_._v("指向第4行的指针")])]),_._v(" "),v("tr",[v("td",[_._v("7437")]),_._v(" "),v("td",[_._v("指向第2行的指针")])]),_._v(" "),v("tr",[v("td",[_._v("8784")]),_._v(" "),v("td",[_._v("指向第3行的指针")])])])]),_._v(" "),v("p",[_._v("要注意每个槽的编号是顺序的，但是数据行不是。查询：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT lname FROM testhash WHERE fname='Peter';\n")])])]),v("p",[_._v("MySQL先计算"),v("code",[_._v("Peter")]),_._v("的哈希值，并使用此值寻找对应的记录指针。因为"),v("code",[_._v("f('Peter')=8784")]),_._v("，所以MySQL在索引中查找8784，可以找到指向第三行的指针，最后一步是比较第三行的值是否为"),v("code",[_._v("Peter")]),_._v("，以确保就是要查找的行。")]),_._v(" "),v("p",[_._v("因为索引自身只需存储对应的哈希值，所以索引的结构十分紧凑，这也让哈希索引查找的速度非常快。")]),_._v(" "),v("p",[_._v("哈希索引的一些限制：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("哈希索引只包含哈希值和行指针，而不存储字段值，所以不能使用索引中的值来避免读取行。")])]),_._v(" "),v("li",[v("p",[_._v("哈希索引数据并不是按照索引顺序存储的，所以无法用于排序。")])]),_._v(" "),v("li",[v("p",[_._v("哈希索引也不支持部分索引列匹配查找，因为哈希索引始终是使用索引列的全部内容来计算哈希值的。")])]),_._v(" "),v("li",[v("p",[_._v("哈希索引只支持等值比较查询，包括"),v("code",[_._v("=")]),_._v("、"),v("code",[_._v("IN()")]),_._v("、"),v("code",[_._v("<=>")]),_._v("。不支持任何范围查询，如"),v("code",[_._v("WHERE price > 100")]),_._v("。")])]),_._v(" "),v("li",[v("p",[_._v("访问哈希索引的数据非常快，除非有很多哈希冲突。当哈希冲突时，存储引擎必须遍历链表中所有的行指针，逐行进行比较，直到找到所有符合条件的行。")])]),_._v(" "),v("li",[v("p",[_._v("如果哈希冲突很多的话，一些索引维护操作的代价也会很高。")])])]),_._v(" "),v("h3",{attrs:{id:"空间数据索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#空间数据索引"}},[_._v("#")]),_._v(" 空间数据索引")]),_._v(" "),v("p",[_._v("MyISAM表支持空间索引，可以用作地理数据存储。")]),_._v(" "),v("h3",{attrs:{id:"全文索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全文索引"}},[_._v("#")]),_._v(" 全文索引")]),_._v(" "),v("p",[_._v("全文索引是一种特殊类型的索引，它查找的是文本中的关键词，而不是直接比较索引中的值。")]),_._v(" "),v("p",[_._v("全文索引更类似于搜索引擎做的事情，而不是简单的"),v("code",[_._v("WHERE")]),_._v("条件匹配。在相同的列上同事创建全文索引和基于值的B-Tree索引不会有冲突，全文索引适用于"),v("code",[_._v("MATCH AGAINGST")]),_._v("，而不是普通的"),v("code",[_._v("WHERE")]),_._v("条件操作。")]),_._v(" "),v("h2",{attrs:{id:"索引的优点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引的优点"}},[_._v("#")]),_._v(" 索引的优点")]),_._v(" "),v("p",[_._v("索引可以让服务器快速地定位到表的指定位置。但这并不是索引的唯一作用，根据创建索引的数据结构不同，索引也有一些其他的附加作用。")]),_._v(" "),v("p",[_._v("最常见的B-Tree索引，按照顺序存储数据，所以MySQL可以用来做"),v("code",[_._v("ORDER BY")]),_._v("和"),v("code",[_._v("GROUP BY")]),_._v("操作。因为数据是有序的，所以B-Tree也就会将相关的列值都存储在一起。最后，因为索引中存储了实际的列值，所以某些查询只使用索引就能够完成全部查询。")]),_._v(" "),v("p",[_._v("总结索引的三个优点：")]),_._v(" "),v("ul",[v("li",[_._v("索引大大减少了服务器需要扫描的数据量。")]),_._v(" "),v("li",[_._v("索引可以帮助服务器避免排序和临时表。")]),_._v(" "),v("li",[_._v("索引可以将随机"),v("code",[_._v("I/O")]),_._v("变为顺序"),v("code",[_._v("I/O")]),_._v("。")])]),_._v(" "),v("p",[_._v("索引并不总是最好的工具。总的来说，只有当索引帮助存储引擎快速查找到记录带来的好处大于其带来的额外工作时，索引才是有效的。对于非常小的表，大部分情况下简单的全表扫描更高效。对于中到大型的表，索引非常有效。但对于特大型的表，建立和使用索引的代价随之增长。这种情况下，则需要一种技术直接查询需要的一组数据，而不是一条记录一条记录地匹配，如分区技术。")]),_._v(" "),v("p",[_._v("《Relational Database Index Design and the Optimizers》书中介绍了如何评价一个索引是否适合某个查询的“三星系统”：索引将相关的记录放到一起则获得一星；如果索引中的数据顺序和查找中的排列顺序一致则获得二星；如果索引中的列包含了查询中需要的全部列则获得三星。")]),_._v(" "),v("h2",{attrs:{id:"高性能的索引策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高性能的索引策略"}},[_._v("#")]),_._v(" 高性能的索引策略")]),_._v(" "),v("p",[_._v("正确地创建和使用索引是实现高性能查询的基础。")]),_._v(" "),v("h3",{attrs:{id:"独立的列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#独立的列"}},[_._v("#")]),_._v(" 独立的列")]),_._v(" "),v("p",[_._v("一些查询不当地使用索引，会使得MySQL无法使用已有的索引。如果查询中的列不是独立的，则MySQL就不会使用索引。独立的列是指索引不能是表达式的一部分，也不能是函数的参数。")]),_._v(" "),v("p",[_._v("如：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT actor_id FROM sakila.actor WHERE actor_id +1 = 5;\n")])])]),v("p",[_._v("可以看出上面的"),v("code",[_._v("WHERE")]),_._v("表达式其实等价于"),v("code",[_._v("actor_id=4")]),_._v("，但是MySQL无法解析这个方程式。应该直接将索引单独放在比较符号的一侧。")]),_._v(" "),v("p",[_._v("又如，将索引作为参数：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT ... WHERE TO_DAYS(CURRENT_DATE) - TO_DAYS(date_col) <= 10;\n")])])]),v("h3",{attrs:{id:"前缀索引和索引选择性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引和索引选择性"}},[_._v("#")]),_._v(" 前缀索引和索引选择性")]),_._v(" "),v("p",[_._v("有时候需要索引很长的字符串列，这会让索引变得大且慢。一个策略是前面起到的模拟哈希索引。但有时候这样还不够。")]),_._v(" "),v("p",[_._v("通常可以索引开始的部分字符，这样可以大大节约索引空间，从而提高索引效率。但这样也会降低索引的选择性。索引的选择性是指，不重复的索引值(也称为基数，cardinality)和数据表的记录总数(#T)的比值，范围从"),v("code",[_._v("1/#T")]),_._v("到"),v("code",[_._v("1")]),_._v("之间。索引的选择性越高则查询效率越高，因为选择性高的索引可以在MySQL在查找时过滤掉更多的行。唯一索引的选择性是1，这是最好的索引选择性，性能也是最好的。")]),_._v(" "),v("p",[_._v("一般情况下某个列前缀的选择性也是足够高的，足以满足查询性能。对于"),v("code",[_._v("BLOB")]),_._v("、"),v("code",[_._v("TEXT")]),_._v("或者很长的"),v("code",[_._v("VARCHAR")]),_._v("类型的列，必须使用前缀索引，因为"),v("code",[_._v("MySQL")]),_._v("不允许索引这些列的完整长度。")]),_._v(" "),v("p",[_._v("诀窍在于要选择足够长的前缀以保证较高的选择性，同时又不能太长(以便节约空间)。前缀应该足够长，以使得前缀索引的选择性接近于索引整个列。换句话说，前缀的基数应该接近于完整列的基数。")]),_._v(" "),v("p",[_._v("前缀索引是一种能使索引更小、更快的有效办法，但另一方面也有其缺点：MySQL无法使用前缀索引做"),v("code",[_._v("ORDER BY")]),_._v("和"),v("code",[_._v("GROUP BY")]),_._v("，也无法使用前缀索引做覆盖扫描。")]),_._v(" "),v("p",[_._v("有时候后缀索引也有用途，MySQL并不支持反向索引，但是可以把字符串翻转后存储，并基于此建立前缀索引。可以通过触发器维护这种索引。")]),_._v(" "),v("h3",{attrs:{id:"多列索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多列索引"}},[_._v("#")]),_._v(" 多列索引")]),_._v(" "),v("p",[_._v("在多个列上建立独立的单列索引大部分情况下并不能提高MySQL的查询性能。")]),_._v(" "),v("p",[_._v("MySQL在5.0和更新的版本中引入了一种叫索引合并(index merge)的策略，一定程度上可以使用表上的多个单列索引来定位指定的行。")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT file_id, actor_id FROM sakila.file_actor WHERE actor_id = 1 OR film_id = 1;\n")])])]),v("p",[_._v("查询能够同时使用这两个单列索引进行扫描，并将结果进行合并。")]),_._v(" "),v("p",[_._v("可以使用"),v("code",[_._v("EXPLAIN")]),_._v("中的"),v("code",[_._v("Extra")]),_._v("列可以看到这点：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("EXPLAIN SELECT film_id, actor_id FROM sakila.file_actor WHERE actor_id = 1 OR film_id =1 \\G;\n\n*************************** 1. row **********************\n           id: 1\n  select_type: SIMPLE\n        table: film_actor\n         type: index_merge\n\npossible_keys: PRIMARY,idx_fk_film_id\n\n          key: PRIMARY,idx_fk_film_id\n      key_len: 2,2\n          ref: NULL\n         rows: 29\n        Extra: Using union(PRIMARY,idx—fk一film一id);Using where\n")])])]),v("p",[_._v("MySQL会使用这类技术优化复杂查询，所以在某些语句的"),v("code",[_._v("Extra")]),_._v("列中还可以看到嵌套操作。")]),_._v(" "),v("p",[_._v("索引合并策略有时候是一种优化的结果，但实际上更多时候说明了表上的索引建的很糟糕：")]),_._v(" "),v("ul",[v("li",[_._v("当出现服务器对多个索引做相交操作时（通常有多个"),v("code",[_._v("AND")]),_._v("条件），通常意味着需要一个包含所有相关列的多列索引，而不是多个独立的单列索引。")]),_._v(" "),v("li",[_._v("当服务器需要对多个索引做联合操作时（通常有多个"),v("code",[_._v("OR")]),_._v("条件），通常需要耗费大量CPU和内存资源在算法的缓存、排序和合并操作上。特别是当其中有些索引的选择性不高，需要合并扫描返回的大量数据的时候。")]),_._v(" "),v("li",[_._v("更重要的是，优化器不会把这些计算到“查询成本”（cost)中，优化器只关心随机页面读取。这会使得查询的成本被“低估”，导致该执行计划还不如直接走全表扫描。这样做不但会消耗更多的CPU和内存资源，还可能会影响查询的并发性，但如果是单独运行这样的查询则往往会忽略对并发性的影响。通常来说，还不如像在MySQL 4.1或者更早的时代一样，将查询改写成"),v("code",[_._v("UNION")]),_._v("的方式往往更好。")])]),_._v(" "),v("p",[_._v("如果在"),v("code",[_._v("EXPLAIN")]),_._v("中看到有索引合并，应该好好检查一下查询和表的结构，看是不是己经是最优的。也可以通过参数"),v("code",[_._v("optimizer_switch")]),_._v("来关闭索引合并功能。也可以使用"),v("code",[_._v("IGNORE INDEX")]),_._v("提示让优化器忽略掉某些索引。")]),_._v(" "),v("h3",{attrs:{id:"选择合适的索引列顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的索引列顺序"}},[_._v("#")]),_._v(" 选择合适的索引列顺序")]),_._v(" "),v("p",[_._v("B-Tree索引会按照顺序存储数据，哈希或者其他类型的索引不会按顺序。")]),_._v(" "),v("p",[_._v("在一个多列B-Tree索引中，索引列的顺序意味着索引首先按照最左列进行排序，其次是第二列，等等。索引可以按照升序或者降序进行扫描，以满足精确符合列顺序的"),v("code",[_._v("ORDER BY")]),_._v("、"),v("code",[_._v("GROUP BY")]),_._v("和"),v("code",[_._v("DISTINCT")]),_._v("等子句的查询要求。所以多列索引的顺序也至关重要。")]),_._v(" "),v("p",[_._v("当不需要考虑排序和分组时，将选择性最高的列放在前面通常是好的。性能不只是依赖于索引列的选择性(整体基数)，也和查询条件的具体值有关，也就是和值的分布有关。")]),_._v(" "),v("p",[_._v("如：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT * FROM payment WHERE staff_id = 2 ADN customer_id = 584;\n")])])]),v("p",[_._v("这个查询是应该创建一个"),v("code",[_._v("staff_id, customer_id")]),_._v("索引还是应该颠倒一下顺序，可以跑一些查询来确定这个表中值的分布情况，并确定哪个列的选择性更高。")]),_._v(" "),v("p",[_._v("先用下面查询测试下：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT SUM(staff_id = 2), SUM(customer_id = 584) FROM payment\\G\n**************************** 1. row *******************\nSUM(staff_id = 2): 7992\nSUM(customer_id): 30\n")])])]),v("p",[_._v("索引，应该把索引列"),v("code",[_._v("customer_id")]),_._v("放到墙面，因为对应条件值的"),v("code",[_._v("customer_id")]),_._v("数量更小。")]),_._v(" "),v("p",[_._v("再来看对于这个"),v("code",[_._v("customer_id")]),_._v("的条件值，对应的"),v("code",[_._v("staff_id")]),_._v("列的选择性如何：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT SUM(staff_id = 2) FROM payment WHERE customer_id = 584\\G\n************************ 1. row **************************\nSUM(staff_id = 2): 17\n")])])]),v("p",[_._v("有一个需要注意的地方是，查询的结果非常依赖于选定的具体值，这种优化可能对其他一些条件值的查询不公平，服务器的整体性能可能变得更糟，或者其他某些查询的运行变得不如预期。")]),_._v(" "),v("p",[_._v('如果是从诸如pt-query-digest这样的工具的报告中提取"最差"查询，那么再按上述办法选定的索引顺序往往是非常高效的。如果没类似的具体查询来运行，那么最好还是按经验法则来做，因为经验法则考虑的是全局基数和选择性，而不是某个具体查询：')]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT COUNT(DISTINCT staff_id)/COUNT(*) AS staff_id_selectivity, COUNT(DISTINCT customer_id)/COUNT(*) AS customer_id_selectivity, COUNT(*) FROM payment\\G\n************************ 1. row ************************\n       staff_id_selectivity: 0.0001\n    customer_id_selectivity: 0.373\n                   COUNT(*): 16049\n")])])]),v("p",[v("code",[_._v("customer_id")]),_._v("的选择性更高，索引答案是将其作为索引列的第一列：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("ALTER TABLE payment ADN KEY(customer_id, staff_id);\n")])])]),v("h3",{attrs:{id:"聚簇索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引"}},[_._v("#")]),_._v(" 聚簇索引")]),_._v(" "),v("p",[_._v("聚簇索引并不是一种单独的索引类型，而是一种数据存储方式。InnoDB的聚簇索引实际上在同一个结构中保存了B-Tree索引数据行。当表中有聚簇索引时，它的数据行实际存放在索引的叶子页中。")]),_._v(" "),v("p",[_._v('术语"聚簇"表示数据行和相邻的键值紧凑地存储在一起。因为无法同时把数据行存放在两个不同的地方，索引一个表只能有一个聚簇索引。')]),_._v(" "),v("p",[_._v("InnoDB通过主键聚集数据，如果没有定义主键，InnoDB会选择一个唯一的非空索引代替。如果没有这样的索引，InnoDB会隐式地定义一个主键作为聚簇索引。")]),_._v(" "),v("p",[_._v("InnoDB只聚集在同一个页面中的记录。包含相邻键值的页面可能会相距甚远。")]),_._v(" "),v("p",[_._v("聚簇索引可能对性能有帮助，但也可能导致严重的性能问题，使用时要好好考虑。")]),_._v(" "),v("p",[_._v("聚簇索引的一些重要优点：")]),_._v(" "),v("ul",[v("li",[_._v("可以把相关数据保存在一起。如实现电子邮箱，使用用户ID来聚集数据，这样只需从磁盘中读取少数数据页就能获取全部邮件。没有使用聚簇索引，则没封邮件都可能导致一次磁盘I/O。")]),_._v(" "),v("li",[_._v("数据访问更快。因为它将索引和数据保存在同一个B-Tree中。")]),_._v(" "),v("li",[_._v("使用覆盖索引扫描的查询可以直接使用页节点中的主键值。")])]),_._v(" "),v("p",[_._v("一些缺点：")]),_._v(" "),v("ul",[v("li",[_._v("具体索引提高了I/O密集型应用的性能，但如果数据全部存放在内初中，访问的顺序就没那么重要了。")]),_._v(" "),v("li",[_._v("插入速度严重依赖于插入顺序。")]),_._v(" "),v("li",[_._v("更新聚簇索引列的代价很高，因为会强制InnoDB将每个被更新的行移动到新的位置。")]),_._v(" "),v("li",[_._v('基于聚簇索引的表在插入新航，或者主键被更新导致需要移动行的时候，可能面临"页分裂"的问题。当行的主键要求必须将这一行插入到某个已满的页中时，存储引擎会将该页分裂成两个页面来容纳改行，这就是一次分页列操作。页分裂导致表占用更多的磁盘空间。')]),_._v(" "),v("li",[_._v("聚簇索引可能导致全表扫描变慢，尤其是行比较稀疏，或者由于页分裂导致数据存储不连续的时候。")]),_._v(" "),v("li",[_._v("二级索引(非聚簇索引)可能比想象的要更大，因为在二级索引的叶子节点包含了引用行的主键列。")]),_._v(" "),v("li",[_._v("二级索引访问需要两次索引查找，而不是一次。因为二级索引叶子节点保存的不是指向行的物理位置的指针，而是行的主键值。即先要找到主键值，在去聚簇索引中查找对应的行。")])]),_._v(" "),v("h4",{attrs:{id:"innodb和myisam的数据分布对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#innodb和myisam的数据分布对比"}},[_._v("#")]),_._v(" InnoDB和MyISAM的数据分布对比")]),_._v(" "),v("p",[_._v("聚簇索引和非聚簇索引的数据分布有区别，以及对应的主键索引和二级索引的数据分布也有区别，通常会让人感到困惑和意外。")]),_._v(" "),v("p",[_._v("来看InnoDB和MyISAM是如何存储下面的表的：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("CREATE TABLE layout_test (\n\t\tcol1 int NOT NULL,\n  \tcol2 int NUT NULL,\n  \tPRIMARY KEY(col1),\n  \tKEY(col2)\n);\n")])])]),v("p",[_._v("假设表中主键取值为1~10000，按照随机顺序插入并使用"),v("code",[_._v("OPTIMIZE TABLE")]),_._v("命令做了优化。")]),_._v(" "),v("p",[_._v("MyISAM的数据分布，MyISAM按照数据插入的顺序存储在磁盘上：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9503.png",alt:""}})]),_._v(" "),v("p",[_._v("在行的旁边显示了行号，从0开始递增。因为行是定长的，所以MyISAM可以从表的开头跳过所需的字节找到需要的行。")]),_._v(" "),v("p",[_._v('下面的一系列的图只显示索引中的节点，索引中的每个叶子节点包含"行号"。')]),_._v(" "),v("p",[_._v("下图显示了表的主键：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9504.png",alt:""}})]),_._v(" "),v("p",[_._v("下图显示"),v("code",[_._v("col2")]),_._v("列上的索引：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9505.png",alt:""}})]),_._v(" "),v("p",[_._v("事实上，MyISAM中的主键索引和其他索引在结构上没有什么不同。主键索引就是一个名为"),v("code",[_._v("PRIMARY")]),_._v("的唯一非空索引。")]),_._v(" "),v("p",[_._v("InnoDB因为支持聚簇索引，所以使用非常不同的方式存储同样的数据。InnoDB以下图方式存储数据：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9506.png",alt:""}})]),_._v(" "),v("p",[_._v("该图显示了整个表，而不是只有索引。因为在InnoDB中，聚簇索引就是表，所以不像MyISAM那样需要独立的行存储。")]),_._v(" "),v("p",[_._v("聚簇索引的每一个叶子节点都包含了主键值、事务ID、用于事务和MVCC的回归指针以及所有的剩余列(此例中是col2)。如果主键是一个列前缀索引，InnoDB也会包含完整的主键列和剩下的其他列。")]),_._v(" "),v("p",[_._v("下图显示了示例表的"),v("code",[_._v("col2")]),_._v("索引。每一个叶子节点都包含索引列"),v("code",[_._v("col2")]),_._v("，紧接着是主键值"),v("code",[_._v("col1")]),_._v("。这对聚簇索引和二级索引都使用。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9507.png",alt:""}})]),_._v(" "),v("p",[_._v("下图描述InnoDB和MyISAM如何存放表的抽象图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ccbeango/blogImages/Mysql/%E5%85%B3%E4%BA%8EMySQL%E7%B4%A2%E5%BC%9508.png",alt:""}})]),_._v(" "),v("h4",{attrs:{id:"在innodb表中按主键顺序插入行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在innodb表中按主键顺序插入行"}},[_._v("#")]),_._v(" 在InnoDB表中按主键顺序插入行")]),_._v(" "),v("p",[_._v("如果正在使用InnoDB表并且没有什么数据需要聚集，那么可以定义一个代理键"),v("code",[_._v("surrogate index")]),_._v("作为主键，这种主键的数据应该和应用无关，最简单的方法是使用"),v("code",[_._v("AUTO_INCREMENt")]),_._v("自增列，这样可以保证数据行是按顺序写入，对于根据主键做关联操作的性能也会更好。")]),_._v(" "),v("p",[_._v("最好避免随机的(不连续且值的分布范围非常大)聚簇索引，特别是对于I/O密集型的应用。")]),_._v(" "),v("p",[_._v("例如，从性能的角度考虑，使用UUID来作为聚簇索引则会很糟糕：它使得聚簇索引的插入变得完全随机，这是最坏的情况，使得数据没有任何聚集特性。")]),_._v(" "),v("h3",{attrs:{id:"覆盖索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引"}},[_._v("#")]),_._v(" 覆盖索引")]),_._v(" "),v("p",[_._v('如果一个索引包含(或者说覆盖)所有需要查询的字段的值，我们就称之为"覆盖索引"。')]),_._v(" "),v("h3",{attrs:{id:"使用索引扫描来做排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用索引扫描来做排序"}},[_._v("#")]),_._v(" 使用索引扫描来做排序")]),_._v(" "),v("p",[_._v("MySQL有两种方式可以生成有序的结果：通过排序操作；或者按索引顺序扫描；如果"),v("code",[_._v("EXPLAIN")]),_._v("出来的"),v("code",[_._v("type")]),_._v("列的值为"),v("code",[_._v("index")]),_._v("，则说明MySQL使用了索引扫描来做排序。")]),_._v(" "),v("h3",{attrs:{id:"压缩-前缀压缩-索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#压缩-前缀压缩-索引"}},[_._v("#")]),_._v(" 压缩（前缀压缩）索引")]),_._v(" "),v("p",[_._v("MyISAM使用前缀压缩来减少索引的大小，从而让更多的索引可以放入内存中，这在某些情况下能极大地提高性能。可压缩字符串和整数。")]),_._v(" "),v("p",[_._v("MyISAM压缩每个索引块的方法是，先完全保存索引块中的一个值，然后将其他值和第一个值进行比较得到相同前缀的字节数和剩余的不同后缀部分，把这部分存储起来即可。")]),_._v(" "),v("p",[_._v("如，索引块第一个值是"),v("code",[_._v("perform")]),_._v("，第二个值是"),v("code",[_._v("performance")]),_._v("，那么第二个值的前缀压缩后存储的值类似"),v("code",[_._v("7，ance")]),_._v("。")]),_._v(" "),v("p",[_._v("MyISAM对行指针也采用类似的前缀压缩方式。")]),_._v(" "),v("p",[_._v("压缩块使用更少的空间，代价是某些操作可能变慢。因为每个值的压缩前缀都依赖前面的值，索引MyISAM无法在索引块中使用二分查找而只能从头开始扫描。正序扫描还不错，倒序"),v("code",[_._v("ORDER BY DESC")]),_._v("就不是很好了。")]),_._v(" "),v("p",[_._v("所有在块中查找某一行的操作平均都需要扫描半个索引块。")]),_._v(" "),v("p",[_._v("在"),v("code",[_._v("CREATE TABLE")]),_._v("语句中指定"),v("code",[_._v("PACK_KEYS")]),_._v("参数来控制索引压缩的方式。")]),_._v(" "),v("h3",{attrs:{id:"冗余和重复索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#冗余和重复索引"}},[_._v("#")]),_._v(" 冗余和重复索引")]),_._v(" "),v("p",[_._v("MySQL允许在相同列上创建多个索引，无论是有意的还是无意的。MySQL需要单独维护重复的索引，并且优化器在优化查询的时候也需要逐个地进行考虑，这会影响性能。")]),_._v(" "),v("p",[_._v("重复索引是指在相同的列上按照相同的顺序创建的相同类型的索引。应该避免这种索引的创建。")]),_._v(" "),v("p",[_._v("下面的写法实际创建了三个重复的索引，因为MySQL的唯一限制和主键限制都是通过索引实现的：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("CREATE TABLE test(\n\t\tID INT NOT NULL PRIMARY KEY,\n  \tA  INT NOT NULL,\n  \tb  int NOT NULL,\n  \tUNIQUE(ID),\n  \tINDEX(id)\n);\n")])])]),v("p",[_._v("冗余索引和重复索引有些不同。如果创建了索引"),v("code",[_._v("(A,B)")]),_._v("，在创建索引"),v("code",[_._v("A")]),_._v("就是荣誉索引，因为这只是前一个索引的前缀索引。如果再创建索引"),v("code",[_._v("(B, A)")]),_._v("，也不是冗余索引，索引"),v("code",[_._v("B")]),_._v("也不是，因为"),v("code",[_._v("B")]),_._v("不是索引"),v("code",[_._v("(A, B)")]),_._v("的最左前缀列。")]),_._v(" "),v("p",[_._v("大多数情况下不需要冗余索引，应该尽量扩展已有的索引而不是创建新索引。但有时候出于性能方面的考虑，需要冗余索引，因为扩展已有的索引会导致其变得太大，从而影响其他使用该索引的查询的性能。")]),_._v(" "),v("h3",{attrs:{id:"索引和锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引和锁"}},[_._v("#")]),_._v(" 索引和锁")]),_._v(" "),v("p",[_._v("索引可以让查询锁定更少的行。如果你的查询从不访问哪些不需要的行，那么，就会锁定更少的行，有两个好处：")]),_._v(" "),v("ul",[v("li",[_._v("减少锁定行的时候带来的开销")]),_._v(" "),v("li",[_._v("减少锁定超过需要的行增加的锁争用并避免减少并发性。")])]),_._v(" "),v("p",[_._v("InnoDB只有在访问行的时候才会对其枷锁，而索引能够减少InnoDB访问的行数，从而减少锁的数量。但这只有当InnoDB在存储引擎层能够过滤掉所有不需要的行时才有效。如果索引无法过滤掉无效的行，那么再InnoDB检索到数据并返回给服务器层以后，MySQL服务器才能应用"),v("code",[_._v("WHERE")]),_._v("子句。这时候已经无法避免锁定行了：InnoDB已经锁住了这些行，到适当的时候才释放。")]),_._v(" "),v("p",[_._v("看下面的例子：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SET AUTOCOMMIT=0;\nBEGIN;\nSELECT actor_id FROM sakila.actor WHERE actor_id < 5 AND actor_id <> 1 FOR UPDATE;\n\n+------------+\n| customerid |\n+------------+\n|          2 |\n|          3 |\n|          4 |\n+------------+\n")])])]),v("p",[_._v("这条查询仅返回2~4之间的行，但实际上获取了1到4之间的行的排它锁。InnoDB会锁住第一行，这是因为MySQL为该查询选择的执行计划是索引范围扫描：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("EXPLAIN SELECT actor_id FROM sakila.actor WHERE actor_id < 5 AND actor_id <> 1 FOR UPDATE;\n+-----+------------+-------+-------+---------+-------------+\n| id  | select_type| table | type  | key     | Extra       |\n+-----+------------+-------+-------+---------+-------------+\n| 121 | SIMPLE     | actor | range | PRIMARY |Using Where; |\n|     |            |       |       |         |Using Index  |\n+-----+------------+-------+-------+---------+-------------+\n")])])]),v("p",[_._v('换句话说，底层存储引擎的操作是"从索引的开头开始获取满足条件'),v("code",[_._v("actor_id<5")]),_._v('的记录"，服务器并没有告诉InnoDB可以过滤第一行的'),v("code",[_._v("WHERE")]),_._v("条件。注意到"),v("code",[_._v("EXPLAIN")]),_._v("的"),v("code",[_._v("Extra")]),_._v("列出现了"),v("code",[_._v("Using where")]),_._v("，这表示MySQL服务器将存储引擎返回行以后再应用"),v("code",[_._v("WHERE")]),_._v("过滤条件。")]),_._v(" "),v("p",[_._v("下面的查询就可以证明第一行确实被锁定，尽管第一个查询的结果中并没有这个第一行。保持第一行链接打开，然后开启第二个连接并执行如下查询：")]),_._v(" "),v("div",{staticClass:"language-mysql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SET AUTOCOMMIT=0;\nBEGIN;\nSELECT actor_id FROM sakila.actor WHERE actor_id = 1 FOR UPDATE;\n")])])]),v("p",[_._v("这个查询将会被挂起，直到第一个事务释放第一行的锁。")]),_._v(" "),v("p",[_._v("就像这个例子显示的，即使使用了索引，InnoDB也可能锁住一些不需要的数据。如果不能使用索引查找和锁定行的话问题可能会更糟糕，MySQL会做全表扫描并锁住所有的行，而不管是不是需要。")])])}),[],!1,null,null,null);v.default=e.exports}}]);