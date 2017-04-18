define(function(require) {
	


	
	$ = require('jquery');

	var hrefArray=[
		'class-article.html',
		'class-edit.html',
		'article-list.html',
		'article-edit.html',
		'1.html',
		'1.html'
	];
	
	



	var directoryObj=[
			[
				"内容管理",
				[
					[
						"文章管理",
						["文章分类","添加编辑分类","文章列表","添加/编辑文章"]
					],
					[
						"资讯管理",
						["资讯列表","新闻抓取列表","上传/编辑早报","上传/编辑要闻"]
					],
					[
						"专题管理",
						["专题列表","新建/编辑专题"]
					],
					[
						"话题管理",
						["话题列表","新增/编辑话题"]
					],
					[
						"匿名八卦管理",
						[]
					],
					[
						"Q&A管理（尚未收到，待定）",
						[]
					]
				]
			],
			[
				"广告位管理",
				[
					[
						"广告列表",
						[]
					],
					[
						"添加/编辑广告",
						[]
					]
				]
			],
			[
				"评论管理",
				[
					[
						"评论列表",
						[]
					],
					[
						"评论详情",
						[]
					]
				]
			],
			[
				"推送管理",
				[
					[
						"系统消息推送列表",
						[]
					],
					[
						"新增/编辑系统推送",
						[]
					],
					[
						"APP内消息推送",
						[]
					],
					[
						"新增/编辑APP内推送",
						[]
					]
				]
			],
			[
				"用户管理",
				[
					[
						"用户列表",
						[]
					],
					[
						"添加/编辑用户",
						[]
					],
					[
						"用户反馈列表",
						[]
					],
					[
						"反馈详情",
						[]
					]
				]
			],
			[
				"权限管理",
				[
					[
						"角色管理",
						[]
					],
					[
						"添加/编辑角色",
						[]
					],
					[
						"管理员列表",
						[]
					],
					[
						"添加/编辑管理员",
						[]
					]
				]
			]
		];


	var navigationMultiLevelUl = require('navigationMultiLevelUl');
	var my_navigationMultiLevelUl = new navigationMultiLevelUl("#left",hrefArray,directoryObj);
	





});

